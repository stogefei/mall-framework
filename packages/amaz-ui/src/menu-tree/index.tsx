import {
  Component,
  Prop,
  Vue,
  Provide,
  Watch,
  Model,
} from 'vue-property-decorator';
import Icon from '../icon';
import TreeItem from './item';
import { VNodeData } from 'vue';

import { withInstall } from '../_utils';

const DEFAULT_STRUCTURE = {
  title: 'title',
  key: 'key',
  icon: 'icon',
  folder: 'folder',
  children: 'children',
  disabled: 'disabled',
  className: 'className',
  drag: 'drag',
};

export interface IBMenuTreeFolderIcon {
  /**
   * 展开
   */
  expand: string;

  /**
   * 收起
   */
  cutout: string;
}

export interface IBMenuTreeItem {
  /**
   * 节点标题
   */
  title: string;
  /**
   * 节点key
   */
  key: string;
  /**
   * 节点Icon
   */
  icon?: string;
  /**
   * 是否是文件夹
   */
  folder?: boolean;
  /**
   * 子集
   */
  children?: IBMenuTreeItem[];
  /**
   * 是否能交互
   */
  disabled?: boolean;
  /**
   * 样式类
   */
  className?: string;
  /**
   * 是否能拖动
   */
  drag?: boolean;
  /**
   * 自定义扩展属性
   */

  [key: string]: any;
}
export interface IBMenuTreeStructure {
  key: string;
  title: string;
  flot;
}

const prefixCls = 'bb-menu-tree';
@Component({
  name: prefixCls,
  inheritAttrs: false,
  components: {
    BIcon: Icon,
    BTreeItem: TreeItem,
  },
})
class BBMenuTree extends Vue {
  /**
   * 源数据
   */
  @Prop({ default: () => [] }) source: IBMenuTreeItem[];
  /**
   * 选中的key
   */

  @Model('change', { default: null }) selectKey: string;

  @Prop({ default: null }) expandKeys: string[];

  @Prop({ default: true }) autoExpand: boolean;

  @Prop({ default: false }) draggable: boolean;

  @Prop({ default: 'dark' }) theme: 'dark' | 'white';

  @Prop({ default: null }) structure: { [key: string]: string };

  /**
   * 文件夹类型图标
   */

  @Prop({
    default: () => ({
      expand: 'folder-open-o',
      cutout: 'folder-o',
    }),
  })
  folderIcon: IBMenuTreeFolderIcon;

  level = 1;

  currentExpandKeys = [];

  currentSelectKey = null;

  currentStructure = DEFAULT_STRUCTURE;

  @Watch('structure', { immediate: true, deep: true })
  watchStructure () {
    this.currentStructure = Object.assign(
      {},
      DEFAULT_STRUCTURE,
      this.structure,
    );
  }

  @Watch('selectKey', { immediate: true })
  watchSelectKey () {
    this.currentSelectKey = this.selectKey;
  }

  @Watch('expandKeys', { immediate: true, deep: true })
  watchExpandKeys () {
    // 每次进来都做一次去重
    if (this.expandKeys) {
      this.currentExpandKeys = Array.from(new Set(this.expandKeys));
    } else {
      this.currentExpandKeys = [];
    }
  }

  @Provide()
  onItemSelect (item: IBMenuTreeItem) {
    if (item[this.currentStructure.key] !== this.currentSelectKey) {
      this.$emit('select', item[this.currentStructure.key], item);
      this.$emit('change', item[this.currentStructure.key], item);
    }
  }

  @Provide()
  onFolderExpand (expand: boolean, item: IBMenuTreeItem) {
    if (expand) {
      this.currentExpandKeys.push(item[this.currentStructure.key]);
    } else {
      const index = this.currentExpandKeys.findIndex(
        (key) => key === item[this.currentStructure.key],
      );
      this.currentExpandKeys.splice(index, 1);
    }
    this.$emit('expand', this.currentExpandKeys);
  }

  @Provide()
  onDragDrop ({
    oParentKey, itemKey, parentKey, index,
  }) {
    let nIndex = index;
    const [item, oParent, parent] = this.findItems([
      itemKey,
      oParentKey,
      parentKey,
    ]);
    let oChildren;
    if (oParent && oParent[this.currentStructure.children]) {
      oChildren = oParent[this.currentStructure.children];
    } else {
      oChildren = this.source;
    }
    let children;
    if (parent && parent[this.currentStructure.children]) {
      children = parent[this.currentStructure.children];
    } else {
      children = this.source;
    }
    const idx = oChildren.indexOf(item);
    if (oParentKey === parentKey) {
      // 如果在当前组排序，那么就需要做一下处理
      if (nIndex > idx) {
        nIndex -= 1;
      }
      // 如果新旧父节点一样，并且排序一样就不处理
      if (nIndex === idx) {
        return;
      }
    }
    oChildren.splice(idx, 1);
    children.splice(nIndex, 0, item);
    this.$emit('dragend', {
      item,
      oParent,
      parent,
      oIndex: idx,
      index: nIndex,
    });
  }

  findItems (arr: any[], source = this.source): IBMenuTreeItem[] {
    source.forEach((item, index) => {
      let idx = 0;
      while (idx > -1) {
        idx = arr.indexOf(item[this.currentStructure.key]);
        if (idx > -1) {
          arr[idx] = item;
        }
      }
      if (
        item[this.currentStructure.children] &&
        item[this.currentStructure.children].length
      ) {
        // eslint-disable-next-line no-param-reassign
        arr = this.findItems(arr, item[this.currentStructure.children]);
      }
    });
    return arr;
  }

  fin;

  render () {
    const Tags = [];
    this.source.forEach((item, index) => {
      const props: VNodeData = {
        props: {
          item,
          selectKey: this.selectKey,
          structure: this.currentStructure,
          folderIcon: this.folderIcon,
          level: this.level,
          expandKeys: this.currentExpandKeys,
          autoExpand: this.autoExpand,
          draggable: this.draggable,
          index: index,
        },
        scopedSlots: this.$scopedSlots,
      };
      Tags.push(<b-tree-item {...props} />);
    });
    return (
      <div
        class={{
          [prefixCls]: true,
          [`${prefixCls}--dark`]: this.theme === 'dark',
        }}
      >
        {...Tags}
      </div>
    );
  }
}

export default withInstall<BBMenuTree>(BBMenuTree);
