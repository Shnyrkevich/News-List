import React, { useRef } from 'react';
import { Form, Input, Button, Modal, message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreator } from '../../store/actions';
import { IUser } from '../../store/reducers/userAuthorizationReducer';

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 6, span: 16 },
};

interface IForm {
  login: string
  password: string
}

export default function EditUserModal() {
  const dispatch = useDispatch();
  const visability: boolean = useSelector((state: any) => state.modalReducer.modalWindow.editUserModalVisability);
  const authUser: IUser = useSelector((state: any) => state.userAuthorizationReducer.activeUser.user);
  const form = useRef<any>(null);

  const onFinish = (values: IForm) => {
    const newData = {
      id: authUser.id,
      ...values
    };
    dispatch(actionCreator().changeUserData(newData));
    message.success('This is a success message');
    dispatch(actionCreator().changeUserModalVisability())
  } 

  return (
    <Modal 
      title={'Edit User data'}
      visible={visability}
      footer={null}
      onCancel={() => dispatch(actionCreator().changeUserModalVisability())}
    >
      <Form
        {...layout}
        ref={form}
        name='user-uthorization'
        onFinish={onFinish}
        initialValues={authUser ? {
          login: authUser.login,
          password: authUser.password,
        } : {
          login: '',
          password: '',
        }}
      >
        <Form.Item
          label='Login'
          name='login'
          rules={[{ required: true, message: 'Please input your login!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label='Password'
          name='password'
          rules={[{ required: true, message: 'Please input your password!' }]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type='primary' htmlType='submit'>
            Save
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
}