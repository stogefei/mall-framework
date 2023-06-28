/**
 * 生成GUID
 */
function guid(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

/**
 * 获取uuids
 * @param len 长度
 * @param radix 数值进制
 */
function uuid(len: number, oRadix?: number): string {
  const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const uuids: string[] = [];
  let i = 0;
  const radix = oRadix || chars.length;
  if (len) {
    for (i = 0; i < len; i++) {
      if (i === 0 && radix > 10) {
        uuids[i] = chars[0 | (Math.random() * (radix - 10) + 10)];
      } else {
        uuids[i] = chars[0 | (Math.random() * radix)];
      }
    }
  } else {
    let r;

    uuids[8] = uuids[13] = uuids[18] = uuids[23] = '-';
    uuids[14] = '4';

    for (i = 0; i < 36; i++) {
      if (!uuids[i]) {
        r = 0 | (Math.random() * 16);
        uuids[i] = chars[i === 19 ? (r & 0x3) | 0x8 : r];
      }
    }
  }
  return uuids.join('').toLocaleUpperCase();
}

export { guid, uuid };

export default {
  guid,
  uuid,
};
