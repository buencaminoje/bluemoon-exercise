'use strict';
const { test } = require('tap');
const { build } = require('../helper');

test('Create Author', async (t) => {
  const app = await build(t);
  const response = await app.inject({
    method: 'POST',
    url: '/authors',
    payload: {
      first_name: 'Test',
      last_name: 'Name',
      pen_name: 'Test Name',
      birthdate: '2012-02-02'
    }
  });

  const res = JSON.parse(response.payload);
  t.equal(res.responseMessage, 'An author has been succesfully added!');
  t.end();
});
