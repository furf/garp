export function get(url, callback) {

  return function handleGet(next) {

    const request = require('request');

    request(url, function handleRequest(error, response, body) {

      if (error) {

        return next(error);

      }

      try {

        const data = JSON.parse(body);
        next(null, callback(data));

      } catch (parseError) {

        next(parseError);

      }

    });

  };

}
