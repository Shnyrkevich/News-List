import React from 'react';
import './navigation.css';
import { NavLink } from 'react-router-dom';
import { Dropdown, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { getRssNewsSources } from '../../store/selectors/rss-news-selector';
import { RssNewsSource } from '../../store/reducers/rssNewReducer';

export default function Navigation() {
  const dispatch = useDispatch();
  const rssSources = useSelector(getRssNewsSources);

  const menu = (
    <Menu>
      {
        rssSources.map((el: RssNewsSource, ind: number) => (
          <Menu.Item key={ind}>
            <NavLink
              to={`/rss/${el.sourceName.toLowerCase()}`}
            >
              {el.sourceName}
            </NavLink>
          </Menu.Item>
        ))
      }
    </Menu>
  ); 

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
      <Dropdown overlay={menu} trigger={['click']}>
        <a
          className='ant-dropdown-link'
          onClick={e => e.preventDefault()}
          style={{ 'width': '80px' }}
        >
          RSSNews <DownOutlined />
        </a>
      </Dropdown>
    </nav>
  );
}