import React from 'react';
import './appControls.css';
import PostsQuantitySelect from '../Pagination/PostsQuantitySelect';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreator } from '../../store/actions';
import SearchTagsPeacker from '../TagsPeacker/SearchTagsPeacker';

export default function AppControls() {
  const dispatch = useDispatch();
  const authUser = useSelector((state: any) => state.userAuthorizationReducer.activeUser);
  
  return <div className='app-controlls'>
    <div className="app-controlls_container">
      <PostsQuantitySelect />
      {
        authUser.isAuth ? 
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
  </div>
}