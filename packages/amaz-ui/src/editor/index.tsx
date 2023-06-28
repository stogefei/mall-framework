import {
  Component, Vue, Model, Watch, Prop,
} from 'vue-property-decorator';
import i18n from '@amaz/i18n';
import { quillEditor, Quill } from 'vue-quill-editor';
import Confirm from '../confirm';
import 'quill/dist/quill.core.css'; // import styles
import 'quill/dist/quill.snow.css'; // for snow theme
import { VNodeData } from 'vue';
import BUpload from '../upload';
import { ImageUtils } from '@amaz/shared-utils';
import { withInstall } from '../_utils';
import ImageResize from 'quill-image-resize-module';
Quill.register('modules/imageResize', ImageResize);

const fontSize = [
  '10px',
  '12px',
  false,
  '14px',
  '16px',
  '18px',
  '20px',
  '24px',
  '28px',
  '32px',
  '36px',
  '48px',
];

Quill.imports['attributors/style/size'].whitelist = fontSize;
Quill.register(Quill.imports['attributors/style/size']);
const prefixCls = 'bb-editor';
@Component({
  name: prefixCls,
  inheritAttrs: false,
  components: {
    QuillEditor: quillEditor,
    BUpload,
  },
})
class BBPropertieEditor extends Vue {
  @Model('input', { default: null }) value: string;

  @Prop({ default: null }) ignore: string[];

  currentValue = null;

  DEFAULT_TOOLBAR = [
    'bold',
    'italic',
    'image',
    'underline',
    { background: [] },
    { color: [] },
    'link',
    { align: ['', 'center', 'right'] },
    { list: 'ordered' },
    { list: 'bullet' },
    {
      size: fontSize,
    },
  ];

  options = {
    modules: {
      toolbar: {
        container: [],
        handlers: {
          image: function image () {
            let nimages = null;
            const range = this.quill.getSelection();

            Confirm.show({
              class: `${prefixCls}-confirm`,
              title: `${i18n.t('genesisUI.uploadImg')}`,
              content: function (ops, h) {
                const props: VNodeData = {
                  props: {
                    type: 'picture',
                    value: nimages,
                    multiple: false,
                    public: true,
                    max: 1,
                    maxSize: 10 * 1024 * 1024,
                    accept:
                      '.webp,.svg,.png,.gif,.jpg,.jpeg,.jfif,.bmp,.dpg,.ico',
                  },
                  on: {
                    input (images) {
                      console.log('input');

                      nimages = images;
                    },
                  },
                };
                return h(BUpload, props);
              },
              onOk: () => {
                if (nimages) {
                  const imgUrl = ImageUtils.getImageUrl(nimages[0].id, false);
                  this.quill.insertEmbed(range.index, 'image', imgUrl);
                  this.quill.setSelection(range.index + 1);
                }
              },
            });
          },
        }, // 事件重写
      },
      imageResize: {
        // 控制图片编辑的，实现功能就是这一段代码
        displayStyles: {
          backgroundColor: 'black',
          border: 'none',
          color: 'white',
        },
        modules: ['Resize', 'DisplaySize', 'Toolbar'],
      },
    },
    placeholder: i18n.t('genesisUI.contentTips'),
  };

  ob: MutationObserver = null;

  @Watch('value', { immediate: true })
  watchValue () {
    this.currentValue = this.value;
  }

  get editorOptions () {
    let toolbar: any[] = [];
    if (this.ignore && this.ignore.length) {
      for (let index = 0; index < this.DEFAULT_TOOLBAR.length; index++) {
        let iKey: any = this.DEFAULT_TOOLBAR[index];
        if (iKey instanceof Object) {
          iKey = Object.keys(iKey)[0];
        }
        if (!this.ignore.includes(iKey)) {
          toolbar.push(this.DEFAULT_TOOLBAR[index]);
        }
      }
    } else {
      toolbar = this.DEFAULT_TOOLBAR;
    }
    this.options.modules.toolbar.container = [toolbar];
    return this.options;
  }

  onEditorChange (e) {
    this.currentValue = e;
    this.$emit('input', e.html);
    this.$emit('change', this.currentValue);
  }

  tooltip: HTMLDivElement = null;

  tooltipHandler () {
    let lastClassName;
    this.tooltip = this.$el.querySelector('.ql-tooltip');
    if (this.tooltip) {
      this.tooltip.classList.add(`${prefixCls}-tooltip`);
      document.body.appendChild(this.tooltip);
      this.ob = new MutationObserver((mutationsList, observer) => {
        for (const mutation of mutationsList) {
          if (
            mutation.type === 'attributes' &&
            this.tooltip.className !== lastClassName &&
            !this.tooltip.classList.contains('ql-hidden')
          ) {
            lastClassName = this.tooltip.className;
            const input = this.tooltip.querySelector('input');
            input.setAttribute('placeholder', 'http://www.url.com');
            const wrapRect = this.$el.getBoundingClientRect();
            const rect = this.tooltip.getBoundingClientRect();
            const top = wrapRect.top + rect.top;
            let left = wrapRect.left + rect.left;
            if (left < 12) {
              left = 12;
            } else if (left + rect.width > document.body.clientWidth - 12) {
              left = document.body.clientWidth - rect.width - 12;
            }
            this.tooltip.style.top = top + 'px';
            this.tooltip.style.left = left + 'px';
          } else if (this.tooltip.className !== lastClassName) {
            lastClassName = this.tooltip.className;
          }
        }
      });
      this.ob.observe(this.tooltip, {
        attributes: true,
        attributeFilter: ['class'],
      });
    }
  }

  mounted () {
    this.tooltipHandler();
  }

  beforeDestroy () {
    if (this.tooltip) {
      document.body.removeChild(this.tooltip);
      this.ob.disconnect();
    }
  }

  render () {
    const props: VNodeData = {
      class: {
        [prefixCls]: true,
      },
      props: {
        ...this.$props,
        options: this.editorOptions,
      },
      attrs: {
        ...this.$attrs,
        value: undefined,
      },
      on: {
        ...this.$listeners,
        change: this.onEditorChange,
      },
    };
    return <quill-editor v-model={this.currentValue} {...props}></quill-editor>;
  }
}
export default withInstall<BBPropertieEditor>(BBPropertieEditor);
