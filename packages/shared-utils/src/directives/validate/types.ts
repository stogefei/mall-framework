import { Rule } from '../../rules';
import { VNode } from 'vue';
import { FormValidate } from './form-directive';
export interface FormItemValidate {
  key: string;
  rules: Rule[];
  tooltip: any;
  code?: string;
  callback?: (value: any, result: boolean, message?: string) => void;
}

export interface FormItemElementParams {
  code: string;
  rules: Rule[];
  el: HTMLElement;
  parent: HTMLElement;
  options: FormItemValidate;
  value: any;
  lastMessage: undefined | string;
  formElement?: HTMLElement;
  index?: number;
  vm?: VNode;

  // 是否校验过
  validate: boolean;
  tooltip?: any;
  callback?: (value: any, result: boolean, message?: string) => void;
  validateRulesHandler: (show?: boolean, force?: boolean) => void;
}
export class FormValidateParams {
  /**
   * 是否全部检查
   * 默认是全部检查，如果是false,检查到第一个不通过就不会继续检查了
   */
  all?: boolean;

  /**
   * 错误的tip,优先使用item的tooltip
   */
  tooltip?: any;

  inited?: (formValidate: FormValidate) => void;
}
