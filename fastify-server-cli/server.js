'use strict';
// Read port config
const { APP_PORT } = require('./config');
// Read the .env file.
require('dotenv').config();

// Require the framework
const Fastify = require('fastify');

// Require library to exit fastify process
const closeWithGrace = require('close-with-grace');

// Instantiate Fastify
const app = Fastify({
  logger: true
});

// Register application
const appService = require('./app.js');
app.register(appService);

const closeListeners = closeWithGrace({ delay: 500 }, async function ({ signal, err, manual }) {
  if (err) {
    app.log.error(err);
  }
  app.close();
});

app.addHook('onClose', async (instance, done) => {
  closeListeners.uninstall();
  app.knex.destroy();
  done();
});

// Start listening.
app.listen(APP_PORT, (err) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
});


