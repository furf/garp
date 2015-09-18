import gulp from 'gulp';
import {
  PUBLIC_DIR,
  BUILD_DIR,
  DATA_DIR,
} from './constants';


export const BUILD_HTML_JADE_TASK = 'build-html-jade';
export const INCLUDE_HTML_JADE = `${PUBLIC_DIR}/**/*.jade`;
export const EXCLUDE_HTML_JADE = `!${PUBLIC_DIR}/**/_*.jade`;


/**
 * Compile Jade templates.
 */
export function buildHTMLJade() {

  const data = require('gulp-data');
  const {importLocalData} = require('./helpers');
  const jade = require('gulp-jade');

  const sources = [
    INCLUDE_HTML_JADE,
    EXCLUDE_HTML_JADE,
  ];

  return gulp.src(sources)
    .pipe(data(
      importLocalData({
        base: PUBLIC_DIR,
        data: DATA_DIR,
      })
    ))
    .pipe(jade({
      pretty: true,
    }))
    .pipe(gulp.dest(BUILD_DIR));

}


// Export task.
gulp.task(BUILD_HTML_JADE_TASK, buildHTMLJade);
