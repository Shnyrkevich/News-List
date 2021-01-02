import React, { useEffect } from "react";
import "./posts.css";
import { Empty } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { Post, IProps } from "./post";
import { actionCreator } from "../../store/actions";

export default function PostsList() {
  const dispatch = useDispatch();
  const posts = useSelector((state: any) => state.postsReducer.postsPage.posts);
  const tags = useSelector((state: any) => state.searchingTagsReducer.searchingTags);
  const { actualPage, quantity } = useSelector((state: any) => state.postsQuantityReducer.postsQuantity);

  let currentPosts = tags.length ? posts.filter((el: IProps) => {
    let tagStatus = false;
    for (let i = 0; i < tags.length; i++) {
      if (el.tags.includes(tags[i])) {
        tagStatus = true;
      }
    }
    return tagStatus;
  }) : posts;

  useEffect(() => {
    dispatch(actionCreator().setActualPosts(currentPosts));
  }, [tags])

  return (
    <div className="posts-container">
      {currentPosts.length ? currentPosts.slice(actualPage * quantity - quantity, quantity * actualPage).map((el: IProps) => <Post {...el} key={el.id} />) : <Empty />}
    </div>
  );
}
