import API from '@amaz/api';
import { getToken } from '../user';
/**
 * 获取缩略图访问URL地址
 * @param id
 * @returns
 */
function getThumbImageUrl(id: string) {
  const token = getToken();
  return id
    ? `${API.documentFileController
        .thumbnailUrl()
        .replace('{documentId}', id)}?access_token=${token}`
    : null;
}
/**
 * 获取图片访问URL地址
 * @param id
 * @returns
 */
function getImageUrl(id: string, hasToken = true) {
  const url = `${API.documentFileController
    .imageViewUrl()
    .replace('{documentId}', id)}`;
  if (hasToken) {
    const token = getToken();
    return `${url}?access_token=${token}`;
  } else {
    return `${url}`;
  }
}
/**
 * 获取文件访问URL地址
 * @param id
 * @returns
 */
function getFileUrl(id: string) {
  const token = getToken();
  return `${API.documentFileController
    .temporaryUrl()
    .replace('{documentId}', id)}?access_token=${token}`;
}
export { getThumbImageUrl, getImageUrl, getFileUrl };
export default {
  getThumbImageUrl,
  getImageUrl,
  getFileUrl,
};
