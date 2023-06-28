import API, {
  BizObjectFilterVo,
  BizObjectFilterVoOp,
  ResponseCode,
  BizViewConditionVoPropertyType,
  BizPropertyVo,
  BizObjectSortVo,
  PropertyOptionDictSortType,
} from '@amaz/api';
import { DateUtils } from '@amaz/utils';
const { formatRange } = DateUtils;
/**
 * 获取筛选的条件公式
 * @param propertyType
 * @returns
 */
function getFilterOp(propertyType) {
  let op;
  switch (propertyType) {
    case BizViewConditionVoPropertyType.LOGIC:
      op = BizObjectFilterVoOp.EQUAL;
      break;
    case BizViewConditionVoPropertyType.DATE:
    case BizViewConditionVoPropertyType.CREATED_TIME:
    case BizViewConditionVoPropertyType.MODIFIED_TIME:
    case BizViewConditionVoPropertyType.NUMBER:
      op = BizObjectFilterVoOp.BETWEEN;
      break;
    case BizViewConditionVoPropertyType.CHECKBOX:
    case BizViewConditionVoPropertyType.RADIO:
    case BizViewConditionVoPropertyType.DROPDOWN:
    case BizViewConditionVoPropertyType.MULTI_DROPDOWN:
    case BizViewConditionVoPropertyType.CORRELATION_FORM:
    case BizViewConditionVoPropertyType.CORRELATION_MULTI_FORM:
    case BizViewConditionVoPropertyType.CREATOR:
    case BizViewConditionVoPropertyType.MODIFIER:
    case BizViewConditionVoPropertyType.OWNER:
    case BizViewConditionVoPropertyType.STAFF_MULTI_SELECTOR:
    case BizViewConditionVoPropertyType.DEPARTMENT_MULTI_SELECTOR:
    case BizViewConditionVoPropertyType.STAFF_DEPARTMENT_SELECTOR:
    case BizViewConditionVoPropertyType.STAFF_SELECTOR:
    case BizViewConditionVoPropertyType.SEQUENCE_STATUS:
    case BizViewConditionVoPropertyType.DEPARTMENT_SELECTOR:
    case BizViewConditionVoPropertyType.OWNER_DEPARTMENT:
    case BizViewConditionVoPropertyType.CREATOR_DEPARTMENT:
      // op = BizObjectFilterVoOp.BELONG_TO;
      op = BizObjectFilterVoOp.LOCATED;
      // break;
      break;
    default:
      op = BizObjectFilterVoOp.CONTAINS;
      break;
  }
  return op;
}
/**
 * 获取筛选的条件公式
 * @param propertyType
 * @returns
 */
function getSchemaOp(propertyType) {
  let op;
  console.log('getSchemaOp', propertyType);

  switch (propertyType) {
    case BizViewConditionVoPropertyType.CREATOR:
    case BizViewConditionVoPropertyType.MODIFIER:
    case BizViewConditionVoPropertyType.OWNER:
    case BizViewConditionVoPropertyType.STAFF_SELECTOR:
    case BizViewConditionVoPropertyType.CORRELATION_FORM:
    case BizViewConditionVoPropertyType.RADIO:
    case BizViewConditionVoPropertyType.DROPDOWN:
    case BizViewConditionVoPropertyType.LOGIC:
    case BizViewConditionVoPropertyType.NUMBER:
      op = BizObjectFilterVoOp.EQUAL;
      break;
    case BizViewConditionVoPropertyType.DATE:
    case BizViewConditionVoPropertyType.CREATED_TIME:
    case BizViewConditionVoPropertyType.MODIFIED_TIME:
      op = BizObjectFilterVoOp.BETWEEN;
      break;
    case BizViewConditionVoPropertyType.CHECKBOX:
    case BizViewConditionVoPropertyType.CORRELATION_MULTI_FORM:
    case BizViewConditionVoPropertyType.STAFF_MULTI_SELECTOR:
    case BizViewConditionVoPropertyType.MULTI_DROPDOWN:
    case BizViewConditionVoPropertyType.SEQUENCE_STATUS:
      op = BizObjectFilterVoOp.LOCATED;
      break;
    case BizViewConditionVoPropertyType.DEPARTMENT_SELECTOR:
    case BizViewConditionVoPropertyType.OWNER_DEPARTMENT:
    case BizViewConditionVoPropertyType.CREATOR_DEPARTMENT:
    case BizViewConditionVoPropertyType.DEPARTMENT_MULTI_SELECTOR:
    case BizViewConditionVoPropertyType.STAFF_DEPARTMENT_SELECTOR:
      op = BizObjectFilterVoOp.BELONG_TO;
      break;
    default:
      op = BizObjectFilterVoOp.CONTAINS;
      break;
  }
  return op;
}
/**
 * 获取关联表单下拉配置项
 * @param dataRule
 */
function correlationOptionsRule(field: BizPropertyVo) {
  if (!field) return;
  // todo 关联表单展示字段
  const options = {
    propertyCode: field.correlationFormDisplayColumn || 'name',
    schemaCode: field.correlationFormSchemaCode,
    schemaName: field.correlationFormSchemaName,
    conditions: [],
  };

  return { dataSourceType: 'CORRELATION', schemaOption: options };
}
/**
 * 获取条件code
 * @param form
 * @param property
 * @returns
 */
function getConditionCode(form: any, property) {
  if (property.schemaCode !== form.schemaCode && property.schemaCode) {
    return `${property.schemaCode}.${property.code}`;
  }
  return property.code;
}
/**
 *  todo 获取过滤参数 老式获取参数的函数
 * @param schemaOption
 * @param form 表单时候需要用到
 * @param rowIndex 表单时候需要用到
 * @returns
 */
function getOptionsFilterParams(rule, form?: any, rowIndex?: number) {
  const filters = [];

  if (rule && rule.schemaOption && rule.dataSourceType !== 'CUSTOM') {
    const schemaOption = rule.schemaOption;
    if (schemaOption.conditions && schemaOption.conditions.length) {
      schemaOption.conditions.forEach((item) => {
        const query: BizObjectFilterVo = {
          op: item.operatorType,
          propertyCode: item.property.code,
          values: [],
        };
        item.values.forEach((nItem) => {
          // 是否是动态值
          if (nItem.valueType === 'DYNAMIC' && form) {
            const code = getConditionCode(form, nItem.dynamicValue);
            if (code) {
              const targetELement = form.elementInstances[code];

              const eleData = targetELement.getData(rowIndex);
              // 这里是做了特殊特殊处理，当值为空值时候传空类型
              if (eleData === null || eleData === undefined) {
                query.op = BizObjectFilterVoOp.EMPTY;
              }
              query.values.push(eleData);
              if (
                ['DATE', 'CREATED_TIME', 'MODIFIED_TIME'].includes(
                  targetELement.type as any,
                ) &&
                eleData
              ) {
                // 如果当前是动态值，并且只有一个值类型，取时间范围
                if (item.values.length === 1 && item.values[0]) {
                  query.op = BizObjectFilterVoOp.BETWEEN;
                  query.values = formatRange(eleData, targetELement.format);
                }
              }
            }
          } else {
            // todo 这里需要调整结构
            if (item.property.code === 'sequenceStatus') {
              query.values = nItem.fixedValue;
            } else {
              // todo 这里就是扯淡，后面需要修改数据的配置，不在这里做兼容
              if (
                ['DATE', 'CREATED_TIME', 'MODIFIED_TIME'].includes(
                  item.property.propertyType as any,
                ) &&
                nItem.fixedValue
              ) {
                if (item.values.length === 1 && item.values[0]) {
                  query.op = BizObjectFilterVoOp.EQUAL;
                }
              }
              query.values.push(nItem.fixedValue);
            }
          }
        });

        filters.push(query);
      });
      filters.push({
        op: BizObjectFilterVoOp.NOT_EMPTY,
        propertyCode: rule.schemaOption.propertyCode,
        values: [],
      });
    }
  }
  return filters;
}

type asyncOptionsCallbackParams = {
  page: number; // 页数
  filters?: BizObjectFilterVo[]; // 过滤条件
  sorts?: BizObjectSortVo[]; // 排序
  searchValue?: string; // 文档
};
/**
 * 处理异步请求配置属性 例如单选多选下拉等等
 * @param rule
 * @param pageSize
 * @param correlation 是否是关联表单数据
 * @returns
 */
function asyncOptions(rule: any, pageSize = 20, correlation = false) {
  return async ({
    page,
    filters = [],
    searchValue,
    sorts = [],
  }: asyncOptionsCallbackParams) => {
    if (rule) {
      if (rule.dataSourceType === 'CUSTOM') {
        const data = [];
        rule.customOptions?.forEach((item) => {
          if (
            !searchValue ||
            item.text
              .toLocaleLowerCase()
              .includes(searchValue.toLocaleLowerCase())
          ) {
            data.push({
              text: item.text || item.name,
              key: item.key || item.id,
            });
          }
        });

        return { res: true, data, total: data.length };
      } else if (rule.dataSourceType === 'DICT') {
        if (rule?.dict?.id) {
          // 数据字典
          const dictId: string = rule.dict.id;
          const res = await API.portalSysDictController.listByDictId(
            dictId,
            true,
          );
          let data = [];
          if (res.code === ResponseCode.SUCCESS) {
            data = res.data.map((oItem: any) => {
              return {
                text: oItem.name,
                key: oItem.code,
              };
            });
            if (rule.dictSortType !== PropertyOptionDictSortType.DEFAULT) {
              data.sort((a, b) =>
                rule.dictSortType === PropertyOptionDictSortType.ASC
                  ? a.text.localeCompare(b.text)
                  : b.text.localeCompare(a.text),
              );
            }
            return {
              res: true,
              total: res.data.length,
              data,
            };
          } else {
            return {
              res: false,
            };
          }
        } else {
          return {
            res: false,
          };
        }
      } else {
        const schemaOption = rule.schemaOption;
        const params: any = {
          schemaCode: schemaOption.schemaCode,
          fields: [schemaOption.propertyCode],
          sorts: [],
          pageSize,
          pageNum: 1,
          distinct: true,
        };
        // 如果有排序字段
        // if (schemaOption.sortPropertyCode && schemaOption.sortType) {
        //   params.sorts.push({
        //     propertyCode: schemaOption.sortPropertyCode,
        //     sortType: schemaOption.sortType,
        //   });
        // }
        params.sorts = sorts || [];
        params.filters = filters || [];
        if (searchValue) {
          params.filters.push({
            op: BizObjectFilterVoOp.CONTAINS,
            propertyCode: schemaOption.propertyCode,
            values: [searchValue],
          });
        }
        params.pageNum = page;
        const res = await API.appViewController.listData(params);
        const data = [];
        if (res.code === ResponseCode.SUCCESS) {
          res.data.list.forEach((oItem) => {
            let text = oItem[schemaOption.propertyCode];
            if (text instanceof Object) {
              text = text.name || text.text;
            }
            if (text) {
              if (correlation) {
                data.push({
                  id: oItem.id,
                  name: text,
                });
              } else {
                data.push({
                  text,
                  key: oItem.id,
                });
              }
            }
          });
          return {
            res: true,
            total: res.data.total,
            data,
          };
        } else {
          return {
            res: false,
          };
        }
      }
    } else {
      return {
        res: false,
      };
    }
  };
}

export {
  getOptionsFilterParams,
  getConditionCode,
  asyncOptions,
  correlationOptionsRule,
  getFilterOp,
  getSchemaOp,
};
export default {
  getOptionsFilterParams,
  getConditionCode,
  asyncOptions,
  correlationOptionsRule,
  getFilterOp,
  getSchemaOp,
};
