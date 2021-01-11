import React from 'react';
import './pagination.css';
import { Pagination } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreator } from '../../store/actions';
import { TPost } from '../../store/reducers/postsReducer';
import { getActualPosts, getPostsQuantity } from '../../store/selectors/posts-selectors';

export default function PostsPagination() {
  const dispatch = useDispatch();
  const { actualPage, quantity } = useSelector(getPostsQuantity);
  const actualPosts: TPost[] = useSelector(getActualPosts);
  
  function handlePageChange(page: number): void {
    dispatch(actionCreator().changePage(page));
  }

  return <Pagination
    current={actualPage}
    total={ actualPosts.length }
    pageSize={quantity}
    onChange={handlePageChange}
  />;
}