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
}
