import fetch from "./fetch";

/**
 *商品接口
 */
export class GoodController {
  /**
   * 获取商品类别
   * @param params
   */
  getCategoryList(data?: any): Promise<any> {
    const req = Object.assign({
      url: "/category/",
      method: "get",
      data,
    });
    return fetch<any>(req);
  }

  /**
   * 获取商品列表
   * @param params
   */
  async getGoodList(data?: any): Promise<any> {
    const req = Object.assign({
      url: "/goods/",
      method: "get",
      data,
    });
    return fetch<any>(req);
  }
}

export class Base {
  goodController = new GoodController();
}
