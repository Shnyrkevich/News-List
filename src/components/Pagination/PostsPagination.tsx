import React from 'react';
import './pagination.css';
import { Pagination } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreator } from '../../store/actions';

export default function PostsPagination() {
    const dispatch = useDispatch();
    const { actualPage, quantity } = useSelector((state: any) => state.postsQuantityReducer.postsQuantity);
    const { posts, actualPosts } = useSelector((state: any) => state.postsReducer.postsPage);
    
    function handlePageChange(page: number) {
        dispatch(actionCreator().changePage(page));
    }

    return <Pagination
        current={actualPage}
        total={ actualPosts.length }
        pageSize={quantity}
        onChange={handlePageChange}
    />;
}