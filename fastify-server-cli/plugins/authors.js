'use strict';

const fp = require('fastify-plugin');

class Author {
  constructor (fastify) {
    this.fastify = fastify;
  }

  /*
 Insert new author in database
 @param author - Object
 @return boolean - Inserted row count
 */
  async create (author) {
    const { knex } = this.fastify;
    const insertResponse = await knex('authors').insert(author);
    return Boolean(insertResponse.rowCount);
  }

  /*
 Get author from database
 @return object
 */
  async get () {
    const { knex } = this.fastify;
    const response = await knex.select().from('authors');
    return response;
  }

  /*
 Update author in database
 @param id - Author ID
 @param author - Object
 @return - Query Response
 */
  async update ({ id, author = {} }) {
    const { knex } = this.fastify;
    const response = await knex('authors')
      .update(author)
      .where({ a_id: id });
    return response;
  }

  /*
 Delete author in database
 @param id - Author ID
 @return - Query Response
 */
  async delete ({ id }) {
    const { knex } = this.fastify;
    const response = await knex('authors')
      .del()
      .where({ a_id: id });
    return response;
  }
}

module.exports = fp(async function (fastify, opts) {
  // Assign Author instance into knex decorator
  fastify.knex.author = new Author(fastify);
}, {
  name: 'authorsService',
  dependencies: ['dbConnection'],
  fastify: '3.x'
});
