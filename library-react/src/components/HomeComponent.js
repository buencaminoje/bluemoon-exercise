import '../App.css';
import React from 'react';
import logo from '../logo.svg';
import { Button, Table, Row } from 'antd';
import Author from './author';

class HomeComponent extends React.Component {
  constructor (props) {
    super(props);
    this.state = { data: [] };
  }

  render () {

    async function showAuthors (component) {
      const author = new Author();
      component.setState({ data: await author.get() });
    }

    const columns = [
      {
        title: 'First Name',
        dataIndex: 'first_name',
        key: 'a_id'
      }, {
        title: 'Last Name',
        dataIndex: 'last_name',
        key: 'a_id'
      }, {
        title: 'Pen Name',
        dataIndex: 'pen_name',
        key: 'a_id'
      }, {
        title: 'Birthdate',
        dataIndex: 'birthdate',
        key: 'a_id'
      }
    ];

    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            Welcome!
          </p>
          <Row>
            <Button onClick={() => showAuthors(this)} type='primary'>Show all authors</Button>
          </Row>
          <Row>
            <Table dataSource={this.state.data} columns={columns} rowKey='a_id' />
          </Row>
        </header>
      </div>
    );
  }
}

export default HomeComponent;
