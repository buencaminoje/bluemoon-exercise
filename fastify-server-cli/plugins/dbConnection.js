'use strict';
const knex = require('knex');
const fp = require('fastify-plugin');
const {
  DB_SQL_CLIENT,
  DB_SQL_HOST,
  DB_SQL_USER,
  DB_SQL_PASSWORD,
  DB_SQL_NAME
} = require('../config');

module.exports = fp(async function (fastify, opts) {
  fastify.decorate('knex', await knex({
    client: DB_SQL_CLIENT,
    connection: {
      host: DB_SQL_HOST,
      user: DB_SQL_USER,
      password: DB_SQL_PASSWORD,
      database: DB_SQL_NAME
    }
  }));
}, {
  name: 'dbConnection',
  fastify: '3.x'
});
