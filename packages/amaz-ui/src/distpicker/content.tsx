import {
  Component, Prop, Vue, Watch,
} from 'vue-property-decorator';
import { Tabs } from 'ant-design-vue';
import i18n from '@amaz/i18n';
import { Address } from '@amaz/utils';
import { GeographyO } from '../typings/distpicker';
const prefixCls = 'bb-distpicker-content';
@Component({
  name: prefixCls,
  components: {
    ATabs: Tabs,
    ATabPane: Tabs.TabPane,
  },
})
export default class BBDistpickerContent extends Vue {
  @Prop() comPrefixCls: string;

  @Prop({ default: undefined }) value: GeographyO;

  @Prop({ default: 'district' }) formart: 'province' | 'city' | 'district';

  provinceCodes = Address.addressCodes;

  currentData: any = null;

  cityCodes = [];

  districtCodes = [];

  province = null;

  city = null;

  district = null;

  defaultTabKey = 'province';

  get prefixCls () {
    return `${this.comPrefixCls}-content`;
  }

  get tabs () {
    let tabs = [];
    if (this.formart === 'province') {
      tabs = ['province'];
    } else if (this.formart === 'city') {
      tabs = ['province', 'city'];
    } else {
      tabs = ['province', 'city', 'district'];
    }
    return tabs;
  }

  @Watch('value', { immediate: true, deep: true })
  watchValue () {
    if (this.value) {
      const value = this.value as GeographyO;
      if (value.province) {
        this.province = this.provinceCodes.find(
          (item) => item.name === value?.province,
        );
      }
      if (this.province && this.province.children && value.city) {
        this.city = this.province.children.find(
          (item) => item.name === value.city,
        );
      }
      if (this.city && this.city.children && value.district) {
        this.district = this.city.children.find(
          (item) => item.name === value.district,
        );
      }

      if (this.city && this.province) {
        this.cityCodes =
          this.provinceCodes.find(
            (item) =>
              item.name === this.province || item.name === this.province.name,
          )?.children || [];
      }
      if (this.district && this.city && this.cityCodes.length) {
        this.districtCodes =
          this.cityCodes.find(
            (item) => item.name === this.city || item.name === this.city.name,
          )?.children || [];
      }
    } else {
      this.province = null;
      this.city = null;
      this.district = null;
      this.cityCodes = [];
      this.districtCodes = [];
    }
  }

  checked (item) {
    this[item.level] = item;

    switch (item.level) {
      case 'province':
        this.city = null;
        this.cityCodes = [];
        this.district = null;
        this.districtCodes = [];
        break;
      case 'city':
        this.district = null;
        this.districtCodes = [];
        break;
    }

    if (
      !item.children ||
      !item.children.length ||
      item.level === this.formart
    ) {
      const res = {};
      ['province', 'city', 'district'].forEach((key) => {
        if (this[key]) {
          res[key] = this[key].name;
        }
      });
      this.$emit('change', res);
    } else {
      this.defaultTabKey = item.children[0].level;
      this[`${item.children[0].level}Codes`] = item.children;
    }
  }

  getItems (codes) {
    const items = [];
    if (codes && codes.length) {
      codes.forEach((item) => {
        const current = this[item.level];
        items.push(
          <div class={{ double: item.name.length > 7 }}>
            <label
              class={{
                active:
                  current &&
                  (current.name === item.name || current === item.name),
                double: item.name.length > 7,
              }}
              onClick={() => {
                this.checked(item);
              }}
            >
              {item.name}
            </label>
          </div>,
        );
      });
    }
    return items;
  }

  getDistrictName (str) {
    switch (str) {
      case 'province':
        return i18n.t('genesisUI.regionTips');
      case 'city':
        return i18n.t('genesisUI.regionTips');
      case 'district':
        return i18n.t('genesisUI.district');
    }
  }

  render () {
    const tabsItems = [];
    this.tabs.forEach((key) => {
      const items = this.getItems(this[`${key}Codes`]);
      tabsItems.push(
        <a-tab-pane
          key={key}
          tab={this.getDistrictName(key)}
          disabled={!items.length}
        >
          <div class={`${this.prefixCls}__wrap`}>{...items}</div>
        </a-tab-pane>,
      );
    });
    return (
      <div class={this.prefixCls}>
        <a-tabs v-model={this.defaultTabKey}>{...tabsItems}</a-tabs>
      </div>
    );
  }
}
