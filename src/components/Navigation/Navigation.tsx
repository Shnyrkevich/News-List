import React, { useState } from 'react';
import './navigation.css';
import { Breadcrumb } from 'antd';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  const [current, setCurrentPage] = useState<string>('home');

  function handleClick(e: any): void {
    console.log('click ', e);
    setCurrentPage(e.key);
  };

  return (
    <Breadcrumb className='navigation'>
      <Breadcrumb.Item>
        <NavLink to='/'>Home</NavLink>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <NavLink to='/currencies'>Currencies</NavLink>
      </Breadcrumb.Item>
    </Breadcrumb>
  );
}