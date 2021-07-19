const { test } = require('tap');
const { build } = require('../helper');

test('Delete Author with Parameter', async (t) => {
  const fastify = await build(t);
  try {
    const response = await fastify.knex.author.delete({ id: 47 });
    if (response) {
      t.ok('Author has been deleted!');
    } else {
      t.notOk('Author delete failed or may not exists!');
    }
  } catch (er) {
    t.notOk('Author delete failed or may not exists!');
  }
  t.end();
});
