import React from 'react';
import './appControls.css';
import PostsQuantitySelect from '../Pagination/PostsQuantitySelect';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreator } from '../../store/actions';
import SearchTagsPeacker from '../TagsPicker/SearchTagsPicker';
import SortByDateButton from '../SortByDateButton/SortByDateButton';
import SortByAuthorNameSelect from '../SortByAuthorNameSelect/SortByAuthorNameSelect';
import { getIsAuth } from '../../store/selectors/user-selectors';

export default function AppControls() {
  const dispatch = useDispatch();
  const isAuth: boolean = useSelector(getIsAuth);
  
  return <div className='app-controlls'>
    <div className='app-controlls_container'>
      <PostsQuantitySelect />
      {
        isAuth ? 
        <Button
          icon={<PlusOutlined />}
          onClick={() => dispatch(actionCreator().changeModalVisability())}
        >
          Add new post
        </Button> :
        null
      }
    </div>
    <SearchTagsPeacker />
    <div className='app-controlls_container-sort-tools'>
      <SortByDateButton />
      <SortByAuthorNameSelect />
    </div>
  </div>
}