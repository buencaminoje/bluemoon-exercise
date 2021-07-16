import React from 'react';
import logo from '../../logo.svg';

class CreateComponent extends React.Component {
  render () {
    return (
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>Create Component</p>
      </header>
    );
  }
}

export default CreateComponent;
