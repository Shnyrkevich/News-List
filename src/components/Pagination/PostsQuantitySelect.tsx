import React from 'react';
import './postQuantitySelect.css';
import { Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreator } from '../../store/actions';
import { getPostsQuantity } from '../../store/selectors/posts-selectors';

const { Option } = Select;

export default function PostsQuantitySelect() {
  const dispatch = useDispatch();
  const { quantity } = useSelector(getPostsQuantity);

  function handleChange(value: string): void {
    dispatch(actionCreator().changePostsQuantity(Number(value)));
    dispatch(actionCreator().changePage(1));
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