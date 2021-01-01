import React, { useState } from "react";
import "./styles.css";
import "antd/dist/antd.css";
import Header from "../Header/header";
import PostsList from "../Posts/posts";
import PostModal from "../Edit-post-modal/Modal";

export default function App() {
  return (
    <div className="App">
      <Header />
      <PostsList />
      <PostModal />
    </div>
  );
}
