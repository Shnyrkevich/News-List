import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Modal, Input } from "antd";
import { actionCreator } from "../../store/actions";

export default function PostModal() {
  const { visability, type } = useSelector(
    (state) => state.modalReducer.modalWindow
  );
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    if (!visability) {
      setTitle("");
      setText("");
    }
  }, [visability]);

  function handelCancel() {
    dispatch(actionCreator().closeModal());
  }

  function handleOk() {
    if (!text.length && !title.length) return;
    const newPost = {
      user: {
        name: "Peter",
        avatar: null
      },
      text: text,
      title: title,
      newsImage: ""
    };
    dispatch(actionCreator().addNewPost(newPost));
    dispatch(actionCreator().closeModal());
  }

  function titleChage(e) {
    setTitle(e.target.value);
  }

  function textChange(e) {
    setText(e.target.value);
  }

  return (
    <Modal
      title="Create new Post"
      visible={visability}
      onOk={handleOk}
      onCancel={handelCancel}
    >
      Title
      <Input
        value={title}
        placeholder="Enter posts title"
        allowClear
        onChange={titleChage}
      />
      Text
      <Input.TextArea
        value={text}
        placeholder="Enter text"
        allowClear
        onChange={textChange}
      />
    </Modal>
  );
}
