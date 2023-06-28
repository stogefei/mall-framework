import { ConditionItemFormula, WorkflowInstanceVoStatus } from '@amaz/api';

const conditionFormulaName: { [name in ConditionItemFormula]: string } = {
  EQUAL: '等于',
  NOT_EQUAL: '不等于',
  GREATER_THAN: '大于',
  GREATER_THAN_OR_EQUAL_TO: '大于等于',
  LESS_THAN: '小于',
  LESS_THAN_OR_EQUAL_TO: '小于等于',
  CONTAINS: '包含',
  NOT_CONTAINS: '不包含',
  LOCATED: '位于',
  NOT_LOCATED: '不位于',
  BETWEEN: '范围',
  NOT_BETWEEN: '范围外',
  EMPTY: '为空',
  NOT_EMPTY: '不为空',
  BELONG_TO: '属于',
  BELONG_TO_OR: '',
  NOT_BELONG_TO: '不属于',
  HAVA: '拥有',
  NOT_HAVA: '不拥有',
  DYNAMIC: '动态筛选',
};
const sequenceStatusName: { [name in SequenceStatus]: string } = {
  TEMPORARY: '暂存',
  PROCESSING: '进行中',
  EFFECTIVE: '生效中',
  CANCELED: '作废',
  EXCEPTION: '异常',
};

enum SequenceStatus {
  /**
   * 进行中
   */
  PROCESSING = 'PROCESSING',
  /**
   * 已完成
   */
  EFFECTIVE = 'EFFECTIVE',
  /**
   * 已作废
   */
  CANCELED = 'CANCELED',
  /**
   * 异常
   */
  EXCEPTION = 'EXCEPTION',
  /**
   * 暂存
   */
  TEMPORARY = 'TEMPORARY',
}

const workflowStatusName: { [key in WorkflowInstanceVoStatus]: string } = {
  PROCESSING: '进行中',
  FINISHED: '已完成',
  CANCELED: '已作废',
  EXCEPTION: '流程异常',
  TEMPORARY: '暂存',
};
export {
  conditionFormulaName,
  sequenceStatusName,
  workflowStatusName,
  SequenceStatus,
};
