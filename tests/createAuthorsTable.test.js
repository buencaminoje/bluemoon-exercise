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

  getTable()
    .catch(response => {
      t.notOk('There is a problem with Postgre Connection');
      t.end();
    });

  async function getTable () {
    const response = await knex.schema.hasTable('authors');
    if (response) {
      t.ok('Table does exist!');
    } else {
      t.notOk('Table does not exist!');
    }
    t.end();
  }

  tap.teardown(function () {
    knex.destroy();
  });
});
