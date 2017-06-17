var gulp = require('gulp');
var del = require('del');
var webpack = require('webpack-stream');
var connect = require("gulp-connect");

var webpackConfig = require('./webpack.config.js');
var webpackConfigDev = require('./webpack.config.dev.js');

// Code for template components..
gulp.task('build', [], function() {
  return gulp.src('./app/index.js')
    .pipe(webpack(webpackConfig))
    .on('error', function handleError() {
      this.emit('end'); // Recover from errors
    })
    .pipe(gulp.dest('./'));
});

gulp.task('dev:build', [], function() {
  return gulp.src('./app/index.js')
    .pipe(webpack(webpackConfigDev))
    .on('error', function handleError() {
      this.emit('end'); // Recover from errors
    })
    .pipe(gulp.dest('./'));
});

gulp.task('watch:build', function() {
  return gulp.watch('./app/**/*', ['dev:build']);
});

//Start a test server with doc root at build folder and 
//listening to 9001 port. Home page = http://localhost:9001
gulp.task("startServer", function(){
    connect.server({
        root : "./example/build",
        livereload: true,
        fallback: './example/build/index.html'
    });
});

gulp.task('connectAssets', function () {
  connect.server({
    root: './example/assets',
    port: 8001,
    livereload: true
  });
});

/**
 * Main tasks
 */

gulp.task('serve', ['startServer', 'connectAssets']);
gulp.task('watch', ['dev:build', 'watch:build']);
gulp.task('dev', ['dev:build']);
gulp.task('build', ['build']);

gulp.task('default', ['build']);
