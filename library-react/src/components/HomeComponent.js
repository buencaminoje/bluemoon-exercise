import '../App.css';
import React from 'react';
import logo from '../logo.svg';

class HomeComponent extends React.Component {
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            Home Component
          </p>
        </header>
      </div>
    );
  }
}

export default HomeComponent;
