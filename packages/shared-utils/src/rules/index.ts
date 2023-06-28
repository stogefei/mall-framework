import { ValidateTypes } from './validate';
import { StringUtils, ObjectUtils } from '@amaz/utils';

export interface ValidateRange {
  max?: number;
  min?: number;
}
export interface Rule {
  type: ValidateTypes;
  message: string | ((val: any, ops: any) => string);

  tip?: string | ((val: any, ops: any) => string);

  /**
   * 是否初始就检验
   */
  deep?: boolean;

  /**
   * 是否需要强制校验,表单提交的时候也会校验
   */
  force?: boolean;

  /**
   * 是否校验过
   */
  validate?: boolean;
  /**
   * 最后的校验提示
   */
  lastMessage?: string;
}

export interface FuncRule extends Rule {
  func: (val: any, ops: any) => Promise<boolean>;
}

export interface RegExpRule extends Rule {
  regexp: RegExp | ((val: any, ops: any) => Promise<boolean>);
}

export interface RangeRule extends Rule {
  range: ValidateRange;
}

class RuleHdandler {
  static [ValidateTypes.REQUIRED](value, rule?: FuncRule) {
    return !ObjectUtils.isEmpty(value);
  }

  static async [ValidateTypes.FUNC](value, rule: FuncRule, options) {
    let res = false;
    if (rule.func instanceof Function) {
      res = await rule.func(value, options);
    }
    return res;
  }

  static [ValidateTypes.REG](value, rule: RegExpRule, options) {
    let res = false;
    if (value && typeof value === 'string' && rule.regexp instanceof RegExp) {
      res = rule.regexp.test(value);
    } else {
      res = true;
    }

    return res;
  }

  static [ValidateTypes.RANGE](
    value: string | number,
    rule: RangeRule,
    options,
  ) {
    let res = false;
    let length = value;
    if (value === undefined || value === null) {
      length = 0;
    } else if (typeof value === 'string') {
      length = StringUtils.getLen(value);
    }

    if (rule.range) {
      if (
        typeof rule.range.min === 'number' &&
        typeof rule.range.max === 'number'
      ) {
        res = length <= rule.range.max && length >= rule.range.min;
      } else if (typeof rule.range.min === 'number') {
        res = length >= rule.range.min;
      } else if (typeof rule.range.max === 'number') {
        res = length <= rule.range.max;
      }
    } else {
      return true;
    }
    return res;
  }
}

const systemText: RangeRule = {
  range: {
    max: 50, // 最大长度
    min: 2, // 最小长度
  },
  message: () => '请检查编码',
  type: ValidateTypes.RANGE,
};
const required = [
  {
    type: ValidateTypes.REQUIRED,
    message: () => '必填项不能为空',
  },
];
const name = [systemText];
const code = [
  {
    regexp: /^[a-zA-z]{1}[a-zA-Z0-9_]*$/,
    type: 'REG',
    message: () => '请检查编码',
  },
  systemText,
];

export { RuleHdandler, name, systemText, code, required, ValidateTypes };
export default {
  RuleHdandler,
  name,
  systemText,
  code,
  required,
  ValidateTypes,
};
