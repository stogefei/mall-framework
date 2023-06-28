import { BizObjectFilterVoPropertyType } from '@amaz/api';
const propertyTypeFormat = {
  [BizObjectFilterVoPropertyType.ID]: 'ID',
  [BizObjectFilterVoPropertyType.NAME]: 'NAME',
  [BizObjectFilterVoPropertyType.CREATOR]: '创建人',
  [BizObjectFilterVoPropertyType.CREATOR_ID]: '创建人ID',
  [BizObjectFilterVoPropertyType.CREATOR_DEPARTMENT]: '创建人部门',
  [BizObjectFilterVoPropertyType.CREATOR_DEPARTMENT_ID]: '创建人部门ID',
  [BizObjectFilterVoPropertyType.CREATED_TIME]: '创建时间',
  [BizObjectFilterVoPropertyType.MODIFIER]: '修改人',
  [BizObjectFilterVoPropertyType.MODIFIER_ID]: '修改人ID',
  [BizObjectFilterVoPropertyType.MODIFIED_TIME]: '修改时间',
  [BizObjectFilterVoPropertyType.OWNER]: '拥有者',
  [BizObjectFilterVoPropertyType.OWNER_ID]: '拥有者ID',
  [BizObjectFilterVoPropertyType.OWNER_DEPARTMENT]: '拥有者部门',
  [BizObjectFilterVoPropertyType.OWNER_DEPARTMENT_ID]: '拥有者部门ID',
  [BizObjectFilterVoPropertyType.SEQUENCE_NO]: '单据号',
  [BizObjectFilterVoPropertyType.SEQUENCE_STATUS]: '单据状态',
  [BizObjectFilterVoPropertyType.CORRELATION_ID]: '关联ID',
  [BizObjectFilterVoPropertyType.PID]: 'PID',
  [BizObjectFilterVoPropertyType.NID]: 'NID',
  [BizObjectFilterVoPropertyType.TEXT]: '短文本',
  [BizObjectFilterVoPropertyType.RADIO]: '单选',
  [BizObjectFilterVoPropertyType.CHECKBOX]: '多选',
  [BizObjectFilterVoPropertyType.TEXTAREA]: '长文本',
  [BizObjectFilterVoPropertyType.NUMBER]: '数值',
  [BizObjectFilterVoPropertyType.DATE]: '日期',
  [BizObjectFilterVoPropertyType.LOGIC]: '逻辑',
  [BizObjectFilterVoPropertyType.STAFF_SELECTOR]: '选人单选',
  [BizObjectFilterVoPropertyType.STAFF_MULTI_SELECTOR]: '选人多选',
  [BizObjectFilterVoPropertyType.DEPARTMENT_SELECTOR]: '部门单选',
  [BizObjectFilterVoPropertyType.DEPARTMENT_MULTI_SELECTOR]: '部门多选',
  [BizObjectFilterVoPropertyType.STAFF_DEPARTMENT_SELECTOR]: '混合多选',
  [BizObjectFilterVoPropertyType.ADDRESS]: '地址',
  [BizObjectFilterVoPropertyType.LOCATION]: '定位',
  [BizObjectFilterVoPropertyType.ATTACHMENT]: '附件',
  [BizObjectFilterVoPropertyType.IMAGE]: '图片',
  [BizObjectFilterVoPropertyType.SIGNATURE]: '手写签名',
  [BizObjectFilterVoPropertyType.CORRELATION_FORM]: '关联单选',
  [BizObjectFilterVoPropertyType.CORRELATION_MULTI_FORM]: '关联多选',
  [BizObjectFilterVoPropertyType.SHEET]: '关联模型',
  [BizObjectFilterVoPropertyType.DB_TEXT]: 'DB_TEXT',
  [BizObjectFilterVoPropertyType.SELF_OBJECT]: '当前对象',
  [BizObjectFilterVoPropertyType.CORRELATION_OBJECT]: '关联对象',
};
export default propertyTypeFormat;