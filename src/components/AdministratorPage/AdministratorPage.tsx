import './administration.css';
import React from 'react';
import { useSelector } from 'react-redux';
import { Button, Table, Typography } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { Redirect } from 'react-router-dom';
import { getAuthUser } from '../../store/selectors/user-selectors';
import AddNewRssSourceForm from './AddNewRssSourceForm';
import { getRssNewsSources } from '../../store/selectors/rss-news-selector';

const columns = [
  { title: 'SourceName', dataIndex: 'sourceName', key: 'name', fixed: true, },
  { title: 'SourceUrl', dataIndex: 'sourceLink', key: 'url' },
  {
    title: 'Action',
    dataIndex: 'key',
    key: 'x',
    render: (key: number) => (
      <Button
        type='ghost'
        disabled={key === 0 || key === 1 ? true : false}
      >
        <DeleteOutlined /> Delete
      </Button>
    ),
  },
];

export default function AdministratorPage() {
  const activeUser = useSelector(getAuthUser);
  const sources = useSelector(getRssNewsSources);

  return activeUser?.id === 0 ?
    <div className='administration-container'>
      <Typography.Title level={4}>Add new RssSource Form</Typography.Title>
      <AddNewRssSourceForm />
      <Typography.Title className='sources-table_header' level={4}>Your Sources</Typography.Title>
      <Table
        className='sources-table'
        columns={columns}
        dataSource={sources}
        pagination={false}
        scroll={{ x: 480 }}
      />
    </div> :
    <Redirect to='/' />
}