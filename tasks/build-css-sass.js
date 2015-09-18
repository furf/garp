import gulp from 'gulp';
import {
  PUBLIC_DIR,
  BUILD_DIR,
} from './constants';


export const BUILD_CSS_SASS_TASK = 'build-css-sass';
export const INCLUDE_CSS_SASS = `${PUBLIC_DIR}/**/*.sass`;
export const INCLUDE_CSS_SCSS = `${PUBLIC_DIR}/**/*.scss`;
export const EXCLUDE_CSS_SASS = `!${PUBLIC_DIR}/**/_*.sass`;
export const EXCLUDE_CSS_SCSS = `!${PUBLIC_DIR}/**/_*.scss`;


/**
 * Pre-process Sass stylesheets.
 */
export function buildCSSSass() {

  const sass = require('gulp-sass');

  const sources = [
    INCLUDE_CSS_SASS,
    INCLUDE_CSS_SCSS,
    EXCLUDE_CSS_SASS,
    EXCLUDE_CSS_SCSS,
  ];

  return gulp.src(sources)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(BUILD_DIR));

}


// Export task.
gulp.task(BUILD_CSS_SASS_TASK, buildCSSSass);
