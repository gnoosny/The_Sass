'use strict';

let gulp = require('gulp');
let sass = require('gulp-sass');

sass.compiler = require('node-sass');

let sassPath = './assets/sass/app.scss';
let sassPathWatch = './assets/sass/*.scss';
let cssPath = './public/css/';


function sassTaks() {
    return gulp.src(sassPath)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(cssPath));
}

function watch() {
    gulp.watch(sassPathWatch, sassTaks);
}

function defaultTask(sassTaks) {
    sassTaks();
}

exports.watch = watch;
exports.default = defaultTask
