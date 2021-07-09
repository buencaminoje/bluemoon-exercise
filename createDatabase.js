const knex = require('knex')({
  client: 'pg',
  connection: {
    host: 'localhost',
    user: 'postgres',
    password: ''
  }
});

async function createDatabase () {
  const response = await knex.raw('CREATE DATABASE library');
  if (response) {
    knex.destroy();
  }
}

createDatabase()
  .catch(response => {
    knex.destroy();
  });
