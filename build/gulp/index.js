const gulp = require('gulp');
const babel = require('gulp-babel');
const merge = require('merge2');
const ts = require('./typescript/release/main');
const replace = require('gulp-replace');
const clean = require('gulp-clean');
const zip = require('gulp-zip');
const uglify = require('gulp-uglify');

const compile = require('./vue-compile');
const { vueConfigCompile, mainCompile } = require('./vue-config');
const package = require('./package');
const lerna = require('../../lerna.json');
const fs = require('fs-extra');
const path = require('path');

const packagesPath = path.resolve('../../', 'packages');
const templatePackagesPath = path.resolve('../../', lerna.version);
const zipPath = path.resolve('../../', '.');

const dirs = fs.readdirSync(packagesPath);
const packages = {};
const filerDir = ['demo', 'theme']; // 需要过滤的包
dirs.forEach((dir) => {
  const packageJsonPath = path.resolve(packagesPath, `${dir}/package.json`);
  if (!filerDir.includes(dir) && fs.existsSync(packageJsonPath)) {
    const packageJson = fs.readJsonSync(packageJsonPath);
    packages[dir] = packageJson.name;
  }
});
// packages = { print: '@@amaz/print' };
// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
  presets: ['@vue/babel-preset-jsx'],
};
/**
 * 清理临时资源包文件
 * @returns
 */
function cleanTask () {
  return () =>
    gulp
      .src([templatePackagesPath], { read: false, allowEmpty: true })
      .pipe(clean({ force: true }));
}
/**
 * packages全量任务
 * @param {*} target
 * @param {*} dist
 * @param {*} options
 * @returns
 */
function allTask (target, dist, options) {
  const isEntry = ['admin', 'portal', 'mobile'].includes(target);
  const tsProject = ts.createProject('../../tsconfig.json');
  function vueCompile () {
    console.log('开始处理:', target);
    const vueResult = gulp
      .src(`${packagesPath}/${target}/src/**/*.vue`)
      .pipe(replace(/(\.vue')|(\.jsx')/g, "'"))
      .pipe(replace('/src', ''))
      .pipe(compile());
    const tsResult = vueResult.ts.pipe(tsProject());
    let tjs = tsResult.js.pipe(babel(options));
    let js = vueResult.js.pipe(babel(options));
    if (!isEntry) {
      tjs = tjs.pipe(uglify());
      js = js.pipe(uglify());
    }
    return merge(
      tjs,
      tsResult.dts,
      js,
      vueResult.less,
    ).pipe(gulp.dest(`${templatePackagesPath}/${target}`));
  }
  function tsCompile () {
    let task = gulp
      .src([
        `${packagesPath}/${target}/src/**/*.{tsx,ts}`,
        `!${packagesPath}/${target}/src/**/*.d.ts`,
      ])
      .pipe(replace(/(\.vue')|(\.jsx')/g, "'"))
      .pipe(replace('/src', ''));

    if (isEntry) {
      task = task.pipe(mainCompile({ name: target }));
    }
    const tsResult = task.pipe(tsProject());
    let tjs = tsResult.js.pipe(babel(options));
    if (!isEntry) {
      tjs = tjs.pipe(uglify());
    }
    return merge(tjs, tsResult.dts).pipe(
      gulp.dest(`${templatePackagesPath}/${target}`),
    );
  }
  function jsCompile () {
    let js = gulp
      .src(`${packagesPath}/${target}/src/**/*.{js,jsx}`)
      .pipe(replace(/(\.vue')|(\.jsx')/g, "'"))
      .pipe(replace('/src', ''))
      .pipe(babel(options));
    if (!isEntry) {
      js = js.pipe(uglify());
    }
    return js.pipe(gulp.dest(`${templatePackagesPath}/${target}`));
  }
  function lessCompile () {
    return gulp
      .src(`${packagesPath}/${target}/src/**/*.less`)
      .pipe(replace('/src', ''))
      .pipe(gulp.dest(`${templatePackagesPath}/${target}`));
  }
  function copyCompile () {
    return gulp
      .src(
        `${packagesPath}/${target}/src/**/*.{css,d.ts,json,ttf,woff,woff2,html,svg,jpg,jpeg,png}`,
      )
      .pipe(gulp.dest(`${templatePackagesPath}/${target}`));
  }
  function copyConfig () {
    const public = gulp.src([`${packagesPath}/${target}/public/**/*`]);
    const config = gulp.src([`${packagesPath}/${target}/*.{js,json}`]);
    return merge(
      public.pipe(gulp.dest(`${templatePackagesPath}/${target}/public`)),
      config
        .pipe(vueConfigCompile({ packages }))
        .pipe(gulp.dest(`${templatePackagesPath}/${target}`)),
    );
  }
  const tasks = [lessCompile, copyCompile, vueCompile, tsCompile, jsCompile];
  if (isEntry) {
    tasks.push(copyConfig);
  }

  return gulp.series(...tasks);
}
function themeTask () {
  function jsCompile (options) {
    return gulp
      .src(`${packagesPath}/theme/**/*.{js,jsx}`)
      .pipe(gulp.dest(`${templatePackagesPath}/theme`));
  }
  function lessCompile () {
    return gulp
      .src(`${packagesPath}/theme/**/*.{less,css}`)
      .pipe(gulp.dest(`${templatePackagesPath}/theme`));
  }
  const utilsTask = gulp.series(lessCompile, jsCompile);
  return utilsTask;
}
function helpersTask () {
  return () =>
    gulp
      .src([`${packagesPath}/@build-helpers/**/*`])
      .pipe(gulp.dest(`${templatePackagesPath}/@build-helpers`));
}
// 处理别名和插件管理
function packageTask () {
  return () =>
    gulp
      .src([`${packagesPath}/**/package.json`])
      .pipe(package())
      .pipe(gulp.dest(`${templatePackagesPath}/`));
}
function zipTask () {
  const zipAllPath = `${zipPath}/${lerna.version}.zip`;
  if (fs.existsSync(zipAllPath)) {
    fs.removeSync(zipAllPath);
  }
  return () =>
    gulp
      .src([`${templatePackagesPath}/**/*`])
      .pipe(zip(`${lerna.version}.zip`))
      .pipe(gulp.dest(zipPath))
      .on('end', () => {
        gulp.src([templatePackagesPath]).pipe(clean({ force: true }));
      });
}
const tasks = [cleanTask(), themeTask(esOptions), packageTask(), helpersTask()];
Object.keys(packages).forEach((key) => {
  const esTsak = allTask(key, 'es', esOptions);
  tasks.push(esTsak);
});
tasks.push(zipTask());
module.exports.default = gulp.series(...tasks);
