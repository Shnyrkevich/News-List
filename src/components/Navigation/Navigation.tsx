import React from 'react';
import './navigation.css';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav className='navigation'>
      <NavLink
        exact 
        to='/'>
          Home
      </NavLink>
      <NavLink
        to='/currencies'
      >
        Currencies
      </NavLink>
    </nav>
  );
}