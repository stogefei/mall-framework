import {
  Router,
  RouteLocationNormalized,
  NavigationGuardNext,
} from 'vue-router';
import Core from '@amaz/core';
import API, { EventType, ResponseCode } from '@amaz/api';
import UserUtils from '../user';
import { URL } from '@amaz/utils';
interface ISettingsParams {
  /**
   * 消息组件
   */
  message: any;
  /**
   * route配置
   */

  router: Router;

  /**
   * 自定义路由规则
   */
  cusRouteRule?: (
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext,
  ) => Promise<boolean>;
}
/**
 * 启动设置
 */
async function settings({ message, router, cusRouteRule }: ISettingsParams) {
  const process = import.meta.env;
  // 浏览器打开的时候清理一下user缓存信息
  UserUtils.setUser(null);
  // API全局配置
  API.config({
    baseURL: Core.config.baseApi,
  });
  // 设置全局请求错误拦截
  API.on('requsetError', EventType.REQUSETERROR, (error) => {
    if (error.response) {
      if (error.response.status === ResponseCode.SYSTEMERROR) {
        message.error('服务器请求异常,请稍后再试');
      }
    }
    return error;
  });
  // 设置全局响应错误拦截
  API.on('responseError', EventType.RESPONSEERROR, (error) => {
    if (error.response) {
      message.error('服务器响应异常,请联系管理员处理');
    }
    return error;
  });
  // API统一异常处理
  API.on('systemError', EventType.RESPONSEAFTER, (response: any) => {
    if (response && response.code !== ResponseCode.SUCCESS) {
      switch (response.code) {
        case ResponseCode.LOGOUT:
          UserUtils.removeToken();
          router.replace({ name: 'login' });
          break;
        default:
          message.error(response.msg);
          break;
      }
      return false;
    }

    return response;
  });
  if (process.MODE === 'development') {
    // 开发模式默认打开dubug console
    (window as any).__BB_DEBUG__ = true;
  }
  API.setToken(() => UserUtils.getToken());
  routerHandler(router, cusRouteRule);
}
function routerHandler(router: Router, handle?: Function) {
  // createRouter(router);
  // 处理浏览器带过来的token
  const pToken = URL.getQueryVariable('token');
  if (pToken) {
    UserUtils.setToken(pToken);
    const params = URL.getQueryVariables();
    const query = Object.keys(params)
      .filter((key) => key !== 'token')
      .map((key) => `${key}=${params[key]}`)
      .join('&');
    const url = `${window.location.pathname}${query ? `?${query}` : ''}`;
    window.history.replaceState(null, null, url);
  }
  router.beforeEach(
    async (
      to: RouteLocationNormalized,
      from: RouteLocationNormalized,
      next: NavigationGuardNext,
    ) => {
      let title: any = Core.config.titleSuffix;
      if (to.meta && to.meta.title) {
        title = to.meta.title;
      }
      document.title = title;
      if (Core.routerRule) {
        const res = await Core.routerRule(to, from, next);
        if (res === false) {
          return;
        }
      }
      if (handle) {
        const res = await handle({ to, from, next });
        if (res === false) {
          return;
        }
      }
      /**
       * 是否不需要授权登录的用户
       */
      if (to.meta?.unauthorized) {
        next();
      } else {
        let user = UserUtils.getUser();
        const token = UserUtils.getToken();
        if (!user && token) {
          user = await UserUtils.getUserInfo(token);
        }
        if (!token) {
          if (to.name !== 'login') {
            UserUtils.removeToken();
            next({ name: 'login' });
          }
        } else {
          next();
        }
      }
    },
  );
  return router;
}
export { routerHandler, settings, ISettingsParams };
export default {
  routerHandler,
  settings,
};
