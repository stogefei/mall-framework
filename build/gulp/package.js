// through2 是一个对 node 的 transform streams 简单封装
var gutil = require('gulp-util');
const Stream = require('stream');
const VinylFile = require('vinyl');

var PluginError = gutil.PluginError;
const allPackage = {
  dependencies: {},
  devDependencies: {},
};

const alias = {
  '@extends/*': [
    './extends/*',
  ],
};
class CompileStream extends Stream.Duplex {
  files = [];

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
      if (file.isNull()) {
        // 返回空文件
        cb(null, file);
      }
      if (file.isStream()) {
        return cb(new PluginError('gulp-vue-config', 'Streaming not supported'));
      }

      if (file.path.includes('package.json') && !file.path.includes('node_modules')) {
        const tPackage = JSON.parse(file.contents.toString('utf8'));
        allPackage.dependencies = Object.assign(allPackage.dependencies, tPackage.dependencies);
        allPackage.devDependencies = Object.assign(allPackage.devDependencies, tPackage.devDependencies);
        if (!tPackage.name.includes('demo')) {
          alias[tPackage.name] = [
          `./packages/${tPackage.name.split('/')[1]}`,
          ];
        }
      }
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
    this.emit('finish');
  }

  compiler () {
    const plugins = {};
    Object.keys(allPackage).forEach((desKey) => {
      const keys = Object.keys(allPackage[desKey]).sort();
      plugins[desKey] = {};
      keys.forEach(pkg => {
        if (pkg.includes('@amaz')) {
          delete allPackage[desKey][pkg];
        } else {
          plugins[desKey][pkg] = allPackage[desKey][pkg];
        }
      });
    });

    var jsonFile = new VinylFile({
      cwd: '/',
      base: '/dist/',
      path: '/dist/plugins.json',
      contents: Buffer.from(JSON.stringify(plugins.dependencies, null, 2)),
    });
    var aliasFile = new VinylFile({
      cwd: '/',
      base: '/dist/',
      path: '/dist/alias.json',
      contents: Buffer.from(JSON.stringify(alias, null, 2)),
    });
    this.push(jsonFile);
    this.push(aliasFile);
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
