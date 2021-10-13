var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass')(require('sass'));

gulp.task('serve', function () {

    browserSync.init({
        server: "./app"
    });

    gulp.watch("app/scss/*.scss", gulp.series('buildCSS'));
    gulp.watch("app/scripts/*.js", gulp.series('scripts'));
    gulp.watch("app/*.html").on('change', browserSync.reload);

});

gulp.task('buildCSS', function () {

    return gulp.src(['app/scss/*.scss']).
        pipe(sass({
            includePaths: ['node_modules']
          })).
        pipe(gulp.dest("app/dest/styles")).
        pipe(browserSync.stream());

});

gulp.task('scripts', function () {

    return gulp.src("app/scripts/**/*.js").
        pipe(gulp.dest("app/dest/script")).
        pipe(browserSync.stream());

});

gulp.task('start', gulp.series('serve', 'buildCSS', 'scripts'));