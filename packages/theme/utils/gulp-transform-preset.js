const through = require('through2');
var gutil = require('gulp-util');
var parsePalette = require('./palette');
var PluginError = gutil.PluginError;

function gulpTransformPreset () {
  // 创建一个让每个文件通过的 stream 通道
  var stream = through.obj(function (file, enc, cb) {
    if (file.isStream()) {
      this.emit(
        'error',
        new PluginError('gulp-transform-preset', 'Stream not supported!'),
      );
      return cb();
    }

    if (file.isBuffer()) {
      // 定义转换内容的 buffer
      if (file.contents) {
        const contentBuffer = file.contents.toString().trim() || '{}';
        const presetJson = JSON.parse(contentBuffer);
        const paletteVars = parsePalette(presetJson);
        if (!paletteVars) {
          this.emit(
            'error',
            new PluginError('gulp-transform-preset', 'Palette goes wrong!'),
          );
        }
        const baseVars = require('../core/vars.json');

        let resultBuffer = `const modifyVars = ${JSON.stringify(
          Object.assign({}, baseVars.modifyVars, presetJson, paletteVars),
          null,
          2,
        )};\n`;
        resultBuffer += `const globalVars = ${JSON.stringify(
          baseVars.globalVars,
          null,
          2,
        )};\n`;

        resultBuffer += 'module.exports = {\n';
        resultBuffer += '\tmodifyVars: modifyVars,\n';
        resultBuffer += '\tglobalVars: globalVars,\n};';

        file.contents = Buffer.from(resultBuffer, 'utf-8');
      }
    }

    // 确保文件进去下一个插件
    this.push(file);
    // 告诉 stream 转换工作完成
    cb();
  });

  // 返回文件 stream
  return stream;
}

module.exports = gulpTransformPreset;
