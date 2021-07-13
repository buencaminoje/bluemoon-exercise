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
}

module.exports = fastifyPlugin(function (fastify, options, next) {
  new AuthorService(fastify);
  next();
});
