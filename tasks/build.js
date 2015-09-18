import gulp from 'gulp';


export const BUILD_TASK = 'build';


/**
 * Clean previous build and perform a complete build.
 */
export function build(done) {

  const runSequence = require('run-sequence');
  const {CLEAN_TASK} = require('./clean');
  const {BUILD_HTML_TASK} = require('./build-html');
  const {BUILD_CSS_TASK} = require('./build-css');
  const {COPY_ASSETS_TASK} = require('./copy-assets');

  runSequence(CLEAN_TASK, [
    BUILD_HTML_TASK,
    BUILD_CSS_TASK,
    COPY_ASSETS_TASK,
  ], done);

}


// Export task.
gulp.task(BUILD_TASK, build);
