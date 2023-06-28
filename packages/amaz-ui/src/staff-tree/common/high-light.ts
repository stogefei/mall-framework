import { escapeRegExp, escape } from 'lodash-es';

export function highLight (content: any, key: any, prefix: any, suffix: any) {
  let titleString = content;
  if (key !== '') {
    const highLightStr = escape(key);
    const replaceReg = new RegExp(escapeRegExp(highLightStr), 'g');
    const replaceString = `${prefix}${highLightStr}${suffix}`;
    titleString = escape(content).replace(replaceReg, replaceString);
    return titleString;
  }
  return titleString;
}
