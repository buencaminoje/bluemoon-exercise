const tap = require('tap');
const server = require('../app');
const request = require('request');

tap.test('Server Test', (test) => {
  test.plan(2);

  server.listen(0, (err) => {
    test.test('Check Server Initialization', test1 => {
      if (err != null) {
        test1.notOk('Server failed to run!');
      } else {
        test1.ok('Server started succesfully!');
      }
      test1.end();
    });

    test.test('Check Server Root Path', test2 => {
      request({
        method: 'GET',
        url: 'http://localhost:' + server.server.address().port + '/'
      }, (err, response, body) => {
        if (err != null || response.statusCode != 200) {
          test2.notOk('Server does not respond with Status Code 200');
        } else {
          test2.ok('Server responded with Status Code  200');
        }
        test2.end();
      });
    });
  });

  tap.teardown(() => {
    server.close();
  });
});
