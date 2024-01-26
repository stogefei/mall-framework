/**
 *通用响应报文
 */
export interface ResBody {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: any;
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}

export enum EventType {
  // 请求处理之前调用
  REQUSETBEFORE = 'requsetBefore',
  // 请求处理之后调用
  REQUSETAFTER = 'requsetAftre',
  // 响应处理之前调用
  RESPONSEBEFORE = 'responseBefore',
  // 响应处理之后调用
  RESPONSEAFTER = 'responseAfter',

  // 响应错误
  RESPONSEERROR = 'responseError',
  // 请求错误
  REQUSETERROR = 'requsetError',
}
