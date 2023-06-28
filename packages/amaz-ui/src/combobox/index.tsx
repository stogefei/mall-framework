import {
  defineComponent, ExtractPropTypes, Transition, watchEffect,
} from 'vue';
import { CloseCircleOutlined } from '@ant-design/icons-vue';
import { Dom } from '@amaz/utils';
import { withInstall } from '../_utils';
import { debounce } from 'lodash-es';
// import ResizeObserver from 'resize-observer-polyfill';
const prefixCls = 'bb-combobox';
export const ComboboxProps = () => ({
  visible: Boolean,
  value: String,
  clearIcon: Boolean,
  placeholder: String,
  size: { default: 'large' || 'default' || 'small', type: String },
  trigger: { default: 'click' || 'hover', type: String },
  getPopupContainer: { default: undefined, type: HTMLElement },
  popupClassName: { default: undefined, type: String },
  disabled: { default: false, type: Boolean },
  placement: { default: 'auto', type: String },
  distance: { default: 0, type: Number },
  arrow: { default: false, type: Boolean },
  autoClose: { default: true, type: Boolean },
});
const component = {
  name: prefixCls,
  inheritAttrs: false,
  components: {
    CloseCircleOutlined: CloseCircleOutlined,
    Transition,
  },
  props: ComboboxProps(),

  data () {
    return {
      isHover: false,
      currentStatus: false,
      visibleStatus: false,
      contentStyle: null,
      debounceClosePopup: null,
      currentPopupClassName: null,
      popupContainer: null,
      ro: null,
    };
  },

  computed: {
    iconProps () {
      if (this.value && this.isHover && this.clearIcon) {
        return {
          class: {
            'ant-input-clear-icon': true,
          },

          props: {
            theme: 'filled',
            type: 'close-circle',
          },
        };
      }
      return {
        props: {
          rotate: this.currentStatus ? 180 : 0,
          type: 'caret-down',
        },
      };
    },
    showClear () {
      if (this.value && this.isHover && this.clearIcon) {
        return true;
      }
      return false;
    },
  },

  methods: {
    click (e) {
      if (this.disabled || this.trigger === 'hover') return;
      this.currentStatus = !this.currentStatus;
      this.$emit('popupVisibleChange', this.currentStatus);
      this.$emit('change', this.currentStatus);
      this.$emit('visible', this.currentStatus);
      this.$emit('click', e);
    },

    iconClear (e: Event) {
      e.stopPropagation();
      e.preventDefault();
      if (this.value && this.clearIcon) {
        this.$emit('clear');
      } else {
        this.click(e);
      }
    },

    popupHover (e: MouseEvent) {
      this.isHover = e.type !== 'mouseout';
      if (this.isHover === false && this.autoClose) {
        let dom;
        const relatedTarget:any = e.relatedTarget;
        if (relatedTarget) {
          dom = Dom.closest(
            relatedTarget,
            `.${prefixCls}__popup`,
          );
        }
        if (!dom) {
          this.debounceClosePopup();
        }
      }
    },

    selectionHover (e: Event) {
      this.isHover = e.type !== 'mouseout';
      if (this.trigger === 'click') return;
      if (this.isHover && this.currentStatus === false) {
        this.currentStatus = true;
        this.$emit('popupVisibleChange', this.currentStatus);
        this.$emit('change', this.currentStatus);
        this.$emit('visible', this.currentStatus);
      } else {
        this.debounceClosePopup();
      }
    },

    closePopup () {
      if (this.isHover === false && this.currentStatus === true) {
        this.currentStatus = false;
        this.$emit('popupVisibleChange', this.isHover);
        this.$emit('change', this.currentStatus);
        this.$emit('visible', this.currentStatus);
      }
    },

    setPopupStyle () {
      if (this.$el) {
        const rect = this.$el.getBoundingClientRect();
        const popup:HTMLDivElement = this.$refs.popup;
        const offsetParent = popup.offsetParent;
        const offsetParentRect = offsetParent.getBoundingClientRect();
        const offsetTop = rect.top - offsetParentRect.top;
        const offsetLeft = rect.left - offsetParentRect.left;

        const popupRect = popup.getBoundingClientRect();
        let verticalDistance = 0;
        let horizontalDistance = 0;
        if (typeof this.distance === 'number') {
          verticalDistance = horizontalDistance = this.distance;
        } else {
          verticalDistance = this.distance[0];
          horizontalDistance = this.distance[1];
        }
        let top;
        let left;
        let transformOrigin;
        let vertical;
        let horizontal;

        if (document.body.offsetHeight / 2 > offsetTop) {
          top = offsetTop + rect.height + 2 + verticalDistance;
          if (this.arrow) {
            top += 6;
          }
          transformOrigin = 'center top';
          vertical = 'bottom';
        } else {
          top = offsetTop - popupRect.height / 0.8 - 2 - verticalDistance;
          transformOrigin = 'center bottom';
          vertical = 'top';
          if (this.arrow) {
            top -= 6;
          }
        }

        if (this.placement === 'center') {
          left = offsetLeft + rect.width / 2 - popupRect.width / 2;
          horizontal = 'center';
        } else {
          if (document.body.offsetWidth / 2 > offsetLeft) {
            left = offsetLeft - horizontalDistance;
            horizontal = 'left';
          } else {
            left = offsetLeft + rect.width - popupRect.width + horizontalDistance;
            horizontal = 'right';
          }
        }

        this.contentStyle = {
          top: `${top}px`,
          left: `${left}px`,
          transformOrigin,
        };
        this.currentPopupClassName = `${vertical}-${horizontal}`;
      }
    },

    bodyClick (e: any) {
      const popup = Dom.closest(e.target, `.${prefixCls}__popup`);
      const combobox = Dom.closest(e.target, `.${prefixCls}`);
      if (popup !== this.$refs.popup && combobox !== this.$el) {
        this.currentStatus = false;
        this.$emit('change', this.currentStatus);
        this.$emit('visible', this.currentStatus);
      }
    },

  },

  mounted () {
    this.debounceClosePopup = debounce(this.closePopup, 200);
    document.body.addEventListener('click', this.bodyClick, false);
  },

  beforeDestroy () {
    if (this.ro) {
      this.ro.disconnect();
    }
    document.body.removeEventListener('click', this.bodyClick, false);
    if (this.$refs.popup) {
      this.popupContainer.removeChild(this.$refs.popup);
    }
  },
  watch: {
    currentStatus: {
      handler () {
        if (this.ro) this.ro.disconnect();
        if (this.currentStatus) {
          this.$nextTick(() => {
            if (this.getPopupContainer instanceof Function) {
              this.popupContainer = this.getPopupContainer();
            } else if (this.getPopupContainer === true) {
              this.popupContainer = this.$el;
            } else {
              this.popupContainer = document.body;
            }
            this.popupContainer.appendChild(this.$refs.popup);
            this.ro = new ResizeObserver(() => {
              this.setPopupStyle();
            });
            this.ro.observe(this.$refs.popup);
          });
        } else {
          this.debounceClosePopup && this.debounceClosePopup();
        }
      },
      deep: true,
    },
  },
  setup (props) {
    watchEffect(() => {
      if (!props.visible) {
        this.isHover = false;
        this.debounceClosePopup && this.debounceClosePopup.cancel();
      }
    });
  },

  render () {
    let label;
    if (this.placeholder && !this.value) {
      label = <div class={`${prefixCls}__placeholder`}>{this.placeholder}</div>;
    } else {
      label = <div class={`${prefixCls}__label`}>{this.value}</div>;
    }
    let comboboxLabelTag;
    if (this.$slots.combobox) {
      comboboxLabelTag = this.$slots.combobox({
        status: this.currentStatus,
      });
    } else {
      let labelTag;
      if (this.$slots && this.$slots.label) {
        labelTag = this.$slots.label();
      } else {
        labelTag = <div class={`${prefixCls}__label-wrap`}>{label}</div>;
      }
      comboboxLabelTag = (
        <div
          class={{
            [`${prefixCls}__selection`]: true,
          }}
        >
          {labelTag}
          <span class="ant-select-arrow">
            {
              this.showClear ? <close-circle-outlined onClick={this.iconClear} /> : null
            }
            {/* <b-icon {...this.iconProps} onClick={this.iconClear} /> */}
          </span>
        </div>
      );
    }
    const comboboxTag = <div
      class={{
        [`${prefixCls}__selection-wrap`]: true,
      }}
      onClick={this.click}
      onMouseover={this.selectionHover}
      onMouseout={this.selectionHover}
    >
      {comboboxLabelTag}
    </div>;
    return (
      <div
        ref="combobox"
        class={{
          [prefixCls]: true,
          [`${prefixCls}-sm`]: this.size === 'small',
          [`${prefixCls}-disabled`]: this.disabled,
        }}
      >
        {comboboxTag}
        <Transition name="popup-slide-fade">
          {this.currentStatus && (
            <div
              ref="popup"
              style={this.contentStyle}
              class={{
                [`${prefixCls}__popup`]: true,
                [this.currentPopupClassName]: this.arrow,
                [this.popupClassName]: !!this.popupClassName,
              }}
              onMouseover={this.popupHover}
              onMouseout={this.popupHover}
            >
              {this.$slots && this.$slots.default()}
            </div>
          )}
        </Transition>
      </div>
    );
  },
};

// eslint-disable-next-line no-undef
export type BBComboboxProps = Partial<ExtractPropTypes<ReturnType<typeof ComboboxProps>>>;
const BBCombobox = defineComponent(component);
export default withInstall(defineComponent(BBCombobox));
