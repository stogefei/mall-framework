import {
  Component, Prop, Vue, Watch,
} from 'vue-property-decorator';
import mapModal from '../map-modal';

import BIcon from '../icon';
import { LocationValue } from '../typings/location';
import { withInstall } from '../_utils';
import { getGeolocation } from '@amaz/shared-utils/src/amap';
import i18n from '@amaz/i18n';
const prefixCls = 'bb-location';

@Component({
  name: prefixCls,
  components: {
    BIcon,
  },
})
class BBLocation extends Vue {
  @Prop({ default: null }) value: LocationValue;

  @Prop({ default: null }) size: 'large' | 'default' | 'small';

  @Prop({ default: false }) disabled: boolean;

  @Prop({ default: false }) auto: boolean; // 自动获取地址

  address: string = null;

  lng: number = null;

  lat: number = null;

  isHover = false;

  get iconProps () {
    if (this.address && this.isHover) {
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
        type: 'get-address-o',
        theme: 'b8',
      },
    };
  }

  @Watch('value', { immediate: true, deep: true })
  watchValue (value) {
    if (value && value instanceof Object) {
      this.lng = value.lng;
      this.lat = value.lat;
      this.address = value.address;
    } else {
      this.lng = null;
      this.lat = null;
      this.address = null;
    }
  }

  hover (e: Event) {
    this.isHover = e.type !== 'mouseout';
  }

  setMapData (data) {
    this.lng = data.lng;
    this.lat = data.lat;
    this.address = data.address;
    this.$emit('input', data);
    this.$emit('change', data);
  }

  click () {
    if (this.disabled) return;
    mapModal.show({
      lng: this.lng,
      lat: this.lat,
      address: this.address,
      onCallback: this.setMapData,
    });
  }

  iconClick () {
    if (this.address && this.isHover) {
      this.lng = null;
      this.lat = null;
      this.address = null;
      this.$emit('input', null);
      this.$emit('change', null);
    } else {
      this.click();
    }
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
    return (
      <div
        class={{
          [prefixCls]: true,
          [`${prefixCls}-disabled`]: this.disabled,
          'ant-input-affix-wrapper': true,
          'bb-input': true,
          'ant-input-affix-wrapper-sm': this.size === 'small',
        }}
        onMouseover={this.hover}
        onMouseout={this.hover}
      >
        <input
          readonly
          value={this.address}
          class={{
            'ant-input': true,
            'ant-input-disabled': this.disabled,
            [`${prefixCls}__input`]: true,
            'ant-input-sm': this.size === 'small',
          }}
          placeholder={i18n.t('genesisUI.locationTips') as string}
          disabled={this.disabled}
          onClick={this.click}
        />
        <span class="ant-input-suffix">
          <b-icon {...this.iconProps} onClick={this.iconClick} />
        </span>
      </div>
    );
  }
}
export default withInstall<BBLocation>(BBLocation);
