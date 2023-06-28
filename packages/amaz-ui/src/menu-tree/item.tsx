import {
  Component, Prop, Vue, Inject,
} from 'vue-property-decorator';
import Icon from '../icon';
import { VNodeData } from 'vue';
import { IBMenuTreeItem, IBMenuTreeFolderIcon } from '.';
import { DragDirective } from './utlis';

const prefixCls = 'bb-menu-tree-item';
@Component({
  name: prefixCls,
  inheritAttrs: false,
  components: {
    BIcon: Icon,
  },
  directives: {
    DragDirective,
  },
})
export default class BBMenuTreeItem extends Vue {
  @Prop({ default: null }) item: IBMenuTreeItem;

  @Prop({ default: null }) structure: { [key: string]: string };

  @Prop({ default: null }) parent: IBMenuTreeItem;

  @Prop({ default: () => [] }) selectKey: string;

  @Prop({ default: false }) draggable: boolean;

  @Prop({ default: 0 }) index: number;

  @Prop({
    default: () => ({
      expand: 'folder-open-o',
      cutout: 'folder-o',
    }),
  })
  folderIcon: IBMenuTreeFolderIcon;

  @Prop({ default: 1 }) level: number;

  @Prop({ default: null }) expandKeys: string[];

  @Prop({ default: false }) autoExpand: boolean;

  @Inject() onItemSelect: (item: IBMenuTreeItem) => void;

  @Inject() onFolderExpand: (expand: boolean, item: IBMenuTreeItem) => void;

  @Inject() onDragDrop: ({
    oParentKey, itemKey, parentKey, index,
  }) => void;

  get expand () {
    return this.expandKeys.includes(this.item[this.structure.key]);
  }

  get isSelect () {
    return this.selectKey === this.item[this.structure.key];
  }

  onOpen () {
    this.onFolderExpand(true, this.item);
    this.$emit('open', true);
  }

  onSelect () {
    if (this.item[this.structure.disabled] !== true) {
      this.onItemSelect(this.item);
    }
  }

  onExpand () {
    this.onFolderExpand(!this.expand, this.item);
  }

  created () {
    // if (this.isSelect && this.autoExpand) {
    //   this.$emit('open', true);
    // }
  }

  getLabelTag (IconTag, click) {
    let Tag;
    if (this.$scopedSlots.label) {
      Tag = this.$scopedSlots.label({ item: this.item });
    } else {
      Tag = (
        <span class="bb-ellipsis" title={this.item[this.structure.title]}>
          {this.item[this.structure.title]}
        </span>
      );
    }
    const labelProps: VNodeData = {
      key: this.item[this.structure.key],
      class: {
        [`${prefixCls}__label`]: true,
      },
      props: {},
      style: {
        paddingLeft: `${12 * this.level}px`,
      },
      directives: [],
      on: {
        click,
      },
    };
    if (this.draggable && this.item[this.structure.drag] !== false) {
      labelProps.directives.push({
        name: 'drag-directive',
        value: this.onDragDrop,
      });
    }
    return (
      <label {...labelProps}>
        {IconTag}
        {Tag}
      </label>
    );
  }

  render () {
    let Tag;
    if (this.item.folder) {
      const ItemTag = prefixCls;
      const ItemTags = [];
      const children: any[] = this.item[this.structure.children];
      if (children?.length) {
        children.forEach((item, index) => {
          const props: VNodeData = {
            props: {
              item,
              structure: this.structure,
              selectKey: this.selectKey,
              folderIcon: this.folderIcon,
              level: this.level + 1,
              expandKeys: this.expandKeys,
              autoExpand: this.autoExpand,
              parent: this.item,
              draggable: this.draggable,
              index,
            },
            on: {
              ...this.$listeners,
              open: this.onOpen,
            },
            scopedSlots: this.$scopedSlots,
          };
          ItemTags.push(<ItemTag {...props} />);
        });
      }
      const LabelTag = this.getLabelTag(
        <b-icon
          class={`${prefixCls}__icon`}
          type={this.expand ? this.folderIcon.expand : this.folderIcon.cutout}
          theme="b8"
        />,
        this.onExpand,
      );
      let className = `${prefixCls} ${prefixCls}-floder`;
      if (this.item[this.structure.className]) {
        className += ` ${this.item[this.structure.className]}`;
      }
      Tag = (
        <div class={className} data-index={this.index}>
          {LabelTag}
          <div
            class={{
              [`${prefixCls}-list`]: true,
              [`${prefixCls}-list--hide`]: !this.expand,
            }}
          >
            {...ItemTags}
          </div>
        </div>
      );
    } else {
      let IconTag;

      if (this.$scopedSlots.icon) {
        IconTag = (
          <div class={`${prefixCls}__icon`}>
            {this.$scopedSlots.icon({ item: this.item })}
          </div>
        );
      } else if (this.item[this.structure.icon]) {
        IconTag = (
          <b-icon
            class={`${prefixCls}__icon`}
            type={this.item[this.structure.icon]}
            theme="b8"
          />
        );
      }
      const LabelTag = this.getLabelTag(IconTag, () => {
        this.onSelect();
      });
      const classNames = {
        [prefixCls]: true,
        [`${prefixCls}--selected`]: this.isSelect,
        [`${prefixCls}--disabled`]: this.item[this.structure.disabled],
      };
      if (this.item[this.structure.className]) {
        classNames[this.item[this.structure.className]] = true;
      }
      Tag = (
        <div
          key={this.item[this.structure.key]}
          class={classNames}
          data-index={this.index}
        >
          {LabelTag}
        </div>
      );
    }
    return Tag;
  }
}
