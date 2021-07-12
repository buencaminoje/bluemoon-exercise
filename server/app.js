const server = require('fastify')({ logger: true });

server.get('/', async (request, reply) => {
  return { message: 'Hello World' };
});

const start = async () => {
  try {
    await server.listen(3000);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();
