import React from 'react';
import logo from '../../logo.svg';

class ListComponent extends React.Component {
  render () {
    return (
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>List Component</p>
      </header>
    );
  }
}

export default ListComponent;
