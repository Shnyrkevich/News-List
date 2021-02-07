import React, { useEffect, useRef, useState } from 'react';
import './edit-user-modal.css';
import { Form, Input, Button, Modal, message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreator } from '../../store/actions';
import { IUser } from '../../store/reducers/userAuthorizationReducer';
import AvatarUpload from '../AvatarUpload/AvatarUpload';
import { getAuthUser } from '../../store/selectors/user-selectors';
import { getEditUserModalVisability } from '../../store/selectors/modal-windows-selectors';

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 0, span: 24 },
};

interface IForm {
  login: string
  password: string
}

export default function EditUserModal() {
  const dispatch = useDispatch();
  const visability: boolean = useSelector(getEditUserModalVisability);
  const authUser: IUser | null = useSelector(getAuthUser);
  const [ userAvatar, setUserAvatar ] = useState<null | string>(null);

  useEffect(() => {
    if (authUser) {
      setUserAvatar(authUser.avatar);
    }
  }, [authUser])

  const onFinish = (values: IForm) => {
    if (!authUser) return;
    const newData = {
      id: authUser.id,
      ...values,
      avatar: userAvatar
    };
    dispatch(actionCreator().changeUserData(newData));
    dispatch(actionCreator().changeUserInPosts({
      login: values.login,
      avatar: userAvatar,
      id: authUser.id,
    }));
    message.success('User data saved');
    onCancel();
  }

  const onCancel = (): void => {
    dispatch(actionCreator().changeUserModalVisability());
  }

  return ( 
    authUser ?
    <Modal
      className='edit-user-modal'
      title={'Edit User data'}
      visible={visability}
      footer={null}
      onCancel={onCancel}
    >
      <AvatarUpload imageUrl={userAvatar} setImageUrl={(url: string) => setUserAvatar(url)} />
      <Form
        {...layout}
        name='user-uthorization'
        onFinish={onFinish}
        initialValues={authUser}
      >
        <Form.Item
          label='Login'
          name='login'
          rules={[{ required: true, message: 'Please input your login!' }]}
        >
          <Input/>
        </Form.Item>
        <Form.Item
          label='Password'
          name='password'
          rules={[{ required: true, message: 'Please input your password!' }]}
          hasFeedback
        >
          <Input.Password/>
        </Form.Item>
        <Form.Item {...tailLayout} className='edit-user-modal_button-submit-container'>
          <Button type='primary' htmlType='submit'>
            Save
          </Button>
        </Form.Item>
      </Form>
    </Modal> :
    null
  );
}