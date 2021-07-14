const routes = async (fastify, options) => {
  fastify.register(require('./authorRoutes'));
  fastify.get('/', async (request, reply) => {
    return '';
  });
};

module.exports = routes;
