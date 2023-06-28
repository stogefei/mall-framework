import {
  Component, Vue, Model, Watch, Prop,
} from 'vue-property-decorator';
import { CustomOption } from '@amaz/api';
import { Input, message, Modal } from 'ant-design-vue';
import BIcon from '../icon';
import BField from '../field';
import i18n from '@amaz/i18n';
import { uniq } from 'lodash-es';
import { Generator } from '@amaz/utils';
const prefixCls = 'bb-prop-opt-settings-batch';
@Component({
  name: prefixCls,
  inheritAttrs: false,
  components: {
    AModal: Modal,
    ATextarea: Input.TextArea,
    BIcon,
    BField,
  },
})
export default class BBPropertyOptionSettingsBatch extends Vue {
  @Model('visible', { default: false }) visible: boolean;

  @Prop({ default: null }) options: CustomOption[];

  current: string = null;

  @Watch('options', { immediate: true, deep: true })
  watchOption () {
    this.current = this.options.map((option) => option.text).join('\n');
  }

  onCancel () {
    this.$emit('visible', false);
  }

  onConfirm () {
    const list = this.current.split('\n').filter((item) => item !== '');
    if (list.length) {
      const validate = uniq(list).length === list.length;
      if (validate) {
        const options = [];
        list.forEach((text) => {
          const ops = this.options.find(
            (option) => option.text === text.trim(),
          );
          if (ops) {
            options.push({ ...ops });
          } else {
            options.push({ text: text.trim(), key: Generator.uuid(8) });
          }
        });
        this.$emit('confirm', options);
        this.$emit('visible', false);
      } else {
        message.error(i18n.t('genesisUI.optionDuplicate') as string);
      }
    } else {
      message.error(i18n.t('genesisUI.optionEmpty') as string);
    }
  }

  render () {
    return (
      <a-modal
        class={prefixCls}
        visible={this.visible}
        title={i18n.t('genesisUI.batchEditOptions')}
        onOk={this.onConfirm}
        onCancel={this.onCancel}
      >
        <a-textarea v-model={this.current} />
      </a-modal>
    );
  }
}
