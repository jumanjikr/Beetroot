const gulp = require("gulp");
const { src, dest, parallel } = require("gulp");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");
sass.compiler = require("node-sass");
const autoprefixer = require("gulp-autoprefixer");
const imagemin = require("gulp-imagemin");

const paths = {
  styles: {
    src: "../scss/*.scss",
    dest: "../assets/styles/",
  },
  images: {
    src: "../images/*",
    dest: "../assets/images/",
  },
};

/*
 * Define our tasks using plain functions
 */
function scssTransform() {
  return gulp
    .src(paths.styles.src)
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sass({ outputStyle: "expanded" }).on("error", sass.logError))
    .pipe(
      autoprefixer({
        overrideBrowserslist: "last 3 version",
      })
    )
    .pipe(sourcemaps.write("./"))
    .pipe(gulp.dest(paths.styles.dest));
}

/*
 * Optimize images
 */
function optimizeImages() {
  return gulp
    .src(paths.images.src)
    .pipe(
      imagemin([
        imagemin.gifsicle({ interlaced: true }),
        imagemin.mozjpeg({ quality: 75, progressive: true }),
        imagemin.optipng({ optimizationLevel: 5 }),
        imagemin.svgo({
          plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
        }),
      ])
    )
    .pipe(gulp.dest(paths.images.dest));
}

// Watch files
function watch() {
  gulp.watch(paths.styles.src, scssTransform);
  gulp.watch(paths.images.src, optimizeImages);
}

exports.watch = watch;
