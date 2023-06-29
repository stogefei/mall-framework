/**
 * 程序应用模块
 */
export enum Applications {
  ADMIN = 'admin',
  PORTAL = 'portal',
  MOBILE = 'mobile',
}
export interface Application<T> {
  admin?: T;
  portal?: T;
  mobile?: T;
}
