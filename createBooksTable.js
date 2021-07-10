const knex = require('knex')({
  client: 'pg',
  connection: {
    host: '192.168.1.11',
    user: 'postgres',
    password: 'root',
    database: 'library'
  }
});

createBooks()
  .then(() => {
    return createBookAuthors();
  })
  .catch((response) => {})
  .finally(() => {
    knex.destroy();
  });

async function createBooks () {
  await knex.schema.createTable('books', function (table) {
    table.increments('b_id').primary();
    table.string('title').notNullable();
    table.text('description').notNullable();
    table.date('publish_year').notNullable();
  });
}

async function createBookAuthors () {
  await knex.schema.createTable('book_authors', function (table) {
    table.increments('ba_id').primary();
    table.integer('a_id').unsigned();
    table.integer('b_id').unsigned();
    table.foreign('a_id').references('a_id').inTable('authors').onDelete('SET NULL');
    table.foreign('b_id').references('b_id').inTable('books').onDelete('CASCADE');
    table.unique(['a_id', 'b_id'], 'idx_book_authors');
  });
}
