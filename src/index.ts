interface JsonFormat {
  (json: string, options?: any): string
}

let jsonFormat: JsonFormat

/**
 * formatJson 工具方法
 * 将 JSON 字符串格式化输出
 * @param {stirng} json - 输入的 json 字符串
 * @param {any} options - 规则
 */
jsonFormat = function(json, options) {
  let reg: any = null,
    formatted: string = '',
    pad: number = 0,
    PADDING: string = '    ' // one can also use '\t' or a different number of spaces
  // optional settings
  options = options || {}
  // remove newline where '{' or '[' follows ':'
  // 避免跟随着':'的'{'和'[' 换新行
  options.newlineAfterColonIfBeforeBraceOrBracket =
    options.newlineAfterColonIfBeforeBraceOrBracket === true ? true : false
  // use a space after a colon
  // 在冒号后使用空格
  options.spaceAfterColon = options.spaceAfterColon === false ? false : true

  // begin formatting...
  // make sure we start with the JSON as a string
  // 确保我们以JSON作为字符串开头
  if (typeof json !== 'string') {
    json = JSON.stringify(json)
  }

  // parse and stringify in order to remove extra whitespace
  // 解析和字符串化以删除多余的空格
  json = JSON.parse(json)
  json = JSON.stringify(json)

  // add newline before and after curly braces
  // 在花括号之前和之后添加换行符
  reg = /([{}])/g
  json = json.replace(reg, '\r\n$1\r\n')

  // add newline before and after square brackets
  // 在方括号之前和之后添加换行符
  reg = /([\[\]])/g
  json = json.replace(reg, '\r\n$1\r\n')

  // add newline after comma
  // 在逗号后添加换行符
  reg = /(,)/g
  json = json.replace(reg, '$1\r\n')

  // remove multiple newlines
  // 删除多个换行符
  reg = /(\r\n\r\n)/g
  json = json.replace(reg, '\r\n')

  // remove newlines before commas
  // 在逗号前删除换行符
  reg = /\r\n,/g
  json = json.replace(reg, ',')

  // optional formatting...
  if (!options.newlineAfterColonIfBeforeBraceOrBracket) {
    reg = /:\r\n\{/g
    json = json.replace(reg, ':{')
    reg = /:\r\n\[/g
    json = json.replace(reg, ':[')
  }

  if (options.spaceAfterColon) {
    reg = /:/g
    json = json.replace(reg, ': ')
  }

  json.split('\r\n').forEach(node => {
    var i = 0,
      indent = 0,
      padding = ''

    if (node.match(/\{$/) || node.match(/\[$/)) {
      indent = 1
    } else if (node.match(/\}/) || node.match(/\]/)) {
      if (pad !== 0) {
        pad -= 1
      }
    } else {
      indent = 0
    }

    for (i = 0; i < pad; i++) {
      padding += PADDING
    }
    formatted += padding + node + '\r\n'

    pad += indent
  })
  return formatted
}

module.exports = jsonFormat
