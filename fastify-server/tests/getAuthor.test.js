const tap = require('tap');
const app = require('../app.js');

app.then(fastify => {
  tap.test('Get Authors', test => {
    getAuthor();

    async function getAuthor () {
      try {
        const response = await fastify.knex.authorService.get();
        if (typeof response === 'object') {
          tap.ok('Succesfully fetched authors');
        } else {
          tap.notOk('Failed to fetch authors');
        }
        test.end();
      } catch (er) {
        tap.notOk('Failed to fetch authors');
        test.end();
      }
    }

    tap.teardown(() => {
      fastify.close();
    });
  });
});
