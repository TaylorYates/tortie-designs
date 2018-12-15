var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

gulp.task('default', ['sass', 'browserSync'], function(){

});

gulp.task('sass', function(){
  return gulp.src('assets/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('assets/css'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: '.'
    },
  });

  gulp.start('watch');
});

gulp.task('reload', function() {
  reload();
});

gulp.task('watch', function(){
  gulp.watch('assets/scss/*.scss', ['sass']);
  gulp.watch('*.html', ['reload']);
  gulp.watch('assets/js/*.js', ['reload']);
});
