const server = require('fastify')({ logger: true });

let authors = [
  {
    id: 1,
    name: 'Jake Buencamino',
    pen_name: 'Jake',
    birthdate: '1998-02-20'
  }
];

// Request list of authors
server.get('/authors', async (request, reply) => {
  return { authors };
});

// Delete author using id
server.delete('/authors/:id', async (request, reply) => {
  const authors_length = authors.length;
  authors = authors.filter(x => {
    return x.id != request.params.id;
  });

  if (authors_length == authors.length) {
    return { message: 'No authors found with the provided data' };
  } else {
    return { message: 'Author has been succesfully deleted!' };
  }
});

// Update author with provided id
server.put('/authors/:id', async (request, reply) => {
  const index = authors.map(function (item) {
    return String(item.id);
  }).indexOf(request.params.id);

  if (index >= 0) {
    authors[index].name = request.body.name || authors[index].name;
    authors[index].pen_name = request.body.pen_name || authors[index].pen_name;
    authors[index].birthdate = request.body.birthdate || authors[index].birthdate;
    return { message: 'Author has been succesfully updated', authors };
  } else {
    return { message: 'No authors found with the provided data' };
  }
});

// Add author
server.post('/authors', async (request, reply) => {
  const authors_length = authors.length;
  authors.push({
    id: authors.length + 1,
    name: request.body.name,
    pen_name: request.body.pen_name,
    birthdate: request.body.birthdate
  });
  if (authors_length != authors.length) {
    return { message: 'Author has been succesfully added!' };
  } else {
    return { message: 'No authors found with the provided data' };
  }
});

// Register fastify-formbody to support www-form-encoded body type
server.register(require('fastify-formbody'));

const start = async () => {
  try {
    await server.listen(3000);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();

module.exports = server;