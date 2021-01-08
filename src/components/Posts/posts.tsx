import React, { useEffect } from 'react';
import './posts.css';
import { Empty } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { Post } from './Post/post';
import { actionCreator } from '../../store/actions';
import { TPost } from '../../store/reducers/postsReducer';
import { dateFix } from '../../utils/dateFix';
import { IActiveUser } from '../../store/reducers/userAuthorizationReducer';

export default function PostsList() {
  const dispatch = useDispatch();
  const authUser: IActiveUser = useSelector((state: any) => state.userAuthorizationReducer.activeUser);
  const posts: TPost[] = useSelector((state: any) => state.postsReducer.postsPage.posts);
  const tags: string[] = useSelector((state: any) => state.searchingTagsReducer.searchingTags);
  const { actualPage, quantity } = useSelector((state: any) => state.postsQuantityReducer.postsQuantity);

  let currentPosts = tags.length ? dateFix(posts).filter((el: TPost) => tags.reduce((acc: boolean, tag: string) => {
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
       currentPosts.slice(actualPage * quantity - quantity, quantity * actualPage).map((el: TPost) => <Post post={el} userPost={authUser.user ? authUser.user.id === el.user.id : false } key={el.id} />) : <Empty />}
    </div>
  );
}
