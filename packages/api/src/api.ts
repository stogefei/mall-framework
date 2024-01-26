import { merge } from 'lodash-es';
import { Base } from './base';
import fetch, {
  BAxiosRequestConfig,
  BMethod,
  GlobalInterceptor,
  setToken,
  setGlobalConfig,
  globalConfig,
  queue,
} from './fetch';

import { ResBody, EventType } from './module';

class API extends Base {
  /**
   * 注册监听事件
   * @param name 事件名称，不能重名，如果重名需要解绑之后在重新注册
   * @param eventType 事件类型
   * @param callback 回调函数
   * @param appoint 是否是只执行指定回调类型的函数
   */
  // eslint-disable-next-line @typescript-eslint/ban-types
  on (name: string, eventType: EventType, callback: Function, appoint = false) {
    GlobalInterceptor[eventType][name] = {
      callback,
      appoint,
    };
  }

  /**
   * 解绑监听事件
   * @param name
   * @param eventType
   */
  off (name: string, eventType: EventType) {
    if (GlobalInterceptor[eventType] && GlobalInterceptor[eventType][name]) {
      delete GlobalInterceptor[eventType][name];
    }
  }

  /**
   * request请求
   * @param url
   * @param method
   * @param params
   * @param config
   * @returns
   */
  request<P = any, T = ResBody> (
    url: string,
    method: BMethod,
    params?: P,
    config?: BAxiosRequestConfig,
  ): Promise<T> {
    const nConfig: BAxiosRequestConfig = Object.assign(
      {
        url,
        method,
        data: params,
      },
      config,
    );
    return fetch(nConfig);
  }

  /**
   * 配置API全局参数
   * @param config
   */
  config (config: BAxiosRequestConfig) {
    setGlobalConfig(merge(globalConfig, config));
  }

  setToken (token) {
    setToken(token);
  }

  globalConfig = globalConfig;

  queue = queue;
}

const api = new API();

export default api;
