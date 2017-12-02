var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var imagemin = require('gulp-imagemin');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var jshint = require('gulp-jshint');

gulp.task('jshint', function(){
  gulp.src("app/js/**/*.js")
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(gulp.dest("app/build/js"))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('sass',function(){
  gulp.src("app/styles/scss/**/*.scss")
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest("app/build/css"))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('images', function(){
  return gulp.src('app/images/*.+(png|jpg|gif|svg)')
  .pipe(imagemin())
  .pipe(gulp.dest('app/build/images'))
  .pipe(browserSync.reload({
    stream: true
  }))
});

gulp.task('browserSync', function(){
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
});

gulp.task('watch',['jshint','images','sass','browserSync'], function() {
  gulp.watch('app/images/*', ['images']);
  gulp.watch("app/styles/scss/**/*.scss", ['sass']);
  gulp.watch("app/js/**/*.js", ['jshint']);
});
