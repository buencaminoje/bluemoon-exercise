const tap = require('tap');
const app = require('../app.js');

app.then(fastify => {
  tap.test('Create Author with Parameters', test => {
    createAuthor();

    async function createAuthor () {
      try {
        const response = await fastify.knex.authorService.create({
          first_name: 'Jake',
          last_name: 'Buencamino',
          pen_name: 'Jake',
          birthdate: '2012-02-02'
        });

        if (response) {
          tap.ok('New author has been inserted!');
        } else {
          tap.notOk('Failed to insert new author!');
        }
        test.end();
      } catch (er) {
        tap.notOk('Failed to insert new author!');
        test.end();
      }
    }

    tap.teardown(() => {
      fastify.close();
    });
  });
});
