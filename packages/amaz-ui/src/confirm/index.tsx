import Icon, { Modal, Button, message } from 'ant-design-vue';
import ModalHandler, { IBModelOptions } from '../modal';
import { defineComponent, VNode, h } from 'vue';

const prefixCls = 'bb-confirm';

interface IBConfirmOptions extends IBModelOptions {
  title?: string;
  content:
    | string
    | VNode;
  width?: number;
  minHeight?: number;
  buttons?: any[];
  onOk?: (data?: any) => void;
  onCancel?: () => void;
}

const BBMapModal = {
  name: prefixCls,
  components: {
    AModal: Modal,
    AButton: Button,
    AIcon: Icon,
  },
  props: {
    title: { default: '标题', type: String },
    content: { default: null, type: String || Function },
    width: { default: 400, type: Number },
    minHeight: { default: 100, type: Number },
    buttons: { default: [], type: Array },
    destroyOnClose: { default: true, type: Boolean },
  },
  data () {
    return {
      visible: true,
      validate: null,
      errorMessage: null,
      loading: false,
      data: null,
    };
  },
  watch: {
    validate: {
      handler () {
        if (!this.validate) {
          this.$emit('hide');
        }
      },
      deep: true,
    },
  },
  methods: {
    cancel () {
      console.log('hide');
      this.visible = false;
      this.$emit('cancel');
      this.$emit('hide');
      this.$emit('hideModal');
    },

    async confirm () {
      console.log('confirm');
      if (this.validate instanceof Function) {
        this.loading = true;
        const { validate, message: msg, data } = await this.validate();
        if (validate) {
          this.visible = false;
          this.$emit('ok', data);
          this.$emit('hide');
        } else {
          message.error(msg);
          this.loading = false;
        }
      } else {
        this.visible = false;
        this.$emit('ok', this.data);
        this.$emit('hide');
      }
    },

    // 检验函数回调
    validateInited (validate) {
      this.validate = validate;
    },

    change (data) {
      this.data = data;
    },
  },
  render () {
    const props = {
      key: 'confirm',
      visible: this.visible,
      destroyOnClose: this.destroyOnClose,
      bodyStyle: { padding: 0 },
      closable: false,
      footer: null,
      style: {
        width: this.width,
      },
      ...this.$props,
      ...this.$attrs,
    };
    /**
     * 判断是否VNode
     */
    let contentTag = null;
    // 判断是否VNode或者tsVue组件
    if (
      this.content &&
      (this.content.component || this.content.context)
    ) {
      contentTag = h(this.content, {
        on: { validateInited: this.validateInited },
      });
    } else if (this.content instanceof Function) {
      contentTag = this.content(
        {
          validateInited: this.validateInited,
          change: this.change,
        },
        h,
      );
    } else {
      contentTag = this.content;
    }
    const btnTags = [];
    if (this.buttons.length) {
      this.buttons.forEach((btn) => {
        if (btn.btnType === 'cancel') {
          btn.onClick = this.cancel;
        } else if (btn.btnType === 'confirm') {
          btn.onClick = this.confirm;
        } else if (btn.onClick instanceof Function) {
          btn.onClick = btn.onClick.bind(this);
        }
        btnTags.push(
          <a-button type={btn.type} onClick={btn.onClick}>
            {btn.name}
          </a-button>,
        );
      });
    } else {
      btnTags.push(
        <a-button type="default" onClick={this.cancel}>
          取消
        </a-button>,
        <a-button type="primary" loading={this.loading} onClick={this.confirm}>
         确认
        </a-button>,
      );
    }
    return (
      <a-modal {...props}>
        <div
          class={`${prefixCls}__content`}
          style={{ minHeight: this.minHeight + 'px' }}
        >
          {contentTag}
        </div>
        <div class={`${prefixCls}__footer`}>{btnTags}</div>
      </a-modal>
    );
  },
};

export default new ModalHandler<IBConfirmOptions>(defineComponent(BBMapModal));
