import React from "react";
import "./posts.css";
import { useSelector } from "react-redux";
import { Post, IProps } from "./post";

export default function PostsList() {
  const posts: IProps[] = useSelector(
    (state: any) => state.postsReducer.postsPage.posts
  );

  return (
    <div className="posts-container">
      {posts ? posts.map((el: IProps) => <Post {...el} key={el.id} />) : null}
    </div>
  );
}
