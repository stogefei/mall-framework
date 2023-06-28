function convertObjName (str) {
  const nStr = str
    .replace(/#\/definitions\/(\w+)/gi, '$1')
    .replace(/List«(.*?)»/g, 'List$1')
    .replace(/Map(.*?)»/g, '')
    .replace(/«|»/gi, '')
    .toString();

  return nStr;
}
function firstUpperCase (str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
function toHump (name) {
  return name.replace(/-(\w)/g, function (all, letter) {
    return letter.toUpperCase();
  });
}
const enumObj = {};
function paramsTypeHandler (name, key, param) {
  let str = '';
  if (param.type) {
    switch (param.type) {
      case 'integer':
        str = 'number';
        break;
      case 'string':
        str = 'string';
        break;
      case 'boolean':
        str = 'boolean';
        break;
      case 'file':
        str = 'File';
        break;
      case 'array':
        if (param.items.type) {
          str = paramsTypeHandler(name, key, param.items);
          str = `${str}[]`;
        } else {
          const tmp = convertObjName(param.items.$ref);
          str = `${tmp}[]`;
          if (str === '[]') {
            str = 'any[]';
          }
        }
        break;
      default:
        str = 'any';
        break;
    }
    /**
     * todo 要对API的enum做处理
     */
    if (param.enum && !param.name) {
      let enumName = `${name}${firstUpperCase(key)}`;
      if (param.name) {
        enumName = firstUpperCase(param.name);
      }
      if (enumObj[enumName] && enumObj[enumName].length) {
        const tmp1 = new Set(enumObj[enumName].concat(param.enum));
        enumObj[enumName] = Array.from(tmp1);
      } else {
        enumObj[enumName] = param.enum;
      }
      str = `${enumName}`;
    }
  } else if (param.$ref) {
    str = `${convertObjName(param.$ref)}`;
  } else if (param.schema) {
    str = paramsTypeHandler(name, key, param.schema);
  } else {
    str = 'any';
  }

  return str.toString();
}
/**
 * 处理参数类型字符串
 * @param {*} key
 * @param {*} properties
 */
module.exports.paramsTypeHandler = paramsTypeHandler;
module.exports.convertObjName = convertObjName;
module.exports.firstUpperCase = firstUpperCase;
module.exports.toHump = toHump;
module.exports.enumObj = enumObj;
