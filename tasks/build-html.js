import gulp from 'gulp';
import {BUILD_HTML_EJS_TASK} from './build-html-ejs';
import {BUILD_HTML_JADE_TASK} from './build-html-jade';
import {BUILD_HTML_SWIG_TASK} from './build-html-swig';


export const BUILD_HTML_TASK = 'build-html';


// Export task.
gulp.task(BUILD_HTML_TASK, [
  BUILD_HTML_EJS_TASK,
  BUILD_HTML_JADE_TASK,
  BUILD_HTML_SWIG_TASK,
]);
