/**
 * 是否开启debug
 */
const IS_DEBUG = process.env.NODE_ENV === 'debug';
/**
 * 是否是移动端
 */
const IS_MOBILE = /(iPhone|iPod|Android|ios)/i.test(navigator.userAgent);
/**
 * 是否是钉钉
 */
const IS_DINGTALK = /DingTalk/.test(navigator.userAgent);

/**
 * 是否是微信
 */

const IS_WECHAT = /MicroMessenger/.test(navigator.userAgent);

/**
 *是否是第三方平台
 */
const IS_PLATFORM = IS_MOBILE && (IS_DINGTALK || IS_WECHAT);

export { IS_DEBUG, IS_MOBILE, IS_DINGTALK, IS_WECHAT, IS_PLATFORM };
export default {
  IS_DEBUG,
  IS_MOBILE,
  IS_DINGTALK,
  IS_WECHAT,
};
