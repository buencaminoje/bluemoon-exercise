'use strict';

const fp = require('fastify-plugin');

class Author {
  constructor (fastify) {
    this.fastify = fastify;
  }

  async create (author) {
    const { knex } = this.fastify;
    const insertResponse = await knex('authors').insert(author);
    return Boolean(insertResponse.rowCount);
  }

  async get () {
    const { knex } = this.fastify;
    const response = await knex.select().from('authors');
    return response;
  }

  async update ({ id, author = {} }) {
    const { knex } = this.fastify;
    const response = await knex('authors')
      .update(author)
      .where({ a_id: id });
    return response;
  }

  async delete ({ id }) {
    const { knex } = this.fastify;
    const response = await knex('authors')
      .del()
      .where({ a_id: id });
    return response;
  }
}

module.exports = fp(async function (fastify, opts) {
  fastify.knex.author = new Author(fastify);
}, {
  name: 'authorsService',
  dependencies: ['dbConnection'],
  fastify: '3.x'
});
