const gulp = require('gulp');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const gulpMergePresets = require('./utils/gulp-transform-preset');
const gulpTransformVars = require('./utils/gulp-transform-vars');
const gulpMergeVars = require('./utils/gulp-merge-stream-vars');
const less = require('gulp-less');

function pcBase (cb) {
  const antdStream = gulp
    .src('core/antd-override/**/*.less')
    .pipe(gulpTransformVars());
  gulp
    .src('core/theme/*.less')
    .pipe(concat('vars.less'))
    .pipe(gulpTransformVars('globalVars'))
    .pipe(gulpMergeVars(antdStream, 'modifyVars'))
    .pipe(
      rename({
        extname: '.json',
      }),
    )
    .pipe(gulp.dest('core'))
    .on('finish', cb);
}

function preset (cb) {
  gulp
    .src(['presets/**/*.less', '!presets/**/antd-override.less'])
    .pipe(gulpTransformVars())
    .pipe(
      rename({
        extname: '.js',
        basename: 'index',
      }),
    )
    .pipe(gulpMergePresets())
    .pipe(gulp.dest('presets'))
    .on('finish', cb);
}
function themeInnerAntdOverride (cb) {
  gulp
    .src('presets/**/antd-override.less')
    .pipe(less())
    .pipe(gulp.dest('presets'))
    .on('finish', cb);
}

gulp.task('build', gulp.series(pcBase, preset, themeInnerAntdOverride));
