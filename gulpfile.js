var gulp = require('gulp');
var browserify = require('browserify');
var sass = require('gulp-sass');
var source = require('vinyl-source-stream');

gulp.task('default', function() {
    browserify(__dirname + '/src/js/app.js')
      .transform('babelify', {presets: ['es2015', 'react']})
      .bundle()
      .pipe(source('app.js'))
      .pipe(gulp.dest('dist/js/'));

    gulp.src('src/css/main.css')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css'));

    gulp.src('src/index.html')
        .pipe(gulp.dest('dist'));
});