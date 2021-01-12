import React from 'react';
import PostModal from '../Add-post-modal/Modal';
import AppControls from '../App-contolls/AppControls';
import PostsPagination from '../Pagination/PostsPagination';
import PostsList from './posts';


export default function PostsPage() {
  return (
    <>
      <AppControls />
      <PostsList />
      <PostModal />
      <PostsPagination />
    </>
  );
}