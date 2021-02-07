import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Typography, Space, Avatar, Dropdown, Menu, Popconfirm } from 'antd';
import { UserOutlined, EditOutlined, DeleteOutlined, ExportOutlined } from '@ant-design/icons';
import { actionCreator } from '../../store/actions';
import { IUser } from '../../store/reducers/userAuthorizationReducer';
import { getAuthUser } from '../../store/selectors/user-selectors';

export default function LogInAvatar() { 
  const dispatch = useDispatch();
  const authUser: IUser | null = useSelector(getAuthUser);
  
  function handleDropdownClick(e: any) {
    switch(e.key) {
      case '1':
        dispatch(actionCreator().changeUserModalVisability());
        break;
      case '3':
        dispatch(actionCreator().userExit());
        break;
    }
  }

  function handleOnConfirm(): void {
    if (!authUser) return;
    dispatch(actionCreator().deleteUser(authUser.id));
  }

  const menu = (
    <Menu onClick={handleDropdownClick}>
      <Menu.Item key='1'>
        Edit <EditOutlined />
      </Menu.Item>
      {
        authUser?.id === 0 ?
        null :
        <Menu.Item key='2'>
          <Popconfirm title='Are you sure?'
            okText='Yes'
            cancelText='No'
            onConfirm={handleOnConfirm}
          >
            Delete <DeleteOutlined />
          </Popconfirm>
        </Menu.Item>
      }
      <Menu.Item key='3'>
        Exit <ExportOutlined />
      </Menu.Item>
    </Menu>
  );

  return authUser ?
    <Dropdown overlay={menu} trigger={['click']}>
      <Space align='center'>
        {authUser.avatar ? (
          <Avatar src={authUser.avatar} size={28} />
        ) : (
          <Avatar icon={<UserOutlined />} size={28} />
        )}
        <Space direction='vertical'>
          <Typography.Text className='post-container_user-name' style={{color: 'white'}}>{authUser.login}</Typography.Text>
        </Space>
      </Space>
    </Dropdown> :
    <Button onClick={() => dispatch(actionCreator().changeAuthorizationModalVisability())}>
      LogIn
    </Button>;
}
