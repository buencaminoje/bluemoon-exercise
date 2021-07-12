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
        password: '',
        database: 'library'
      }
    });
  });

  const shelvesResponse = knex.schema.hasTable('shelves');
  const levelsResponse = knex.schema.hasTable('levels');

  Promise.all([shelvesResponse, levelsResponse])
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
      t.end();
    });

  tap.teardown(function () {
    knex.destroy();
  });
});
