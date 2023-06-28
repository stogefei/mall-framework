const {
  firstUpperCase,
  paramsTypeHandler,
  convertObjName,
  toHump,
} = require('./utils');
const paramsTypes = {};
/**
 * API的注解
 */
let suggestions = {};

let interfaces;

function getFunName (paths, funNames) {
  let funName = paths[paths.length - 1];
  if (funName.includes('{')) {
    paths.pop();
    return getFunName(paths, funNames);
  } else {
    if (funNames.includes(funName)) {
      funName += '-' + paths[paths.length - 2];
    }
    return toHump(funName);
  }
}

function paramsHandler (className, path, params) {
  let reqParams = '';
  let reqNames = '';
  let isFormData = false;
  let isSchema = false;

  if (params) {
    if (params.length === 1 && params[0].schema) {
      isSchema = true;
    }
    const nParams = [];
    params.forEach((param) => {
      if (param.required) {
        nParams.unshift(param);
      } else {
        nParams.push(param);
      }
    });
    nParams.forEach((param, index) => {
      const name = param.name.replace(/( |^)[A-Z]/, (L) => L.toLowerCase());
      if (param.in === 'formData') {
        isFormData = true;
      }
      const type = paramsTypeHandler(className, path, param);
      if (!/^\w+$/gi.test(name)) {
        throw new Error(`类名${className} '${name}'参数格式不正确`);
      }
      paramsTypes[type.replace('[]', '')] = type.replace('[]', '');
      reqNames += `          ${name},\n`;
      reqParams += `${name}${param.required ? '' : '?'}: ${type}, `;
    });
  }
  // if (reqParams) {
  //   reqParams += '    requestConfig?: BAxiosRequestConfig';
  //   reqParams = '\n' + reqParams;
  //   reqParams += ',\n  ';
  // } else {
  //   reqParams += 'requestConfig?: BAxiosRequestConfig';
  // }
  reqParams += 'requestConfig?: BAxiosRequestConfig';

  return {
    reqParams,
    reqNames,
    isFormData,
    isSchema,
  };
}
function classHandler (name, module) {
  const className = firstUpperCase(name);
  let str = '';
  const funNames = [];
  str += `/**\n *${module.description}\n */\n`;
  str += `export class ${className} {\n`;
  suggestions[name] = {
    detail: module.description,
    funs: {},
  };
  module.paths.forEach((funs, index) => {
    const paths = funs.path.split('/');
    const funName = getFunName(paths, funNames);
    funNames.push(funName);
    if (funs.path.includes('{')) {
      funs.method = 'resetful';
    }

    const params = paramsHandler(className, funs.path, funs.params);
    if (params.isFormData) {
      funs.method = 'formdata';
    }
    let resopnse = 'any';
    if (funs.responses.schema && funs.responses.schema.$ref) {
      resopnse = convertObjName(funs.responses.schema.$ref);
      paramsTypes[resopnse] = resopnse;
    }
    str += `  /**
   * ${funs.description}URL`;
    str += '\n   */\n';
    str += `  ${funName}Url() {\n    return \`\${globalConfig.baseURL}${funs.path}\`;\n  }\n\n`;
    let annotation = '';
    annotation += `  /**
   * ${funs.description}\n`;
    annotation += params.reqNames
      .split(',\n')
      .filter((item) => item)
      .map((item) => `   * @param ${item.replace(/\s.*?/g, '')}`)
      .join('\n');
    annotation += '\n   * @param requestConfig';
    annotation += `\n   * @returns Promise<${resopnse}>`;
    annotation += '\n   */\n';
    suggestions[name].funs[funName] = {
      detail: `(${params.reqParams})`,
      documentation: annotation,
    };
    str += annotation;
    let tmp = `  ${funName}(${params.reqParams}): Promise<${resopnse}> {`;
    if (tmp.length > 80) {
      const paramsStr =
        '\n    ' + params.reqParams.split(', ').join(',\n    ') + ',\n  ';
      str += tmp = `  ${funName}(${paramsStr}): Promise<${resopnse}> {`;
    } else {
      str += tmp;
    }
    str += `\n    const req = Object.assign(
      {
        url: '${funs.path}',
        method: '${funs.method}',
        modelFunName: '${name}.${funName}',
        ${
          params.reqNames
            ? `data: ${
                params.isSchema
                  ? params.reqNames.substring(10, params.reqNames.length - 1)
                  : `{
${params.reqNames}        },`
              }`
            : 'data: {},'
        }
      },
      requestConfig,
    );
    return fetch<${resopnse}>(req);
  }\n`;

    if (index !== module.paths.length - 1) {
      str += '\n';
    }
  });
  str += '}\n';
  return str;
}

function moduleHandler (modules) {
  let importStr =
    "import fetch, { BAxiosRequestConfig, globalConfig } from './fetch';\nimport {\n";
  let classStr = '';
  let baseApiStr = 'export class BaseApi {\n';

  Object.keys(modules).forEach((moduleName, index) => {
    const name = toHump(moduleName);
    const className = firstUpperCase(name);
    baseApiStr += `  ${name} = new ${className}();\n`;
    if (index !== Object.keys(modules).length - 1) {
      baseApiStr += '\n';
    }

    classStr += classHandler(name, modules[moduleName]);
  });
  baseApiStr += '}\n';
  interfaces.forEach((name, index) => {
    if (Object.values(paramsTypes).includes(name)) {
      importStr += '  ' + name + ',\n';
    }
  });
  importStr += "} from './module';\n\n";
  classStr = importStr + classStr + baseApiStr;
  return {
    classStr,
    suggestions,
  };
}
function pathsHandler (paths, tags) {
  const pathObj = {};
  tags.forEach((item) => {
    pathObj[item.name] = {
      description: item.description,
      paths: [],
    };
  });
  Object.keys(paths).forEach((path) => {
    const obj = {};
    obj.path = path;
    obj.method = Object.keys(paths[path])[0];
    obj.params = paths[path][obj.method].parameters;
    obj.description = paths[path][obj.method].description;
    obj.responses = paths[path][obj.method].responses[200];
    const module = paths[path][obj.method].tags[0];
    pathObj[module].paths.push(obj);
  });
  return moduleHandler(pathObj);
}
module.exports = (allDefinitionNames, paths, tags) => {
  interfaces = allDefinitionNames;
  suggestions = {};
  const res = pathsHandler(paths, tags);
  return res;
};
