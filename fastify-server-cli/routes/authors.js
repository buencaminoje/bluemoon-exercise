'use strict';

module.exports = async function (fastify, opts) {
  const SUCCESS_MESSAGE = 'An author has been succesfully';
  const ERROR_MESSAGE = "There's a problem in author";

  // Insert new author route
  fastify.post('/authors', async (request, reply) => {
    let response = await fastify.knex.author.create(request.body)
      .catch(er => {
        return { responseMessage: `${ERROR_MESSAGE} adding!` };
      });
    if (!Object.prototype.hasOwnProperty.call(response, 'responseMessage')) {
      response = { responseMessage: `${SUCCESS_MESSAGE} added!` };
    }
    return response;
  });

  // Get authors route
  fastify.get('/authors', async (request, reply) => {
    const response = await fastify.knex.author.get()
      .catch(er => {
        return { responseMessage: `${ERROR_MESSAGE} fetching!` };
      });
    return response;
  });

  // Update author route
  fastify.put('/authors/:id', async (request, reply) => {
    let response = await fastify.knex.author.update({
      id: request.params.id,
      author: request.body
    })
      .catch(er => {
        return { responseMessage: `${ERROR_MESSAGE} updating!` };
      });
    if (!Object.prototype.hasOwnProperty.call(response, 'responseMessage') && response) {
      response = { responseMessage: `${SUCCESS_MESSAGE} updated!` };
    } else {
      response = { responseMessage: `${ERROR_MESSAGE} updating!. Author may not exists!` };
    }
    return response;
  });

  // Delete author route
  fastify.delete('/authors/:id', async (request, reply) => {
    let response = await fastify.knex.author.delete({ id: request.params.id })
      .catch(er => {
        return { responseMessage: `${ERROR_MESSAGE} deleting!` };
      });
    if (!Object.prototype.hasOwnProperty.call(response, 'responseMessage') && response) {
      response = { responseMessage: `${SUCCESS_MESSAGE} deleted!` };
    } else {
      response = { responseMessage: `${ERROR_MESSAGE} deleting!. Author may not exists!` };
    }
    return response;
  });
};
