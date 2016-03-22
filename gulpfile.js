var gulp = require('gulp');

var gulp = require('./gulp')([
    'browserify',
    'compass',
    'release_browserify'
]);


gulp.task('default',['release_browserify', 'compass']);
gulp.task('debug',['browserify', 'compass']);