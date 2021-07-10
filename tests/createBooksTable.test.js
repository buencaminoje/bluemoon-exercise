const tap = require('tap');
const Knex = require('knex');

tap.test('Check Table', t => {
  let knex;
  tap.doesNotThrow(function () {
    knex = Knex({
      client: 'pg',
      connection: {
        host: 'localhost',
        user: 'postgres',
        password: 'root',
        database: 'library'
      }
    });
  });

  const booksResponse = knex.schema.hasTable('books');
  const booksAuthorsResponse = knex.schema.hasTable('book_authors');

  Promise.all([booksResponse, booksAuthorsResponse])
    .then((response) => {
      if (response[0] && response[1]) {
        t.ok('Table does exists!');
      } else {
        t.notOk('One of the required table does not exists!');
      }
      t.end();
    })
    .catch(() => {
      t.notOk('There is a problem with the Postgre Connection!');
    });

  tap.teardown(function () {
    knex.destroy();
  });
});
