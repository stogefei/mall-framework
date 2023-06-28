// through2 是一个对 node 的 transform streams 简单封装
var through = require('through2');
var gutil = require('gulp-util');
var PluginError = gutil.PluginError;

// 插件级别函数 (处理文件)
function vueConfigCompile ({ packages }) {
  // 创建一个让每个文件通过的 stream 通道
  return through.obj(function (file, enc, cb) {
    if (file.isNull()) {
      // 返回空文件
      cb(null, file);
    }
    if (file.isStream()) {
      return cb(new PluginError('gulp-vue-config', 'Streaming not supported'));
    }
    if (file.path.includes('package.json')) {
      let content = file.contents.toString('utf8');
      content = content.replace(/\s\s\s\s"@amaz.*?",\s/g, '');
      file.contents = Buffer.from(content);
    } else if (file.path.includes('vue.config.js')) {
      let content = file.contents.toString('utf8');
      const isPortal = file.path.includes('portal');

      content = content.replace(
        "const themeVars = require('@amaz/theme/presets",
        "const themeVars = require('../theme/presets",
      );
      const moduleStr = 'const baseConfig = {};';
      const alias = Object.keys(packages).map((dir) => `        '${packages[dir]}': resolve('../${dir}'),`);
      let baseConfig;
      if (isPortal) {
        baseConfig = `
const baseConfig = {
  pages: {
    index: {
      entry: 'main.js',
      template: 'public/index.html',
      filename: 'index.html',
    },
    skip: {
      entry: 'skip/main.js',
      template: 'skip/index.html',
      filename: 'skip/index.html',
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@amaz/': resolve('../'),
${alias.join('\n')}
        '@amaz/theme': resolve('../theme'),
        '@extends': resolve('../../extends'),
      },
    },
  },
};`;
      } else {
        baseConfig = `
const baseConfig = {
  pages: {
    index: {
      entry: 'main.js',
      template: 'public/index.html',
      filename: 'index.html',
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@amaz/': resolve('../'),
${alias.join('\n')}
        '@amaz/theme': resolve('../theme'),
        '@extends': resolve('../../extends'),
      },
    },
  },
};`;
      }

      const moduleIndex = content.indexOf(moduleStr);
      const header = content.slice(0, moduleIndex);
      const footer = content.slice(moduleIndex + moduleStr.length);
      content = header + baseConfig + footer;

      file.contents = Buffer.from(content);
    } else if (file.path.includes('tsconfig.json')) {
      let content = file.contents.toString('utf8');
      content = content.replace(/src/g, '.');
      file.contents = Buffer.from(content);
    }
    cb(null, file);
  });
}
// 插件级别函数 (处理文件)
function mainCompile ({ name }) {
  // 创建一个让每个文件通过的 stream 通道
  return through.obj(function (file, enc, cb) {
    if (file.isNull()) {
      // 返回空文件
      cb(null, file);
    }
    if (file.isStream()) {
      return cb(new PluginError('gulp-vue-config', 'Streaming not supported'));
    }
    if (file.path.includes('main.ts')) {
      let content = file.contents.toString('utf8');
      const lastImportIndex = content.lastIndexOf('import ');
      const header = content.slice(0, lastImportIndex);
      let footer = content.slice(lastImportIndex);
      const importStr = footer.match(/^import.*?\n/)[0];
      const extentStr = `import '@extends/entry/${name}';\n`;
      footer = footer.replace(importStr, importStr + extentStr);
      content = header + footer;
      file.contents = Buffer.from(content);
    }

    cb(null, file);
  });
}

// 暴露（export）插件主函数
module.exports.vueConfigCompile = vueConfigCompile;
module.exports.mainCompile = mainCompile;
