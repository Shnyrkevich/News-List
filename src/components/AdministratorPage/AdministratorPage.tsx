import './administration.css';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Popconfirm, Table, Typography } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { Redirect } from 'react-router-dom';
import { getAuthUser } from '../../store/selectors/user-selectors';
import AddNewRssSourceForm from './AddNewRssSourceForm';
import { getRssNewsSources } from '../../store/selectors/rss-news-selector';
import { actionCreator } from '../../store/actions';

export default function AdministratorPage() {
  const dispatch = useDispatch();
  const activeUser = useSelector(getAuthUser);
  const sources = useSelector(getRssNewsSources);

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
            <Popconfirm title='Are you sure?'
              okText='Yes'
              cancelText='No'
              onConfirm={() => dispatch(actionCreator().deleteRssNewsSource(key))}
            >
              <DeleteOutlined /> Delete
            </Popconfirm>
          </Button>
      ),
    },
  ];

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