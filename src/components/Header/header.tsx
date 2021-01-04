import React from 'react';
import { useDispatch } from 'react-redux';
import './header.css';
import { Button, Typography } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { actionCreator } from '../../store/actions';

export default function Header() {
  const dispatch = useDispatch();

  return (
    <header className='header'>
      <div className='header-content'>
        <Typography.Title level={2} className='header-title'>
          News list
        </Typography.Title>
        <Button
          ghost
          icon={<PlusOutlined />}
          onClick={() => dispatch(actionCreator().changeModalVisability())}
        >
          Add new post
        </Button>
      </div>
    </header>
  );
}
