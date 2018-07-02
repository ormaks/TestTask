let gulp = require('gulp');
let sass = require('gulp-sass');
let browserSync = require('browser-sync');

gulp.task('sass', function () {
    return gulp.src('app/sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({stream: true}))
});
gulp.task('watch',['browser','sass'], function () {

    gulp.watch('app/sass/*.scss', ['sass']);
});

gulp.task('browser', function () {
    browserSync({
        server: {
            baseDir: 'app'
        },
        notify: false
    });
});