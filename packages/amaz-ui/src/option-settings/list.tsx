import {
  Component, Vue, Model, Watch, Prop,
} from 'vue-property-decorator';
import { CustomOption } from '@amaz/api';
import BDraggable from 'vuedraggable';
import { Input, Button, message } from 'ant-design-vue';
import i18n from '@amaz/i18n';
import { Rules } from '@amaz/shared-utils';
import { Generator } from '@amaz/utils';
import { uniqBy } from 'lodash-es';
import BIcon from '../icon';
import BField from '../field';
import BOptionSettingsBatch from './batch';
const prefixCls = 'bb-prop-opt-settings-list';
@Component({
  name: prefixCls,
  inheritAttrs: false,
  components: {
    BDraggable,
    AInput: Input,
    BIcon,
    BField,
    AButton: Button,
    BOptionSettingsBatch,
  },
})
export default class BBPropertyOptionSettingsList extends Vue {
  @Model('change', { default: null }) options: CustomOption[];

  @Prop({ default: false }) disabled: boolean;

  current: CustomOption[] = null;

  visible = false;

  num = 1;

  @Watch('options', { immediate: true, deep: true })
  watchOption (options) {
    if (options) {
      this.current = this.options;
    } else {
      this.current = [];
    }
  }

  get rules () {
    const self = this;

    return [
      ...Rules.required,
      {
        type: 'FUNC',
        func: (value) => {
          const oChild = self.current.filter((child) => child.text === value);
          if (oChild && oChild.length > 1) {
            return false;
          }
          return true;
        },
        message: () => i18n.t('genesisUI.optionDuplicate'),
      },
    ];
  }

  onTextChange (value, item) {
    item.text = value;
    this.$emit('change', this.current);
  }

  onSort () {
    this.$emit('change', this.current);
  }

  onAdd () {
    const fun = (name) => {
      const newName = `${name}${this.num++}`;
      const option = this.current.find((item) => item.text === newName);
      if (option) {
        return fun(name);
      }
      return newName;
    };
    this.current.push({ text: fun('未命名'), key: Generator.uuid(8) });
    this.$emit('change', this.current);
    this.$nextTick(() => {
      const input: HTMLInputElement = this.$el.querySelector(
        `.${prefixCls}-item:nth-last-child(2)  input`,
      );
      input.selectionStart = 0;
      input.selectionEnd = input.value.length;
      input.focus();
    });
  }

  onRmeove (index: number) {
    if (this.current.length > 1) {
      this.current.splice(index, 1);
      this.$emit('change', this.current);
    } else {
      message.warn(i18n.t('genesisUI.keepOption') as string);
    }
  }

  onBatchEdit () {
    const validate =
      uniqBy(this.current, 'text').length === this.current.length;

    if (validate) {
      this.visible = true;
    } else {
      message.error(i18n.t('genesisUI.duplicateOptions') as string);
    }
  }

  onBatchEditConfirm (options) {
    this.current = options;
    this.$emit('change', this.current);
  }

  render () {
    const Tags = [];

    this.current.forEach((item, index) => {
      let SuffixTag;
      if (!this.disabled) {
        SuffixTag = (
          <div slot="suffix" class={`${prefixCls}-ops`}>
            <div class={`${prefixCls}-ops__btn`}>
              <b-icon
                type="delete-o"
                theme="b8"
                onClick={() => {
                  this.onRmeove(index);
                }}
              />
            </div>
            <div class={`${prefixCls}-ops__btn`}>
              <b-icon class={`${prefixCls}__drag`} type="drag-o" theme="b8" />
            </div>
          </div>
        );
      }
      Tags.push(
        <b-field
          key={item.key}
          v-model={this.current[index].text}
          class={`${prefixCls}-item`}
          type="text"
          rules={this.rules}
          disabled={this.disabled}
          force
          onChange={(e) => this.onTextChange(e, item)}
        >
          {SuffixTag}
        </b-field>,
      );
    });
    let FooterTag;
    if (!this.disabled) {
      FooterTag = (
        <div slot="footer" class={`${prefixCls}-footer`}>
          <a-button type="link" onClick={this.onAdd}>
            <b-icon type="plus-o" theme="b8" />
            {i18n.t('genesisUI.addOption')}
          </a-button>
          <a-button type="link" onClick={this.onBatchEdit}>
            <b-icon type="list-o" theme="b8" />
            {i18n.t('genesisUI.batchEdit')}
          </a-button>
        </div>
      );
    }
    return (
      <div>
        <b-draggable
          v-model={this.current}
          class={prefixCls}
          forceFallback={true}
          fallbackOnBody={true}
          handle={`.${prefixCls}__drag`}
          draggable={`.${prefixCls}-item`}
          animation={150}
          touchStartThreshold={5}
          onSort={this.onSort}
        >
          {Tags}
          {FooterTag}
        </b-draggable>
        <b-option-settings-batch
          v-model={this.visible}
          options={this.current}
          onConfirm={this.onBatchEditConfirm}
        />
      </div>
    );
  }
}
