var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
// var pug = require('gulp-pug');
// var sass = require('gulp-sass');
// var plumber = require('gulp-plumber');
// var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');



gulp.task('pug', function () {
  return gulp.src('./source/*.pug')
    .pipe($.plumber())
    .pipe($.pug({
      pretty: true
    }))
    .pipe(gulp.dest('./dist/'))
});

gulp.task('sass', function () {
  var plugins = [
    autoprefixer({ browsers: ['last 3 version', '> 5%'] }),
  ];

  return gulp.src('./source/css/*.sass')
    .pipe($.plumber())
    .pipe($.sourcemaps.init())
    .pipe($.sass().on('error', $.sass.logError))
    //編譯完成CSS
    .pipe($.postcss(plugins))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('babel', () =>
  gulp.src('./source/js/*.js')
    .pipe($.sourcemaps.init())
    .pipe($.babel({
      presets: ['env']
    }))
    // .pipe($.concat('.js'))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/js'))
);

gulp.task('watch', function () {
  gulp.watch('./source/css/*.sass', ['sass']);
  gulp.watch('./source/*.pug', ['pug']);
  gulp.watch('./source/js/*.js', ['babel']);
});

gulp.task('default', ['pug', 'sass', 'babel', 'watch']);