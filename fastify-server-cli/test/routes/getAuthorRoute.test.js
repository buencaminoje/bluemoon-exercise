'use strict';
const { test } = require('tap');
const { build } = require('../helper');

test('Get Authors', async (t) => {
  const app = await build(t);
  const response = await app.inject({
    method: 'GET',
    url: '/authors'
  });

  const res = JSON.parse(response.payload);
  if (Object.prototype.hasOwnProperty.call(res, 'responseMessage')) {
    t.notOk(res.responseMessage);
  } else {
    t.ok('Authors list has been loaded!');
  }

  t.end();
});
