import { JsonSchemaValueType, JsonSchemaType } from './josns-schema-enum';
import { ConditionItemFormula, JsonSchemaOp } from '@amaz/api';
export interface IJsonSchemaValue {
  name: string;
  type: JsonSchemaType;
  code: string;
  schemaCode?: string;
  weight?: number;
}
/**
 * JSON Schema对象
 */
export interface ICondition {
  // 编码
  source: IJsonSchemaValue;

  // 作用是用于JSON Schema ｜ 模型code,作校验使用
  schemaCode?: string;

  // 公式
  formula: ConditionItemFormula;

  // 值类型
  valueType?: JsonSchemaValueType;
  // 值
  value?: any | IJsonSchemaValue;
  // 兼容自动义参数

  [key: string]: any;
}

/**
 * JSON Schema对象
 */
export interface IMapping {
  // 编码
  source: IJsonSchemaValue;
  // 公式
  formula: ConditionItemFormula;

  // 值类型
  valueType?: JsonSchemaValueType;
  // 值
  value: IJsonSchemaValue;

  children?: IMapping[];
}
/**
 * JSON Schema对象
 */
export interface IJsonSchema {
  // 编码
  code: string;
  name?: string;
  // 类型
  type: JsonSchemaType;
  // 作用是用于JSON Schema ｜ 模型code,作校验使用
  schemaCode?: string;
  // 公式
  op?: JsonSchemaOp;

  // 数组对象
  items?: IJsonSchema;
  // 属性
  propertys?: IJsonSchema[];
  // 值类型
  valueType?: JsonSchemaValueType;
  // 值
  value?: any | IJsonSchemaValue;

  // 兼容自动义参数

  [key: string]: any;
}
/**
 *  Tree JSON Schema对象
 */
export interface ITreeJsonSchema extends IJsonSchema {
  id: string;
  pId: string;
  // 权重
  weight: number;
}
