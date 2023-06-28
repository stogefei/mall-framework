import { Component, Prop, Vue } from 'vue-property-decorator';
import { Button, message } from 'ant-design-vue';
import { ModalHandler, Icon } from '@amaz/genesis-ui';
import { VNode } from 'vue';
import { IBModelOptions } from '@amaz/genesis-ui/src/modal';
import i18n from '@amaz/i18n';
const prefixCls = 'bb-fixed-confirm';
interface IBFixedComfirmOptions extends IBModelOptions {
  el: HTMLElement;
  title?: string;

  content: string | VNode | (({ validateInited, change }) => VNode);

  width?: number;

  minHeight?: number;

  buttons?: any[];
  onOk?: (data?: any) => void;
  onCancel?: () => void;

  onClose?: () => void;
}

@Component({
  name: prefixCls,
  components: {
    AButton: Button,
    BIcon: Icon,
  },
})
class BBFixedComfirm extends Vue {
  @Prop({ default: null }) el: HTMLElement;

  @Prop({ default: null }) title: string;

  @Prop({ default: null }) content: string | VNode | Function;

  @Prop({ default: 450 }) width: number;

  @Prop({ default: undefined }) minHeight: number;

  validate: Function = null;

  loading = false;

  data = null;

  style = null;

  close () {
    (this.$refs.confirm as any).classList.remove(`${prefixCls}--show`);
    this.$emit('hide');
    this.$emit('close');
  }

  // 检验函数回调
  onValidateInited (validate) {
    this.validate = validate;
  }

  onChange (data) {
    this.data = data;
  }

  onMaskClick (e: Event) {
    e.stopPropagation();
    this.close();
  }

  onCancel () {
    this.$emit('cancel');
    this.close();
  }

  async onConfirm () {
    if (this.validate instanceof Function) {
      this.loading = true;
      const { validate, message: msg, data } = await this.validate();
      if (validate) {
        this.$emit('ok', data);
        this.close();
      } else {
        message.error(msg);
        this.loading = false;
      }
    } else {
      this.close();
      this.$emit('ok', this.data);
    }
  }

  mounted () {
    const targetRect = this.el.getBoundingClientRect();
    const wHeight = document.body.clientHeight;
    const wWdith = document.body.clientWidth;
    let top;
    let left;
    let vDirection;
    let hDirection;
    let transformOrigin;
    if (wHeight - targetRect.top - targetRect.height > wHeight / 2) {
      top = targetRect.top + targetRect.height;
      vDirection = 'bottom';
      transformOrigin = 'center bottom';
    } else {
      top = targetRect.top;
      vDirection = 'top';
      transformOrigin = 'center top';
    }

    if (wWdith - targetRect.left - targetRect.width > wWdith / 2) {
      left = targetRect.left;
      hDirection = 'left';
    } else {
      left = targetRect.left + targetRect.width;
      hDirection = 'right';
    }
    this.style = {
      top: top + 'px',
      left: left + 'px',
      width: this.width + 'px',
      transformOrigin,
    };

    setTimeout(() => {
      (this.$refs.confirm as any).classList.add(
        `${prefixCls}--show`,
        `${vDirection}-${hDirection}`,
      );
    }, 0);
  }

  beforeDestroy () {}

  render (h) {
    /**
     * 判断是否VNode
     */
    let contentTag = null;
    // 判断是否VNode或者tsVue组件
    if (
      this.content &&
      ((this.content as any).component || (this.content as any).context)
    ) {
      contentTag = h(this.content, {
        on: { validateInited: this.onValidateInited },
      });
    } else if (this.content instanceof Function) {
      contentTag = this.content({
        validateInited: this.onValidateInited,
        change: this.onChange,
      });
    } else {
      contentTag = this.content;
    }
    const btnTags = [
      <a-button type="default" onClick={this.onCancel}>
        {i18n.t('common.cancel')}
      </a-button>,
      <a-button type="primary" loading={this.loading} onClick={this.onConfirm}>
        {i18n.t('common.confirm')}
      </a-button>,
    ];

    return (
      <div>
        <div class={`${prefixCls}-mask`} onClick={this.onMaskClick}></div>
        <div ref="confirm" class={prefixCls} style={this.style}>
          <div
            class={`${prefixCls}-body`}
            style={{ minHeight: this.minHeight + 'px' }}
          >
            {contentTag}
          </div>
          <div class={`${prefixCls}-footer`}>{btnTags}</div>
          <div class={`${prefixCls}-arrow`}></div>
        </div>
      </div>
    );
  }
}

export default new ModalHandler<IBFixedComfirmOptions>(BBFixedComfirm);
