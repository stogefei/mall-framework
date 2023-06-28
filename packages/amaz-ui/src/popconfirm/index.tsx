import {
  Component, Vue, Prop, Model, Watch,
} from 'vue-property-decorator';
import { Popover, Button } from 'ant-design-vue';
import { withInstall } from '../_utils';
import { VNodeData } from 'vue';
import i18n from '@amaz/i18n';
import BIcon from '../icon';
const prefixCls = 'bb-popconfirm';
@Component({
  name: prefixCls,
  inheritAttrs: false,
  components: {
    APopover: Popover,
    AButton: Button,
    BIcon,
  },
})
class BBPopconfirm extends Vue {
  @Model('visible', { default: false }) visible: boolean;

  @Prop() title: string;

  @Prop({ default: undefined }) placement:
    | 'top'
    | 'left'
    | 'right'
    | 'bottom'
    | 'topLeft'
    | 'topRight'
    | 'bottomLeft'
    | 'bottomRight'
    | 'leftTop'
    | 'leftBottom'
    | 'rightTop'
    | 'rightBottom';

  @Prop({ default: 'click' }) trigger:
    | 'hover'
    | 'focus'
    | 'click'
    | 'contextmenu';

  @Prop({ default: false }) disabled: boolean;

  @Prop({ default: null }) overlayClassName: string;

  @Prop({ default: null }) align: any;

  @Prop({ default: () => ['cancel', 'ok'] }) btns: string[]; // 基于scopedSlots

  currentVisible = false;

  @Watch('visible', { immediate: true })
  watchVisible () {
    this.currentVisible = this.visible;
  }

  onCancel (e) {
    this.currentVisible = false;
    this.$emit('cancel', e);
    this.$emit('visible', this.currentVisible);
  }

  onConfirm (e) {
    this.currentVisible = false;
    this.$emit('confirm', e);
    this.$emit('visible', this.currentVisible);
  }

  onVisibleChange (visible) {
    this.$emit('visible', visible);
    this.$emit('visibleChange', visible);
  }

  render () {
    const okBtnTag = () => (
      <a-button size="small" type="primary" onClick={this.onConfirm}>
        {i18n.t('common.ok')}
      </a-button>
    );
    const cancelBtnTag = () => (
      <a-button size="small" onClick={this.onCancel}>
        {i18n.t('common.cancel')}
      </a-button>
    );
    const scopedSlots: any = Object.assign(
      {
        ok: okBtnTag,
        cancel: cancelBtnTag,
      },
      this.$scopedSlots,
    );
    const BtnTags = [];
    this.btns.forEach((key) => {
      if (scopedSlots[key]) {
        BtnTags.push(scopedSlots[key]());
      }
    });
    const props: VNodeData = {
      props: { ...this.$props, title: null, visible: this.currentVisible },
      attrs: { ...this.$attrs },
      on: { ...this.$listeners, visibleChange: this.onVisibleChange },
      scopedSlots: {
        ...this.$scopedSlots,
        content: () => {
          let ContentTag;
          if (this.$scopedSlots.content) {
            ContentTag = this.$scopedSlots.content({ title: this.title });
          } else {
            ContentTag = [
              <b-icon type="question-circle-odefuben" theme="b8" />,
              <p>{this.title}</p>,
            ];
          }
          return (
            <div>
              <div class={`${prefixCls}-content`}>{ContentTag}</div>
              <div class={`${prefixCls}-btns`}>{BtnTags}</div>
            </div>
          ) as any;
        },
      },
    };

    return (
      <a-popover v-model={this.currentVisible} {...props}>
        {this.$slots.default}
      </a-popover>
    );
  }
}
export default withInstall<BBPopconfirm>(BBPopconfirm);
