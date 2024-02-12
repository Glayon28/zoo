const gulp = require("gulp");
const browserSync = require("browser-sync").create();
const sass = require("gulp-sass")(require("sass"));
const rename = require("gulp-rename");
const cleanCSS = require("gulp-clean-css");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");

function server() {
  browserSync.init({
    server: {
      baseDir: "src",
    },
  });
}

function styles() {
  return gulp
    .src("src/scss/*.+(scss|sass)")
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(
      rename({
        prefix: "",
        suffix: ".min",
      })
    )
    .pipe(
      postcss([
        autoprefixer({
          cascade: false,
        }),
      ])
    )
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(gulp.dest("src/css"))
    .pipe(browserSync.stream());
}

function watch() {
  gulp.watch("src/scss/*.+(scss|sass)", styles);
  gulp.watch("src/*.html").on("change", browserSync.reload);
}

const build = gulp.parallel(watch, server, styles);

exports.styles = styles;
exports.watch = watch;
exports.server = server;
exports.default = build;
