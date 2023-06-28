import { Component, Vue, Prop } from 'vue-property-decorator';
import { Tree } from 'ant-design-vue';
import { CreateElement, VNodeData } from 'vue';
import { withInstall } from '../_utils';
const prefixCls = 'bb-manage-tree';
@Component({
  name: prefixCls,
  components: {
    ATree: Tree,
  },
})
class BBManageTree extends Vue {
  @Prop({ default: () => [] }) selectedKeys!: string[];

  @Prop({ default: () => [] }) treeData!: any[];

  @Prop({ default: 'click' }) expandAction!: string;

  @Prop({ default: true }) showIcon!: boolean;

  @Prop({ default: false }) multiple!: boolean;

  prefixCls: string = prefixCls;

  lastSelectedKey = undefined;

  cachedSelectedKeys: any;

  checkedKeys = this.selectedKeys;

  onSelect (keys, { node }) {
    if (keys.length) {
      this.checkedKeys = keys;
      this.$emit('input', node.dataRef);
      this.$emit('select', node.dataRef);
    }
  }

  /**
  * <b-icon slot="switcherIcon" type="down" />
      <b-icon slot="smile" type="smile-o" />
      <b-icon slot="meh" type="smile-o" />
      <template slot="custom" slot-scope="data">
        <b-icon :type="data.selected ? 'frown' : 'frown-o'" />
      </template>
  */

  render (h: CreateElement) {
    const props: VNodeData = {
      class: {
        [this.prefixCls]: true,
      },
      on: { ...this.$listeners, select: this.onSelect },
      attrs: this.$attrs,
      props: this.$props,
      ref: 'tree',
      scopedSlots: { ...this.$scopedSlots },
    };

    return <a-tree {...props}></a-tree>;
  }
}
export default withInstall<BBManageTree>(BBManageTree);
