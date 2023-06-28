const parseVars = require('./vars').parseVars;
const parsePalette = require('./palette');
const through = require('through2');
var gutil = require('gulp-util');
var PluginError = gutil.PluginError;

function gulpTransformVars (key) {
  // 创建一个让每个文件通过的 stream 通道
  var stream = through.obj(function (file, enc, cb) {
    if (file.isStream()) {
      this.emit(
        'error',
        new PluginError('gulp-transform-vars', 'Stream not supported!'),
      );
      return cb();
    }

    if (file.isBuffer()) {
      // 定义转换内容的 buffer
      const contentBuffer = file.contents.toString();
      let parsedJson = parseVars(contentBuffer);
      if (key) {
        if (key === 'globalVars') {
          const paletteVars = parsePalette(parsedJson);
          parsedJson = Object.assign({}, parsedJson, paletteVars);
        }
        parsedJson = { [key]: parsedJson };
      }
      file.contents = Buffer.from(JSON.stringify(parsedJson), 'utf-8');
    }

    // 确保文件进去下一个插件
    this.push(file);
    // 告诉 stream 转换工作完成
    cb();
  });

  // 返回文件 stream
  return stream;
}

module.exports = gulpTransformVars;
