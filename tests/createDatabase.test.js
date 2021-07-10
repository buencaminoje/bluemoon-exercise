const tap = require('tap');
const Knex = require('knex');

tap.test('Check Database', t => {
  let knex;
  tap.doesNotThrow(function () {
    knex = Knex({
      client: 'pg',
      connection: {
        host: 'localhost',
        user: 'postgres',
        password: ''
      }
    });
  });

  getDatabase()
    .catch(response => {
      t.notOk('There is a problem with Postgre Connection');
      t.end();
    });

  async function getDatabase () {
    const response = await knex.select('datname').from('pg_database').where('datname', 'library');
    if (response.length >= 1) {
      t.ok('Database does exist!');
    } else {
      t.notOk('Database does not exist!');
    }
    t.end();
  }

  tap.teardown(function () {
    knex.destroy();
  });
});
