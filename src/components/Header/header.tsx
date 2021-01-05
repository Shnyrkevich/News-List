import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './header.css';
import { Button, Typography } from 'antd';
import { actionCreator } from '../../store/actions';

export default function Header() {
  const authUser = useSelector((state: any) => state.userAuthorizationReducer.activeUser);
  const dispatch = useDispatch();

  return (
    <header className='header'>
      <div className='header-content'>
        <Typography.Title level={2} className='header-title'>
          News list
        </Typography.Title>
        {
          authUser.isAuth ?
          null :
          <Button onClick={() => dispatch(actionCreator().changeAuthorizationModalVisability())}>
            LogIn
          </Button>
        }
      </div>
    </header>
  );
}
