import React from 'react';
import './pagination.css';
import { Pagination } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { TPost } from '../../store/reducers/postsReducer';
import { getActualPostsPage, getPostsByTags, getPostsQuantityOnPage } from '../../store/selectors/posts-selectors';
import { postsQuantityActions } from '../../store/reducers/postsQuantityReducer';

export default function PostsPagination() {
  const dispatch = useDispatch();
  const actualPage = useSelector(getActualPostsPage);
  const quantity = useSelector(getPostsQuantityOnPage);
  const actualPosts: TPost[] = useSelector(getPostsByTags);
  
  function handlePageChange(page: number): void {
    dispatch(postsQuantityActions.changePage(page));
  }

  return <Pagination
    current={actualPage}
    total={ actualPosts.length }
    pageSize={quantity}
    onChange={handlePageChange}
  />;
}