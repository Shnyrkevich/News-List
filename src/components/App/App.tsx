import React from 'react';
import './styles.css';
import 'antd/dist/antd.css';
import { BackTop } from 'antd';
import Header from '../Header/header';
import PostsList from '../Posts/posts';
import PostModal from '../Add-post-modal/Modal';
import PostsPagination from '../Pagination/PostsPagination';
import AuthorizationModal from '../AuthorizationModal/AuthorizationModal';
import AppControls from '../App-contolls/AppControls';

export default function App() {
  return (
    <div className='App'>
      <Header />
      <AppControls />
      <PostsList />
      <PostModal />
      <AuthorizationModal />
      <PostsPagination />
      <BackTop />
    </div>
  );
}
