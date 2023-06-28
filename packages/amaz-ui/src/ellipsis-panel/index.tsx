import {
  Component, Prop, Watch, Vue,
} from 'vue-property-decorator';
import Icon from '../icon';
import { Tooltip } from 'ant-design-vue';
import i18n from '@amaz/i18n';
import ResizeObserver from 'resize-observer-polyfill';

import { withInstall } from '../_utils';

const prefixCls = 'bb-ellipsis-panel';
@Component({
  name: prefixCls,
  inheritAttrs: true,
  components: {
    BIcon: Icon,
    ATooltip: Tooltip,
  },
})
class BBEllipsisPanel extends Vue {
  @Prop({ default: 0 }) height: number;

  @Prop({ default: false }) autoExpand: boolean;

  @Prop({ default: false }) border: boolean;

  expand = false;

  text = null;

  isExpand = true;

  ro = null;

  style = {};

  @Watch('autoExpand', { immediate: true })
  watchAutoExpand () {
    // console.log(this.autoExpand);
    this.expand = this.autoExpand;
    this.text = this.getIcon();
  }

  @Watch('height', { immediate: true })
  watchHeight () {
    this.style = { height: `${this.height}px` };
  }

  getIcon () {
    let IconTag;
    if (this.expand) {
      IconTag = <b-icon type="double-left" rotate={90} />;
    } else {
      IconTag = <b-icon type="double-right" rotate={90} />;
    }
    return (
      <a-tooltip
        title={
          this.expand
            ? i18n.t('genesisUI.collapse')
            : i18n.t('genesisUI.expand')
        }
      >
        {IconTag}
      </a-tooltip>
    );
  }

  onExpand () {
    this.expand = !this.expand;
    this.text = this.getIcon();
    this.$emit('expand', this.expand);
    if (this.expand) {
      const content = this.$refs.content as HTMLDivElement;
      this.$set(this.style, 'height', content.clientHeight + 'px');
    } else {
      this.$set(this.style, 'height', this.height + 'px');
    }
  }

  mounted () {
    this.ro = new ResizeObserver((entries, observer) => {
      const content = this.$refs.content as HTMLDivElement;
      if (this.height && content.clientHeight > this.height) {
        this.isExpand = true;
      } else {
        this.isExpand = false;
      }
    });

    this.ro.observe(this.$el);
  }

  destroyed () {
    this.ro.disconnect();
  }

  render () {
    let optTag;
    if (this.isExpand) {
      optTag = (
        <span class={`${prefixCls}__btn`} onClick={this.onExpand}>
          {this.text}
        </span>
      );
    }

    const nClass = {
      [prefixCls]: true,
      [`${prefixCls}-expand`]: this.expand,
      [`${prefixCls}-border`]: this.border,
    };
    return (
      <div class={nClass} style={this.isExpand && this.style}>
        <div ref="content" class={`${prefixCls}-content`}>
          {this.$slots.default}
        </div>
        {optTag}
      </div>
    );
  }
}

export default withInstall<BBEllipsisPanel>(BBEllipsisPanel);
