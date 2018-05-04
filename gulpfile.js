'use strict';
const
    browserSync = require('browser-sync').create(),
    gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    babel = require('gulp-babel'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    uglifycss = require('gulp-uglifycss'),
    jsImport = require('gulp-js-import'),
    date = new Date(),
    timestamp = date.getTime(),
    replace = require('gulp-replace'),

    // Directories for static files
    projectSrc = './popup/',
    dirSrc = projectSrc + 'src/',
    dirStatic = projectSrc + dirSrc + 'static/',
    dirDist = projectSrc + 'dist/',

    // Static files resources
    jsToCompile = 'js/*.js',
    scssToCompile = 'scss/styles.scss';

function dirConcat(value) { return dirStatic + value; }

/****************************** COMPILING TASKS ******************************/

gulp.task('default', ['js', 'scss'], function() {
    console.log('build process completed');
});

gulp.task('js', ['import'], function() {
    let
        destination = dirDist + 'js/',
        filesFrom = dirSrc + 'js/';

    gulp.src(dirDist + 'js/scripts.js')
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(concat('scripts.min.js'), { newLine: ';' })
        .pipe(uglify()).on('error', console.error)
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(destination))
        // .pipe(notify({
        //     onLast: true,
        //     message: "Native JavaScripts Compiled!"
        // }))
        .on("error", console.error);
});

gulp.task('import', function() {
    return gulp.src(dirSrc + 'js/scripts.js')
        .pipe(jsImport({ hideConsole: true }))
        .pipe(gulp.dest(dirDist + 'js/'));
});

gulp.task('scss', function() {
    let
        destination = dirDist + 'css/';

    gulp.src(dirSrc + scssToCompile)
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(sass({ outputStyle: 'nested' }).on('error', console.error))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(uglifycss())
        .pipe(concat('style.css'), { newLine: ';' })
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(destination))
        .pipe(browserSync.stream())
        // .pipe(notify({
        //     onLast: true,
        //     message: "Native SCSS Compiled!"
        // }))
        .on("error", console.error);
});
gulp.task('version', function() {
    gulp.src(['*.html'])
        .pipe(replace(/\?prover=(.{13})/g, '?prover=' + timestamp))
        .pipe(gulp.dest('.'));
});

/******************************** WATCH TASKS ********************************/
gulp.task('watch:js', ['js'], function() {
    /*notify("Watching SCSS for changes").write('');*/
    gulp.watch(dirSrc + 'js/**/*.js', ['js']);
});

gulp.task('watch:scss', ['scss'], function() {
    /*notify("Watching SCSS for changes").write('');*/
    gulp.watch(dirSrc + 'scss/**/*.scss', ['scss']);
});

gulp.task('watch', ['watch:js', 'watch:scss']);


gulp.task('serv:scss', ['scss'], function() {

    browserSync.init({
        server: "."
    });

    gulp.watch("src/scss/*.scss", ['scss']);
    gulp.watch("**/*.html").on('change', browserSync.reload);
});

gulp.task('serv', ['scss', 'js'], function() {

    browserSync.init({
        server: "."
    });

    gulp.watch("src/scss/*.scss", ['scss']);
    gulp.watch("src/js/*.js", ['js']).on('change', browserSync.reload);
    gulp.watch("**/*.html").on('change', browserSync.reload);
});