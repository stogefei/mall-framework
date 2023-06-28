import {
  Component, Prop, Watch, Vue,
} from 'vue-property-decorator';
import Icon from '../icon';

import { withInstall } from '../_utils';
import label from '../label';
import { VNodeData } from 'vue';

const prefixCls = 'bb-panel';
@Component({
  name: prefixCls,
  inheritAttrs: false,
  components: {
    BIcon: Icon,
  },
})
class BBEllipsisPanel extends Vue {
  //  @Model('expand', { default: true }) expand: boolean;

  @Prop({ default: null }) title: string;

  @Prop({ default: true }) defaultExpand: boolean;

  @Prop({ default: 'left' }) titleAlign: 'left' | 'right' | 'center';

  @Prop({ default: 22 }) fontSize: number;

  expand = false;

  isExpand = true;

  ro = null;

  style = {};

  @Watch('defaultExpand', { immediate: true })
  watchAutoExpand () {
    const content = this.$refs.content as HTMLDivElement;

    if (this.defaultExpand !== this.expand && !!content) {
      this.onExpand();
    } else {
      this.expand = this.defaultExpand;
    }
  }

  onExpand () {
    if (this.$listeners.beforeExpand) {
      if (this.$listeners.beforeExpand instanceof Function) {
        const res = this.$listeners.beforeExpand(!this.expand);
        if (res === false) {
          return;
        }
      }
    }
    this.expand = !this.expand;
    const content: HTMLDivElement = this.$refs.content as HTMLDivElement;

    if (this.expand) {
      content.removeAttribute('style');
      const height = content.clientHeight;
      content.style.height = '0px';

      setTimeout(() => {
        content.style.height = `${height}px`;
        content.style.opacity = '1';
        content.style.overflow = 'hidden';
      }, 0);
    } else {
      const height = content.clientHeight;
      content.style.height = `${height}px`;
      content.style.overflow = 'hidden';
      setTimeout(() => {
        content.style.height = '0px';
        content.style.opacity = '0';
      }, 0);
    }
  }

  time = null;

  updated () {
    const content = this.$refs.content as HTMLDivElement;
    if (this.expand) {
      content.classList.add(`${prefixCls}-content--expand`);
      this.$el.classList.add(`${prefixCls}--expand`);
    }
  }

  mounted () {
    const content = this.$refs.content as HTMLDivElement;
    if (this.expand) {
      content.classList.add(`${prefixCls}-content--expand`);
      this.$el.classList.add(`${prefixCls}--expand`);
    } else {
      content.setAttribute('style', 'display:none');
    }
    content.addEventListener(
      'transitionend',
      (e: TransitionEvent) => {
        const target = e.target as HTMLDivElement;
        if (
          e.propertyName === 'height' &&
          target.classList.contains(`${prefixCls}-content`)
        ) {
          if (this.expand) {
            content.removeAttribute('style');
            content.classList.add(`${prefixCls}-content--expand`);
            this.$el.classList.add(`${prefixCls}--expand`);
          } else {
            content.classList.remove(`${prefixCls}-content--expand`);
            this.$el.classList.remove(`${prefixCls}--expand`);
            content.setAttribute('style', 'display:none');
          }

          this.$emit('expand', this.expand);
        }
      },
      false,
    );
  }

  render () {
    let TitleTag;
    const props: VNodeData = {
      style: {
        textAlign: this.titleAlign,
        fontSize: `${this.fontSize}px`,
        order: this.titleAlign === 'right' ? 1 : 0,
      },
    };
    if (this.$scopedSlots.title) {
      TitleTag = this.$scopedSlots.title({
        title: this.title,
        expand: this.expand,
      });
    } else {
      TitleTag = <label {...props}>{this.title}</label>;
    }

    TitleTag = (
      <div
        class={{
          [`${prefixCls}__title`]: true,
          [`${prefixCls}__title--${this.titleAlign}`]: true,
        }}
        onClick={this.onExpand}
      >
        {TitleTag}
        <b-icon
          class={`${prefixCls}__arrow`}
          type="caret-down"
          theme="b8"
          rotate={this.expand ? 0 : this.titleAlign === 'right' ? -90 : 90}
        />
      </div>
    );
    const contentProps = {
      class: {
        [`${prefixCls}-content`]: true,
      },
    };
    return (
      <div
        class={{
          [prefixCls]: true,
        }}
        {...{ on: { ...this.$listeners } }}
      >
        {TitleTag}
        <div ref="content" {...contentProps}>
          {this.$slots.default}
        </div>
      </div>
    );
  }
}

export default withInstall<BBEllipsisPanel>(BBEllipsisPanel);
