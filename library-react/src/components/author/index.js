import React from 'react';
import { getAuthors, createAuthor, updateAuthor, deleteAuthor } from './AuthorAPI';

export default class Author extends React.Component {
  constructor (props) {
    super(props);
    this.props = props;
  }

  get () {
    getAuthors()
      .then(response => {
        return response;
      }).catch(err => {
        return false;
      });
  }

  create (author = {}) {
    createAuthor(author)
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
    updateAuthor(id, author)
      .then(response => {
        return response.responseMessage;
      }).catch(err => {
        return false;
      });
  }

  delete (id) {
    id = 9;
    deleteAuthor(id)
      .then(response => {
        return response.responseMessage;
      }).catch(err => {
        return false;
      });
  }
}
