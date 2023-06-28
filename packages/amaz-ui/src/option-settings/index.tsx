import {
  Component, Vue, Model, Watch, Prop,
} from 'vue-property-decorator';
import API, {
  BizPropertyVo,
  BizRuleVo,
  BizServiceMethodVo,
  JsonSchemaValueType,
  PropertyOption,
  PropertyOptionDataSourceType,
  PropertyOptionDictSortType,
  ResponseCode,
} from '@amaz/api';
import { Tabs, Modal, message } from 'ant-design-vue';
import { merge } from 'lodash-es';
import i18n from '@amaz/i18n';
import BJsonSchema from '../json-schema';
import BIcon from '../icon';
import BField from '../field';
import BOptionList from './list';
import BForm from '../form';

import { withInstall } from '../_utils';
import {
  JsonSchemaType,
  JsonSchemaToTreeSelect,
  schemaToJsonSchema,
  JsonSchemaBatchSetValueType,
} from '@amaz/shared-utils/src/schema';
import { Rules } from '@amaz/shared-utils';

const prefixCls = 'bb-prop-opt-settings';
@Component({
  name: prefixCls,
  inheritAttrs: false,
  components: {
    BIcon,
    BField,
    BOptionList,
    BJsonSchema,
    ATabs: Tabs,
    ATabPane: Tabs.TabPane,
    AModal: Modal,
    BForm,
  },
})
class BBPropertyOptionSettings extends Vue {
  @Model('change', { default: null }) option: PropertyOption;

  @Prop({ default: null }) schemaCode: string;

  @Prop({ default: null }) schemas: { [key: string]: BizPropertyVo[] };

  @Prop({ default: false }) vertical: boolean;

  @Prop({ default: false }) disabled: boolean;

  @Prop({ default: 'FORM' }) mode: 'FORM' | 'MODEL';

  current: PropertyOption = null;

  ruleOptions: BizRuleVo[] = null;

  serviceOptions = null;

  methodOptions: BizServiceMethodVo[] = null;

  outputTree = null;

  inputTree = null;

  visible = false;

  @Watch('option', { immediate: true, deep: true })
  watchOption (option) {
    const value: PropertyOption = {
      customOptions: null,
      dataSourceType: PropertyOptionDataSourceType.CUSTOM,
      dict: null,
      dictSortType: PropertyOptionDictSortType.DEFAULT,
      bizServerOption: null,
    };
    if (option) {
      this.current = merge(value, this.option);
    }
    if (!value.bizServerOption) {
      value.bizServerOption = {
        bizMethod: null,
        bizService: null,
        bizRule: null,
        input: null,
        output: this.getOutputOption(),
      };
    }

    this.current = value;
  }

  get typeOptions () {
    return [
      {
        text: i18n.t('genesisUI.custom'),
        key: PropertyOptionDataSourceType.CUSTOM,
      },
      {
        text: i18n.t('genesisUI.dataDict'),
        key: PropertyOptionDataSourceType.DICT,
      },
      {
        text: i18n.t('genesisUI.busRules'),
        key: PropertyOptionDataSourceType.BIZ_RULE,
      },
      {
        text: i18n.t('genesisUI.busIntegration'),
        key: PropertyOptionDataSourceType.BIZ_BUS,
      },
    ];
  }

  getOutputOption () {
    return {
      code: 'root',
      name: '选项数组',
      type: JsonSchemaType.ARRAY,
      valueType: JsonSchemaValueType.DYNAMIC,
      items: {
        code: 'items',
        name: '对象',
        type: JsonSchemaType.OBJECT,
        valueType: null,
        propertys: [
          {
            code: 'text',
            name: '选项名称',
            type: JsonSchemaType.TEXT,
            valueType: JsonSchemaValueType.DYNAMIC,
            value: null,
          },
          {
            code: 'key',
            name: '选项编码',
            type: JsonSchemaType.TEXT,
            valueType: JsonSchemaValueType.DYNAMIC,
            value: null,
          },
        ],
        value: null,
      },
      value: null,
    };
  }

  async getDirtOptions (pageNum, name) {
    const res = await API.sysDictController.page({
      name,
      enabled: true,
      pageNum,
      pageSize: 20,
    });
    if (res.code === ResponseCode.SUCCESS) {
      return {
        res: true,
        data: res.data.list,
        total: res.data.total,
      };
    }
    return {
      res: false,
    };
  }

  async getRuleApi () {
    if (!this.ruleOptions?.length) {
      const res = await API.bizRuleController.queryBySchemaCode(
        this.schemaCode,
      );
      if (res.code === ResponseCode.SUCCESS) {
        this.ruleOptions = res.data;
      } else {
        this.ruleOptions = [];
      }
    }
  }

  async getServiceApi () {
    if (!this.serviceOptions?.length) {
      const res = await API.bizServiceController.listAll();
      if (res.code === ResponseCode.SUCCESS) {
        this.serviceOptions = res.data;
      } else {
        this.serviceOptions = [];
      }
    }
  }

  async getMethodApi () {
    if (this.current.bizServerOption.bizService) {
      const res = await API.bizServiceMethodController.getList(
        this.current.bizServerOption.bizService.code,
      );
      if (res.code === ResponseCode.SUCCESS) {
        this.methodOptions = res.data;
      } else {
        this.methodOptions = [];
      }
    } else {
      this.methodOptions = [];
    }
  }

  async getServiceOptions (index, search) {
    await this.getServiceApi();
    let optionlist = this.serviceOptions;
    if (search) {
      optionlist = this.serviceOptions.filter((item) =>
        item.text.toLocaleLowerCase().includes(search),
      );
    }
    return {
      res: !!optionlist,
      data: optionlist,
      total: optionlist?.length,
    };
  }

  async getMethodOptions (index, search) {
    await this.getMethodApi();
    let optionlist = this.methodOptions;
    if (search) {
      optionlist = this.methodOptions.filter((item) =>
        item.text.toLocaleLowerCase().includes(search),
      );
    }
    return {
      res: !!optionlist,
      data: optionlist,
      total: optionlist?.length,
    };
  }

  async getRulesOptions (pageNum, search: string = '') {
    await this.getRuleApi();
    const list = this.ruleOptions.filter((item) =>
      item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()),
    );
    return {
      res: true,
      data: list,
      total: list.length,
    };
  }

  setRuleOutput () {
    const rule = this.current.bizServerOption.bizRule;
    if (rule) {
      const ruleOption = this.ruleOptions.find((item) => item.id === rule.id);
      if (ruleOption) {
        this.outputTree = JsonSchemaToTreeSelect(ruleOption.output);
      }
    }
  }

  setMethodOutput () {
    const method = this.current.bizServerOption.bizMethod;
    if (method) {
      const methodOption = this.methodOptions.find(
        (item) => item.code === method.code,
      );
      if (methodOption) {
        this.outputTree = JsonSchemaToTreeSelect(methodOption.output as any);
      }
    }
  }

  onShow () {
    this.visible = true;
  }

  async onConfirm () {
    const inputValidate = await (this.$refs.inputForm as any).validate();
    const outputValidate = await (this.$refs.outputForm as any).validate();

    if (outputValidate.res && inputValidate.res) {
      this.visible = false;
    } else if (inputValidate.errorMsg) {
      message.error(`传入参数:${inputValidate.errorMsg}`);
    } else {
      message.error(`返回参数:${outputValidate.errorMsg}`);
    }
  }

  onChange () {
    this.$emit('change', this.current);
  }

  onDataSourceTypeChange () {
    this.current.bizServerOption.bizMethod = null;
    this.current.bizServerOption.bizService = null;
    this.current.bizServerOption.bizRule = null;
    this.current.bizServerOption.input = null;
    this.current.bizServerOption.output = this.getOutputOption();
    this.$emit('change', this.current);
  }

  onRuleChange (value, source: BizRuleVo) {
    if (value) {
      this.current.bizServerOption.input = JsonSchemaBatchSetValueType(
        source.input,
        JsonSchemaValueType.NO_ASSIGNMENT,
      ) as any;
      this.setRuleOutput();
    } else {
      this.current.bizServerOption.input = null;
      this.current.bizServerOption.output = this.getOutputOption();
    }
    this.$emit('change', this.current);
  }

  onServerChange (value, source) {
    this.current.bizServerOption.bizMethod = null;
    this.current.bizServerOption.input = null;
    this.current.bizServerOption.output = this.getOutputOption();
    this.$emit('change', this.current);
  }

  onMethodChange (value, source: BizServiceMethodVo) {
    if (value) {
      this.current.bizServerOption.input = source.input;
      this.setMethodOutput();
    } else {
      this.current.bizServerOption.input = null;
      this.current.bizServerOption.output = this.getOutputOption();
    }
    this.$emit('change', this.current);
  }

  async created () {
    this.inputTree = JsonSchemaToTreeSelect(
      schemaToJsonSchema(this.schemaCode, null, this.schemas[this.schemaCode])
        .propertys,
      null,
      true,
    );
    if (this.current.dataSourceType === PropertyOptionDataSourceType.BIZ_RULE) {
      await this.getRuleApi();
      this.setRuleOutput();
    } else if (
      this.current.dataSourceType === PropertyOptionDataSourceType.BIZ_BUS
    ) {
      await this.getMethodApi();
      this.setMethodOutput();
    }
  }

  render () {
    let Tag;

    switch (this.current.dataSourceType as string) {
      case PropertyOptionDataSourceType.CUSTOM:
        Tag = (
          <b-option-list
            v-model={this.current.customOptions}
            disabled={this.disabled}
            onChange={this.onChange}
          />
        );
        break;
      case PropertyOptionDataSourceType.DICT:
        Tag = [
          <b-field
            key="dict"
            v-model={this.current.dict}
            type="select"
            label={i18n.t('genesisUI.selectDataDict')}
            placeholder={i18n.t('genesisUI.selectDictPh')}
            vertical={this.vertical}
            disabled={this.disabled}
            structure={{
              label: 'name',
              value: 'id',
            }}
            Required
            rules={Rules.required}
            options={this.getDirtOptions}
            onChange={this.onChange}
          />,
          <b-field
            v-model={this.current.dictSortType}
            type="radio"
            label={i18n.t('genesisUI.dataDictSort')}
            vertical={this.vertical}
            options={[
              {
                label: '默认',
                value: 'DEFAULT',
              },
              {
                label: '升序',
                value: 'ASC',
              },
              {
                label: '降序',
                value: 'DESC',
              },
            ]}
            onChange={this.onChange}
          />,
        ];
        break;
      case PropertyOptionDataSourceType.BIZ_RULE:
        const Tags = [];
        if (this.current.bizServerOption.bizRule) {
          const JsonSchemaTag = (
            <a-tabs default-active-key="input">
              <a-tab-pane key="input" tab="传入参数">
                <b-form ref="inputForm">
                  <b-json-schema
                    class={`${prefixCls}__jsonschame`}
                    v-model={this.current.bizServerOption.input}
                    mapping={this.inputTree}
                    schemas={this.schemas}
                    mode="binding"
                    onChange={this.onChange}
                  />
                </b-form>
              </a-tab-pane>
              <a-tab-pane key="output" tab="返回参数" forceRender={true}>
                <b-form ref="outputForm">
                  <b-json-schema
                    class={`${prefixCls}__jsonschame`}
                    v-model={this.current.bizServerOption.output}
                    schemas={this.schemas}
                    mapping={this.outputTree}
                    mode="binding"
                    onChange={this.onChange}
                  />
                </b-form>
              </a-tab-pane>
            </a-tabs>
          );
          if (this.mode === 'FORM') {
            Tags.push(
              <div class={`${prefixCls}__box`}>
                <label>参数配置</label>
                <a class={`${prefixCls}__link`} onClick={this.onShow}>
                  设置
                  <b-icon type="setting-o" theme="b8" />
                </a>
              </div>,
              <a-modal
                v-model={this.visible}
                width={500}
                destroyOnClose={true}
                closable={false}
                maskClosable={false}
                onOk={this.onConfirm}
              >
                <div>{JsonSchemaTag}</div>
              </a-modal>,
            );
          } else {
            Tags.push(JsonSchemaTag);
          }
        }
        Tag = [
          <b-field
            key="bizRule"
            v-model={this.current.bizServerOption.bizRule}
            type="select"
            label={i18n.t('genesisUI.busRules')}
            placeholder={i18n.t('genesisUI.busRulesPh')}
            vertical={this.vertical}
            disabled={this.disabled}
            structure={{
              label: 'name',
              value: 'id',
            }}
            Required
            rules={Rules.required}
            options={this.getRulesOptions}
            onChange={this.onRuleChange}
          />,
          Tags,
        ];
        break;
      case PropertyOptionDataSourceType.BIZ_BUS:
        const MethodTags = [];
        if (this.current.bizServerOption.bizMethod) {
          const JsonSchemaTag = (
            <a-tabs default-active-key="input">
              <a-tab-pane key="input" tab="传入参数">
                <b-form ref="inputForm">
                  <b-json-schema
                    class={`${prefixCls}__jsonschame`}
                    v-model={this.current.bizServerOption.input}
                    mapping={this.inputTree}
                    schemas={this.schemas}
                    mode="binding"
                    onChange={this.onChange}
                  />
                </b-form>
              </a-tab-pane>
              <a-tab-pane key="output" tab="返回参数" forceRender={true}>
                <b-form ref="outputForm">
                  <b-json-schema
                    class={`${prefixCls}__jsonschame`}
                    v-model={this.current.bizServerOption.output}
                    schemas={this.schemas}
                    mapping={this.outputTree}
                    mode="binding"
                    onChange={this.onChange}
                  />
                </b-form>
              </a-tab-pane>
            </a-tabs>
          );
          if (this.mode === 'FORM') {
            MethodTags.push(
              <div class={`${prefixCls}__box`}>
                <label>参数配置</label>
                <a class={`${prefixCls}__link`} onClick={this.onShow}>
                  设置
                  <b-icon type="setting-o" theme="b8" />
                </a>
              </div>,
              <a-modal
                v-model={this.visible}
                width={500}
                destroyOnClose={true}
                closable={false}
                maskClosable={false}
                onOk={this.onConfirm}
              >
                <div>{JsonSchemaTag}</div>
              </a-modal>,
            );
          } else {
            MethodTags.push(JsonSchemaTag);
          }
        }
        Tag = [
          <b-field
            key="bizService"
            v-model={this.current.bizServerOption.bizService}
            type="select"
            label={i18n.t('genesisUI.busServer')}
            placeholder={i18n.t('genesisUI.busServerPh')}
            vertical={this.vertical}
            disabled={this.disabled}
            structure={{
              label: 'name',
              value: 'code',
            }}
            Required
            rules={Rules.required}
            options={this.getServiceOptions}
            onChange={this.onServerChange}
          />,
          <b-field
            key="bizMethod"
            v-model={this.current.bizServerOption.bizMethod}
            type="select"
            label={i18n.t('genesisUI.busFun')}
            placeholder={i18n.t('genesisUI.busFunPh')}
            vertical={this.vertical}
            disabled={this.disabled}
            structure={{
              label: 'name',
              value: 'code',
            }}
            Required
            rules={Rules.required}
            options={this.getMethodOptions}
            onChange={this.onMethodChange}
          />,
          MethodTags,
        ];
        break;
      default:
        break;
    }

    return (
      <div
        class={{
          [prefixCls]: true,
          [`${prefixCls}--form`]: this.mode === 'FORM',
        }}
      >
        <b-field
          v-model={this.current.dataSourceType}
          label={i18n.t('genesisUI.option')}
          type="select"
          labelInValue={false}
          vertical={this.vertical}
          options={this.typeOptions}
          disabled={this.disabled}
          allowClear={false}
          onChange={this.onDataSourceTypeChange}
        />
        {Tag}
      </div>
    );
  }
}

export default withInstall<BBPropertyOptionSettings>(BBPropertyOptionSettings);
