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
export enum ResponseCode {
  /**
   * 成功
   */
  SUCCESS = 200,
  /**
   * 登录超时
   */
  LOGOUT = 401,

  /**
   * 服务异常
   */
  SYSTEMERROR = 500,

  /**
   * 无访问权限
   */
  PERMISSIONERROR = 403,
  /**
   * 用户不存在
   */
  USERNOTEXIST = 1202,
  /**
   * 模型未发布
   */

  SCHEMANOTPUBLISHED = 1606,

  /**
   * 响应错误
   */

  RESPONSEERROR = 9999,
}
