import React from 'react';
import { getAuthors, createAuthor, updateAuthor, deleteAuthor } from './AuthorAPI';

export default class Author extends React.Component {
  constructor (props) {
    super(props);
    this.props = props;
  }

  get () {
    return getAuthors()
      .then(response => {
        return response;
      }).catch(err => {
        return false;
      });
  }

  create (author = {}) {
    return createAuthor(author)
      .then(response => {
        return response.responseMessage;
      }).catch(err => {
        return false;
      });
  }

  update (id, author = {}) {
    id = 1;
    author = {
      first_name: 'Jake',
      last_name: 'Buencamino',
      pen_name: 'Jeyk',
      birthdate: '1998-02-20'
    };
    return updateAuthor(id, author)
      .then(response => {
        return response.responseMessage;
      }).catch(err => {
        return false;
      });
  }

  delete (id) {
    id = 9;
    return deleteAuthor(id)
      .then(response => {
        return response.responseMessage;
      }).catch(err => {
        return false;
      });
  }
}
