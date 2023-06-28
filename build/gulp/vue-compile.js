var gutil = require('gulp-util');
const Stream = require('stream');
const Readable = require('stream').Readable;
const VinylFile = require('vinyl');
const { parse } = require('@vue/component-compiler-utils');
const compiler = require('vue-template-compiler');

var PluginError = gutil.PluginError;

class CompileOutputStream extends Readable {
  constructor () {
    super({ objectMode: true });
  }

  _read () {

  }
}

class CompileStream extends Stream.Duplex {
  files = [];

  js = new CompileOutputStream();

  ts = new CompileOutputStream();

  less = new CompileOutputStream();

  constructor (ops) {
    super({ objectMode: true });
  }

  _write (file, encoding, cb) {
    if (!file) {
      cb && cb();
    } else if (file.isNull()) {
      cb();
    } else if (file.isStream()) {
      return cb(new PluginError('gulp-vue-compile', 'Streaming not supported'));
    } else {
      this.push(file);
      this.files.push(file);
      cb();
    }
  }

  _read () {

  }

  end (chunk, encoding, callback) {
    if (typeof chunk === 'function') {
      this._write(null, null, chunk);
    } else if (typeof encoding === 'function') {
      this._write(chunk, null, encoding);
    } else {
      this._write(chunk, encoding, callback);
    }
    this.compiler();
    this.push(null);
    this.ts.push(null);
    this.js.push(null);
    this.less.push(null);
    this.emit('finish');
  }

  compiler () {
    this.files.forEach((file) => {
      const name = file.path.substring(file.path.lastIndexOf('/') + 1);
      const descriptor = parse({
        source: file.contents.toString('utf8'),
        compiler: compiler,
        filename: file.path,
        sourceRoot: 'src',
        needMap: true,
      });
      let script = descriptor.script.content.trim()
        .replace(/\.vue';/g, '\';') +
        '\r\n';
      let prefix = '@Component({';
      if (script.indexOf('@Component({') < 0) {
        prefix = 'export default {';
      }
      const index = script.indexOf(prefix) + prefix.length;
      if (descriptor.template?.content) {
        script = script.slice(0, index) +
        `\r\n  template: \`${descriptor.template.content
         .replace(/`/g, '\\`')
         .replace(/\$\{/g, '\\${')}\`,` +
         script.slice(index);
      }

      let style = '';
      if (descriptor.styles.length) {
        const imports = [];
        descriptor.styles.forEach((item) => {
          style += item.content.trim().replace(/@import.*?;/g, (str) => {
            imports.push(str);
            return '';
          }) + '\r\n';
        });
        style = imports.join('\r\n') + '\r\n' + style;
      }

      if (style) {
        script = `import './${name.replace(/\.vue$/, '.less')}';\r\n` + script;
      }
      const jsfile = new VinylFile({
        path: file.path.replace(/\.vue$/, `.${descriptor.script.lang || 'js'}`),
        contents: Buffer.from(script),
        cwd: file.cwd,
        base: file.base,
      });
      const lessfile = new VinylFile({
        path: file.path.replace(/\.vue$/, '.less'),
        contents: Buffer.from(style),
        cwd: file.cwd,
        base: file.base,
      });
      if (descriptor.script.lang === 'ts') {
        this.ts.push(jsfile);
      } else {
        this.js.push(jsfile);
      }

      this.less.push(lessfile);
    });
  }
}

// 插件级别函数 (处理文件)
function gulpPrefixer () {
  // 创建一个让每个文件通过的 stream 通道
  const stream = new CompileStream();
  return stream;
};

// 暴露（export）插件主函数
module.exports = gulpPrefixer;
