const authorRoutes = async (fastify, options) => {
  const SUCCESS_MESSAGE = 'An author has been succesfully';
  const ERROR_MESSAGE = "There's a problem in author";

  fastify.post('/authors', async (request, reply) => {
    let response = await fastify.knex.authorService.create(request.body)
      .catch(er => {
        return { responseMessage: `${ERROR_MESSAGE} adding!` };
      });
    if (!Object.prototype.hasOwnProperty.call(response, 'responseMessage')) {
      response = { responseMessage: `${SUCCESS_MESSAGE} added!` };
    }
    return response;
  });

  fastify.get('/authors', async (request, reply) => {
    const response = await fastify.knex.authorService.get()
      .catch(er => {
        return { responseMessage: `${ERROR_MESSAGE} fetching!` };
      });
    return response;
  });

  fastify.put('/authors/:id', async (request, reply) => {
    let response = await fastify.knex.authorService.update({
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

  fastify.delete('/authors/:id', async (request, reply) => {
    let response = await fastify.knex.authorService.delete({ id: request.params.id })
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

module.exports = authorRoutes;
