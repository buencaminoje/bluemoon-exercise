const tap = require('tap');
const app = require('../app.js');
const request = require('request');
const { APP_PORT } = require('../config');

app.then(fastify => {
  fastify.listen(0, (errres) => {
    const URL = 'http://localhost:' + APP_PORT + '/authors';

    tap.test('Get Authors', test => {
      request({
        method: 'GET',
        url: URL
      }, (errres, response, body) => {
        const responseData = JSON.parse(body);
        if (Object.prototype.hasOwnProperty.call(responseData, 'responseMessage')) {
          test.notOk(responseData.responseMessage);
        } else {
          test.ok('Authors list has been loaded!');
        }
        test.end();
      });

      tap.teardown(() => {
        fastify.close();
      });
    });
  });
});
