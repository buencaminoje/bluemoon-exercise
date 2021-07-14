const tap = require('tap');
const app = require('../app.js');
const request = require('request');
const { APP_PORT } = require('../config');

app.then(fastify => {
  fastify.listen(0, (errres) => {
    const URL = 'http://localhost:' + APP_PORT + '/authors';

    tap.test('Create Author with Parameters', test => {
      request({
        method: 'PUT',
        url: URL + '/1',
        form: {
          first_name: 'Test Name',
          last_name: 'Test Pen Name',
          pen_name: 'Test',
          birthdate: '2012-02-02'
        }
      }, (errres, response, body) => {
        const responseData = JSON.parse(body);
        test.equal(responseData.responseMessage, 'An author has been succesfully updated!');
        test.end();
      });

      tap.teardown(() => {
        fastify.close();
      });
    });
  });
});
