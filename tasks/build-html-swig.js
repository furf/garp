import gulp from 'gulp';
import {
  PUBLIC_DIR,
  BUILD_DIR,
  DATA_DIR,
} from './constants';


export const BUILD_HTML_SWIG_TASK = 'build-html-swig';
export const INCLUDE_HTML_SWIG = `${PUBLIC_DIR}/**/*.swig`;
export const EXCLUDE_HTML_SWIG = `!${PUBLIC_DIR}/**/_*.swig`;


/**
 * Compile Swig templates.
 */
export function buildHTMLSwig() {

  const data = require('gulp-data');
  const {importLocalData} = require('./helpers');
  const swig = require('gulp-swig');

  const sources = [
    INCLUDE_HTML_SWIG,
    EXCLUDE_HTML_SWIG,
  ];

  return gulp.src(sources)
    .pipe(data(
      importLocalData({
        base: PUBLIC_DIR,
        data: DATA_DIR,
      })
    ))
    .pipe(swig())
    .pipe(gulp.dest(BUILD_DIR));

}


// Export task.
gulp.task(BUILD_HTML_SWIG_TASK, buildHTMLSwig);
