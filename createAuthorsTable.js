const knex = require('knex')({
  client: 'pg',
  connection: {
    host: 'localhost',
    user: 'postgres',
    password: '',
    database: 'library'
  }
});

async function createTable () {
  const response = await knex.schema.createTable('authors', function (table) {
    table.increments('a_id').primary();
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
    table.string('pen_name', 50).notNullable();
    table.date('birthdate').notNullable();
  });

  if (response) {
    knex.destroy();
  }
}

createTable()
  .catch(() => {
    knex.destroy();
  });
