import React, { useEffect } from 'react';
import './posts.css';
import { Empty } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { Post } from './Post/post';
import { actionCreator } from '../../store/actions';
import { IPost } from '../../store/reducers/postsReducer';
import { dateFix } from '../../utils/dateFix';

export default function PostsList() {
  const dispatch = useDispatch();
  const authUser = useSelector((state: any) => state.userAuthorizationReducer.activeUser);
  const posts = useSelector((state: any) => state.postsReducer.postsPage.posts);
  const tags = useSelector((state: any) => state.searchingTagsReducer.searchingTags);
  const { actualPage, quantity } = useSelector((state: any) => state.postsQuantityReducer.postsQuantity);

  console.log(authUser);

  let currentPosts = tags.length ? dateFix(posts).filter((el: IPost) => tags.reduce((acc: boolean, tag: string) => {
    if (el.tags.includes(tag)) {
      acc = true;
    }
    return acc;
  }, false)) : dateFix(posts);

  useEffect(() => {
    dispatch(actionCreator().setActualPosts(currentPosts));
  }, [tags, posts])

  return (
    <div className='posts-container'>
      {currentPosts.length ?
       currentPosts.slice(actualPage * quantity - quantity, quantity * actualPage).map((el: IPost) => <Post post={el} userPost={authUser.isAuth ? authUser.user.id === el.user.id : false } key={el.id} />) : <Empty />}
    </div>
  );
}
