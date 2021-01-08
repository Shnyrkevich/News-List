import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './header.css';
import { Button, Typography, Space, Avatar, Dropdown, Menu, Popconfirm } from 'antd';
import { UserOutlined, EditOutlined, DeleteOutlined, ExportOutlined } from '@ant-design/icons';
import { actionCreator } from '../../store/actions';
import { IActiveUser } from '../../store/reducers/userAuthorizationReducer';

export default function Header() {
  const authUser: IActiveUser = useSelector((state: any) => state.userAuthorizationReducer.activeUser);
  const dispatch = useDispatch();

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

  const menu = (
    <Menu onClick={handleDropdownClick}>
      <Menu.Item key='1'>
        Edit <EditOutlined />
      </Menu.Item>
      <Menu.Item key='2'>
        <Popconfirm title='Are you sure'
          okText='Yes'
          cancelText='No'
          onConfirm={() => {
            if (authUser.user) {
              dispatch(actionCreator().deleteUser(authUser.user.id))
            }
          }}>
          Delete <DeleteOutlined />
        </Popconfirm>
      </Menu.Item>
      <Menu.Item key='3'>
        Exit <ExportOutlined />
      </Menu.Item>
    </Menu>
  );

  return (
    <header className='header'>
      <div className='header-content'>
        <Typography.Title level={2} className='header-title'>
          News list
        </Typography.Title>
        {
          authUser.user ?
          <Dropdown overlay={menu} trigger={['click']}>
            <Space align='center'>
              {authUser.user.avatar ? (
                <Avatar src={authUser.user.avatar} size={28} />
              ) : (
                <Avatar icon={<UserOutlined />} size={28} />
              )}
              <Space direction='vertical'>
                <Typography.Text className='post-container_user-name' style={{color: 'white'}}>{authUser.user.login}</Typography.Text>
              </Space>
            </Space>
          </Dropdown> :
          <Button onClick={() => dispatch(actionCreator().changeAuthorizationModalVisability())}>
            LogIn
          </Button>
        }
      </div>
    </header>
  );
}
