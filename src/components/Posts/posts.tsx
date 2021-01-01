import React from "react";
import "./posts.css";
import { Empty } from 'antd';
import { useSelector } from "react-redux";
import { Post, IProps } from "./post";

export default function PostsList() {
  const posts = useSelector((state: any) => state.postsReducer.postsPage.posts);
  const { actualPage, quantity } = useSelector((state: any) => state.postsQuantityReducer.postsQuantity);

  const actualPosts = posts.slice(actualPage * quantity - quantity, quantity * actualPage);

  return (
    <div className="posts-container">
      {posts.length ? actualPosts.map((el: IProps) => <Post {...el} key={el.id} />) : <Empty />}
    </div>
  );
}
