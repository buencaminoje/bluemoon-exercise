import React from 'react';
import logo from '../../logo.svg';

class ViewComponent extends React.Component {
  render () {
    return (
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>View Component</p>
      </header>
    );
  }
}

export default ViewComponent;
