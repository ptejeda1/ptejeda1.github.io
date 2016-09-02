// include the required packages.
var gulp = require('gulp');
var stylus = require('gulp-stylus');
var pug = require('gulp-pug');
var useref = require('gulp-useref');
var browserSync = require('browser-sync').create();



gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: '.'
    },
  });
});


// Options compress
gulp.task('stylus', function () {
  return gulp.src('./stylus/**/*.styl')
    .pipe(stylus({
      compress: true
    }))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.reload({stream: true}));
});

// watches views/html
gulp.task('pug', function() {
  return gulp.src('./pug/**/*.pug')
  .pipe(pug({ pretty: true }))
  .pipe(gulp.dest('.'))
  .pipe(browserSync.reload({stream: true}));
});

// watches script files
gulp.task('scripts', function() {
  return gulp.src('./scripts/**/*.js')
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('useref', function(){
  return gulp.src('./**/*.pug')
    .pipe(useref())
    .pipe(gulp.dest('dist'));
});

// watch the action
  gulp.task('default', ['browserSync', 'stylus', 'pug'], function(){
    gulp.watch('./stylus/**/*.styl', ['stylus']);
    gulp.watch('./**/*.pug', ['pug']);
    gulp.watch('./scripts/**/*.js', ['scripts']);
    // Other watchers
  });
