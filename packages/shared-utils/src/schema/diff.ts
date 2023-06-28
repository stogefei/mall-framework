/**
 * 比较差异的JsonSchema
 */

import { IJsonSchema } from './type';
import { cloneDeep, differenceWith, isEmpty, keyBy } from 'lodash-es';
import { JsonSchemaType } from './josns-schema-enum';

let isDiff = false;
function diffAndSupplementJsonSchema(
  current: IJsonSchema,
  srouce: IJsonSchema,
) {
  isDiff = false;
  return {
    jsonSchema: compareJsonSchema(current, srouce),
    diff: isDiff,
  };
}
function compareJsonSchema(current: IJsonSchema, srouce: IJsonSchema) {
  // console.log(current?.type, current &&
  //   current.code === srouce.code &&
  //   current.type === srouce.type &&
  //   current.schemaCode === srouce.schemaCode, current, srouce);
  if (
    current &&
    current.code === srouce.code &&
    current.type === srouce.type &&
    (current.schemaCode === srouce.schemaCode ||
      isEmpty(current.schemaCode) === isEmpty(srouce.schemaCode))
  ) {
    current.name = srouce.name;

    if (current.type === JsonSchemaType.ARRAY) {
      current.items = compareJsonSchema(current.items, srouce.items);
    } else if (current.type === JsonSchemaType.OBJECT) {
      const cpo = keyBy(current.propertys, 'code');
      const spo = keyBy(srouce.propertys, 'code');
      const spk = Object.keys(spo);
      const cdiff = differenceWith(
        current.propertys,
        srouce.propertys,
        (c, s) => {
          if (c.code === s.code && c.type === s.type && c.name === s.name) {
            return true;
          } else {
            return false;
          }
        },
      );
      const sdiff = differenceWith(
        srouce.propertys,
        current.propertys,
        (c, s) => {
          if (c.code === s.code && c.type === s.type && c.name === s.name) {
            return true;
          } else {
            return false;
          }
        },
      );
      // 如果当前有差异就证明有删除的字段了，如果源有差异就证明有新增的字段
      if (cdiff?.length || sdiff?.length) {
        isDiff = true;
        current.propertys = [];
        spk.forEach((key) => {
          current.propertys.push(compareJsonSchema(cpo[key], spo[key]));
        });
      } else {
        // 如果没有差异，就找到对象和数组遍历
        current?.propertys?.forEach((item, index) => {
          if (
            [JsonSchemaType.OBJECT, JsonSchemaType.ARRAY].includes(item.type)
          ) {
            current.propertys[index] = compareJsonSchema(item, spo[item.code]);
          }
        });
      }
    }
    return current;
  } else {
    isDiff = true;
    return cloneDeep(srouce);
  }
}
export { diffAndSupplementJsonSchema };
