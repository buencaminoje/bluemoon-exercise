const tap = require('tap');
const app = require('../app.js');

app.then(fastify => {
  tap.test('Update Author with Parameters', test => {
    updateAuthor();

    async function updateAuthor () {
      try {
        const response = await fastify.knex.authorService.update(
          {
            id: 1,
            author: {
              first_name: 'Test',
              last_name: 'Test',
              pen_name: 'JTest',
              birthdate: '2012-02-02'
            }
          });
        if (response) {
          tap.ok('Author has been updated!');
        } else {
          tap.notOk('Failed to update author!');
        }
        test.end();
      } catch (er) {
        tap.notOk('Failed to update author!');
        test.end();
      }
    }

    tap.teardown(() => {
      fastify.close();
    });
  });
});
