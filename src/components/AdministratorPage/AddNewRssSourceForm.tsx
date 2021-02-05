import React, { useState, useEffect } from 'react';
import { Form, Input, Button } from 'antd';

export default function AddNewRssSourceForm() {
  const [form] = Form.useForm();
  const [, forceUpdate] = useState({});

  // To disable submit button at the beginning.
  useEffect(() => {
    forceUpdate({});
  }, []);

  const onFinish = (values: any) => {
    console.log('Finish:', values);
  };

  return (
    <Form
      form={form}
      name='rss-news-form'
      layout='inline'
      onFinish={onFinish}
      className='rss-news-form'
    >
      <Form.Item
        name='sourceName'
        rules={[{ required: true, message: 'Please input source name!' }]}
      >
        <Input placeholder='RssSource Name' allowClear />
      </Form.Item>
      <Form.Item
        name='sourceUrl'
        rules={[{ required: true, message: 'Please input source URL!' }]}
      >
        <Input placeholder='RssSource URL' allowClear />
      </Form.Item>
      <Form.Item shouldUpdate={true}>
        {() => (
          <Button
            htmlType='submit'
            disabled={
              !form.isFieldsTouched(true) ||
              !!form.getFieldsError().filter(({ errors }) => errors.length).length
            }
          >
            Add New Source
          </Button>
        )}
      </Form.Item>
    </Form>
  );
};