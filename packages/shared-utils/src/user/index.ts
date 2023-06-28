import API, { UserVo } from '@amaz/api';
import AES from 'crypto-js/aes';
import encUtf8 from 'crypto-js/enc-utf8';

const key = 'bbsz';
function setUser(user: UserVo) {
  sessionStorage.setItem(
    'user',
    AES.encrypt(JSON.stringify(user), key).toString(),
  );
}
function getUser(): UserVo | undefined {
  const userStr = sessionStorage.getItem('user');
  if (userStr) {
    try {
      const bytes = AES.decrypt(userStr, key);
      const originalText = bytes.toString(encUtf8);
      return JSON.parse(originalText);
    } catch {
      return undefined;
    }
  } else {
    return undefined;
  }
}
async function getUserInfo(token): Promise<UserVo> {
  localStorage.setItem('token', token);
  // todo 需要处理登录
  const res = await API.portalUnitController.getCurUserInfo();
  setUser(res.data);
  return res.data;
}
function getToken() {
  const token = localStorage.getItem('token');
  return token;
}
function setToken(token) {
  localStorage.setItem('token', token);
  return token;
}
function removeToken() {
  localStorage.removeItem('token');
  localStorage.setItem('fromPath', window.location.href);
  setUser(null);
}
export { setUser, getUser, getUserInfo, removeToken, getToken, setToken };
export default {
  setUser,
  getUser,
  getUserInfo,
  removeToken,
  getToken,
  setToken,
};
