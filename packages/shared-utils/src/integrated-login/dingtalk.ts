import { parseQuery } from './utils';
async function start() {
  // TODO 优化免登 有token直接进入
  // const token = UserHandler.getToken();
  // console.log(token, 'token--');
  // UserHandler.removeToken();
  // if (!token) {
  //   console.log('已经免登');
  //   return;
  // }
  const query = parseQuery();
  const { corpId } = query;
  if (!corpId) {
    return;
  }
  const dingTalk = await import(
    /* webpackChunkName: "dingTalk" */ './dingtalk-login'
  );
  const result = dingTalk.init(query);
  if (result) {
    return await result;
  }
}
export default {
  start,
};
