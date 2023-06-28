import {
  Component, Vue, Model, Prop, Watch,
} from 'vue-property-decorator';

import { Input, Tooltip } from 'ant-design-vue';
import BIcon from '../icon';
import { withInstall } from '../_utils';
import { Rules } from '@amaz/shared-utils';

const prefixCls = 'bb-title';
@Component({
  name: prefixCls,
  components: {
    BIcon,
    AInput: Input,
    ATooltip: Tooltip,
  },
})
class BBTitle extends Vue {
  @Model('input') value: string;

  @Prop({ default: false }) markBorder?: boolean;

  @Prop({ default: false }) edited: boolean;

  @Prop({ default: true }) displayIcon: boolean;

  @Prop({ default: 'default' }) size: 'default' | 'small';

  @Prop({ default: 'default' }) trigger: 'default' | 'icon';

  @Prop({ default: () => Rules.required }) rules: any[];

  edit = false;

  current = null;

  errorMsg = null;

  init = false;

  @Watch('value', { immediate: true })
  watchValue () {
    this.current = this.value;
  }

  @Watch('edited', { immediate: true })
  watchEdited () {
    this.edit = this.edited;
  }

  showTip = false;

  @Watch('edit', { immediate: true })
  watchEdit () {
    if (this.edit) {
      this.$nextTick(() => {
        const inputEl = (this.$refs.input as any).$el as HTMLInputElement;
        inputEl.selectionStart = 0;
        inputEl.selectionEnd = this.value.length;
        inputEl.focus();
      });
    }
    this.$emit('edited', this.edit);
  }

  async validate () {
    let errorMsg;
    if (this.rules && this.rules.length) {
      for (const index in this.rules) {
        const rule = this.rules[index];
        const res = await Rules.RuleHdandler[rule.type](
          this.current,
          rule as any,
        );
        if (!res) {
          errorMsg = rule.message;
          if (errorMsg instanceof Function) {
            errorMsg = await errorMsg(this.value, {
              ...this.$props,
              ...this.$attrs,
            });
          }
          break;
        }
      }
    }

    this.showTip = !!errorMsg;
    if (errorMsg) {
      this.errorMsg = errorMsg;
    } else {
      this.errorMsg = null;
    }
    this.$emit('validate', this.errorMsg);
    return this.errorMsg;
  }

  onFocus (e: Event, type: string) {
    if (this.trigger === 'default' || type === this.trigger) {
      e.preventDefault();
      e.stopPropagation();
      this.edit = true;
    }
  }

  onBlur () {
    if (!this.errorMsg) {
      if (this.current !== this.value) {
        this.$emit('input', this.current);
        this.$emit('change', this.current);
      }
    } else {
      this.current = this.value;
    }
    this.errorMsg = null;
    this.edit = false;
    this.$emit('blur', this.current);
  }

  onKeyup (e: KeyboardEvent) {
    e.stopPropagation();
    if (e.keyCode === 13) {
      this.onBlur();
    }
  }

  onChange (e: Event) {
    this.current = (e.target as any).value;
    this.validate();
  }

  render () {
    let Tag;
    if (this.edit) {
      Tag = [
        <a-tooltip
          overlayClassName={`${prefixCls}-tip`}
          visible={!!this.errorMsg}
          key="tip"
          title={this.errorMsg}
          destroyTooltipOnHide={true}
        >
          <a-input
            key="input"
            ref="input"
            size={this.size}
            value={this.current}
            onBlur={this.onBlur}
            onChange={this.onChange}
            onKeydown={this.onKeyup}
            onClick={(e: Event) => {
              e.stopPropagation();
            }}
          />
        </a-tooltip>,
      ];
    } else {
      let TitleTag;
      if (this.$scopedSlots.title) {
        TitleTag = this.$scopedSlots.title({});
      } else {
        TitleTag = this.current;
      }
      Tag = [
        <label title={this.current} key="label">
          {TitleTag}
        </label>,
      ];
      Tag.push(
        <b-icon
          key="icon"
          class={`${prefixCls}-icon`}
          type="edit-o"
          theme="b8"
          onClick={(e) => {
            this.onFocus(e, 'icon');
          }}
        />,
      );
    }
    return (
      <div
        class={{
          [prefixCls]: true,
          [`${prefixCls}--edit`]: this.edit,
          [`${prefixCls}--error`]: this.errorMsg,
          [`${prefixCls}--small`]: this.size === 'small',
          [`${prefixCls}--mark`]: this.markBorder && !this.edit,
        }}
        onClick={(e) => {
          this.onFocus(e, 'default');
        }}
      >
        <transition-group tag="div" name="bb-slide">
          {Tag}
        </transition-group>
      </div>
    );
  }
}
export default withInstall<BBTitle>(BBTitle);
