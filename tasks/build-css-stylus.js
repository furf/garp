import gulp from 'gulp';
import {
  PUBLIC_DIR,
  BUILD_DIR,
} from './constants';


export const BUILD_CSS_STYLUS_TASK = 'build-css-stylus';
export const INCLUDE_CSS_STYL = `${PUBLIC_DIR}/**/*.styl`;
export const EXCLUDE_CSS_STYL = `!${PUBLIC_DIR}/**/_*.styl`;


/**
 * Pre-process Stylus stylesheets.
 */
export function buildCSSStylus() {

  const stylus = require('gulp-stylus');

  const sources = [
    INCLUDE_CSS_STYL,
    EXCLUDE_CSS_STYL,
  ];

  return gulp.src(sources)
    .pipe(stylus())
    .pipe(gulp.dest(BUILD_DIR));

}


// Export task.
gulp.task(BUILD_CSS_STYLUS_TASK, buildCSSStylus);
