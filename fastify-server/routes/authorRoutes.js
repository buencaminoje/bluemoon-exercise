const authorRoutes = async (fastify, options) => {
  const SUCCESS_MESSAGE = 'An author has been succesfully';
  const ERROR_MESSAGE = "There's a problem in author";

  fastify.post('/authors', async (request, reply) => {
    let response = await fastify.knex.authorService.create(request.body)
      .catch(er => {
        return { responseMessage: `${ERROR_MESSAGE} adding!` };
      });
    if (!response.hasOwnProperty('responseMessage')) {
      response = { responseMessage: `${SUCCESS_MESSAGE} added!` };
    }
    return response;
  });
};

module.exports = authorRoutes;
