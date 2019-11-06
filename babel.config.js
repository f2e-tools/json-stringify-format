{
  [
    // 对js文件进行babel-loader处理（使支持ES6语法）
    {
      test: /\.js$/,
      exclude: /node_modules/,
      options: {
        presets: [
          [
            // 将 ES6 语法转成 ES5
            '@babel/preset-env',
            {
              targets: {
                edge: '17',
                firefox: '60',
                safari: '11.1',
                chrome: '58',
                ie: '11'
              },
              // 低版本浏览器中只补充项目中使用到的ES6语法
              useBuiltIns: 'usage'
            }
          ]
        ]
      }
    }
  ]
}
