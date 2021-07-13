const fastifyPlugin = require('fastify-plugin');

class AuthorService {
  constructor (fastify) {
    this.fastify = fastify;
    fastify.knex.authorService = this;
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
}

module.exports = fastifyPlugin(function (fastify, options, next) {
  new AuthorService(fastify);
  next();
});
