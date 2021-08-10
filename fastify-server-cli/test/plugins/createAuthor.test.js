const { test } = require('tap');
const { build } = require('../helper');

test('Create Author with Parameters', async (t) => {
  const fastify = await build(t);

  try {
    const response = await fastify.knex.author.create({
      first_name: 'Jake',
      last_name: 'Buencamino',
      pen_name: 'Jake',
      birthdate: '2012-02-02'
    });

    if (response) {
      t.ok('New author has been inserted!');
    } else {
      t.notOk('Failed to insert new author!');
    }
  } catch (er) {
    t.notOk('Failed to insert new author!');
  }
  t.end();
});
