const tap = require('tap');
const app = require('../app.js');

app.then(fastify => {
  tap.test('Delete Author with Parameter', test => {
    deleteAuthor();

    async function deleteAuthor () {
      try {
        const response = await fastify.knex.authorService.delete({ id: 4 });
        if (response) {
          tap.ok('Author has been deleted!');
        } else {
          tap.notOk('Author delete faiiled or may not exists!');
        }
        test.end();
      } catch (er) {
        tap.notOk('Author delete faiiled or may not exists!');
        test.end();
      }
    }

    tap.teardown(() => {
      fastify.close();
    });
  });
});
