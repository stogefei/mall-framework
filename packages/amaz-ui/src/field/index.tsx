import {
  Component,
  Vue,
  Model,
  Prop,
  Watch,
  Inject,
} from 'vue-property-decorator';
import Icon from '../icon';
import { withInstall } from '../_utils';
import {
  Input,
  InputNumber,
  Radio,
  Switch,
  TreeSelect,
  Checkbox,
  Tooltip,
} from 'ant-design-vue';
import Select from '../select';
import CorrelationFormSelect from '../correlation-form-select';

import OrgSelector from '../staff-tree';
import RoleTree from '../role-tree';
import Location from '../location';
import Distpicker from '../distpicker';
import DatePicker from '../date-picker';
import DateRangePicker from '../date-range-picker';
import IconEditor from '../icon-editor';

import Title from '../title';

import { VNodeData } from 'vue';
import { Rules } from '@amaz/shared-utils';
import { Rule } from '@amaz/shared-utils/src/rules';
const prefixCls = 'bb-field';
let id = new Date().getTime();
enum FieldType {
  TEXT = 'text',
  NUMBER = 'number',

  PASSWORD = 'password',

  DATETIMEPICKER = 'datetimepicker',

  DATERANGEPICKER = 'daterangepicker',

  SELECT = 'select',
  ORG = 'org',
  ROLE = 'role',
  TEXTAREA = 'textarea',
  LOCATION = 'location',
  DISTPICKER = 'distpicker',
  RADIO = 'radio',
  CHECKBOX = 'checkbox',
  SWITCH = 'switch',
  TREESELECT = 'tree-select',
  TITLE = 'title',
  CORRELATIONFORM = 'correlation-form',
}

@Component({
  name: prefixCls,
  inheritAttrs: false,
  components: {
    BIcon: Icon,
    BText: Input,
    BNumber: InputNumber,
    BPassword: Input.Password,
    BDatetimepicker: DatePicker,
    BSwitch: Switch,
    BSelect: Select,
    BOrg: OrgSelector,
    BRole: RoleTree,
    BTextarea: Input.TextArea,
    BLocation: Location,
    BDistpicker: Distpicker,
    BRadio: Radio.Group,
    BTreeSelect: TreeSelect,
    BCheckbox: Checkbox.Group,
    ATooltip: Tooltip,
    BTitle: Title,
    BCorrelationForm: CorrelationFormSelect,
    BDaterangepicker: DateRangePicker,
    BIconEditor: IconEditor,
  },
})
class BBField extends Vue {
  @Model('input', { default: undefined }) value: string;

  @Prop({ default: null }) tip: string;

  @Prop({ default: undefined }) id: string;

  @Prop({ default: null }) label: string;

  @Prop({ default: null }) icon: string;

  @Prop({ default: null }) type: FieldType;

  @Prop({ default: true }) displayLabel: boolean;

  @Prop({ default: false }) required: boolean;

  @Prop({ default: false }) vertical: boolean;

  @Prop({ default: undefined }) rules: Rule[];

  @Prop({ default: null }) ruleType: string;

  @Prop({ default: null }) ruleOptions: any | Function;

  @Prop({ default: true }) visible: boolean;

  @Prop({ default: false }) force: boolean;

  errorMessage: any = null;

  @Inject({ default: null }) registerItem: Function;

  @Inject({ default: null }) unregisterItem: Function;

  @Inject({ default: false }) isForce: () => boolean | boolean;

  crruentId = null;

  loaded = false;

  @Watch('id', { immediate: true })
  watchId () {
    if (this.rules && this.rules.length) {
      if (this.crruentId && this.unregisterItem) {
        this.unregisterItem(this.crruentId);
      }
      this.crruentId = this.id || `validate${id++}`;
      const win = window as any;
      win.checkQueue = win.checkQueue || {};
      win.checkQueue[this.crruentId] = this.validate;
      if (this.registerItem) {
        this.registerItem({
          id: this.crruentId,
          type: this.ruleType,
          validate: this.validate,
        });
      }
    }
  }

  @Watch('value', { deep: true, immediate: true })
  watchValue () {
    this.validate();
  }

  async validate (force: boolean = false) {
    if (!this.visible) return;
    let errorMessage;
    let formForce;
    if (this.isForce instanceof Function) {
      formForce = this.isForce();
    } else {
      formForce = !!this.isForce;
    }
    formForce = formForce || this.force;

    if (this.rules && this.rules.length) {
      for (const index in this.rules) {
        const rule = this.rules[index];
        // 如果不是强校验并且不是第一次加载校验并且规则不是deep校验
        if (!formForce && !force && !this.loaded && !rule.deep) {
          continue;
        }
        let options = { ...this.$props, ...this.$attrs };
        if (this.ruleOptions) {
          if (this.ruleOptions instanceof Function) {
            options = this.ruleOptions();
          } else {
            options = this.ruleOptions;
          }
        }
        const res = await Rules.RuleHdandler[rule.type](
          this.value,
          rule as any,
          options,
        );
        if (!res) {
          errorMessage = rule.message;
          if (errorMessage instanceof Function) {
            errorMessage = await errorMessage(this.value, {
              ...this.$props,
              ...this.$attrs,
            });
          }
          break;
        }
      }
    }
    this.loaded = true;

    if (errorMessage) {
      this.errorMessage = errorMessage;
    } else {
      this.errorMessage = null;
    }
    this.$emit('validate', this.errorMessage);
    return this.errorMessage;
  }

  onChange (value: any, ...args) {
    let nValue = value;
    if (value && value.target) {
      nValue = value.target.value;
    }

    this.$emit('input', nValue, ...args);
    this.$emit('change', nValue, ...args);
  }

  destroyed () {
    if (this.unregisterItem && this.crruentId) {
      this.unregisterItem(this.crruentId);
    }
  }

  render () {
    if (!this.visible) return;

    const props: VNodeData = {
      class: {
        [prefixCls]: true,
        [`${prefixCls}--vertical`]: this.vertical,
        [`${prefixCls}--required`]: this.required,
        [`${prefixCls}--error`]: !!this.errorMessage,
      },
    };
    const valueProps: VNodeData = {
      props: {
        ...this.$props,
        checked: this.value,
        title: this.label,
      },
      attrs: { ...this.$attrs },
      on: {
        ...this.$listeners,
        input: () => {},
        change: this.onChange,
      },
      scopedSlots: { ...this.$scopedSlots },
    };

    let ValueTag;
    if (this.type) {
      ValueTag = `b-${this.type}`;
    } else {
      ValueTag = 'div';
    }
    const ContentTag: any = [];
    if (this.label && this.displayLabel) {
      let TipTag;
      if (this.tip) {
        TipTag = (
          <a-tooltip title={this.tip} placement="topLeft">
            <b-icon
              class={`${prefixCls}__tip`}
              type="question-circle-odefuben"
              theme="b8"
            />
          </a-tooltip>
        );
      }
      ContentTag.push(
        <div class={`${prefixCls}__label`}>
          {this.$slots.icon && (
            <div class={`${prefixCls}__icon`}>{this.$slots.icon}</div>
          )}
          <span>{this.label}</span>
          {TipTag}
          {this.$scopedSlots.suffix && (
            <div class={`${prefixCls}__suffix`}>
              {this.$scopedSlots.suffix({})}
            </div>
          )}
        </div>,
      );
    } else if (this.$scopedSlots.label) {
      ContentTag.push(this.$scopedSlots.label(this));
    }
    let ErrorTag;
    if (this.errorMessage) {
      ErrorTag = <div class={`${prefixCls}__error`}>{this.errorMessage}</div>;
    }
    let Tag;
    if (this.$scopedSlots.default) {
      Tag = this.$scopedSlots.default({});
    } else {
      if (ValueTag === 'div') {
        Tag = <div class={`${prefixCls}__text`}>{this.value}</div>;
      } else {
        Tag = <ValueTag {...valueProps} />;
      }
    }
    ContentTag.push(
      <div class={`${prefixCls}__value`}>
        {Tag}
        <transition name="bb-slide-fade">{ErrorTag}</transition>
      </div>,
    );

    return <div {...props}>{ContentTag}</div>;
  }
}

export default withInstall<BBField>(BBField);
