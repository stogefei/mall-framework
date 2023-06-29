const path = require('path');
const fs = require('fs');
const { merge } = require('lodash');
/**
 * 获取扩展配置
 * @param name
 * @returns
 */
function getExtendConfig (name) {
  const extendConfigPath = `../../extends/entry/${name}/vue.config.js`;
  let extendConfig;
  if (fs.existsSync(extendConfigPath)) {
    extendConfig = require(extendConfigPath);
  }
  return extendConfig;
}

function resolve (dir) {
  return path.resolve(__dirname, dir);
}

/**
 * 获取vue配置
 * @param name
 * @param config
 * @returns
 */
function getVueConfig (name, baseConfig, config) {
  const extendConfig = getExtendConfig(name);
  return merge(config, baseConfig, extendConfig || {});
}
module.exports.resolve = resolve;
module.exports.getExtendConfig = getExtendConfig;
module.exports.getVueConfig = getVueConfig;
