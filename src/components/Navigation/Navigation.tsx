import React from 'react';
import './navigation.css';
import { NavLink } from 'react-router-dom';
import { Dropdown, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { getRssNewsSources } from '../../store/selectors/rss-news-selector';
import { RssNewsSource } from '../../store/reducers/rssNewReducer';
import { getCurrentRssNewsThunkCreator } from '../../store/thunks/rss-news-thunk';
import { getAuthUser } from '../../store/selectors/user-selectors';

export default function Navigation() {
  const dispatch = useDispatch();
  const activeUser = useSelector(getAuthUser);
  const rssSources = useSelector(getRssNewsSources);

  const menu = (
    <Menu>
      {
        rssSources.map((el: RssNewsSource, ind: number) => (
          <Menu.Item 
            key={ind}
            onClick={() => dispatch(getCurrentRssNewsThunkCreator(el.sourceLink))}
          >
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
      <Dropdown
        overlay={menu}
        trigger={['click']}
        className={ window.location.href.includes('/rss') ? 'active' : '' }
      >
        <NavLink
          className='ant-dropdown-link'
          strict
          style={{ 'width': '85px' }}
          to='/rss'
          isActive={(match) => {
            return match?.url === '/rss' ? true : false;
          }}
        >
          RSSNews <DownOutlined />
        </NavLink>
      </Dropdown>
      {
        activeUser?.id === 0 ?
        <NavLink
          exact 
          to='/admin_room'>
            SiteControl
        </NavLink> : 
        null
      }
    </nav>
  );
}