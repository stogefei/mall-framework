// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import VueAMap, { lazyAMapApiLoaderInstance } from 'vue-amap';
// import Vue from 'vue';
// Vue.use(VueAMap);
declare const AMap: any;

// 初始化vue-amap
VueAMap.initAMapApiLoader({
  // 高德的key
  key: '7f252f34916ea3776e9310af89a397c8',
  // 插件集合
  plugin: [
    'Geocoder',
    'AMap.Geolocation',
    'AMap.Autocomplete',
    'AMap.PlaceSearch',
    'AMap.Scale',
    'AMap.OverView',
    'AMap.ToolBar',
    'AMap.MapType',
    'AMap.PolyEditor',
    'AMap.CircleEditor',
    'AMap.Map',
  ],
  // 高德 sdk 版本，默认为 1.4.4
  v: '1.4.4',
  uiVersion: '1.0.11',
});

/**
 *
 * @param all
 * @returns
 */
function getGeolocation(all: boolean = true) {
  return new Promise<any>((resolve, reject) => {
    lazyAMapApiLoaderInstance
      .load()
      .then(() => {
        if (!AMap) {
          return;
        }
        const geolocation = new AMap.Geolocation({
          // 是否使用高精度定位，默认：true
          enableHighAccuracy: true,
          // 设置定位超时时间，默认：无穷大
          timeout: 10000,
        });

        geolocation.getCurrentPosition((status: any, result: any) => {
          if (status === 'complete' && result.info === 'SUCCESS') {
            let address;
            if (all) {
              address = result.formattedAddress;
            } else {
              address = result.formattedAddress
                .replace(result.addressComponent.province, '')
                .replace(result.addressComponent.city, '')
                .replace(result.addressComponent.district, '');
            }
            resolve({
              address,
              lat: result.position.lat,
              lng: result.position.lng,
              detail: result,
              district: result.addressComponent.district,
              city: result.addressComponent.city,
              province: result.addressComponent.province,
            });
          } else {
            resolve(undefined);
          }
        });
      })
      .catch(() => {
        resolve(undefined);
      });
  });
}

export { lazyAMapApiLoaderInstance, getGeolocation };
export default VueAMap;
