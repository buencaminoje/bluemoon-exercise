'use strict';
const { test } = require('tap');
const { build } = require('../helper');

test('Delete Author', async (t) => {
  const app = await build(t);
  const response = await app.inject({
    method: 'DELETE',
    url: '/authors/45'
  });

  const res = JSON.parse(response.payload);
  t.equal(res.responseMessage, 'An author has been succesfully deleted!');
  t.end();
});
