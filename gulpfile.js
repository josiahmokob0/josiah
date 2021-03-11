const gulp = require('gulp');
const plumber = require('gulp-plumber');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const wait = require('gulp-wait');
const babel = require('gulp-babel');
const rename = require('gulp-rename');

gulp.task('scripts', () => gulp.src('./docs/js/scripts.js')
  .pipe(plumber(plumber({
    errorHandler(err) {
      console.log(err);
      this.emit('end');
    },
  })))
  .pipe(babel({
    presets: [['@babel/env', { modules: false }]],
  }))
  .pipe(uglify({
    output: {
      comments: '/^!/',
    },
  }))
  .pipe(rename({ extname: '.min.js' }))
  .pipe(gulp.dest('./docs/js')));

gulp.task('styles', () => gulp.src('./docs/scss/styles.scss')
  .pipe(wait(250))
  .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
  .pipe(gulp.dest('./docs/css')));

gulp.task('watch', () => {
  gulp.watch('./docs/js/scripts.js', gulp.series('scripts'));
  gulp.watch('./docs/scss/styles.scss', gulp.series('styles'));
});
