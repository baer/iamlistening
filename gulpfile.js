"use strict";

var gulp = require("gulp");
var sass = require('gulp-sass');

gulp.task("copy:js", function () {
  return gulp.src([
    "node_modules/bluebird/js/browser/bluebird.min.js",
    "node_modules/bootstrap-sass/assets/javascripts/bootstrap.min.js",
    "node_modules/d3/d3.min.js",
    "node_modules/whatwg-fetch/fetch.js"
  ])
  .pipe(gulp.dest("public/js/vendor"));
});

gulp.task("copy:fonts", function () {
  gulp.src('node_modules/bootstrap-sass/assets/fonts/bootstrap/*')
    .pipe(gulp.dest('./public/fonts'));
});

gulp.task('sass', function () {
  gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css'));
});

gulp.task("default", ["copy:js", "copy:fonts", "sass"]);
