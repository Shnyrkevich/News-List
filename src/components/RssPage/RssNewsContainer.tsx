import './rss-news.css';
import React from 'react';
import { Spin } from 'antd';
import { useSelector } from 'react-redux';
import { getRssNewsLoadingStatus} from '../../store/selectors/rss-news-selector';
import { Route, Switch } from 'react-router-dom';
import DefaultPageOfsNewsPage from './DefaultPageOfRssNews';
import RssNews from './RssNews';

export default function RssNewsPage() {
  const loadingStatus = useSelector(getRssNewsLoadingStatus);

  return ( 
    <div className='rss-news-container'>
      {
        !loadingStatus ?
        <Switch>
          <Route path='/rss' exact={true} component={DefaultPageOfsNewsPage} />
          <Route path={'/rss/:source'} exact={true} component={RssNews} />
        </Switch> :
        <Spin size='large' />
      }
    </div>
  );
}