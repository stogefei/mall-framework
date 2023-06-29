import { IConfig } from './types';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const portal = require('./assets/logo_144x144.png');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const admin = require('./assets/logo_72x72.png');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const mobile = require('./assets/logo_48x48.png');
const config: IConfig = {
  baseApi: '/api',
  portalURL: '/', // PC入口地址
  adminURL: '/admin#/', // 管理后台地址
  mobileURL: '/mobile#/', // 移动端地址
  logo: {
    portal: portal,

    admin: admin,

    mobile: mobile,
  },
  titleSuffix: 'Form-core',
};

export default config;
