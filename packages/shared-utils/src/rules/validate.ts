/**
 * 规则类型枚举
 */
export enum ValidateTypes {
  /**
   * 函数校验
   */
  FUNC = 'FUNC',
  /**
   * 正则校验
   */
  REG = 'REG',

  /**
   * 范围校验
   */
  RANGE = 'RANGE',
  /**
   * 必须填写
   */
  REQUIRED = 'REQUIRED',
}
