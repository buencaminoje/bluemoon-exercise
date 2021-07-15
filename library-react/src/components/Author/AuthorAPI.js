import API from '../../apiConnection';

 async function getAuthors() {
    return await API.get('authors')
    .then(res => {
        return res.data;
    })
}

async function createAuthor() {
    return await API.post('authors', {
        first_name: 'Jake',
        last_name: 'Buencamino',
        pen_name: 'Jake',
        birthdate: '2012-02-02'
      })
    .then(res => {
        return res.data;
    })
}

async function updateAuthor() {
    return await API.put('authors/1', {
        first_name: 'Jake',
        last_name: 'Buencamino',
        pen_name: 'Jake',
        birthdate: '2012-02-02'
      })
    .then(res => {
        return res.data;
    })
}

async function deleteAuthor() {
    return await API.delete('authors/2')
    .then(res => {
        return res.data;
    })
}

export { getAuthors, createAuthor, updateAuthor, deleteAuthor }
