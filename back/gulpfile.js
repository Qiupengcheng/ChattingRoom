var gulp = require('gulp');
var uglify = require('gulp-uglify');
var miniCss = require('gulp-minify-css');
var htmlmin = require('gulp-htmlmin');

const DEST = 'dist/'

gulp.task('default', function(){
  return gulp.src('views/*.html')
    // .pipe(uglify())
    // .pipe(miniCss())
    .pipe(htmlmin({
      collapseWhitespace: true,
      minifyCSS: true,
      minifyJS: true
    }))
    .pipe(gulp.dest(DEST));
})
