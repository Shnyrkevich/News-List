import React, { useState, useRef, useEffect } from 'react';
import { Form, Input, Button, Modal, message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreator } from '../../store/actions';
import { IUser } from '../../store/reducers/userAuthorizationReducer';
import { getAuthorizationModalVisability } from '../../store/selectors/modal-windows-selectors';
import { getUsers } from '../../store/selectors/user-selectors';

type IForm = {
  login: string
  password: string
  confirm?: string
}

export default function AuthorizationModal() {
  const dispatch = useDispatch();
  const users: IUser[] = useSelector(getUsers);
  const visability = useSelector(getAuthorizationModalVisability);
  const [registrationStatus, setRegistrationStatus] = useState<boolean>(false);
  const form = useRef<any>(null);

  useEffect(() => {
    if (form.current) {
      resetFrom();
    }
  }, [visability, registrationStatus]);

  const onLogInFinish = (values: IForm) => {
    const userStatus = users.find((el: IUser) => el.login === values.login && el.password === values.password);
    if ( userStatus ) {
      dispatch(actionCreator().logIn(userStatus));
      dispatch(actionCreator().changeAuthorizationModalVisability());
    } else {
      message.error('Incorret login or password');
    }
  };

  const onRegistrationFinish = (values: IForm) => {
    dispatch(actionCreator().addNewUser({
      login: values.login,
      password: values.password,
      avatar: null
    }));
    dispatch(actionCreator().changeAuthorizationModalVisability());
    setRegistrationStatus(false);
  }

  const resetFrom = () => {
    form.current!.resetFields();
  }

  return (
    <Modal
      className='authorization-modal'
      title={registrationStatus ? 'Registration form' : 'LogIn form'}
      visible={visability}
      footer={registrationStatus ? [
        <Button key='back' onClick={() => setRegistrationStatus(false)}>
          Return
        </Button>
      ] : null}
      onCancel={() => dispatch(actionCreator().changeAuthorizationModalVisability())}
    >
      <Form
        ref={form}
        layout='vertical'
        name='user-uthorization'
        onFinish={registrationStatus ? onRegistrationFinish : onLogInFinish}
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
        {
          registrationStatus ? 
          <Form.Item
            name='confirm'
            label='Confirm Password'
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Please confirm your password!',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject('The two passwords that you entered do not match!');
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item> :
          null
        }
        {
          !registrationStatus ? 
          <Form.Item>
            <Button onClick={() => setRegistrationStatus(true)} type='link' block>
              You don't have an account?
            </Button>
          </Form.Item> :
          null
        }
        <Form.Item>
          <Button type='primary' htmlType='submit'>
            { !registrationStatus ? 'Log In' : 'Sign In' }
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};