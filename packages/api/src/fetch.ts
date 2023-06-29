// @ts-nocheck
import axios, { AxiosRequestConfig, CancelTokenSource, Method } from "axios";
import { EventType, ResponseCode } from "./enum";
const CancelToken = axios.CancelToken;
// 唯一队列
const apiUniqueQueue: { [key: string]: CancelTokenSource } = {};

let apiToken = null;

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

const momckPrefix = "mock: ";

export const isDev = "development";

export type BMethod = Method | "formdata" | "resetful";

let log = false;

export function setApiLogState(state) {
  log = state;
}

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
}
export const Instance = axios.create();

export let globalConfig: BAxiosRequestConfig = {
  interceptor: true,
};

export function setGlobalConfig(params: BAxiosRequestConfig) {
  globalConfig = params;
}

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
      nParams = interceptorFun.callback(params);
      if (nParams === false) {
        nParams = params;
        break;
      }
    }
  }
  return nParams || params;
}
// 请求拦截器
Instance.interceptors.request.use(
  (config: BAxiosRequestConfig) => {
    let nConfig: any = config;
    nConfig = interceptorHandler(EventType.REQUSETBEFORE, config, config);
    const mockPath = config.modelFunName || config.url;
    if (config && (mocks[config.modelFunName] || mocks[config.url])) {
      const error = new Error(`${momckPrefix}${mockPath}`);
      (error as any).config = config;
      return Promise.reject(error);
    }
    if (nConfig.url.includes("document/file/upload")) {
      console.log(
        "config start:",
        config.method,
        JSON.parse(JSON.stringify(config.headers))
      );
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
          config.url = config.url.replace(`{${key}}`, config.data[key]);
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
    if (nConfig.url.includes("document/file/upload")) {
      console.log(
        "config end:",
        nConfig.method,
        nConfig.headers,
        JSON.parse(JSON.stringify(nConfig.headers))
      );
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
    responseData = interceptorHandler(
      EventType.RESPONSEBEFORE,
      response.config,
      response.data
    );
    const contentType = response.headers["content-type"];
    if (contentType === "application/x-msdownload") {
      const name = response.headers["content-disposition"]
        .split(";")[1]
        .replace("filename=", "");
      const downloadElement = document.createElement("a");
      const href = URL.createObjectURL(new Blob([responseData])); // 创建下载的链接
      downloadElement.href = href;
      downloadElement.download = decodeURI(name);
      document.body.appendChild(downloadElement);
      downloadElement.click(); // 点击下载
      document.body.removeChild(downloadElement); // 下载完成移除元素
      URL.revokeObjectURL(href); // 释放掉blob对象
      return { code: ResponseCode.SUCCESS };
    }
    responseData = interceptorHandler(
      EventType.RESPONSEAFTER,
      response.config,
      responseData
    );
    return responseData;
  },
  (error) => {
    if (error.message.includes(momckPrefix)) {
      console.log(error.message);
      let data = mocks[error.message.replace(momckPrefix, "")];
      if (data instanceof Function) {
        data = data(error.config);
      }
      return data;
    } else {
      if (error.response) {
        if (isDev) {
          console.group("请求发生错误");
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
          console.groupEnd();
        }
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
    JSON.parse(JSON.stringify(globalConfig)),
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
  if (options.unique) {
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
      .catch((error) =>
        resolve({ code: ResponseCode.RESPONSEERROR, msg: error } as any)
      );
  });
}
