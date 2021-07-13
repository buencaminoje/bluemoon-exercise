const { APP_PORT } = require('./config');
const fastify = require('fastify')({
  logger: true
});

async function startup () {
  await fastify.register(require('./plugins/db_connection'), {});
  await fastify.listen(APP_PORT, function (err, address) {
    if (err) {
      fastify.log.error(err);
      process.exit(1);
    }
  });
  await fastify.addHook('onClose', (instance, done) => {
    fastify.knex.destroy();
    done();
  });
}

module.exports = startup();
