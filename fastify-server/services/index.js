const services = async (fastify, options) => {
  await fastify.register(require('./authorService'), {});
};

module.exports = services;
