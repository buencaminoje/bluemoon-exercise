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

async function deleteAuthor () {
  return await API.delete('authors/2')
    .then(res => {
      return res.data;
    });
}

export { getAuthors, createAuthor, updateAuthor, deleteAuthor };
