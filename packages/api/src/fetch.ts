// Note: fetch
import axios, { AxiosRequestConfig, CancelTokenSource, Method } from "axios";
import Core from "@amaz/core";
import qs from "qs";
import { EventType } from "./module";

export interface BAxiosRequestConfig extends AxiosRequestConfig {
  // 唯一ID,那么多次请求只请求一次
  unique?: boolean;
  /**
   * 请不要修改这个值，内部属性
   */
  modelFunName?: string;
  /**
   * 拦截器模式，false 关闭拦截器，可以传入一组拦截器的名称
   */
  interceptor?: boolean | [string];
  /**
   * 是否打印日志
   */
  log?: boolean;
  /**
   * 是否统计请求数
   */
  isCount?: boolean;

  /**
   * tId
   */
  tId?: number;
}

const CancelToken = axios.CancelToken;

let num = new Date().getTime();

export const queue = new Set<number>();
// 唯一队列
const apiUniqueQueue: { [key: string]: CancelTokenSource } = {};

let apiToken: any = null;

export function setToken(token) {
  apiToken = token;
}

interface InterceptorFun {
  callback: Function;
  // 是否是指定引用范围
  appoint: boolean;
}
export const GlobalInterceptor: {
  [key in EventType]: { [key: string]: InterceptorFun };
} = {
  [EventType.REQUSETBEFORE]: {},
  [EventType.REQUSETAFTER]: {},
  [EventType.RESPONSEBEFORE]: {},
  [EventType.RESPONSEAFTER]: {},
  [EventType.REQUSETERROR]: {},
  [EventType.RESPONSEERROR]: {},
};
export const mocks: { [key: string]: any } = {};

const mmockPrefix = "mock: ";

export const isDev = process.env.NODE_ENV === "development";

export type BMethod = Method | "formdata" | "resetful";

// 设置拦截器
let log = false;

// 设置日志
export function setApiLogState(state) {
  log = state;
}

// 创建axios实例
export const Instance = axios.create();

// 全局配置
export let globalConfig: BAxiosRequestConfig = {
  interceptor: true,
};

// 设置全局配置
export function setGlobalConfig(params: BAxiosRequestConfig) {
  globalConfig = params;
}

// 拦截器注册
function interceptorHandler(
  type: EventType,
  config: BAxiosRequestConfig,
  params: any
) {
  const events = Object.keys(GlobalInterceptor[type]);
  let nParams = params;

  if (events.length && config && config.interceptor) {
    for (const idx in events) {
      const key = events[idx];
      const interceptorFun = GlobalInterceptor[type][key];
      // 如果过滤器是指定范围的，但是当前生命周期不在指定范围就return
      if (
        config.interceptor instanceof Array &&
        !config.interceptor.includes(key)
      ) {
        continue;
        // 如果当前过滤器必须指定引用，那么不是指定范围的就要retrun
      } else if (
        interceptorFun &&
        interceptorFun.appoint &&
        !(config.interceptor instanceof Array)
      ) {
        continue;
      }
      (log || config.log) && console.log(type, key, params);
      nParams = interceptorFun.callback(params, config);
      if (nParams === false) {
        nParams = params;
        break;
      }
    }
  }
  nParams = nParams || params;

  return nParams;
}
// 请求拦截器
Instance.interceptors.request.use(
  (config: BAxiosRequestConfig) => {
    let nConfig = config;
    nConfig = interceptorHandler(EventType.REQUSETBEFORE, config, config);
    const mockPath = config.modelFunName || config.url;
    if (
      (config.modelFunName && mocks[config.modelFunName]) ||
      (config.url && mocks[config.url])
    ) {
      const error = new Error(`${mmockPrefix}${mockPath}`);
      (error as any).config = config;
      return Promise.reject(error);
    }
    switch (config.method as BMethod) {
      case "get":
        config.params = config.data;
        break;
      case "delete":
        config.params = config.data;
        break;
      case "resetful":
        Object.keys(config.data).forEach((key) => {
          config.url = config?.url?.replace(`{${key}}`, config.data[key]);
        });
        config.method = "get";
        config.data = null;
        break;
      case "formdata":
        config.method = "POST";
        const formData = new FormData();
        Object.keys(config.data).forEach((key) => {
          formData.append(key, config.data[key]);
        });
        config.data = formData;
        // 兼容钉钉上传
        config.transformRequest = (data) => {
          data.toString = () => "[object FormData]";
          return data;
        };
        break;
      case "post":
        // 强制post提交
        config.headers["Content-Type"] = "application/json";
        break;
      default:
        break;
    }
    nConfig = interceptorHandler(EventType.REQUSETAFTER, config, config);
    if (nConfig.isCount !== false) {
      queue.add((nConfig.tId = num++));
    }
    if (config.method && ["get", "delete"].includes(config.method)) {
      config.paramsSerializer = function (params) {
        return qs.stringify(params, { arrayFormat: "repeat" });
      };
    }
    return nConfig;
  },
  (error) => {
    let nError = error;
    nError = interceptorHandler(EventType.REQUSETAFTER, error.config, error);
    return Promise.reject(nError);
  }
);

// 响应拦截器
Instance.interceptors.response.use(
  (response: any) => {
    let responseData = response.data;
    if (response.config?.isCount !== false) {
      queue.delete(response.config?.tId);
    }
    responseData = interceptorHandler(
      EventType.RESPONSEBEFORE,
      response.config,
      response.data
    );
    responseData = interceptorHandler(
      EventType.RESPONSEAFTER,
      response.config,
      responseData
    );
    return responseData;
  },
  (error) => {
    if (error.message.includes(mmockPrefix)) {
      console.log(error.message);
      let data = mocks[error.message.replace(mmockPrefix, "")];
      if (data instanceof Function) {
        data = data(error.config);
      }
      return data;
    } else {
      if (error.response) {
        console.log(error.response.data);
      }
    }
    let nError = error;
    nError = interceptorHandler(EventType.RESPONSEERROR, error.config, nError);
    return Promise.reject(nError);
  }
);

/**
 * fetch 函数
 * @param options
 * @returns
 */
export default function fetch<T>(options: BAxiosRequestConfig): Promise<T> {
  const source: CancelTokenSource = CancelToken.source();
  const requestConfig: BAxiosRequestConfig = Object.assign(
    {},
    globalConfig,
    { baseURL: Core.config.baseApi },
    options
  );
  // 设置token
  if (apiToken) {
    let token;
    if (apiToken instanceof Function) {
      token = apiToken();
    } else {
      token = apiToken;
    }
    if (token) {
      requestConfig.headers = requestConfig.headers || {};
      requestConfig.headers.Authorization = `Bearer ${token}`;
    }
  }
  requestConfig.cancelToken = source.token;
  if (options.unique && options.modelFunName) {
    if (apiUniqueQueue[options.modelFunName]) {
      apiUniqueQueue[options.modelFunName].cancel();
    }
    apiUniqueQueue[options.modelFunName] = source;
  }

  return new Promise<T>((resolve, reject) => {
    Instance.request<any, T>(requestConfig)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => resolve({ code: 500, msg: error } as any));
  });
}
