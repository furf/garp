import gulp from 'gulp';


export const WATCH_TASK = 'watch';


/**
 * Watch asset and CSS directories and perform the respective tasks on change.
 */
export function watch() {

  const {
    INCLUDE_HTML_EJS,
    BUILD_HTML_EJS_TASK,
  } = require('./build-html-ejs');

  const {
    INCLUDE_HTML_JADE,
    BUILD_HTML_JADE_TASK,
  } = require('./build-html-jade');

  const {
    INCLUDE_HTML_SWIG,
    BUILD_HTML_SWIG_TASK,
  } = require('./build-html-swig');

  const {
    INCLUDE_CSS_LESS,
    BUILD_CSS_LESS_TASK,
  } = require('./build-css-less');

  const {
    INCLUDE_CSS_SASS,
    INCLUDE_CSS_SCSS,
    BUILD_CSS_SASS_TASK,
  } = require('./build-css-sass');

  const {
    INCLUDE_CSS_STYL,
    BUILD_CSS_STYLUS_TASK,
  } = require('./build-css-stylus');

  const {DATA_DIR} = require('./constants');

  gulp.watch([INCLUDE_HTML_EJS], [BUILD_HTML_EJS_TASK]);
  gulp.watch([INCLUDE_HTML_JADE], [BUILD_HTML_JADE_TASK]);
  gulp.watch([INCLUDE_HTML_SWIG], [BUILD_HTML_SWIG_TASK]);
  gulp.watch([INCLUDE_CSS_LESS], [BUILD_CSS_LESS_TASK]);
  gulp.watch([INCLUDE_CSS_SASS, INCLUDE_CSS_SCSS], [BUILD_CSS_SASS_TASK]);
  gulp.watch([INCLUDE_CSS_STYL], [BUILD_CSS_STYLUS_TASK]);
  gulp.watch([`${DATA_DIR}/**/*`], [
    BUILD_HTML_EJS_TASK,
    BUILD_HTML_JADE_TASK,
    BUILD_HTML_SWIG_TASK,
  ]);

}


// Export task.
gulp.task(WATCH_TASK, watch);
