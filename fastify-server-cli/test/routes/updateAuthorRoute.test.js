'use strict';
const { test } = require('tap');
const { build } = require('../helper');

test('Update Author', async (t) => {
  const app = await build(t);
  const response = await app.inject({
    method: 'PUT',
    url: '/authors/30',
    payload: {
      first_name: 'Test',
      last_name: 'Name',
      pen_name: 'Test Name',
      birthdate: '2012-02-02'
    }
  });

  const res = JSON.parse(response.payload);
  t.equal(res.responseMessage, 'An author has been succesfully updated!');
  t.end();
});
