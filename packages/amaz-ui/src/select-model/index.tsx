import {
  Component, Prop, Vue, Watch, Model,
} from 'vue-property-decorator';
import { Button, TreeSelect, Icon } from 'ant-design-vue';
import { cloneDeep } from 'lodash-es';
import { withInstall } from '../_utils';
import './style/index';
// import treeTestData from './tree.json';
import i18n from '@amaz/i18n';
import { getTreeList } from './utils';
const prefixCls = 'bb-select-model';
@Component({
  name: prefixCls,
  inheritAttrs: false,
  components: {
    AButton: Button,
    AIcon: Icon,
    ATreeSelect: TreeSelect,
  },
})
class BBSelectModel extends Vue {
  @Model('input') value!: any;

  @Prop() defaultValue!: any;

  @Prop() portal!: boolean;

  @Prop() checkAble!: boolean;

  @Prop() publish!: boolean;

  @Prop() openType!: number; // 1 新增 2 编辑 3 新增关联列表下数据项 4 编辑关联列表下数据项

  @Prop() schemaCode!: string; // 当前模型编码 禁用当前模型选择

  @Prop() mode!: string; // 是否关联表单 关联表单不禁用当前模型 appSelect应用选择

  @Prop() placeholder!: string;

  @Prop({ default: '' }) searchPlaceholder!: string;

  @Prop({ default: true }) labelInValue: boolean;

  @Prop({ default: 'MODEL' }) selectType: string; // 模型选择还是流程 MODEL WORKFLOW

  @Prop({ default: false }) multiple: boolean;

  @Prop({ default: false }) disabled: boolean;

  @Prop({ default: () => null }) getPopupContainer!: Function;

  @Prop({ default: true }) dropdownMatchSelectWidth: boolean;

  @Prop({ default: () => [] }) filters: any[]; // 过滤树结构

  treeValue: any = null;

  treeModelData: any = [];

  treeDefaultExpandedKeys: any = [];

  mounted () {
    this.$nextTick(() => {
      this.getAppModelTree();
    });
  }

  get treeData () {
    return this.treeModelData;
    // return this.treeMap(treeTestData);
  }

  set treeData (val) {}

  get searchPlaceholderText () {
    return this.searchPlaceholder || i18n.t('genesisUI.searchName');
  }

  get placeholderText () {
    if (this.selectType === 'MODEL') {
      return this.placeholder || i18n.t('genesisUI.selectModel');
    }
    return this.placeholder || i18n.t('genesisUI.selectProcess');
  }

  get setDisabled () {
    if (this.publish) {
      if (this.openType === 2 || this.openType === 4) {
        return !!this.value;
      } else {
        return false;
      }
    } else {
      return this.disabled;
    }
  }

  onLoadData (treeNode: any) {
    return new Promise((resolve) => {
      if (treeNode.dataRef.children) {
        // 有值了直接渲染
        resolve(null);
      } else {
        resolve([]);
      }
    });
  }

  // 获取模型
  async getAppModelTree () {
    this.treeModelData = [];
    this.treeDefaultExpandedKeys = [];
    const mode: string = this.selectType;
    getTreeList(mode, this.portal, (list) => {
      let data: any = [];
      if (this.defaultValue) {
        data = [this.defaultValue, ...list];
      } else {
        data = list;
      }
      // 过滤树
      if (this.filters && this.filters.length > 0) {
        const filterTree = this.treeFilter(data, (node) => {
          return this.filters.includes(node.code);
        });
        this.treeModelData = this.treeMap(filterTree);
      } else {
        this.treeModelData = this.treeMap(data);
      }
    });
  }

  treeMap (treeData: any) {
    if (treeData && treeData.length > 0) {
      const copyTreeData = cloneDeep(treeData);
      return copyTreeData.map((item: any) => {
        if (item.children && item.children.length) {
          return this.convert(item, item.funType);
        } else {
          // 第一级返回的是app
          let disabled: boolean;
          let selectable: boolean;
          if (item.funType === 'APP') {
            disabled = false;
            selectable = false;
          } else {
            selectable = item.funType === this.selectType;
            // 关联表单不禁用当前模型
            if (this.mode === 'relationForm') {
              if (item.funType === 'MODEL') {
                disabled = false;
              } else {
                disabled = !item.children;
              }
            } else if (this.mode === 'appSelect') {
              selectable = false;
              disabled = true;
            } else {
              if (item.funType === 'MODEL') {
                // 禁用当前模型
                disabled = item.code === this.schemaCode;
              } else {
                disabled = !item.children;
              }
            }
          }
          return {
            title: item.name,
            id: item.id,
            code: item.code || item.id,
            key: item.id,
            value:
              item.funType === this.selectType ? item.code || item.id : item.id, // 模型下取code 文件目录取id
            type: item.funType,
            isLeaf: item.funType === this.selectType || !item.children,
            disabled: disabled,
            selectable: selectable,
            parentId: item.parentId,
            children: null,
            scopedSlots: {
              title: 'title',
            },
          };
        }
      });
    }
    return [];
  }

  //  过滤树结构
  treeFilter (tree, func) {
    return tree
      .map((node) => ({ ...node }))
      .filter((node) => {
        node.children = node.children && this.treeFilter(node.children, func);
        return func(node) || (node.children && node.children.length);
      });
  }

  convert (item: any, type?: string) {
    let children: any = null;
    if (item.children && item.children.length > 0) {
      children = item.children.map((inner: any) =>
        this.convert(inner, inner.funType),
      );
    }
    let disabled: boolean;
    let selectable: boolean;
    selectable = item.funType === this.selectType;
    // 关联表单不禁用当前模型
    if (this.mode === 'relationForm') {
      if (type === 'MODEL') {
        disabled = false;
      } else {
        disabled = !item.children;
      }
    } else if (this.mode === 'appSelect') {
      selectable = item.funType === 'APP';
      disabled = true;
    } else {
      if (type === 'MODEL') {
        if (this.selectType === 'WORKFLOW') {
          // 流程模式下禁用无子集的模型
          disabled = !item.children;
        } else {
          disabled = item.code === this.schemaCode;
        }
      } else if (type === 'WORKFLOW') {
        disabled = false;
      } else {
        disabled = !item.children;
      }
    }
    let isLeaf = false;
    if (this.selectType === 'MODEL') {
      isLeaf = item.funType === 'MODEL' || !item.children;
    } else if (this.selectType === 'WORKFLOW') {
      isLeaf = !item.children;
    }
    return {
      title: item.name,
      code: item.code,
      id: item.id,
      key: item.id, // 模型下取code 文件目录取id
      value: type === this.selectType ? item.code || item.id : item.id, // 模型下取code 文件目录取id
      isLeaf: isLeaf,
      // 模型下禁用文件夹和当前模型
      disabled: disabled,
      selectable: selectable,
      type: item.funType,
      parentId: item.parentId,
      children,
      scopedSlots: {
        title: 'title',
      },
    };
  }

  // 选择业务模型
  selectBusModel (item: any, label: any, extra: any) {
    if (item) {
      let value;
      if (this.labelInValue) {
        value = {
          value: extra.triggerNode.dataRef.code,
          label: extra.triggerNode.dataRef.title,
        };
      } else {
        value = item;
      }
      this.$emit('select', value, label, extra);
      this.$emit('input', value, label, extra);
    } else {
      this.$emit('select', null);
      this.$emit('input', null);
    }
  }

  searchTree (value: any) {
    this.deepChild = [];
  }

  deepChild = [];

  /*
   * 如果搜到父级 则要展示下面所有子集
   * */
  filterTreeNodes (value, data) {
    // console.log(data, 'data---');
    const hasTitle: boolean =
      data.title.toLocaleLowerCase().indexOf(value.toLocaleLowerCase()) > -1;
    // 搜索到父级则记录下面所有子集
    if (!data.isLeaf && hasTitle) {
      this.lookForAllId(data.dataRef.children || [], (node) => {
        this.deepChild.push(node.id);
      });
    }
    // 返回当前父级下面的所有子集
    const hasDeepChild: boolean = this.deepChild.includes(data.id);
    return hasTitle || hasDeepChild;
  }

  filterTree (inputValue: string, treeNode) {
    return this.filterTreeNodes(inputValue, treeNode.data.props);
  }

  lookForAllId (tree = [], func) {
    tree.forEach((data) => {
      data.children && this.lookForAllId(data.children, func); // 遍历子树
      func(data);
    });
  }

  @Watch('value', { immediate: true })
  onValueChange (value: any) {
    this.treeValue = value || undefined;
  }

  render () {
    return (
      <div class={prefixCls}>
        <a-tree-select
          v-model={this.treeValue}
          dropdownClassName={`${prefixCls}-dropdown`}
          treeData={this.treeData}
          treeNodeFilterProp="title"
          filterTreeNode={this.filterTree}
          disabled={this.setDisabled}
          multiple={this.multiple}
          searchPlaceholder={this.searchPlaceholderText}
          treeCheckable={this.checkAble}
          showSearch={true}
          getPopupContainer={this.getPopupContainer}
          dropdownMatchSelectWidth={this.dropdownMatchSelectWidth}
          placeholder={this.placeholderText}
          allowClear={true}
          notFoundContent={i18n.t('genesisUI.empty')}
          labelInValue={this.labelInValue}
          loadData={this.onLoadData}
          onChange={this.selectBusModel}
          onSearch={this.searchTree}
        />
      </div>
    );
  }
}
export default withInstall<BBSelectModel>(BBSelectModel);
