const request = require('./request');
const fs = require('fs-extra');
const definitionsHandler = require('./definitions-handler');
const pathsHandler = require('./paths-handler');
const { enumObj } = require('./utils');

/**
 * 处理头部枚举
 * @returns
 */
function enumTypeHandler () {
  let str = '';
  if (Object.keys(enumObj).length) {
    Object.keys(enumObj).forEach((items) => {
      str += `export enum ${items} {\n`;
      enumObj[items].forEach((key, index) => {
        str += `  ${key} = '${key}'`;
        str += ',\n';
      });
      str += '}\n';
    });
  }
  return str;
}

request()
  .then((data) => {
    try {
      const { allDefinitionNames, moduleStr } = definitionsHandler(
        data.definitions,
      );
      const { classStr, suggestions } = pathsHandler(
        allDefinitionNames,
        data.paths,
        data.tags,
      );
      fs.outputFile('./src/module.ts', enumTypeHandler() + moduleStr, 'utf8');
      fs.outputFile('./src/base.ts', classStr, 'utf8');
      fs.writeJSONSync('./src/suggestions.json', suggestions, { spaces: 2 });

      console.log('API构建完成');
    } catch (e) {
      console.log('API构建失败');
      console.log(e.message);
    }
  })
  .catch((e) => {
    console.error(e);
  });
