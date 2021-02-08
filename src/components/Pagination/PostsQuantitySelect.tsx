import React from 'react';
import './postQuantitySelect.css';
import { Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getPostsQuantityOnPage } from '../../store/selectors/posts-selectors';
import { postsQuantityActions } from '../../store/reducers/postsQuantityReducer';

const { Option } = Select;

export default function PostsQuantitySelect() {
  const dispatch = useDispatch();
  const quantity = useSelector(getPostsQuantityOnPage)

  function handleChange(value: string): void {
    dispatch(postsQuantityActions.changePostsQuantity(Number(value)));
    dispatch(postsQuantityActions.changePage(1));
  }

  return (
    <div className='post-quantity-select'>
      Posts on page 
      <Select
        defaultValue={`${quantity}`}
        style={{ width: 120 }}
        onChange={handleChange}
        size='small'
      >
        <Option value='3'>3</Option>
        <Option value='5'>5</Option>
        <Option value='10'>10</Option>
      </Select>
    </div>
  );
}