const { test } = require('tap');
const { build } = require('../helper');

test('Get Authors', async (t) => {
  const fastify = await build(t);

  try {
    const response = await fastify.knex.author.get();
    if (typeof response === 'object') {
      t.ok('Succesfully fetched authors');
    } else {
      t.notOk('Failed to fetch authors');
    }
  } catch (er) {
    t.notOk('Failed to fetch authors');
  }
  t.end();
});
