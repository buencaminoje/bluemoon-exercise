import API from '../../apiConnection';

async function getAuthors () {
  return await API.get('authors')
    .then(res => {
      return res.data;
    }).catch(res => {
      throw res;
    });
}

async function createAuthor (author) {
  return await API.post('authors', author)
    .then(res => {
      return res.data;
    }).catch(res => {
      throw res;
    });
}

async function updateAuthor (id, author) {
  return await API.put('authors/' + id, author)
    .then(res => {
      return res.data;
    }).catch(res => {
      throw res;
    });
}

async function deleteAuthor (id) {
  return await API.delete('authors/' + id)
    .then(res => {
      return res.data;
    }).catch(res => {
      throw res;
    });
}

export { getAuthors, createAuthor, updateAuthor, deleteAuthor };
