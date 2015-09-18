import gulp from 'gulp';
import {DEVELOP_TASK} from './develop';


export const DEFAULT_TASK = 'default';


/**
 * Alias the develop task.
 */
gulp.task(DEFAULT_TASK, [DEVELOP_TASK]);
