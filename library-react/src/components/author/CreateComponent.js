import React from 'react';
import page from 'page';
import Author from './';
import logo from '../../logo.svg';
import { Button, Form, Input, DatePicker } from 'antd';

class CreateComponent extends React.Component {
  render () {
    async function onFinish (component, values) {
      const author = new Author();
      if (await author.create(values) === 'An author has been succesfully added!') {
        page.redirect('/');
      }
    }

    const onFinishFailed = (errorInfo) => {};

    return (
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>Create Author</p>
        <div>
          <Form
            name='basic'
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={(values) => onFinish(this, values)}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label='Firstname'
              name='first_name'
              rules={[{ required: true, message: 'Please enter your first name!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label='Lastname'
              name='last_name'
              rules={[{ required: true, message: 'Please enter your last name!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label='Penname'
              name='pen_name'
              rules={[{ required: true, message: 'Please enter your pen name!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label='Birthdate'
              name='birthdate'
              rules={[{ required: true, message: 'Please enter your birthdate!' }]}
            >
              <DatePicker />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type='primary' htmlType='submit'>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </header>
    );
  }
}

export default CreateComponent;
