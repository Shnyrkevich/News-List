import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './header.css';
import { Button, Typography, Space, Avatar, Dropdown, Menu, Popconfirm, Drawer } from 'antd';
import { UserOutlined, EditOutlined, DeleteOutlined, ExportOutlined, MenuOutlined } from '@ant-design/icons';
import { actionCreator } from '../../store/actions';
import { IUser } from '../../store/reducers/userAuthorizationReducer';
import { getAuthUser } from '../../store/selectors/user-selectors';
import Navigation from '../Navigation/Navigation';

export default function Header() {
  const authUser: IUser | null = useSelector(getAuthUser);
  const dispatch = useDispatch();
  const [shortForm, setShortForm] = useState<boolean>(false);
  const [burgerMenuVisible, setBurgerMenuVisible] = useState<boolean>(false);

  function onPageSizeChange(e: any): void {
    if (e.target.innerWidth <= 360) {
      setShortForm(true);
    } else if (e.target.innerWidth > 360) {
      setShortForm(false);
      setBurgerMenuVisible(false);
    }
  }

  useEffect(() => {
    if (window.innerWidth <= 360) setShortForm(true);
    window.addEventListener('resize', onPageSizeChange);
    return () => {
      window.removeEventListener('resize', onPageSizeChange);
    };
  }, [shortForm]);

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
      <Menu.Item key='2'>
        <Popconfirm title='Are you sure'
          okText='Yes'
          cancelText='No'
          onConfirm={handleOnConfirm}
        >
          Delete <DeleteOutlined />
        </Popconfirm>
      </Menu.Item>
      <Menu.Item key='3'>
        Exit <ExportOutlined />
      </Menu.Item>
    </Menu>
  );

  function onBurgerMenuClose() {
    setBurgerMenuVisible(false);
  }

  return (
    <header className='header'>
      <div className='header-content'>
        {
          !shortForm ?
          <>
            <Typography.Title level={2} className='header-title'>
              News list
            </Typography.Title>
            <Navigation />
          </> :
          <>
            <Button
              className='burger-button'
              type='ghost'
              shape='circle'
              icon={<MenuOutlined size={28}/>}
              onClick={() => setBurgerMenuVisible(true)}
            />
            <Typography.Title level={2} className='header-title'>
              News list
            </Typography.Title>
            <Drawer
              title="News List"
              placement="left"
              closable={true}
              onClose={onBurgerMenuClose}
              visible={burgerMenuVisible}
            >
              <Navigation />
            </Drawer>
          </>
        }
        {
          authUser ?
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
          </Button>
        }
      </div>
    </header>
  );
}
