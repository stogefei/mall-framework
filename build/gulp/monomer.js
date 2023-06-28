
const gulp = require('gulp');
const babel = require('gulp-babel');
const merge = require('merge2');
const ts = require('./typescript/release/main');
const replace = require('gulp-replace');
const clean = require('gulp-clean');
const compile = require('./vue-compile');

// const webpackTask = require('./webpack');
const path = require('path');

const packagesPath = path.resolve('../../', 'packages');

var args = require('minimist')(process.argv.slice(2), {
  string: ['package'],
});
let packages = [];
if (args.package) {
  packages = args.package.split(',');
} else {
  packages = [
    // 'admin',
    'api',
    'business-rules',
    'core',
    'editor',
    'form',
    'genesis-ui',
    'goddess-ui',
    'icon',
    'mobile',
    // 'portal',
    'shared-utils',
    'utils',
    'workflow',
  ];
}
console.log('console', packagesPath);
const es2015Options = {
  // ES不打包
  presets: [
    // '@vue/babel-preset-jsx',
    '@babel/preset-env',
    // '@vue/app',
    [
      '@vue/app',
      {
        useBuiltIns: false,
        modules: false,
        corejs: 3,
        targets: {
          browsers: ['> 1%', 'last 2 versions', 'ie >= 10'],
        },
      },
    ],
  ],
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        absoluteRuntime: false,
        corejs: 3,
      },
    ],
    [
      'import',
      { libraryName: 'ant-design-vue', libraryDirectory: 'es', style: true },
      'ant-design-vue',
    ],
    [
      'import',
      { libraryName: 'vant', libraryDirectory: 'es', style: true },
      'vant',
    ],
  ],
};
const esOptions = {

  presets: [
    '@vue/babel-preset-jsx',
  ],
};

function allTask (target, dist, options) {
  const tsProject = ts.createProject('../../tsconfig.json');
  function cleanTask () {
    return gulp.src([`${packagesPath}/${target}/${dist}`], { read: false, allowEmpty: true })
      .pipe(clean({ force: true }));
  }
  function vueCompile () {
    const vueResult = gulp.src(`${packagesPath}/${target}/src/**/*.vue`)
      .pipe(compile());
    const tsResult =
      vueResult.js
        .pipe(replace('.vue', '.js'))
        .pipe(tsProject());
    return merge(
      tsResult.js.pipe(babel(options)),
      tsResult.dts,
      vueResult.less,
    ).pipe(gulp.dest(`${packagesPath}/${target}/${dist}`));
  }
  function tsCompile () {
    const tsResult = gulp.src(
      [`${packagesPath}/${target}/src/**/*.{tsx,ts}`,
      `!${packagesPath}/${target}/src/**/*.d.ts`])
      .pipe(replace('.vue', ''))
      .pipe(tsProject());
    return merge(tsResult.js.pipe(babel(options)), tsResult.dts).pipe(gulp.dest(`${packagesPath}/${target}/${dist}`));
  }
  function jsCompile () {
    return gulp.src(`${packagesPath}/${target}/src/**/*.{js,jsx}`)
      .pipe(replace('.vue', ''))
      .pipe(babel(options))// es6转es5
      .pipe(gulp.dest(`${packagesPath}/${target}/${dist}`));
  }
  function lessCompile () {
    return gulp.src(`${packagesPath}/${target}/src/**/*.{less}`)
      .pipe(gulp.dest(`${packagesPath}/${target}/${dist}`));
  }
  function copyCompile () {
    return gulp.src(`${packagesPath}/${target}/src/**/*.{css,d.ts,json,ttf,woff,woff2,html,svg,jpg,jpeg,png}`)
      .pipe(gulp.dest(`${packagesPath}/${target}/${dist}`));
  }
  const utilsTask = gulp.series(cleanTask, lessCompile, copyCompile, vueCompile, tsCompile, jsCompile);
  // const utilsTask = gulp.series(cleanTask, tsCompile);
  // const utilsTask = gulp.series(cleanTask, vueCompile);

  return utilsTask;
}

const tasks = [];
packages.forEach(key => {
  const esTsak = allTask(key, 'es', esOptions);
  // const libTsak = allTask(key, 'lib', es2015Options);
  // const webTsak = webpackTask(key, es2015Options);
  // items.push(esTsak, libTsak, webTsak);
  tasks.push(esTsak);
});

module.exports.default = gulp.parallel(
  // gulp.series(...tasks),
  ...tasks,
);
