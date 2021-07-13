const knex = require('knex');
const fastifyPlugin = require('fastify-plugin');

const {
  DB_SQL_CLIENT,
  DB_SQL_HOST,
  DB_SQL_USER,
  DB_SQL_PASSWORD,
  DB_SQL_NAME
} = require('../config');

const knexConnector = async (fastify, opts, next) => {
  const db = await knex({
    client: DB_SQL_CLIENT,
    connection: {
      host: DB_SQL_HOST,
      user: DB_SQL_USER,
      password: DB_SQL_PASSWORD,
      database: DB_SQL_NAME
    }
  });
  fastify.decorate('knex', db);
};

module.exports = fastifyPlugin(knexConnector);
