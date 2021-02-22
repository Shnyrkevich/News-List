import React, { useState, useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { checkRssNewsSourceOnReadability } from '../../store/thunks/rss-news-thunk';
import { getLinkVerification } from '../../store/selectors/rss-news-selector';

export type FormValues = {
  sourceName: string
  sourceLink: string
}

export default function AddNewRssSourceForm() {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [, forceUpdate] = useState({});
  const linkVerification = useSelector(getLinkVerification);

  useEffect(() => {
    forceUpdate({});
  }, []);

  const onFinish = (values: FormValues) => {
    dispatch(checkRssNewsSourceOnReadability(values));
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
        <Input placeholder='RssSource Name' allowClear disabled={linkVerification ? true : false}/>
      </Form.Item>
      <Form.Item
        name='sourceLink'
        rules={[{ required: true, message: 'Please input source URL!' }]}
      >
        <Input placeholder='RssSource URL' allowClear disabled={linkVerification ? true : false}/>
      </Form.Item>
      <Form.Item shouldUpdate={true}>
        {() => (
          <Button
            type='primary'
            htmlType='submit'
            loading={linkVerification ? true : false}
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