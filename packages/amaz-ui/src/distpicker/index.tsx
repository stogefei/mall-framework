import {
  Component, Prop, Vue, Model, Watch,
} from 'vue-property-decorator';
import { Input } from 'ant-design-vue';
import i18n from '@amaz/i18n';
import BIcon from '../icon';
import mapModal from '../map-modal';

import BCombobox from '../combobox';

import { withInstall } from '../_utils';
import DistpickerContent from './content';
import { getGeolocation } from '@amaz/shared-utils/src/amap';

const prefixCls = 'bb-distpicker';

@Component({
  name: prefixCls,
  components: {
    BIcon,
    BCombobox,
    DistpickerContent,
    ATextarea: Input.TextArea,
  },
})
class BBDistpicker extends Vue {
  @Model('input', { default: null }) value: any;

  @Prop({ default: 'district' }) formart: 'province' | 'city' | 'district';

  @Prop({ default: false }) address: boolean;

  @Prop({ default: 'default' }) size: 'large' | 'default' | 'small';

  @Prop({ default: false }) disabled: boolean;

  @Prop({ default: false }) auto: boolean; // 自动获取地址

  comboboxStatus = false;

  contentStyle = null;

  currentValue: any = {};

  @Watch('value', { immediate: true, deep: true })
  watchValue () {
    if (this.value) {
      this.currentValue = this.value;
    } else {
      this.currentValue = {};
    }
  }

  get displayLabel () {
    const label = [];
    ['province', 'city', 'district'].forEach((key) => {
      if (this.currentValue[key]) {
        label.push(this.currentValue[key]);
      }
    });
    return label.join('/');
  }

  get fullAddress () {
    let text = this.currentValue.province || '';
    text += this.currentValue.city || '';
    text += this.currentValue.district || '';
    text += this.currentValue.address || '';
    return text;
  }

  change (val: boolean) {
    this.comboboxStatus = val;
  }

  setMapData (data) {
    const nData: any = {};
    switch (this.formart) {
      case 'province':
        nData.province = data.province;
        break;
      case 'city':
        nData.province = data.province;
        nData.city = data.city;
        break;
      default:
        nData.province = data.province;
        nData.city = data.city;
        nData.district = data.district;
        break;
    }
    if (this.address) {
      nData.address = data.address;

      Object.values(nData).forEach((val) => {
        nData.address = nData.address.replace(val, '');
      });
    }
    this.currentValue = nData;
    this.$emit('input', this.currentValue);
    this.$emit('change', this.currentValue);
  }

  onShowMap () {
    if (this.disabled) return;
    mapModal.show({
      address: this.fullAddress,
      onCallback: this.setMapData,
    });
  }

  onAddressChange (val) {
    this.currentValue = { ...this.currentValue, ...val };
    this.$emit('input', val);
    this.$emit('change', val);
    this.comboboxStatus = false;
  }

  onDetailChange (e) {
    const value = (e.target as HTMLTextAreaElement).value;
    this.$set(this.currentValue, 'address', value);
    this.$emit('input', this.currentValue);
    this.$emit('change', this.currentValue);
  }

  clear () {
    this.$emit('input', null);
    this.$emit('change', null);
  }

  async created () {
    if (this.auto) {
      const data = await getGeolocation();
      if (data) {
        this.setMapData(data);
      }
    }
  }

  render () {
    const props = {
      props: {
        clearIcon: true,
        placeholder: i18n.t('genesisUI.regionTips'),
        value: this.displayLabel,
        size: this.size,
        disabled: this.disabled,
        visible: this.comboboxStatus,
      },
      on: {
        change: this.change,
        clear: this.clear,
      },
    };

    return (
      <div
        class={{
          [prefixCls]: true,
          [`${prefixCls}-sm`]: this.size === 'small',
          [`${prefixCls}-disabled`]: this.disabled,
        }}
      >
        <b-combobox {...props}>
          <distpicker-content
            formart={this.formart}
            value={this.currentValue}
            comPrefixCls={prefixCls}
            onChange={this.onAddressChange}
          />
        </b-combobox>
        {this.address && (
          <div class={`${prefixCls}-address`}>
            <a-textarea
              disabled={this.disabled}
              value={this.currentValue ? this.currentValue.address : undefined}
              autoSize={{ minRows: 2 }}
              placeholder={i18n.t('genesisUI.addressTips')}
              onChange={this.onDetailChange}
            />
            <b-icon
              class={`${prefixCls}__icon`}
              type="position-o"
              onClick={this.onShowMap}
              theme="b8"
            />
          </div>
        )}
      </div>
    );
  }
}

export default withInstall<BBDistpicker>(BBDistpicker);
