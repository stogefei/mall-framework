const gulp = require('gulp');
const webpack = require('webpack-stream');
const nodeExternals = require('webpack-node-externals');
const clean = require('gulp-clean');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const fs = require('fs-extra');
const path = require('path');
const packagesPath = path.resolve('../../', 'packages');

const list = [];
const fileTraversaing = (root, search, ignore, cb) => {
  const files = fs.readdirSync(root);
  const callback = cb || ignore || search;
  let searchFiles = search;
  if (!(searchFiles instanceof Array)) {
    if (typeof search !== 'string') {
      searchFiles = '*';
    } else {
      searchFiles = [search];
    }
  }
  if (!(ignore instanceof Array)) {
    // eslint-disable-next-line no-param-reassign
    ignore = [];
  }
  files.forEach((fileName) => {
    const fileDir = path.join(root, fileName);
    const stats = fs.statSync(fileDir);
    if (stats) {
      const isFile = stats.isFile();// 是文件
      const isDir = stats.isDirectory();// 是文件夹
      if (
        isFile && searchFiles !== '*' &&
        !searchFiles.includes(fileName)
      ) {
        return;
      }
      if (ignore.includes(fileName)) {
        return;
      }
      if (isFile) {
        callback(fileDir);
      }
      if (isDir) {
        fileTraversaing(fileDir, search, ignore, callback);
      }
    } else {
      console.warn('获取文件stats失败');
      process.exit();
    }
  });
};
fileTraversaing(packagesPath, ['package.json'], ['node_modules'], (filepath) => {
  const json = fs.readJSONSync(filepath);
  // const json = JSON.parse(file.toString());
  list.push(json.name);
});
function webpackTask (target, options) {
  function cleanTask () {
    return gulp.src([`${packagesPath}/${target}/dist`], { read: false, allowEmpty: true })
      .pipe(clean({ force: true }));
  }
  function webpackCompile () {
    const externalObj = {};
    list.forEach((item) => { externalObj[item] = item; });
    return gulp.src(`${packagesPath}/${target}/lib/index.less`)
      .pipe(webpack({
        entry: {
          main: `${packagesPath}/${target}/lib/index.less`,
        },
        output: {
          path: `${packagesPath}/${target}/dist`,
          filename: `${target}.js`,
        },
        externals: [
          externalObj,
          nodeExternals(),
        ],
        module: {
          rules: [
            {
              test: /\.js$/,
              exclude: /node_modules/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env'], // 预设
                  plugins: ['@babel/plugin-transform-runtime'],
                },
              },
            },
            {
              test: /\.(less|css)$/,
              use: [
                {
                  loader: MiniCssExtractPlugin.loader,
                  options: {
                    publicPath: '../',
                  },
                },
                'css-loader',
                {
                  loader: 'postcss-loader',
                  options: {
                    plugins: () => [
                      require('autoprefixer')(),
                    ],
                  },
                },
                {
                  loader: 'less-loader',
                  options: {
                    javascriptEnabled: true,
                  },
                },
              ],
            },
          ],
        },
        plugins: [
          new MiniCssExtractPlugin({
            filename: `${target}.css`,
            allChunks: true,
          }),

        ],
      }))
      .pipe(gulp.dest(`${packagesPath}/${target}/dist`));
  }
  return gulp.series(cleanTask, webpackCompile);
}

module.exports = webpackTask;
