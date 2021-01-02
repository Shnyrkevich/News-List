import React from "react";
import "./styles.css";
import "antd/dist/antd.css";
import Header from "../Header/header";
import PostsList from "../Posts/posts";
import PostModal from "../Edit-post-modal/Modal";
import PostsQuantitySelect from '../Pagination/PostsQuantitySelect';
import PostsPagination from '../Pagination/PostsPagination';
import SearchTagsPeacker from '../TagsPeacker/SearchTagsPeacker';

export default function App() {
  return (
    <div className="App">
      <Header />
      <div className="app-controlls">
        <PostsQuantitySelect />
        <SearchTagsPeacker />
      </div>
      <PostsList />
      <PostModal />
      <PostsPagination />
    </div>
  );
}
