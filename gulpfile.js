var gulp = require("gulp");
var browserSync = require("browser-sync").create();
var sass = require("gulp-sass")(require("sass"));

gulp.task("serve", function () {
  browserSync.init({
    server: "./",
  });

  gulp.watch("./scss/*.scss", gulp.series("buildCSS"));
  gulp.watch("./scripts/*.js", gulp.series("scripts"));
  gulp.watch("./*.html").on("change", browserSync.reload);
});

gulp.task("buildCSS", function () {
  return gulp
    .src(["./scss/*.scss"])
    .pipe(
      sass({
        includePaths: ["node_modules"],
      })
    )
    .pipe(gulp.dest("./dest/styles"))
    .pipe(browserSync.stream());
});

gulp.task("scripts", function () {
  return gulp
    .src("./scripts/**/*.js")
    .pipe(gulp.dest("./dest/script"))
    .pipe(browserSync.stream());
});

gulp.task("start", gulp.series("serve", "buildCSS", "scripts"));
