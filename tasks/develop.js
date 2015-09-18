import gulp from 'gulp';


export const DEVELOP_TASK = 'develop';


/**
 * Compound task which performs clean, build, serve and watch tasks.
 */
export function develop(done) {

  const runSequence = require('run-sequence');
  const {BUILD_TASK} = require('./build');
  const {SERVE_TASK} = require('./serve');
  const {WATCH_TASK} = require('./watch');

  runSequence(BUILD_TASK, SERVE_TASK, WATCH_TASK, done);

}


// Export task.
gulp.task(DEVELOP_TASK, develop);
