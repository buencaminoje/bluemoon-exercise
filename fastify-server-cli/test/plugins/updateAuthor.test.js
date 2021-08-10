const { test } = require('tap');
const { build } = require('../helper');

test('Update Author with Parameters', async (t) => {
  const fastify = await build(t);
  try {
    const response = await fastify.knex.author.update(
      {
        id: 46,
        author: {
          first_name: 'Test',
          last_name: 'Test',
          pen_name: 'JTest',
          birthdate: '2012-02-02'
        }
      });

    if (response) {
      t.ok('Author has been updated!');
    } else {
      t.notOk('Failed to update author!');
    }
  } catch (er) {
    t.notOk('Failed to update author!');
  }
  t.end();
});
