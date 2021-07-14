const tap = require('tap');
const app = require('../app.js');
const request = require('request');
const { APP_PORT } = require('../config');

app.then(fastify => {
  fastify.listen(0, (errres) => {
    const URL = 'http://localhost:' + APP_PORT + '/authors';

    tap.test('Delete Author with Parameter', test => {
      request({
        method: 'DELETE',
        url: URL + '/8'
      }, (errres, response, body) => {
        const responseData = JSON.parse(body);
        test.equal(responseData.responseMessage, 'An author has been succesfully deleted!');
        test.end();
      });

      tap.teardown(() => {
        fastify.close();
      });
    });
  });
});
