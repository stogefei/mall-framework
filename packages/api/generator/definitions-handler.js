const { convertObjName, paramsTypeHandler } = require('./utils');
const allDefinitionNames = [];

/**
 * 处理参数字符串
 * @param {*} key
 * @param {*} properties
 */
function paramsHandler (name, properties) {
  let str = '';
  Object.keys(properties).forEach((key) => {
    str += `  /**
   * ${properties[key].description}
   */\n`;
    str += `  ${key}?: ${paramsTypeHandler(name, key, properties[key])};\n`;
  });

  return str;
}
/**
 * 处理接口字符串
 * @param {*} name
 * @param {*} description
 */
function interfaceHandler (name, description) {
  return `/**
 *${description}
 */
export interface ${name} {\n`;
}

module.exports = (definitions) => {
  let str = '';
  Object.keys(definitions).forEach((key) => {
    const name = convertObjName(key);
    if (name && !allDefinitionNames.includes(name)) {
      allDefinitionNames.push(name);
      str += interfaceHandler(name, definitions[key].description);
      if (definitions[key].properties) {
        str += paramsHandler(name, definitions[key].properties);
      }
      str += `  /**
   * 扩展字段
   */
  [key: string]: any;
`;
      str += '}\n';
    }
  });
  return {
    allDefinitionNames,
    moduleStr: str,
  };
};
