import React from 'react';
import './navigation.css';
import { Breadcrumb } from 'antd';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
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