const gulp = require('gulp');
const sass = require('gulp-sass');
const del = require('del');

gulp.task('styles', () => {
    return gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'));
});
gulp.task('watch', () => {
    gulp.watch('sass/**/*.scss', [sass]);
});

gulp.task('clean', () => {
    return del([
        'css/style.css',
    ]);
});
gulp.task('default', gulp.series(['clean', 'styles']));

// //Watch task
// gulp.task('default', function() {
//     gulp.watch('sass/style.scss', ['styles']);
// });