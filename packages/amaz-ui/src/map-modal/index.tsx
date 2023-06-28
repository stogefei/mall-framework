import { Component, Prop, Vue } from 'vue-property-decorator';
import {
  Modal, Button, Input, Icon,
} from 'ant-design-vue';
import i18n from '@amaz/i18n';
import VueAMap, { lazyAMapApiLoaderInstance } from '@amaz/shared-utils/src/amap';
import ModalHandler, { IBModelOptions } from '../modal';
const prefixCls = 'bb-map-modal';

interface IBMapModalOptions extends IBModelOptions {
  width?: number;

  lat?: number;

  lng?: number;

  address?: string;
  onCallback: (data) => void;
}

declare const AMap: any;
declare const AMapUI: any;
function infoHandle (info: any, def?: any): string {
  return info === null || info === undefined ? def || '' : info;
}
@Component({
  name: prefixCls,
  components: {
    AInput: Input,
    AModal: Modal,
    AButton: Button,
    AIcon: Icon,
  },
})
class BBMapModal extends Vue {
  @Prop({ default: 600 }) width: number;

  @Prop({ default: null }) lat: number;

  @Prop({ default: null }) lng: number;

  @Prop({ default: null }) address: string;

  visible = true;

  data = {};

  marker: number[] = null;

  mapCenter = null;

  currentAddress: string = null;

  currentLng: number = null;

  currentLat: number = null;

  currentAddressDetal = null;

  adcode: string;

  detail: string;

  amapManager = new VueAMap.AMapManager();

  geolocation: any;

  searchKey = '';

  loaded = false;

  geocoder: any;

  show () {
    this.visible = true;
  }

  clickMap (e: any) {
    const { lng, lat } = e.lnglat;

    this.getAddress(lng, lat);
  }

  showSearchResult: boolean = false;

  initPoiPicker () {
    if (!AMapUI || this.loaded) {
      return;
    }
    this.loaded = true;
    AMapUI.loadUI(['misc/PoiPicker'], (PoiPicker: any) => {
      const searchResultEl = this.$refs.searchResult;
      const searchInputEl = (this.$refs.searchInput as Vue).$el.firstChild;
      const poiPicker = new PoiPicker({
        input: searchInputEl, // 输入框id
        autocompleteOptions: {
          pageSize: 8,
        }, // 地点搜索配置
        suggestContainer: searchResultEl, // 输入提示显示DOM
        // searchResultsContainer:searchResultEl//搜索结果显示DOM
      });

      poiPicker.on('poiPicked', (poiResult: any) => {
        const poi = poiResult.item;
        if (!poi.location) {
          return;
        }
        this.showSearchResult = false;
        if (poi.district) {
          this.currentAddress = poi.district + poi.address + poi.name;
        } else if (poi.pname) {
          this.currentAddress =
            poi.pname + poi.cityname + poi.address + poi.name;
        }
        this.getAddress(poi.location.lng, poi.location.lat);
      });
    });
  }

  initGeolocation () {
    if (!AMap) {
      return;
    }
    if (!this.geolocation) {
      this.geolocation = new AMap.Geolocation({
        // 是否使用高精度定位，默认：true
        enableHighAccuracy: true,
        // 设置定位超时时间，默认：无穷大
        timeout: 10000,
        // 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
        buttonOffset: new AMap.Pixel(10, 20),
        //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
        zoomToAccuracy: true,
        //  定位按钮的排放位置, RB表示右下
        buttonPosition: 'RB',
      });
    }
    // 由于IP定位不稳定，经常出现失败，故先定位到城市
    this.geolocation.getCityInfo((status: any, result: any) => {
      if (status === 'complete' && result.info === 'SUCCESS') {
        this.mapCenter = result.center;
        this.marker = this.mapCenter;
        this.currentAddress =
          infoHandle(result.province) + infoHandle(result.city);
        this.currentLng = result.center[0];
        this.currentLat = result.center[1];
        this.adcode = result.adcode;
        this.detail = result;
        this.currentAddressDetal = result;
      }
    });
    this.geolocation.getCurrentPosition((status: any, result: any) => {
      if (status === 'complete' && result.info === 'SUCCESS') {
        this.currentAddress = infoHandle(
          result.formattedAddress,
          this.currentAddress,
        );

        this.currentAddressDetal = result.addressComponent;
        this.currentLng = result.position.lng;
        this.currentLat = result.position.lat;
        this.adcode = result.addressComponent.adcode;
        this.detail = result.addressComponent;
        this.mapCenter = [result.position.lng, result.position.lat];
        this.marker = this.mapCenter;
      }
    });
  }

  getLocation (address: string) {
    this.geocoder.getLocation(address, (status: any, result: any) => {
      if (status === 'complete' && result.info === 'OK') {
        if (result && result.geocodes) {
          const res = result.geocodes[0];
          this.currentAddress = address || res.formattedAddress;

          this.currentAddressDetal = res.addressComponent;
          this.currentLng = res.location.lng;
          this.currentLat = res.location.lat;
          this.mapCenter = [this.currentLng, this.currentLat];
          this.marker = [this.currentLng, this.currentLat];
        }
      } else {
        this.initGeolocation();
      }
    });
  }

  getAddress (lng: number, lat: number, address?: string) {
    if (!AMap) {
      return;
    }
    this.geocoder.getAddress([lng, lat], (status: any, result: any) => {
      if (status === 'complete' && result.info === 'OK') {
        if (result && result.regeocode) {
          this.mapCenter = [lng, lat];
          this.marker = this.mapCenter;
          this.currentAddressDetal = result.regeocode.addressComponent;
          this.currentLng = lng;
          this.currentLat = lat;
          this.currentAddress = address || result.regeocode.formattedAddress;
          this.adcode = result.regeocode.addressComponent.adcode;
          this.detail = result.regeocode.addressComponent;
        }
      }
    });
  }

  searchChange (e: Event) {
    if (this.searchKey) {
      this.showSearchResult = true;
    } else {
      this.showSearchResult = false;
    }
  }

  searchFocus () {
    if (this.searchKey) {
      this.showSearchResult = true;
    }
  }

  cancel () {
    this.visible = false;
    this.$emit('cancel');
    this.$emit('hide');
  }

  confirm () {
    this.visible = false;
    this.$emit('callback', {
      address: this.currentAddress,
      lat: this.currentLat,
      lng: this.currentLng,
      detail: this.currentAddressDetal,
      district: this.currentAddressDetal.district,
      city: this.currentAddressDetal.city,
      province: this.currentAddressDetal.province,
    });
    this.$emit('hide');
  }

  created () {
    lazyAMapApiLoaderInstance.load().then(() => {
      this.geocoder = new AMap.Geocoder({
        radius: 1000,
        extensions: 'all',
      });
      this.initPoiPicker();

      if (!this.lng && !this.lat && !this.address) {
        this.initGeolocation();
      } else if (this.lng && this.lat) {
        this.getAddress(this.lng, this.lat, this.address);
      } else if (this.address) {
        this.getLocation(this.address);
      }
    });
  }

  render () {
    const props = {
      props: {
        visible: this.visible,
        bodyStyle: { padding: 0 },
        closable: false,
        footer: null,
        ...this.$props,
      },
      style: {
        width: this.width,
      },
      on: this.$listeners,
    };
    return (
      <a-modal {...props}>
        <div class={`${prefixCls}__search-wrap`}>
          <a-input
            v-model={this.searchKey}
            onFocus={this.searchFocus}
            onChange={this.searchChange}
            ref="searchInput"
            allowClear
          />
          <div
            style={{ display: this.showSearchResult ? 'block' : 'none' }}
            class={`${prefixCls}__search-result-wrap`}
          >
            <div ref="searchResult" class={`${prefixCls}__search-result`}></div>
            <div class={`${prefixCls}__search-result-empty`}>
              {i18n.t('genesisUI.addNotFound')}
            </div>
          </div>
        </div>
        <div class={`${prefixCls}__content`}>
          {this.mapCenter && (
            <el-amap
              zoom={12}
              center={this.mapCenter}
              amapManager={this.amapManager}
              events={{
                click: this.clickMap,
              }}
            >
              {this.marker && <el-amap-marker position={this.marker} />}
            </el-amap>
          )}
        </div>
        <div class={`${prefixCls}__footer`}>
          {this.currentAddress && (
            <div class={`${prefixCls}__address`}>
              <a-icon class={`${prefixCls}__address-icon`} type="environment" />
              {this.currentAddress}
            </div>
          )}
          <div class={`${prefixCls}__btn`}>
            <a-button type="default" onClick={this.cancel}>
              取消
            </a-button>
            <a-button type="primary" onClick={this.confirm}>
              确定
            </a-button>
          </div>
        </div>
      </a-modal>
    );
  }
}

export default new ModalHandler<IBMapModalOptions>(BBMapModal);
