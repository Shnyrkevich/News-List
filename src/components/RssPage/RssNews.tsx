import React, { useState } from 'react';
import { Card, PageHeader } from 'antd';
import { useSelector } from 'react-redux';
import { getCurrentRssNews} from '../../store/selectors/rss-news-selector';
import { Redirect, useParams } from 'react-router-dom';

type Source = {
  source: string
}

export default function RssNews() {
  let { source }: any = useParams<Source | {}>();
  const currentNews = useSelector(getCurrentRssNews);
  const [redirectStatus, setRedirectStatus] = useState<boolean>(false);

  useState(() => {
    if ( !currentNews ) {
      setRedirectStatus(true);
    }
  });

  return !redirectStatus ? 
    <>
      <PageHeader
        className='site-page-header'
        onBack={() => setRedirectStatus(true)}
        title={`${source.toUpperCase()}`}
        subTitle='Last 10 news'
      />
      <div className='rss-news_cards-container'>
        {
          currentNews?.map((el: any, ind: number) => (
            <Card
              bordered={false}
              key={ind}
            >
              <div className='card-header'>
                <a href={el.link}>{el.title}</a>
              </div>
              <div
                className='card-content'
                dangerouslySetInnerHTML={{ __html: el.description }}
              ></div>
            </Card>
          )) 
        }
      </div>
    </> :
    <Redirect from='/rss/:source' to='/rss' />;
}