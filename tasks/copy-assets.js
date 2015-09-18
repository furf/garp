import gulp from 'gulp';


export const COPY_ASSETS_TASK = 'copy-assets';


/**
 * Copy non-compiled assets.
 */
export function copyAssets() {

  const {
    PUBLIC_DIR,
    BUILD_DIR,
  } = require('./constants');

  const {INCLUDE_HTML_EJS} = require('./build-html-ejs');
  const {INCLUDE_HTML_JADE} = require('./build-html-jade');
  const {INCLUDE_HTML_SWIG} = require('./build-html-swig');
  const {INCLUDE_CSS_LESS} = require('./build-css-less');
  const {INCLUDE_CSS_SASS, INCLUDE_CSS_SCSS} = require('./build-css-sass');
  const {INCLUDE_CSS_STYL} = require('./build-css-stylus');

  const sources = [
    `${PUBLIC_DIR}/**/*`,
    `!${PUBLIC_DIR}/_*`,
    `!${INCLUDE_HTML_EJS}`,
    `!${INCLUDE_HTML_JADE}`,
    `!${INCLUDE_HTML_SWIG}`,
    `!${INCLUDE_CSS_LESS}`,
    `!${INCLUDE_CSS_SASS}`,
    `!${INCLUDE_CSS_SCSS}`,
    `!${INCLUDE_CSS_STYL}`,
  ];

  return gulp.src(sources, { base: PUBLIC_DIR })
    .pipe(gulp.dest(BUILD_DIR));

}


// Export task.
gulp.task(COPY_ASSETS_TASK, copyAssets);
