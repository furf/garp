import gulp from 'gulp';


export const CLEAN_TASK = 'clean';


/**
 * Clean build directory.
 */
export function clean() {

  const del = require('del');
  const {BUILD_DIR} = require('./constants');

  return del(BUILD_DIR);

}


// Export task.
gulp.task(CLEAN_TASK, clean);
