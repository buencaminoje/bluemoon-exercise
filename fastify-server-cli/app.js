'use strict';

const path = require('path');
const AutoLoad = require('fastify-autoload');

module.exports = async function (fastify, opts) {
  // Place here your custom code!
  await fastify.register(require('fastify-cors'));
  await fastify.register(require('fastify-formbody'));
  // Do not touch the following lines

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  await fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: Object.assign({}, opts)
  });

  // This loads all plugins defined in routes
  // define your routes in one of these
  await fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    options: Object.assign({}, opts)
  });
};
