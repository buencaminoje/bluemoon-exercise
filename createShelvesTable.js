const knex = require('knex')({
  client: 'pg',
  connection: {
    host: 'localhost',
    user: 'postgres',
    password: '',
    database: 'library'
  }
});

createShelves()
  .then(() => {
    return createLevels()
      .then(() => {
        return alterBooks();
      });
  }).catch(() => {})
  .finally(() => {
    knex.destroy();
  });

async function createShelves () {
  await knex.schema.createTable('shelves', function (table) {
    table.increments('s_id').primary();
    table.string('name').notNullable();
    table.string('category').notNullable();
    table.string('location').notNullable();
  });
}

async function createLevels () {
  await knex.schema.createTable('levels', function (table) {
    table.increments('l_id').primary();
    table.integer('s_id');
    table.string('name').notNullable();
    table.foreign('s_id').references('s_id').inTable('shelves').onDelete('CASCADE');
  });
}

async function alterBooks () {
  await knex.schema.alterTable('books', function (table) {
    table.integer('l_id');
    table.foreign('l_id').references('l_id').inTable('levels').onDelete('CASCADE');
  });
}
