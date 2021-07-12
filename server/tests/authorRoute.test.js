const tap = require('tap');
const server = require('../authorRoute');
const request = require('request');
tap.test('Author Data Test', (test) => {
  test.plan(4);

  server.listen(0, (err) => {
    const url = 'http://localhost:' + server.server.address().port + '/authors';

    test.test('Check Getting List of Authors', test1 => {
      request({
        method: 'GET',
        url: url
      }, (err, response, body) => {
        try {
          const responseData = JSON.parse(body);
          if (err !== null || response.statusCode !== 200 || Object.keys(responseData)[0] !== 'authors') {
            test1.notOk('Failed to fetch authors list');
          } else {
            test1.ok('Successfully fetched authors list');
          }
        } catch (err) {
          test1.notOk('Failed to fetch authors list');
        }
        test1.end();
      });
    });

    test.test('Check Adding of Authors', test2 => {
      request({
        method: 'POST',
        url: url,
        form: {
          name: 'Test Name',
          pen_name: 'Test Pen Name',
          birthdate: '2012-02-02'
        }
      }, (err, response, body) => {
        try {
          const responseData = JSON.parse(body);
          test2.equal(responseData.message, 'Author has been succesfully added!');
        } catch (err) {
          test2.notOk('Failed to add authors');
        }
        test2.end();
      });
    });

    // Updating of author with provided id - 1
    test.test('Check Updating of Authors', test2 => {
      request({
        method: 'PUT',
        url: url + '/1',
        form: {
          name: 'Test Name',
          pen_name: 'Test Pen Name',
          birthdate: '2012-02-02'
        }
      }, (err, response, body) => {
        try {
          const responseData = JSON.parse(body);
          test2.equal(responseData.message, 'Author has been succesfully updated');
        } catch (err) {
          test2.notOk('Failed to update authors');
        }
        test2.end();
      });
    });

    // Deletion of author with provided id - 1
    test.test('Check Deletion of Authors', test2 => {
      request({
        method: 'DELETE',
        url: url + '/1',
        form: {
          name: 'Test Name',
          pen_name: 'Test Pen Name',
          birthdate: '2012-02-02'
        }
      }, (err, response, body) => {
        try {
          const responseData = JSON.parse(body);
          test2.equal(responseData.message, 'Author has been succesfully deleted!');
        } catch (err) {
          test2.notOk('Failed to delete authors');
        }
        test2.end();
      });
    });
  });

  tap.teardown(() => {
    server.close();
  });
});
