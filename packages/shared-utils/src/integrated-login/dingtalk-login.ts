import dd from 'dingtalk-jsapi';
import { ResponseCode } from '@amaz/api';
import UserHandler from '../user';
export interface ConfigParams {
  timeStamp: string;
  nonceStr: string;
  signature: string;
  corpId: string;
  agentId: string;
  jsApiList: string[];
}

/*
 * 初始化登录
 * @query
 */
export async function init(query: any) {
  if (dd.env.platform === 'notInDingTalk') {
    return {
      code: 500,
      data: null,
      msg: '非钉钉环境',
    };
  }
  const { corpId, appKey, authType, agentId } = query;
  const params: ConfigParams = {
    timeStamp: '',
    nonceStr: '',
    signature: '',
    corpId,
    agentId: agentId,
    jsApiList: [],
  };
  const res: any = await dingTalkReady(params);
  if (res) {
    const resCode = res.code;
    return await loginCode(appKey, resCode, authType);
  }
}

/*
 * 钉钉获取code凭证 /只需要corpId就行
 * @corpId
 */
async function dingTalkReady(params: ConfigParams) {
  return new Promise((resolve, reject) => {
    dd.ready(async () => {
      if (dd.ios) {
        dd.ui.webViewBounce.disable({});
      }
      const authCodeRes = await dd.runtime.permission.requestAuthCode({
        corpId: params.corpId,
      });
      resolve(authCodeRes);
    });

    dd.error((err: any) => {
      let msg = '';
      for (const key in err) {
        if (Object.prototype.hasOwnProperty.call(err, key)) {
          msg += `${key}:${err[key]};`;
        }
      }
      if (msg.indexOf('uid is not employee for orgid') > -1) {
        msg = '你不在当前组织机构中，无权限查看！';
        dd.device.notification.alert({
          message: msg,
        });
        reject(msg);
      }
    });
  });
}

/*
 * 根据code获取用户信息
 * @orgRelatedId组织id
 * @code 钉钉凭证
 * @type 类型 免登还是扫码
 */
async function loginCode(corpId: string, code: string, authType: string) {
  let res: any;
  if (authType === 'SNS') {
    // 免登
    // res = await API.loginController.ssoLogin(corpId, code, authType);
  } else {
    // res = await API.loginController.ssoLogin(corpId, code);
  }
  if (res.code === ResponseCode.SUCCESS) {
    await UserHandler.getUserInfo(res.data);
  } else {
    console.error(res.msg);
  }
  return res;
}
