/**
 * 获取字符串长度
 * @param str
 * @returns
 */
function getLen(str: any): number {
  const s = str !== undefined && str !== null ? str.toString() : '';
  return !s ? 0 : s.replace(/[\u0391-\uFFE5]/g, 'aa').length;
}
/**
 * 下划线转换驼峰
 * @param name
 * @returns
 */
function underlineToHump(name: string): string {
  return name.replace(/_(\w)/g, function (all, letter) {
    return letter.toUpperCase();
  });
}
/**
 * 横线转换驼峰
 * @param name
 * @returns
 */
function lineToHump(name: string): string {
  return name.replace(/-(\w)/g, function (all, letter) {
    return letter.toUpperCase();
  });
}
/**
 * 驼峰转换下划线
 * @param name
 * @returns
 */
function toUnderline(name: string): string {
  return name.replace(/([A-Z])/g, '_$1').toLowerCase();
}
/**
 * 驼峰转换横线
 * @param name
 * @returns
 */
function toLine(name: string): string {
  return name.replace(/([A-Z])/g, '-$1').toLowerCase();
}
/**
 * 首字母转大写
 * @param str
 * @returns
 */
function firstToUpper(str: string): string {
  return str.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase());
}
/**
 * 字符串格式化
 * @param str
 * @param args
 * 多个参数对应的 {0},{1} ...
 * 对象参数 {a:1,b:2} 例如：text{a},{b}
 */
function formart(str: string, ...args) {
  const params =
    args.length === 1 && args[0] instanceof Object ? args[0] : args;
  return str.replace(/\{.*?\}/gi, (res) => {
    const key = res.replace(/\{|\}/gi, '');
    return params[key];
  });
}
/**
 * 字串截取
 * @param str
 * @param length
 * @param ellipsis
 * @returns
 */
function subStr(str: string, length: number, ellipsis: boolean = false) {
  let count = 0;
  let res = '';
  const pattern = new RegExp('[\u4E00-\u9FA5]+');

  for (const char of str) {
    if (length > count) {
      if (pattern.test(char)) {
        count += 2;
      } else {
        count++;
      }
      res += char;
    } else {
      ellipsis && res.length < str.length && (res += '...');
      break;
    }
  }
  return res;
}
export {
  getLen,
  underlineToHump,
  lineToHump,
  toUnderline,
  toLine,
  firstToUpper,
  formart,
  subStr,
};
export default {
  getLen,
  underlineToHump,
  lineToHump,
  toUnderline,
  toLine,
  firstToUpper,
  formart,
  subStr,
};
