export function importLocalData(opts) {

  const path = require('path');
  const cwd = process.cwd();
  const pathToBaseDir = path.join(cwd, opts && opts.base || '');
  const pathToDataDir = path.join(cwd, opts && opts.data || '');

  return function importLocalDataMiddleware(file, callback) {

    const fs = require('fs');

    // Extract relative route as identifier.
    const relative = path.relative(pathToBaseDir, file.path);
    const dirname = path.dirname(relative);
    const extname = path.extname(relative);
    const basename = path.basename(relative, extname);

    // Look for matching relative route in data directory.
    const pathToData = path.join(pathToDataDir, dirname, `${basename}.js`);

    fs.exists(pathToData, function handleExists(exists) {

      if (!exists) {

        // TODO load JSON

        return callback();

      }

      const data = require(pathToData);

      if (typeof data === 'function') {

        // If data is a function, pass the callback so that
        // it can import data asynchronously.
        data(callback);

      } else {

        // Otherwise, pass the value back immediately.
        callback(null, data);

      }

    });

  };

}
