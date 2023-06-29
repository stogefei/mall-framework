import { Application } from './core';

export interface IConfig {
  /**
   * 设置logo路经
   */
  logo: Application<any>;
  /**
   * 标题后缀
   */
  titleSuffix: string;
  /**
   * 设置base Api地址
   */
  baseApi: string;
  /**
   * PC入口地址
   */
  portalURL: string;
  /**
   * 管理后台入口地址
   */
  adminURL: string;
  /**
   * 移动端入口地址
   */
  mobileURL: string;
  /**
   * 支持扩展字段
   */
  [key: string]: any;
}
