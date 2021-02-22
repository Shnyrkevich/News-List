import React, { useEffect, useState } from 'react';
import './header.css';
import { Button, Typography, Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import Navigation from '../Navigation/Navigation';
import LogInAvatar from './LogInAvatar';

export default function Header() { 
  const [shortForm, setShortForm] = useState<boolean>(false);
  const [burgerMenuVisible, setBurgerMenuVisible] = useState<boolean>(false);

  function onPageSizeChange(): void {
    if (document.documentElement.offsetWidth <= 570) {
      setShortForm(true);
    } else {
      setShortForm(false);
      setBurgerMenuVisible(false);
    }
  }

  useEffect(() => {
    if (document.documentElement.offsetWidth <= 570) setShortForm(true);
    setBurgerMenuVisible(false);
    window.addEventListener('resize', onPageSizeChange);
    return () => {
      window.removeEventListener('resize', onPageSizeChange);
    };
  }, [shortForm]);

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
            <div className="header-content_container">
              <Navigation />
              <LogInAvatar />
            </div>
          </> :
          <>
            <div className="header-content_container">
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
            </div>
            <LogInAvatar />
            <Drawer
              title="News List"
              placement="left"
              closable={true}
              onClose={onBurgerMenuClose}
              visible={burgerMenuVisible}
            >
              <Navigation onLinkClick={() => onBurgerMenuClose()} />
            </Drawer>
          </>
        }
      </div>
    </header>
  );
}
