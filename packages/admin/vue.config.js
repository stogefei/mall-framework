// eslint-disable-next-line @typescript-eslint/no-var-requires
const { defineConfig } = require('@vue/cli-service');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const proxy = require('../../build/proxy');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const themeVars = require('@amaz/theme/presets/pc');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { getVueConfig } = require('../../@build-helpers');
const baseConfig = {};
const vueConfig = getVueConfig('portal', baseConfig, {
  pages: {
    index: {
      entry: 'src/main.ts',
      template: 'public/index.html',
      filename: 'index.html',
    },
  },
  productionSourceMap: process.env.NODE_ENV === 'development',
  runtimeCompiler: true,
  lintOnSave: false,
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          ...themeVars,
          javascriptEnabled: true,
        },
      },
    },
  },
  devServer: {
    port: 9000,
    proxy: proxy,
    client: {
      overlay: {
        runtimeErrors: false,
      },
    },
  },
  configureWebpack: {},
});

module.exports = defineConfig(vueConfig);
