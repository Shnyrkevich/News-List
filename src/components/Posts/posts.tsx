import React from 'react';
import './posts.css';
import { Empty } from 'antd';
import { useSelector } from 'react-redux';
import { Post } from './Post/post';
import { TPost } from '../../store/reducers/postsReducer';
import { IUser } from '../../store/reducers/userAuthorizationReducer';
import { getAuthUser } from '../../store/selectors/user-selectors';
import { getActualPosts } from '../../store/selectors/posts-selectors';

export default function PostsList() {
  const authUser: IUser | null = useSelector(getAuthUser);
  const actualPosts: TPost[] = useSelector(getActualPosts);
  
  return (
    <div className='posts-container'>
      {
        actualPosts.length ?
        actualPosts.map((el: TPost) => (
          <Post 
            post={el} 
            userPost={authUser ? authUser.id === el.user.id || authUser.id === 0 : false } 
            key={el.id} 
          />)) :
        <Empty />
      }
    </div>
  );
}
