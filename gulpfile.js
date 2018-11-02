#!/usr/bin/env node

'use strict';
var gulp = require('gulp');
// Requires the gulp-sass plugin
var sass = require('gulp-sass');
var minifyCSS 	= require("gulp-minify-css");
var minifyJS 	= require("gulp-uglify");
var runSequence = require('run-sequence');

gulp.task('sass', function(){
	console.log("compiling scss to css");
  return gulp.src('app/scss/style.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('app/css/'))
});

gulp.task('minifycss', function(done) {
	console.log("Minifying CSS started");
  gulp.src('app/css/style.css')
    .pipe(minifyCSS())
    .pipe(gulp.dest('dist'));
	done();
});

gulp.task('minifyjs', function(done) {
		console.log("Minifying JS started");
  gulp.src('app/js/script.js')
    .pipe(minifyJS())
    .pipe(gulp.dest('dist'));

  done();
});

gulp.task('build', function(callback) {
  runSequence('sass', 'minifyjs', 'minifycss',callback);
});
