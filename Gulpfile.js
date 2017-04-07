const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('styles', () => {
  gulp.src('sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css/'));
});

gulp.task('default', () => {
  gulp.watch('sass/**/*.scss', ['styles']);
});
