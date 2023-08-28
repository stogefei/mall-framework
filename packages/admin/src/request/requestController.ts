import API, { ResponseCode } from '@amaz/api';
export class RequestController {
  // 获取类别
  static getCategoryList (params?: any): Promise<any> {
    return new Promise((resolve, reject) => {
      API.request('/category/', 'get', params)
        .then((response) => {
          resolve(response);
        })
        .catch((error) =>
          resolve({ code: ResponseCode.RESPONSEERROR, msg: error } as any),
        );
    });
  }

  // 获取商品列表
  static getGoodList (params?: any): Promise<any> {
    return new Promise((resolve, reject) => {
      API.request('/goods/', 'get', params)
        .then((response) => {
          resolve(response);
        })
        .catch((error) =>
          resolve({ code: ResponseCode.RESPONSEERROR, msg: error } as any),
        );
    });
  }
}
