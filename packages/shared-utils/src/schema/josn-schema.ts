import {
  BizPropertyVo,
  BizPropertyVoPropertyType,
  ConditionItemFormula,
  JsonSchemaOp,
} from '@amaz/api';
import {
  JsonSchemaType,
  JsonSchemaValueType,
  JsonSchemaTypeToComponent,
  JsonSchemaTypeName,
} from './josns-schema-enum';
import { IJsonSchema, ITreeJsonSchema, ICondition } from './type';
import { asyncOptions } from './options';
import { DateUtils } from '@amaz/utils';
import { SequenceStatus, sequenceStatusName } from './enum';

const { DateFormat } = DateUtils;

/**
 * 业务规则条件通用公式
 * @param type
 * @returns
 */
function conditionalFormula(type: JsonSchemaType) {
  let ops = [
    { key: ConditionItemFormula.EMPTY, text: '为空' },
    { key: ConditionItemFormula.NOT_EMPTY, text: '不为空' },
  ];

  switch (type) {
    case JsonSchemaType.ADDRESS:
    case JsonSchemaType.TEXT:
      ops = [
        ...ops,
        { key: ConditionItemFormula.EQUAL, text: '等于' },
        { key: ConditionItemFormula.NOT_EQUAL, text: '不等于' },
        { key: ConditionItemFormula.CONTAINS, text: '包含' },
        { key: ConditionItemFormula.NOT_CONTAINS, text: '不包含' },
      ];
      break;
    case JsonSchemaType.OPTIONS:
      ops = [
        ...ops,
        { key: ConditionItemFormula.EQUAL, text: '等于' },
        { key: ConditionItemFormula.NOT_EQUAL, text: '不等于' },
      ];
      break;
    case JsonSchemaType.MULTI_OPTIONS:
      ops = [...ops];
      break;
    case JsonSchemaType.DATE:
    case JsonSchemaType.NUMBER:
      ops = [
        ...ops,
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
    case JsonSchemaType.DEPARTMENT_SELECTOR:
    case JsonSchemaType.STAFF_SELECTOR:
      ops = [
        ...ops,
        { key: ConditionItemFormula.EQUAL, text: '等于' },
        { key: ConditionItemFormula.NOT_EQUAL, text: '不等于' },
        // { key: ConditionItemFormula.CONTAINS, text: '包含' },
        // { key: ConditionItemFormula.NOT_CONTAINS, text: '不包含' },
        // { key: ConditionItemFormula.LOCATED, text: '位于' },
        // { key: ConditionItemFormula.NOT_LOCATED, text: '不位于' },
        // { key: ConditionItemFormula.BELONG_TO, text: '属于' },
        // { key: ConditionItemFormula.NOT_BELONG_TO, text: '不属于' },
      ];
      break;
    case JsonSchemaType.STAFF_DEPARTMENT_SELECTOR:
    case JsonSchemaType.STAFF_MULTI_SELECTOR:
    case JsonSchemaType.DEPARTMENT_MULTI_SELECTOR:
      ops = [
        ...ops,
        // { key: ConditionItemFormula.CONTAINS, text: '包含' },
        // { key: ConditionItemFormula.NOT_CONTAINS, text: '不包含' },
        // { key: ConditionItemFormula.LOCATED, text: '位于' },
        // { key: ConditionItemFormula.NOT_LOCATED, text: '不位于' },
        // { key: ConditionItemFormula.BELONG_TO, text: '属于' },
        // { key: ConditionItemFormula.NOT_BELONG_TO, text: '不属于' },
        // { key: ConditionItemFormula.HAVA, text: '拥有' },
        // { key: ConditionItemFormula.NOT_HAVA, text: '不拥有' },
      ];
      break;
    case JsonSchemaType.CORRELATION_OBJECT:
    case JsonSchemaType.CORRELATION_FORM:
      ops = [
        ...ops,
        { key: ConditionItemFormula.EQUAL, text: '等于' },
        { key: ConditionItemFormula.NOT_EQUAL, text: '不等于' },
      ];
      break;
    case JsonSchemaType.SEQUENCE_STATUS:
      ops = [
        ...ops,
        { key: ConditionItemFormula.EQUAL, text: '等于' },
        { key: ConditionItemFormula.NOT_EQUAL, text: '不等于' },
      ];
      break;
    default:
      ops = [
        { key: ConditionItemFormula.EMPTY, text: '为空' },
        { key: ConditionItemFormula.NOT_EMPTY, text: '不为空' },
      ];
      break;
  }

  return ops;
}

/**
 * 获取组件配置
 * @param type
 * @param item
 * @param schema
 * @returns
 */
function getJsonSchemaCompoentOpts(
  type: JsonSchemaType,
  schemaProperty?: BizPropertyVo,
  source?: ICondition | IJsonSchema,
) {
  let opts = null;
  let mulpitle = false;
  let mode;
  switch (type) {
    case JsonSchemaType.DATE:
      if (source.valueType === JsonSchemaValueType.FIXED) {
        opts = {
          type: JsonSchemaTypeToComponent[type],
          format: DateFormat.FULLTIME,
          allowClear: true,
          placeholder: '请选择日期',
        };
      } else if (source.valueType === JsonSchemaValueType.RELATIVE) {
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
          source.formula === ConditionItemFormula.LOCATED ||
          source.formula === ConditionItemFormula.NOT_LOCATED
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
        source.formula === ConditionItemFormula.LOCATED ||
        source.formula === ConditionItemFormula.NOT_LOCATED
      ) {
        mulpitle = true;
      }
      opts = {
        type: JsonSchemaTypeToComponent[type],
        options: {
          selectOrg: false,
          selectUser: true,
          multiple: mulpitle,
        },
        params: {
          type: 'USER',
          isAdminSys: true,
        },
      };
      break;
    case JsonSchemaType.DEPARTMENT_SELECTOR:
    case JsonSchemaType.DEPARTMENT_MULTI_SELECTOR:
      mulpitle = false;
      if (
        type === JsonSchemaType.DEPARTMENT_MULTI_SELECTOR ||
        source.formula === ConditionItemFormula.LOCATED ||
        source.formula === ConditionItemFormula.NOT_LOCATED
      ) {
        mulpitle = true;
      }
      opts = {
        type: JsonSchemaTypeToComponent[type],
        options: {
          selectOrg: true,
          selectUser: false,
          multiple: mulpitle,
        },
        params: {
          type: 'DEPARTMENT',
          isAdminSys: true,
        },
      };
      break;
    case JsonSchemaType.STAFF_DEPARTMENT_SELECTOR:
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
      break;
    case JsonSchemaType.CORRELATION_FORM:
    case JsonSchemaType.CORRELATION_MULTI_FORM:
      if (schemaProperty) {
        if (
          source.formula === ConditionItemFormula.LOCATED ||
          source.formula === ConditionItemFormula.NOT_LOCATED
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
        source.formula === ConditionItemFormula.LOCATED ||
        source.formula === ConditionItemFormula.NOT_LOCATED
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
/**
 * 下拉树数据过滤
 * @param sourceType
 * @param treeList
 */
function treeFilter(
  source: IJsonSchema,
  treeList: ITreeJsonSchema[],
  weight: number,
) {
  const nTreeList = [];
  treeList.forEach((item) => {
    if (item.weight <= weight) {
      if (typeCompare(source.type, item)) {
        nTreeList.push(item);
      } else if (item.items || item.propertys) {
        nTreeList.push({ ...item, disabled: true });
      }
    }
  });
  const sortTree = [...nTreeList];
  sortTree.sort((a, b) => (a.weight < b.weight ? 1 : -1));

  for (let index = 0; index < sortTree.length; index++) {
    const tree = sortTree[index];
    if (tree.disabled) {
      const res = sortTree.some((item) => item.pId === tree.id);
      if (!res) {
        sortTree.splice(index, 1);
        index--;
      }
    }
  }

  return nTreeList.filter((item) => sortTree.includes(item));
}
/**
 * 获取数组的SchemaTree
 * @param treeList 获取
 * @param weight
 * @returns
 */
function getArraySchemaTree(treeList: ITreeJsonSchema[], weight: number) {
  const nTreeList = [];
  treeList.forEach((item) => {
    if (item.type === JsonSchemaType.ARRAY && item.weight <= weight) {
      nTreeList.push(item);
    }
  });

  return nTreeList;
}
function typeCompare(sourceType, target: ITreeJsonSchema) {
  if (target.type === sourceType) {
    return true;
  } else {
    let res = false;
    switch (sourceType) {
      case JsonSchemaType.TEXT:
        res = [
          JsonSchemaType.TEXT,
          JsonSchemaType.DATE,
          JsonSchemaType.NUMBER,
          JsonSchemaType.LOGIC,
          JsonSchemaType.ADDRESS,
        ].includes(target.type);
        break;
      case JsonSchemaType.STAFF_SELECTOR:
      case JsonSchemaType.STAFF_MULTI_SELECTOR:
        // res = [JsonSchemaType.TEXT].includes(target.type);
        break;
      case JsonSchemaType.STAFF_DEPARTMENT_SELECTOR:
      case JsonSchemaType.DEPARTMENT_MULTI_SELECTOR:
      case JsonSchemaType.DEPARTMENT_SELECTOR:
        // res = [JsonSchemaType.TEXT].includes(target.type);
        break;
      case JsonSchemaType.CORRELATION_OBJECT:
        res = [
          JsonSchemaType.SELF_OBJECT,
          JsonSchemaType.CORRELATION_FORM,
        ].includes(target.type);

        break;
      case JsonSchemaType.CORRELATION_FORM:
        // case JsonSchemaType.CORRELATION_MULTI_FORM:
        res = [
          JsonSchemaType.SELF_OBJECT,
          JsonSchemaType.CORRELATION_OBJECT,
        ].includes(target.type);

        break;
      case JsonSchemaType.SELF_OBJECT:
        res = [
          JsonSchemaType.CORRELATION_MULTI_FORM,
          JsonSchemaType.CORRELATION_OBJECT,
          JsonSchemaType.CORRELATION_FORM,
        ].includes(target.type);
        break;
      default:
        break;
    }
    return res;
  }
}
/**
 * 根据数组code进行过滤
 * @param tree
 * @param code 数组code
 * @param weight
 * @returns
 */

function treeSelectByArrayCode(
  tree: ITreeJsonSchema[],
  code: string,
  weight: number,
) {
  const list = tree.filter((item) => {
    const res =
      (item.weight < weight && item.type !== JsonSchemaType.ARRAY) ||
      item.code.includes(`${code}.`) ||
      item.code === code;

    return res;
  });
  const index = list.findIndex((item) => item.code === code);
  if (index > -1) {
    const item = list[index];
    list.splice(index, 1, { ...item, disabled: true });
    deepTree(item, tree, list);
  }
  // for (let index = 0; index < list.length; index++) {
  //   const element = array[index];
  // }

  return list;
}
function deepTree(
  item: ITreeJsonSchema,
  tree: ITreeJsonSchema[],
  list: ITreeJsonSchema[],
) {
  if (item.pId) {
    const pItem = tree.find((oitem) => oitem.id === item.pId);
    if (pItem) {
      const nItem = list.find((oitem) => oitem.id === pItem.id);
      if (!nItem) {
        list.unshift(pItem);
      }
      deepTree(pItem, tree, list);
    }
  }
}
/**
 * JsonSchema生成下拉树
 * @param list
 * @param pId
 * @param details
 * @returns
 */
function JsonSchemaToTreeSelect(
  list: IJsonSchema[],
  pId?: string,
  details?: boolean,
  weight: number = 0,
  realPId?: string,
): ITreeJsonSchema[] {
  const treeList: ITreeJsonSchema[] = [];
  list.forEach((oitem) => {
    let item = oitem;
    if (details) {
      item = structureJsonSchema(oitem, true);
      item = { ...oitem, ...item };
    }
    const praentId = realPId || pId;
    const id = praentId ? `${praentId}.${item.code}` : item.code;

    const treeItem: ITreeJsonSchema = {
      id: id,
      ...item,
      code: id,
      title: item.name || item.code,
      pId,
      weight,
    };
    treeList.push(treeItem);
    if (treeItem.items) {
      if (treeItem.items.type === JsonSchemaType.OBJECT) {
        const itemId = `${treeItem.code}.${treeItem.items.code}`;
        treeList.push(
          ...JsonSchemaToTreeSelect(
            item.items.propertys,
            treeItem.code,
            details,
            weight + 1,
            itemId,
          ),
        );
      } else {
        treeList.push(
          ...JsonSchemaToTreeSelect([treeItem.items], id, details, weight + 1),
        );
      }
    } else if (item.propertys) {
      treeList.push(
        ...JsonSchemaToTreeSelect(treeItem.propertys, id, details, weight),
      );
    } else {
      treeItem.isLeaf = true;
    }
  });
  return treeList;
}
/**
 * 构建JsonSchema子集对象
 * @param item
 * @param details
 * @returns
 */
function structureJsonSchema(item: IJsonSchema, details?: boolean) {
  const nItem: any = {};
  if (details) {
    switch (item.type) {
      case JsonSchemaType.OPTIONS:
        nItem.propertys = [
          {
            code: 'key',
            name: 'ID',
            type: JsonSchemaType.TEXT,
            valueType: JsonSchemaValueType.DYNAMIC,
            schemaCode: item.schemaCode ? `${item.schemaCode}.key` : null,
            value: null,
          },
          {
            code: 'text',
            name: '名称',
            type: JsonSchemaType.TEXT,
            valueType: JsonSchemaValueType.DYNAMIC,
            schemaCode: item.schemaCode ? `${item.schemaCode}.text` : null,
            value: null,
          },
        ];
        break;
      case JsonSchemaType.MULTI_OPTIONS:
        nItem.items = [
          {
            code: 'key',
            name: 'ID',
            type: JsonSchemaType.TEXT,
            valueType: JsonSchemaValueType.DYNAMIC,
            schemaCode: item.schemaCode ? `${item.schemaCode}.key` : null,
            value: null,
          },
          {
            code: 'text',
            name: '名称',
            type: JsonSchemaType.TEXT,
            valueType: JsonSchemaValueType.DYNAMIC,
            schemaCode: item.schemaCode ? `${item.schemaCode}.text` : null,
            value: null,
          },
        ];
        break;
      case JsonSchemaType.FILE:
        nItem.items = {
          code: 'items',
          name: JsonSchemaTypeName[JsonSchemaType.OBJECT],
          type: JsonSchemaType.OBJECT,
          propertys: [
            {
              code: 'id',
              name: 'ID',
              type: JsonSchemaType.TEXT,
              valueType: JsonSchemaValueType.DYNAMIC,
              schemaCode: item.schemaCode ? `${item.schemaCode}.id` : null,
              value: null,
            },
            {
              code: 'creator',
              name: '创建人',
              type: JsonSchemaType.TEXT,
              valueType: JsonSchemaValueType.DYNAMIC,
              schemaCode: item.schemaCode ? `${item.schemaCode}.creator` : null,
              value: null,
            },
            {
              code: 'size',
              name: '文件大小',
              type: JsonSchemaType.NUMBER,
              valueType: JsonSchemaValueType.DYNAMIC,
              schemaCode: item.schemaCode ? `${item.schemaCode}.size` : null,
              value: null,
            },
            {
              code: 'suffix',
              name: '文件后缀',
              type: JsonSchemaType.TEXT,
              valueType: JsonSchemaValueType.DYNAMIC,
              schemaCode: item.schemaCode ? `${item.schemaCode}.suffix` : null,
              value: null,
            },
            {
              code: 'type',
              name: '文件类型',
              type: JsonSchemaType.TEXT,
              valueType: JsonSchemaValueType.DYNAMIC,
              schemaCode: item.schemaCode ? `${item.schemaCode}.type` : null,
              value: null,
            },
          ],
        };
        break;
      case JsonSchemaType.LOCATION:
        nItem.propertys = [
          {
            code: 'address',
            name: '地址',
            type: JsonSchemaType.TEXT,
            valueType: JsonSchemaValueType.DYNAMIC,
            schemaCode: item.schemaCode ? `${item.schemaCode}.address` : null,
            value: null,
          },
          {
            code: 'lng',
            name: '经度',
            type: JsonSchemaType.NUMBER,
            valueType: JsonSchemaValueType.DYNAMIC,
            schemaCode: item.schemaCode ? `${item.schemaCode}.lng` : null,
            value: null,
          },
          {
            code: 'lat',
            name: '维度',
            type: JsonSchemaType.NUMBER,
            valueType: JsonSchemaValueType.DYNAMIC,
            schemaCode: item.schemaCode ? `${item.schemaCode}.lat` : null,
            value: null,
          },
        ];
        break;
      case JsonSchemaType.ADDRESS:
        nItem.propertys = [
          {
            code: 'address',
            name: '详细地址',
            type: JsonSchemaType.TEXT,
            valueType: JsonSchemaValueType.DYNAMIC,
            schemaCode: item.schemaCode ? `${item.schemaCode}.address` : null,
            value: null,
          },
          {
            code: 'province',
            name: '省份',
            type: JsonSchemaType.TEXT,
            valueType: JsonSchemaValueType.DYNAMIC,
            schemaCode: item.schemaCode ? `${item.schemaCode}.province` : null,
            value: null,
          },
          {
            code: 'city',
            name: '市区',
            type: JsonSchemaType.TEXT,
            valueType: JsonSchemaValueType.DYNAMIC,
            schemaCode: item.schemaCode ? `${item.schemaCode}.city` : null,
            value: null,
          },
          {
            code: 'district',
            name: '地区',
            type: JsonSchemaType.TEXT,
            valueType: JsonSchemaValueType.DYNAMIC,
            schemaCode: item.schemaCode ? `${item.schemaCode}.district` : null,
            value: null,
          },
        ];
        break;
      case JsonSchemaType.STAFF_SELECTOR:
      case JsonSchemaType.DEPARTMENT_SELECTOR:
        nItem.propertys = [
          {
            code: 'id',
            name: 'ID',
            type: JsonSchemaType.TEXT,
            valueType: JsonSchemaValueType.DYNAMIC,
            schemaCode: item.schemaCode ? `${item.schemaCode}.id` : null,
            value: null,
          },
          {
            code: 'name',
            name: '名称',
            type: JsonSchemaType.TEXT,
            valueType: JsonSchemaValueType.DYNAMIC,
            schemaCode: item.schemaCode ? `${item.schemaCode}.name` : null,
            value: null,
          },
        ];
        break;
      case JsonSchemaType.STAFF_MULTI_SELECTOR:
      case JsonSchemaType.DEPARTMENT_MULTI_SELECTOR:
      case JsonSchemaType.STAFF_DEPARTMENT_SELECTOR:
        nItem.items = {
          code: 'items',
          name: JsonSchemaTypeName[JsonSchemaType.OBJECT],
          type: JsonSchemaType.OBJECT,
          propertys: [
            {
              code: 'id',
              name: 'ID',
              type: JsonSchemaType.TEXT,
              valueType: JsonSchemaValueType.DYNAMIC,
              schemaCode: item.schemaCode ? `${item.schemaCode}.id` : null,
              value: null,
            },
            {
              code: 'name',
              name: '名称',
              type: JsonSchemaType.TEXT,
              valueType: JsonSchemaValueType.DYNAMIC,
              schemaCode: item.schemaCode ? `${item.schemaCode}.name` : null,
              value: null,
            },
          ],
        };
        break;
      case JsonSchemaType.SELF_OBJECT:
      case JsonSchemaType.CORRELATION_OBJECT:
      case JsonSchemaType.CORRELATION_FORM:
        nItem.propertys = [
          {
            code: 'id',
            name: 'ID',
            type: JsonSchemaType.TEXT,
            valueType: JsonSchemaValueType.DYNAMIC,
            schemaCode: item.schemaCode ? `${item.schemaCode}.id` : null,
            value: null,
          },
          {
            code: 'name',
            name: '名称',
            type: JsonSchemaType.TEXT,
            valueType: JsonSchemaValueType.DYNAMIC,
            schemaCode: item.schemaCode ? `${item.schemaCode}.name` : null,
            value: null,
          },
          {
            code: 'schemaCode',
            name: '模型编码',
            type: JsonSchemaType.TEXT,
            valueType: JsonSchemaValueType.DYNAMIC,
            schemaCode: item.schemaCode
              ? `${item.schemaCode}.schemaCode`
              : null,
            value: null,
          },
        ];
        break;
      case JsonSchemaType.CORRELATION_MULTI_FORM:
        nItem.items = {
          code: 'items',
          name: JsonSchemaTypeName[JsonSchemaType.OBJECT],
          type: JsonSchemaType.OBJECT,
          propertys: [
            {
              code: 'id',
              name: 'ID',
              type: JsonSchemaType.TEXT,
              valueType: JsonSchemaValueType.DYNAMIC,
              schemaCode: item.schemaCode ? `${item.schemaCode}.id` : null,
              value: null,
            },
            {
              code: 'name',
              name: '名称',
              type: JsonSchemaType.TEXT,
              valueType: JsonSchemaValueType.DYNAMIC,
              schemaCode: item.schemaCode ? `${item.schemaCode}.name` : null,
              value: null,
            },
            {
              code: 'schemaCode',
              name: '模型编码',
              type: JsonSchemaType.TEXT,
              valueType: JsonSchemaValueType.DYNAMIC,
              schemaCode: item.schemaCode
                ? `${item.schemaCode}.schemaCode`
                : null,
              value: null,
            },
          ],
        };
        break;
    }
  }

  return nItem;
}

/**
 * 数据项生成JsonSchema树
 * @param schemaCode
 * @param oList
 * @param details
 * @returns
 */
export function schemaToJsonSchemaList(
  schemaCode: string,
  oList: BizPropertyVo[],
  details = false,
  valueType = JsonSchemaValueType.FIXED,
  filterSystem = false,
) {
  const propertys = [];
  oList.forEach((item) => {
    if (filterSystem) {
      if (
        [
          'ID',
          'NAME',
          'OWNER',
          'OWNER_DEPARTMENT',
          'SEQUENCE_NO',
          'CREATOR',
          'CREATOR_DEPARTMENT',
          'MODIFIER',
          'CREATED_TIME',
          'MODIFIED_TIME',
          'SEQUENCE_STATUS',
          'PID',
          'NID',
          'CORRELATION_ID',
          'SELF_OBJECT',
        ].includes(item.propertyType)
      ) {
        return;
      }
    }
    let type: any = JsonSchemaType.TEXT;
    let opts: any = null;
    type = getSchemaBaseType(item.propertyType);
    if (item.children && type === JsonSchemaType.ARRAY) {
      opts = {
        items: {
          code: 'items',
          name: JsonSchemaTypeName[JsonSchemaType.OBJECT],
          type: JsonSchemaType.OBJECT,
          propertys: schemaToJsonSchemaList(
            item.code,
            item.children,
            details,
            valueType,
            filterSystem,
          ),
        },
      };
    }

    let nItem: IJsonSchema = {
      code: item.code,
      name: item.name,
      type,
      op: JsonSchemaOp.EQUAL,
      schemaCode: `${schemaCode}.${item.code}`,
      valueType: valueType,
      value: null,
    };
    nItem = { ...nItem, ...structureJsonSchema(nItem, details) };
    nItem = Object.assign(nItem, opts);
    propertys.push(nItem);
  });

  return propertys;
}
/**
 * 数据项生成jsonschema对象
 * @param schemaCode
 * @param name
 * @param oList
 * @param details
 * @returns
 */
function schemaToJsonSchema(
  schemaCode: string,
  name: string,
  oList: BizPropertyVo[],
  details = false,
  isArray = false,
  valueType = JsonSchemaValueType.FIXED,
  filterSystem = false,
) {
  let obj: IJsonSchema;
  if (isArray) {
    obj = {
      code: schemaCode,
      name,
      schemaCode,
      type: JsonSchemaType.ARRAY,
      valueType,
      items: {
        code: 'items',
        name: JsonSchemaTypeName[JsonSchemaType.OBJECT],
        type: JsonSchemaType.OBJECT,
        propertys: schemaToJsonSchemaList(
          schemaCode,
          oList,
          details,
          valueType,
          filterSystem,
        ),
      },
    };
  } else {
    obj = {
      code: schemaCode,
      name,
      schemaCode,
      type: JsonSchemaType.OBJECT,
      propertys: schemaToJsonSchemaList(
        schemaCode,
        oList,
        details,
        valueType,
        filterSystem,
      ),
    };
  }

  return obj;
}
function jsonSchemaDeep(target: IJsonSchema, root = null) {
  const source = { ...target };
  source.valueType = JsonSchemaValueType.DYNAMIC;
  const code = root ? `${root}.${target.code}` : target.code;
  source.value = {
    code,
    name: target.name,
    type: target.type,
    schemaCode: target.schemaCode,
  };
  if (target.type === JsonSchemaType.ARRAY) {
    const itemCode = `${code}.items`;
    source.items = { ...target.items };
    source.items.valueType = JsonSchemaValueType.DYNAMIC;
    source.items.value = {
      code: itemCode,
      name: target.items.name,
      type: target.items.type,
      schemaCode: target.items.schemaCode,
    };
    if (target.items.type === JsonSchemaType.OBJECT) {
      source.items.propertys = [];
      target.items.propertys.forEach((item, index) => {
        source.items.propertys.push(jsonSchemaDeep(item, itemCode));
      });
    }
  } else if (target.type === JsonSchemaType.OBJECT && target.propertys) {
    source.propertys = [];
    target.propertys.forEach((item, index) => {
      source.propertys.push(jsonSchemaDeep(item, code));
    });
  }
  return source;
}
/**
 * 比较新旧两个JsonSchema并且自动赋值
 * @param source
 * @param target
 */
function jsonSchemaCompare(source: IJsonSchema, target: IJsonSchema) {
  if (source.code === target.code && source.type === target.type) {
    source.valueType = target.valueType;
    source.value = target.value;
    source.name = target.name;
    if (source.type === JsonSchemaType.ARRAY) {
      jsonSchemaCompare(source.items, target.items);
    } else if (source.type === JsonSchemaType.OBJECT) {
      source.propertys.forEach((item, index) => {
        let exist = false;
        target.propertys.forEach((tItem) => {
          if (item.code === tItem.code && item.type === tItem.type) {
            jsonSchemaCompare(item, tItem);
            exist = true;
          }
        });
        if (!exist) {
          item.isNew = true;
        }
      });
    }
  } else {
    source.isNew = true;
  }
}
/**
 * jsonSchema转Json
 * @param jsonSchema
 * @param result
 * @returns
 */
function jsonSchemaToJson(jsonSchema: IJsonSchema, result = {}) {
  if (jsonSchema.type === JsonSchemaType.OBJECT) {
    const value = {};
    if (result instanceof Array) {
      result.push(value);
    } else {
      result[jsonSchema.code] = value;
    }
    jsonSchema.propertys.forEach((item) => {
      jsonSchemaToJson(item, value);
    });
  } else if (jsonSchema.type === JsonSchemaType.ARRAY) {
    const value = [];
    if (result instanceof Array) {
      result.push(value);
    } else {
      result[jsonSchema.code] = value;
    }
    jsonSchemaToJson(jsonSchema.items, value);
  } else {
    if (result instanceof Array) {
      result.push(jsonSchema.value);
    } else {
      result[jsonSchema.code] = jsonSchema.value;
    }
  }
  return result;
}
/**
 * 获取数据基础类型
 * @param type
 * @returns
 */
function getSchemaBaseType(type): JsonSchemaType {
  let nType;

  switch (type) {
    case BizPropertyVoPropertyType.NUMBER:
    case BizPropertyVoPropertyType.LOCATION:
    case BizPropertyVoPropertyType.ADDRESS:
    case BizPropertyVoPropertyType.LOGIC:
    case BizPropertyVoPropertyType.STAFF_MULTI_SELECTOR:
    case BizPropertyVoPropertyType.DEPARTMENT_MULTI_SELECTOR:
    case BizPropertyVoPropertyType.STAFF_DEPARTMENT_SELECTOR:
    case BizPropertyVoPropertyType.CORRELATION_FORM:
    case BizPropertyVoPropertyType.CORRELATION_MULTI_FORM:
    case BizPropertyVoPropertyType.CORRELATION_OBJECT:
    case BizPropertyVoPropertyType.SEQUENCE_STATUS:
    case BizPropertyVoPropertyType.SELF_OBJECT:
    case BizPropertyVoPropertyType.RICHTEXT:
      nType = type;
      break;
    case BizPropertyVoPropertyType.DATE:
    case BizPropertyVoPropertyType.CREATED_TIME:
    case BizPropertyVoPropertyType.MODIFIED_TIME:
      nType = JsonSchemaType.DATE;
      break;
    case BizPropertyVoPropertyType.RADIO:
    case BizPropertyVoPropertyType.DROPDOWN:
      nType = JsonSchemaType.OPTIONS;
      break;
    case BizPropertyVoPropertyType.CHECKBOX:
    case BizPropertyVoPropertyType.MULTI_DROPDOWN:
      nType = JsonSchemaType.MULTI_OPTIONS;
      break;
    case BizPropertyVoPropertyType.IMAGE:
    case BizPropertyVoPropertyType.ATTACHMENT:
      nType = JsonSchemaType.FILE;
      break;
    case BizPropertyVoPropertyType.CREATOR:
    case BizPropertyVoPropertyType.MODIFIER:
    case BizPropertyVoPropertyType.OWNER:
    case BizPropertyVoPropertyType.STAFF_SELECTOR:
      nType = JsonSchemaType.STAFF_SELECTOR;
      break;
    case BizPropertyVoPropertyType.DEPARTMENT_SELECTOR:
    case BizPropertyVoPropertyType.CREATOR_DEPARTMENT:
    case BizPropertyVoPropertyType.OWNER_DEPARTMENT:
      nType = JsonSchemaType.DEPARTMENT_SELECTOR;
      break;
    case BizPropertyVoPropertyType.SHEET:
      nType = JsonSchemaType.ARRAY;
      break;
    default:
      nType = JsonSchemaType.TEXT;
      break;
  }
  return nType;
}
/**
 * JsonSchema批量修改valueType
 * @param list
 * @param pId
 * @param details
 * @returns
 */
function JsonSchemaBatchSetValueType(
  jsonSchema: IJsonSchema,
  valueType: JsonSchemaValueType,
) {
  if (jsonSchema.type === JsonSchemaType.OBJECT) {
    jsonSchema.propertys.forEach((item) => {
      JsonSchemaBatchSetValueType(item, valueType);
    });
  } else if (jsonSchema.type === JsonSchemaType.ARRAY) {
    jsonSchema.valueType = valueType;
    JsonSchemaBatchSetValueType(jsonSchema.items, valueType);
  } else {
    jsonSchema.valueType = valueType;
  }
  return jsonSchema;
}

export {
  schemaToJsonSchema,
  getJsonSchemaCompoentOpts,
  JsonSchemaToTreeSelect,
  treeFilter,
  conditionalFormula,
  jsonSchemaDeep,
  jsonSchemaCompare,
  jsonSchemaToJson,
  treeSelectByArrayCode,
  getArraySchemaTree,
  getSchemaBaseType,
  typeCompare,
  JsonSchemaBatchSetValueType,
};
export default {
  schemaToJsonSchema,
  getJsonSchemaCompoentOpts,
  JsonSchemaToTreeSelect,
  treeFilter,
  conditionalFormula,
  jsonSchemaDeep,
  jsonSchemaToJson,
  treeSelectByArrayCode,
  getArraySchemaTree,
  getSchemaBaseType,
  typeCompare,
};
