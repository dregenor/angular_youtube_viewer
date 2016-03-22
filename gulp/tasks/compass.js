var gulp = require('gulp');
var compass = require('gulp-compass');

module.exports = function() {
    gulp.src('./src/sass/index.sass')
        .pipe(compass({
            config_file: './config.rb',
            sass:'src/sass',
            css:'dist/css'
        }))
        .pipe(gulp.dest('dist/css'));
};