/**
 * 克隆对象数据结构
 * @param obj
 * @param log
 * @returns
 */
function objClone(obj, log = false) {
  if (obj === null) return null;
  if (typeof obj !== 'object') return obj;
  if (obj.constructor === Date) return new Date(obj);
  const newObj = new obj.constructor(); // 保持继承链
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      // 不遍历其原型链上的属性
      const val = obj[key];

      newObj[key] =
        typeof val === 'object' && !(val instanceof RegExp)
          ? objClone(val, log)
          : val; // 使用arguments.callee解除与函数名的耦合
      if (log) {
        console.log(
          'key:',
          key,
          val instanceof RegExp,
          'value:',
          newObj[key],
          'oValue:',
          obj[key],
        );
      }
    }
  }
  return newObj;
}

/**
 * 判断是否是空值
 * @param obj
 * @returns
 */
function isEmpty(obj) {
  if (obj === '') return true; // 检验空字符串
  if (!obj && obj !== 0 && obj !== '' && obj !== false) return true; // 检验 undefined 和 null
  // eslint-disable-next-line no-prototype-builtins
  if (Array.prototype.isPrototypeOf(obj) && obj.length === 0) return true; // 检验空数组
  // eslint-disable-next-line no-prototype-builtins
  if (Object.prototype.isPrototypeOf(obj) && Object.keys(obj).length === 0) {
    return true;
  } // 检验空对象
  return false;
}
/**
 * 判断是否是对象类型
 * @param obj
 * @returns
 */
function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}
/**
 * 判断是否是数组类型
 * @param obj
 * @returns
 */
function isArray(arr) {
  return Array.isArray(arr);
}
/**
 * 合并对象
 * @param target
 * @param arg
 * @returns
 */
function merge(target, ...arg) {
  return arg.reduce((acc, cur) => {
    return Object.keys(cur).reduce((subAcc, key) => {
      const srcVal = cur[key];
      if (isObject(srcVal)) {
        subAcc[key] = merge(subAcc[key] ? subAcc[key] : {}, srcVal);
      } else if (isArray(srcVal)) {
        // series: []，下层数组直接赋值
        subAcc[key] = srcVal.map((item, idx) => {
          if (isObject(item)) {
            const curAccVal = subAcc[key] ? subAcc[key] : [];
            return merge(curAccVal[idx] ? curAccVal[idx] : {}, item);
          } else {
            return item;
          }
        });
      } else {
        subAcc[key] = srcVal;
      }
      return subAcc;
    }, acc);
  }, target);
}

export { objClone, isEmpty, isObject, isArray, merge };
export default {
  objClone,
  isEmpty,
  isObject,
  isArray,
  merge,
};
