import fetch, {
  globalConfig,
  mocks,
  BAxiosRequestConfig,
  isDev,
  BMethod,
  setApiLogState,
  GlobalInterceptor,
  setToken,
  setGlobalConfig,
} from './fetch';

import { BaseApi } from './base';
import { EventType } from './enum';

import { merge } from 'lodash-es';
class API extends BaseApi {
  /**
   *
   * @param funName 例如：appPackageController.get
   * @param data  返回的数据 数据或者函数
   */
  mockApi(funName: string, data: any) {
    if (isDev) {
      mocks[funName] = data;
    }
  }

  /**
   * 注册监听事件
   * @param name 事件名称，不能重名，如果重名需要解绑之后在重新注册
   * @param eventType 事件类型
   * @param callback 回调函数
   * @param appoint 是否是只执行指定回调类型的函数
   */
  on(name: string, eventType: EventType, callback: Function, appoint = false) {
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
  off(name: string, eventType: EventType) {
    if (GlobalInterceptor[eventType] && GlobalInterceptor[eventType][name]) {
      delete GlobalInterceptor[eventType][name];
    }
  }

  /**
   * 设置api log是否开启
   * @param state
   */
  setApiLogState(state: boolean) {
    setApiLogState(state);
  }

  /**
   * request请求
   * @param url
   * @param method
   * @param params
   * @param config
   * @returns
   */
  request<P, T>(
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
  config(config: BAxiosRequestConfig) {
    setGlobalConfig(merge(globalConfig, config));
  }

  setToken(token) {
    setToken(token);
  }

  globalConfig = globalConfig;
}

const api = new API();

export default api;
