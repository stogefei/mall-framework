const through = require('through2');
var gutil = require('gulp-util');
var PluginError = gutil.PluginError;

module.exports = function gulpMergeVars (importStream, key) {
  // 创建一个让每个文件通过的 stream 通道
  var stream = through.obj(function (file, enc, cb) {
    if (file.isStream()) {
      this.emit(
        'error',
        new PluginError('gulp-merge-vars', 'Stream not supported!'),
      );
      return cb();
    }

    function mergeKeyToJson (target, source) {
      if (target[key]) {
        target[key] = Object.assign({}, target[key], source);
      } else {
        target[key] = source;
      }
      return target;
    }
    if (file.isBuffer()) {
      // 定义转换内容的 buffer
      // importStream.setEncoding('UTF8');
      let importContent = '';
      // 处理流事件 --> data, end, and error
      importStream.on('data', function (chunk) {
        if (chunk.contents) {
          const fragment = chunk.contents.toString();
          importContent += fragment;
        }
      });
      importStream.on('end', () => {
        const parsedJson = importContent ? JSON.parse(importContent) : {};
        const fileContent = file.contents.toString();
        const fileContentJson = fileContent ? JSON.parse(fileContent) : {};
        file.contents = Buffer.from(
          JSON.stringify(mergeKeyToJson(fileContentJson, parsedJson)),
          'utf-8',
        );
        this.push(file);
        cb();
      });
    }
  });

  // 返回文件 stream
  return stream;
};
