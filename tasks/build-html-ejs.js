import gulp from 'gulp';
import {
  PUBLIC_DIR,
  BUILD_DIR,
  DATA_DIR,
} from './constants';


export const BUILD_HTML_EJS_TASK = 'build-html-ejs';
export const INCLUDE_HTML_EJS = `${PUBLIC_DIR}/**/*.ejs`;
export const EXCLUDE_HTML_EJS = `!${PUBLIC_DIR}/**/_*.ejs`;


/**
 * Compile EJS templates.
 */
export function buildHTMLEJS() {

  const data = require('gulp-data');
  const {importLocalData} = require('./helpers');
  const ejs = require('gulp-ejs');

  const sources = [
    INCLUDE_HTML_EJS,
    EXCLUDE_HTML_EJS,
  ];

  return gulp.src(sources)
    .pipe(data(
      importLocalData({
        base: PUBLIC_DIR,
        data: DATA_DIR,
      })
    ))
    .pipe(ejs())
    .pipe(gulp.dest(BUILD_DIR));

}


// Export task.
gulp.task(BUILD_HTML_EJS_TASK, buildHTMLEJS);
