import React from 'react';
import { Button,Typography } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { getRssNewsSources } from '../../store/selectors/rss-news-selector';
import { NavLink } from 'react-router-dom';
import { RssNewsSource } from '../../store/reducers/rssNewReducer';
import { getCurrentRssNewsThunkCreator } from '../../store/thunks/rss-news-thunk';

export default function DefaultPageOfsNewsPage() {
  const dispatch = useDispatch();
  const rssSources = useSelector(getRssNewsSources);

  return ( 
    <div className='rss-news-page-header'>
      <Typography.Title level={3}>RSS News <SmileOutlined /></Typography.Title>
      <Typography.Text>Please, select your favourite News</Typography.Text>
      <div className='rss-news_button-container'>
        {
          rssSources.map((el: RssNewsSource, ind: number) => (
          <Button
            key={ind}
            onClick={() => dispatch(getCurrentRssNewsThunkCreator(el.sourceLink))}
          >
            <NavLink
              to={`/rss/${el.sourceName.toLowerCase()}`}
            >
              {el.sourceName}
            </NavLink>
          </Button>))
        }
      </div>
    </div>
  );
}