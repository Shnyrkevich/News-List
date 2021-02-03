import './rss-news.css';
import React from 'react';
import { Button, Card, Col, Row, Spin, Typography } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentRssNews, getRssNewsLoadingStatus, getRssNewsSources } from '../../store/selectors/rss-news-selector';
import { NavLink, Route } from 'react-router-dom';
import { RssNewsSource } from '../../store/reducers/rssNewReducer';
import { getCurrentRssNewsThunkCreator } from '../../store/thunks/rss-news-thunk';

export default function RssNewsPage() {
  const dispatch = useDispatch();
  const rssSources = useSelector(getRssNewsSources);
  const loadingStatus = useSelector(getRssNewsLoadingStatus);
  const currentNews = useSelector(getCurrentRssNews);
  
  return ( 
    <div className='rss-news-container'>
      {
        !loadingStatus ?
        <>
          <Route path='/rss' exact={true}>
            <div className="rss-news-page-header">
              <Typography.Title level={3}>RSS News <SmileOutlined /></Typography.Title>
              <Typography.Text>Please, select your favourite News</Typography.Text>
              <div className="rss-news_button-container">
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
          </Route>
          <Route path={'/rss/:source'} exact={true}>
            <Typography.Title level={3}>{currentNews?.description}</Typography.Title>
            <div className="rss-news_cards-container">
              {
                currentNews?.sourceNewsData.map((el: any) => (
                  <Card
                    title={el.title}
                    bordered={false}
                    extra={<a href={el.linl}>Link</a>}
                  >
                    {el.description}
                  </Card>
                ))
              }
            </div>
          </Route>
        </> :
        <Spin size="large" />
      }
    </div>
  );
}