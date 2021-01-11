import React, { useEffect } from 'react';
import './posts.css';
import { Empty } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { Post } from './Post/post';
import { actionCreator } from '../../store/actions';
import { TPost } from '../../store/reducers/postsReducer';
import { sortByDate } from '../../utils/sortByDate';
import { IUser } from '../../store/reducers/userAuthorizationReducer';
import { sortByAuthorName } from '../../utils/sortByAuthorName';
import { getAuthUser } from '../../store/selectors/user-selectors';
import { getPosts, getPostsQuantity } from '../../store/selectors/posts-selectors';
import { getTags } from '../../store/selectors/tags-selector';
import { getSortAuthorName, getSortByDateStatus } from '../../store/selectors/sort-selectors';

export default function PostsList() {
  const dispatch = useDispatch();
  const authUser: IUser = useSelector(getAuthUser);
  const posts: TPost[] = useSelector(getPosts);
  const tags: string[] = useSelector(getTags);
  const { actualPage, quantity } = useSelector(getPostsQuantity);
  const sortStatus = useSelector(getSortByDateStatus);
  const sortAuthorName = useSelector(getSortAuthorName);

  let currentPosts = sortByAuthorName(sortAuthorName, sortByDate(sortStatus, posts));
  
  if ( tags.length ) {
    currentPosts = currentPosts.filter((el: TPost) => tags.reduce((acc: boolean, tag: string) => {
      if (el.tags.includes(tag)) {
        acc = true;
      }
      return acc;
    }, false))
  }

  useEffect(() => {
    dispatch(actionCreator().setActualPosts(currentPosts));
  }, [tags, posts, sortAuthorName])

  return (
    <div className='posts-container'>
      {
        currentPosts.length ?
        currentPosts.slice(actualPage * quantity - quantity, quantity * actualPage)
        .map((el: TPost) => (
          <Post 
            post={el} 
            userPost={authUser ? authUser.id === el.user.id : false } 
            key={el.id} 
          />)) :
        <Empty />
      }
    </div>
  );
}
