import gulp from 'gulp';


export const SERVE_TASK = 'serve';


/**
 * Run a simple HTTP server for serving compiled, static assets.
 */
export function serve() {

  const connect = require('gulp-connect');

  const {
    SERVER_PORT,
    BUILD_DIR,
    LIVE_RELOAD,
  } = require('./constants');

  return connect.server({
    port: SERVER_PORT,
    root: BUILD_DIR,
    livereload: LIVE_RELOAD,
  });

}


// Export task.
gulp.task(SERVE_TASK, serve);
