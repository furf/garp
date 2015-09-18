import gulp from 'gulp';
import {
  PUBLIC_DIR,
  BUILD_DIR,
} from './constants';


export const BUILD_CSS_LESS_TASK = 'build-css-less';
export const INCLUDE_CSS_LESS = `${PUBLIC_DIR}/**/*.less`;
export const EXCLUDE_CSS_LESS = `!${PUBLIC_DIR}/**/_*.less`;


/**
 * Pre-process LESS stylesheets.
 */
export function buildCSSLess() {

  const less = require('gulp-less');

  const sources = [
    INCLUDE_CSS_LESS,
    EXCLUDE_CSS_LESS,
  ];

  return gulp.src(sources)
    .pipe(less())
    .pipe(gulp.dest(BUILD_DIR));

}


// Export task.
gulp.task(BUILD_CSS_LESS_TASK, buildCSSLess);
