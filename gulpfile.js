const { src, dest, watch, parallel,series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const uglify = require('gulp-uglify-es').default;
const autoprefixer = require('gulp-autoprefixer');
const del=require('del');

function scss(){
   return src('src/scss/style.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(autoprefixer({overrideBrowserslist:['last 10 version'], grid: true}))
    .pipe(concat('style.min.css'))
    .pipe(dest('src/css/'))
    .pipe(browserSync.stream())
};
function scripts(){
    return src([
        'src/js/app.js',
    ])
    .pipe(concat('app.min.js'))
    .pipe(uglify())
    .pipe(dest('src/js/'))
    .pipe(browserSync.stream())
}
function clean(){
    return del('dist')
} 

function watching() {
    watch(['src/scss/**/*.scss'], scss);
    watch(['src/js/**/*.js','!src/js/app.min.js'], scripts);
    watch(['src/*.html']).on('change', browserSync.reload);
}

function browsersync(){
    browserSync.init({
        server: {
            baseDir: "src/"
        }
    });
}

function build(){
    return src([
        'src/*.html',
        'src/css/style.min.css',
        'src/fonts/**/*',
        'src/js/app.min.js',
        'src/img/**/*'
    ], {base: 'src'})
    .pipe(dest('dist'))
}
exports.browsersync=browsersync;
exports.scss=scss;
exports.clean=clean;
exports.scripts=scripts;
exports.watching = watching;

exports.build=series(clean, build);
exports.default=parallel(scss, scripts, browsersync, watching);
