const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
gulp.task('default', function () {
    nodemon({ script: './src/index.ts', ext: 'ts,js,html,css' });
});
//# sourceMappingURL=Gulpfile.js.map