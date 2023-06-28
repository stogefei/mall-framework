import {
  BizPropertyVo,
  BizPropertyVoPropertyType,
  ConditionItemFormula,
} from '@amaz/api';
import { getSchemaBaseType } from './josn-schema';
import {
  JsonSchemaType,
  JsonSchemaTypeToComponent,
  JsonSchemaValueType,
} from './josns-schema-enum';
import { asyncOptions } from './options';
import { ICondition } from './type';
import { DateUtils, Browser } from '@amaz/utils';
import { SequenceStatus, sequenceStatusName } from './enum';
/**
 * 数据项条件公式
 * @param type
 * @param isEmpty 是否可以选择空选择
 * @returns
 */
function dataSourceConditionalFormula(
  type: JsonSchemaType,
  extend: any[] = null,
  isEmpty: boolean = true,
) {
  const empty = [
    { key: ConditionItemFormula.EMPTY, text: '为空' },
    { key: ConditionItemFormula.NOT_EMPTY, text: '不为空' },
  ];
  let ops = [];

  switch (type) {
    case JsonSchemaType.TEXT:
      ops = [
        { key: ConditionItemFormula.EQUAL, text: '等于' },
        { key: ConditionItemFormula.NOT_EQUAL, text: '不等于' },
        { key: ConditionItemFormula.CONTAINS, text: '包含' },
        { key: ConditionItemFormula.NOT_CONTAINS, text: '不包含' },
      ];
      break;
    case JsonSchemaType.CORRELATION_FORM:
    case JsonSchemaType.OPTIONS:
      ops = [
        { key: ConditionItemFormula.EQUAL, text: '等于' },
        { key: ConditionItemFormula.NOT_EQUAL, text: '不等于' },
        { key: ConditionItemFormula.LOCATED, text: '位于' },
        { key: ConditionItemFormula.NOT_LOCATED, text: '不位于' },
      ];
      break;
    case JsonSchemaType.CORRELATION_MULTI_FORM:
    case JsonSchemaType.MULTI_OPTIONS:
      ops = [
        { key: ConditionItemFormula.CONTAINS, text: '包含' },
        { key: ConditionItemFormula.NOT_CONTAINS, text: '不包含' },
      ];
      break;
    case JsonSchemaType.DATE:
    case JsonSchemaType.NUMBER:
      ops = [
        { key: ConditionItemFormula.EQUAL, text: '等于' },
        { key: ConditionItemFormula.NOT_EQUAL, text: '不等于' },
        { key: ConditionItemFormula.LESS_THAN, text: '小于' },
        { key: ConditionItemFormula.GREATER_THAN, text: '大于' },
        { key: ConditionItemFormula.LESS_THAN_OR_EQUAL_TO, text: '小于等于' },
        {
          key: ConditionItemFormula.GREATER_THAN_OR_EQUAL_TO,
          text: '大于等于',
        },
        // todo 介于
      ];
      break;
    case JsonSchemaType.LOGIC:
      ops = [{ key: ConditionItemFormula.EQUAL, text: '等于' }];
      break;
    case JsonSchemaType.STAFF_SELECTOR:
      ops = [
        { key: ConditionItemFormula.EQUAL, text: '等于' },
        { key: ConditionItemFormula.NOT_EQUAL, text: '不等于' },
        { key: ConditionItemFormula.LOCATED, text: '位于' },
        { key: ConditionItemFormula.NOT_LOCATED, text: '不位于' },
      ];
      break;
    case JsonSchemaType.STAFF_DEPARTMENT_SELECTOR:
    case JsonSchemaType.STAFF_MULTI_SELECTOR:
    case JsonSchemaType.DEPARTMENT_MULTI_SELECTOR:
      ops = [
        { key: ConditionItemFormula.CONTAINS, text: '包含' },
        { key: ConditionItemFormula.NOT_CONTAINS, text: '不包含' },
      ];
      break;
    case JsonSchemaType.DEPARTMENT_SELECTOR:
      ops = [
        { key: ConditionItemFormula.EQUAL, text: '等于' },
        { key: ConditionItemFormula.NOT_EQUAL, text: '不等于' },
        { key: ConditionItemFormula.LOCATED, text: '位于' },
        { key: ConditionItemFormula.NOT_LOCATED, text: '不位于' },
        { key: ConditionItemFormula.BELONG_TO, text: '属于' },
        { key: ConditionItemFormula.NOT_BELONG_TO, text: '不属于' },
        { key: ConditionItemFormula.HAVA, text: '拥有' },
        { key: ConditionItemFormula.NOT_HAVA, text: '不拥有' },
      ];
      break;
    case JsonSchemaType.SEQUENCE_STATUS:
      ops = [
        { key: ConditionItemFormula.EQUAL, text: '等于' },
        { key: ConditionItemFormula.NOT_EQUAL, text: '不等于' },
        { key: ConditionItemFormula.LOCATED, text: '位于' },
        { key: ConditionItemFormula.NOT_LOCATED, text: '不位于' },
      ];
      break;
    default:
      break;
  }
  if (type && isEmpty && type !== JsonSchemaType.LOGIC) {
    ops.unshift(...empty);
  }
  if (extend) {
    ops.push(...extend);
  }
  return ops;
}
/**
 *  数据项值类型
 * @param type
 * @returns
 */
function dataSourceValueType(type: JsonSchemaType, hasDynamic = true) {
  const data = [
    {
      key: JsonSchemaValueType.FIXED,
      value: JsonSchemaValueType.FIXED,
      text: '固定值',
      label: '固定值',
    },
  ];
  if (hasDynamic) {
    data.push({
      key: JsonSchemaValueType.DYNAMIC,
      value: JsonSchemaValueType.DYNAMIC,
      text: '动态值',
      label: '动态值',
    });
  }
  if (type === JsonSchemaType.DATE) {
    data.push({
      key: JsonSchemaValueType.RELATIVE,
      value: JsonSchemaValueType.RELATIVE,
      text: '相对值',
      label: '相对值',
    });
  }
  return data;
}
/**
 * 模型树数据过滤
 * @param sourceType
 * @param list
 * @param sheetCode 映射的关联模型code
 */
function dataSourceConditionTreeFilter(
  condition: ICondition,
  list: BizPropertyVo[],
  sheetCode?: string,
) {
  const source = condition.source;
  const fList = [];
  if (source) {
    list.forEach((item) => {
      if (
        sheetCode &&
        item.propertyType === BizPropertyVoPropertyType.SHEET &&
        sheetCode === item.code
      ) {
        const children = dataSourceConditionTreeFilter(
          condition,
          item.children,
        );
        fList.push({
          ...item,
          children,
        });
      } else {
        const baseType = getSchemaBaseType(item.propertyType);
        const sourceBaseType = getSchemaBaseType(source?.type);
        const compare = dataSourceConditionTypeCompare(
          sourceBaseType,
          baseType,
          condition.formula,
        );
        if (compare) {
          fList.push(item);
        }
      }
    });
  }

  return fList;
}
/**
 * 数据项的匹配规则
 * @param sourceType
 * @param target
 * @returns
 */
function dataSourceConditionTypeCompare(
  sourceType: JsonSchemaType,
  targetType: JsonSchemaType,
  formula: ConditionItemFormula,
) {
  let res = false;
  if (
    [
      ConditionItemFormula.LOCATED,
      ConditionItemFormula.NOT_LOCATED,
      ConditionItemFormula.BELONG_TO,
      ConditionItemFormula.NOT_BELONG_TO,
      ConditionItemFormula.HAVA,
      ConditionItemFormula.NOT_HAVA,
      ConditionItemFormula.CONTAINS,
      ConditionItemFormula.NOT_CONTAINS,
    ].includes(formula)
  ) {
    switch (sourceType) {
      case JsonSchemaType.CORRELATION_FORM:
      case JsonSchemaType.CORRELATION_MULTI_FORM:
        res = [
          JsonSchemaType.CORRELATION_MULTI_FORM,
          JsonSchemaType.CORRELATION_FORM,
        ].includes(targetType);
        break;
      case JsonSchemaType.OPTIONS:
      case JsonSchemaType.MULTI_OPTIONS:
        res = [JsonSchemaType.OPTIONS, JsonSchemaType.MULTI_OPTIONS].includes(
          targetType,
        );
        break;
      case JsonSchemaType.DEPARTMENT_SELECTOR:
      case JsonSchemaType.DEPARTMENT_MULTI_SELECTOR:
        res = [
          JsonSchemaType.DEPARTMENT_MULTI_SELECTOR,
          JsonSchemaType.DEPARTMENT_SELECTOR,
        ].includes(targetType);
        break;
      case JsonSchemaType.STAFF_SELECTOR:
      case JsonSchemaType.STAFF_MULTI_SELECTOR:
        res = [
          JsonSchemaType.STAFF_MULTI_SELECTOR,
          JsonSchemaType.STAFF_SELECTOR,
        ].includes(targetType);
        break;
      default:
        res = targetType === sourceType;
        break;
    }
  } else if (targetType === sourceType) {
    res = true;
  }
  return res;
}
/**
 * 获取条件的组件配置
 * @param source
 * @param schemaProperty
 * @returns
 */
function getConditionCompoentOpts(
  condition: ICondition,
  schemaProperty?: BizPropertyVo,
) {
  let opts = null;
  const type = getSchemaBaseType(condition.source?.type);
  let multiple = false;
  let mode;

  switch (type) {
    case JsonSchemaType.DATE:
      if (condition.formula === ConditionItemFormula.BETWEEN) {
        opts = {
          type: 'daterangepicker',
          format: DateUtils.DateFormat.FULLTIME,
          allowClear: true,
        };
      } else if (condition.formula === ('DYNAMIC' as any)) {
        opts = {
          type: 'select',
          options: [
            { text: '今天', key: 'today' },
            { text: '昨天', key: 'yesterday' },
            { text: '明天', key: 'tomorrow' },
            { text: '本周', key: 'week' },
            { text: '上周', key: 'lastWeek' },
            { text: '下周', key: 'nextWeek' },
            { text: '本月', key: 'month' },
            { text: '上月', key: 'lastMonth' },
            { text: '下月', key: 'nextMonth' },
            { text: '本季度', key: 'quarter' },
            { text: '上季度', key: 'lastQuarter' },
            { text: '下季度', key: 'nextQuarter' },
            { text: '今年', key: 'year' },
            { text: '去年', key: 'lastYear' },
            { text: '明年', key: 'nextYear' },
          ],
          labelInValue: false,
          allowClear: true,
        };
      } else if (condition.valueType === JsonSchemaValueType.FIXED) {
        opts = {
          type: JsonSchemaTypeToComponent[type],
          format: DateUtils.DateFormat.FULLTIME,
          allowClear: true,
          placeholder: '请选择日期',
        };
      } else if (condition.valueType === JsonSchemaValueType.RELATIVE) {
        opts = {
          type: 'number',
          allowClear: true,
          placeholder: '请输入相对天数',
        };
      }

      break;
    case JsonSchemaType.OPTIONS:
    case JsonSchemaType.MULTI_OPTIONS:
      const rule: any = schemaProperty?.option;
      if (rule) {
        if (
          type === JsonSchemaType.MULTI_OPTIONS ||
          condition.formula === ConditionItemFormula.LOCATED ||
          condition.formula === ConditionItemFormula.NOT_LOCATED
        ) {
          mode = 'multiple';
        }
        opts = {
          type: 'select',
          mode,
          options: async (page, searchValue) => {
            const fun = asyncOptions(rule);
            return await fun({ page, searchValue });
          },
          placeholder: '请选择值',
        };
      } else {
        opts = {
          type: 'text',
          placeholder: '请配置选项值',
          disabled: true,
        };
      }

      break;
    case JsonSchemaType.FILE:
      break;

    case JsonSchemaType.ADDRESS:
      opts = {
        type: JsonSchemaTypeToComponent[type],
        address: true,
      };
      break;
    case JsonSchemaType.STAFF_SELECTOR:
    case JsonSchemaType.STAFF_MULTI_SELECTOR:
      if (
        type === JsonSchemaType.STAFF_MULTI_SELECTOR ||
        condition.formula === ConditionItemFormula.LOCATED ||
        condition.formula === ConditionItemFormula.NOT_LOCATED
      ) {
        multiple = true;
      }
      opts = {
        type: JsonSchemaTypeToComponent[type],
        options: {
          selectOrg: false,
          selectUser: true,
          multiple,
        },
        params: {
          type: 'USER',
          isAdminSys: true,
        },
      };
      if (Browser.IS_MOBILE) {
        opts = {
          type: JsonSchemaTypeToComponent[type],
          department: false,
          user: true,
          multiple,
        };
      } else {
        opts = {
          type: JsonSchemaTypeToComponent[type],
          options: {
            selectOrg: false,
            selectUser: true,
            multiple,
          },
          params: {
            type: 'USER',
            isAdminSys: true,
          },
        };
      }

      break;
    case JsonSchemaType.DEPARTMENT_SELECTOR:
    case JsonSchemaType.DEPARTMENT_MULTI_SELECTOR:
      multiple = false;
      if (
        type === JsonSchemaType.DEPARTMENT_MULTI_SELECTOR ||
        condition.formula === ConditionItemFormula.LOCATED ||
        condition.formula === ConditionItemFormula.NOT_LOCATED
      ) {
        multiple = true;
      }
      if (Browser.IS_MOBILE) {
        opts = {
          type: JsonSchemaTypeToComponent[type],
          department: true,
          user: false,
          multiple,
        };
      } else {
        opts = {
          type: JsonSchemaTypeToComponent[type],
          options: {
            selectOrg: true,
            selectUser: false,
            multiple,
          },
          params: {
            type: 'DEPARTMENT',
            isAdminSys: true,
          },
        };
      }

      break;
    case JsonSchemaType.STAFF_DEPARTMENT_SELECTOR:
      if (Browser.IS_MOBILE) {
        opts = {
          type: JsonSchemaTypeToComponent[type],
          department: true,
          user: true,
          multiple: true,
        };
      } else {
        opts = {
          type: JsonSchemaTypeToComponent[type],
          options: {
            selectOrg: true,
            selectUser: true,
            multiple: true,
          },
          params: {
            type: 'USER',
            isAdminSys: true,
          },
        };
      }

      break;
    case JsonSchemaType.CORRELATION_FORM:
    case JsonSchemaType.CORRELATION_MULTI_FORM:
      if (schemaProperty) {
        if (
          condition.formula === ConditionItemFormula.LOCATED ||
          condition.formula === ConditionItemFormula.NOT_LOCATED
        ) {
          mode = 'multiple';
        }
        opts = {
          type: 'correlation-form',
          mode,
          field: schemaProperty,
        };
      } else {
        opts = {
          type: 'text',
          placeholder: '请输入值',
        };
      }
      break;
    case JsonSchemaType.SEQUENCE_STATUS:
      if (
        condition.formula === ConditionItemFormula.LOCATED ||
        condition.formula === ConditionItemFormula.NOT_LOCATED
      ) {
        mode = 'multiple';
      }
      opts = {
        type: 'select',
        mode,
        labelInValue: false,
        options: [
          {
            text: sequenceStatusName[SequenceStatus.TEMPORARY],
            key: SequenceStatus.TEMPORARY,
          },
          {
            text: sequenceStatusName[SequenceStatus.PROCESSING],
            key: SequenceStatus.PROCESSING,
          },
          {
            text: sequenceStatusName[SequenceStatus.EFFECTIVE],
            key: SequenceStatus.EFFECTIVE,
          },
          {
            text: sequenceStatusName[SequenceStatus.CANCELED],
            key: SequenceStatus.CANCELED,
          },
          {
            text: sequenceStatusName[SequenceStatus.EXCEPTION],
            key: SequenceStatus.EXCEPTION,
          },
        ],
        placeholder: '请选择值',
      };
      break;
    default:
      opts = {
        type: JsonSchemaTypeToComponent[type],
        allowClear: true,
        placeholder: '请输入值',
      };
      break;
  }
  return opts;
}

export {
  dataSourceConditionalFormula,
  dataSourceValueType,
  dataSourceConditionTreeFilter,
  dataSourceConditionTypeCompare,
  getConditionCompoentOpts,
};
