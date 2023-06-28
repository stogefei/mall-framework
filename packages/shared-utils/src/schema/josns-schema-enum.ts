export enum JsonSchemaValueType {
  // 固定值
  FIXED = 'FIXED',

  // 动态值
  DYNAMIC = 'DYNAMIC',
  // 空值
  EMPTY = 'EMPTY',
  // 不赋值
  NO_ASSIGNMENT = 'NO_ASSIGNMENT',
  /**
   * 相对值
   */
  RELATIVE = 'RELATIVE',
}
export enum JsonSchemaType {
  /**
   * 文本
   */
  TEXT = 'TEXT',
  /**
   * 富文本
   */
  RICHTEXT = 'RICHTEXT',
  /**
   * 数值
   */
  NUMBER = 'NUMBER',
  /**
   * 日期
   */
  DATE = 'DATE',
  /**
   * 逻辑
   */
  LOGIC = 'LOGIC',
  /**
   * 单选
   */
  OPTIONS = 'OPTIONS',
  /**
   * 多选
   */
  MULTI_OPTIONS = 'MULTI_OPTIONS',
  /**
   * 地址
   */
  ADDRESS = 'ADDRESS',

  /**
   * 位置
   */
  LOCATION = 'LOCATION',

  /**
   * 文件
   */
  FILE = 'FILE',

  /**
   * 人员单选
   */
  STAFF_SELECTOR = 'STAFF_SELECTOR',

  /**
   * 人员多选
   */
  STAFF_MULTI_SELECTOR = 'STAFF_MULTI_SELECTOR',

  /**
   * 部门单选
   */
  DEPARTMENT_SELECTOR = 'DEPARTMENT_SELECTOR',

  /**
   * 部门多选
   */
  DEPARTMENT_MULTI_SELECTOR = 'DEPARTMENT_MULTI_SELECTOR',

  /**
   * 混合选人
   */
  STAFF_DEPARTMENT_SELECTOR = 'STAFF_DEPARTMENT_SELECTOR',
  /**
   * 关联单选
   */
  CORRELATION_FORM = 'CORRELATION_FORM',

  /**
   * 关联多选
   */
  CORRELATION_MULTI_FORM = 'CORRELATION_MULTI_FORM',
  /**
   * 关联对象
   */
  CORRELATION_OBJECT = 'CORRELATION_OBJECT',

  /**
   * 对象
   */
  OBJECT = 'OBJECT',
  /**
   * 数组
   */
  ARRAY = 'ARRAY',
  /**
   * 当前对象
   */
  SELF_OBJECT = 'SELF_OBJECT',
  /**
   * 单据状态
   */
  SEQUENCE_STATUS = 'SEQUENCE_STATUS',
}
export enum JsonSchemaTypeName {
  /**
   * 文本
   */
  TEXT = '文本',
  /**
   * 数值
   */
  NUMBER = '数值',
  /**
   * 日期
   */
  DATE = '日期',
  /**
   * 逻辑
   */
  LOGIC = '逻辑',
  /**
   * 单选
   */
  OPTIONS = '单选',
  /**
   * 多选
   */
  MULTI_OPTIONS = '多选',
  /**
   * 地址
   */
  ADDRESS = '地址',

  /**
   * 位置
   */
  LOCATION = '位置',

  /**
   * 文件
   */
  FILE = '文件',

  /**
   * 人员单选
   */
  STAFF_SELECTOR = '人员单选',

  /**
   * 人员多选
   */
  STAFF_MULTI_SELECTOR = '人员多选',

  /**
   * 部门单选
   */
  DEPARTMENT_SELECTOR = '部门单选',

  /**
   * 部门多选
   */
  DEPARTMENT_MULTI_SELECTOR = '部门多选',

  /**
   * 混合选人
   */
  STAFF_DEPARTMENT_SELECTOR = '混合选人',
  /**
   * 关联单选
   */
  CORRELATION_FORM = '关联单选',

  /**
   * 关联多选
   */
  CORRELATION_MULTI_FORM = '关联多选',
  /**
   * 关联对象
   */
  CORRELATION_OBJECT = '关联对象',
  /**
   * 对象
   */
  OBJECT = '对象',
  /**
   * 数组
   */
  ARRAY = '数组',
  /**
   * 当前对象
   */
  SELF_OBJECT = '当前对象',
  /**
   * 单据状态
   */
  SEQUENCE_STATUS = '单据状态',
  /**
   * 富文本
   */

  RICHTEXT = '富文本',
}
export enum JsonSchemaTypeToComponent {
  /**
   * 文本
   */
  TEXT = 'text',

  /**
   * 富文本
   */
  RICHTEXT = 'text',
  /**
   * 数值
   */
  NUMBER = 'number',
  /**
   * 日期
   */
  DATE = 'datetimepicker',
  /**
   * 逻辑
   */
  LOGIC = 'switch',
  /**
   * 单选
   */
  OPTIONS = 'text',
  /**
   * 多选
   */
  MULTI_OPTIONS = 'text',
  /**
   * 地址
   */
  ADDRESS = 'distpicker',

  /**
   * 位置
   */
  LOCATION = 'location',

  /**
   * 文件
   */
  FILE = 'text',

  /**
   * 人员单选
   */
  STAFF_SELECTOR = 'org',

  /**
   * 人员多选
   */
  STAFF_MULTI_SELECTOR = 'org',

  /**
   * 部门单选
   */
  DEPARTMENT_SELECTOR = 'org',

  /**
   * 部门多选
   */
  DEPARTMENT_MULTI_SELECTOR = 'org',

  /**
   * 混合选人
   */
  STAFF_DEPARTMENT_SELECTOR = 'org',
  /**
   * 关联单选
   */
  CORRELATION_FORM = 'select',

  /**
   * 关联多选
   */
  CORRELATION_MULTI_FORM = 'select',
}
