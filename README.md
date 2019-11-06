# json-stringify-format

[![npm version](https://img.shields.io/npm/v/json-stringify-format.svg?style=flat-square)](https://www.npmjs.org/package/json-stringify-format)

Used to format JSON strings

## Feature

- Format the JSON string

## Browser Support

```json
targets: {
  "edge": "17",
  "firefox": "60",
  "safari": "11.1",
  "chrome": "58",
  "ie": "11"
}
```

## Installing

Using npm:

```bash
$ npm install json-stringify-format
```

Using yarn:

```bash
$ yarn add json-stringify-format
```

## Example

```js
import jsonFormat from 'json-stringify-format'

const originData = '{"inline":false,"defaultValue":0,"showLabel":false,"options":[{"value":0,"label":"\u5de6"},{"value":1,"label":"\u53f3"}],"required":false,"width":"","remote":false,"remoteOptions":[],"props":{"value":"value","label":"label"},"remoteFunc":""}'

processedData = jsonFormat(originData)

console.log(processedData)

{
    "inline": false,
    "defaultValue": 0,
    "showLabel": false,
    "options": [
        {
            "value": 0,
            "label": "左"
        },
        {
            "value": 1,
            "label": "右"
        }
    ],
    "required": false,
    "width": "",
    "remote": false,
    "remoteOptions": [
    ],
    "props": {
        "value": "value",
        "label": "label"
    },
    "remoteFunc": ""
}
```
