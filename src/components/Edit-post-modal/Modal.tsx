import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal, Input } from 'antd';
import { actionCreator } from '../../store/actions';
import TagsPeacker from '../TagsPeacker/TagsPeacker';

export default function PostModal() {
  const visability = useSelector((state: any) => state.modalReducer.modalWindow.visability);
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [tags, setTags] = useState([]);

  useEffect(() => {
    if (visability) {
      setTitle('');
      setText('');
      setTags([]);
    }
  }, [visability]);

  function handelCancel() {
    dispatch(actionCreator().changeModalVisability());
  }

  function handleOk() {
    if (!text.length && !title.length) return;
    const newPost = {
      user: {
        name: 'Peter',
        avatar: null
      },
      text: text,
      title: title,
      tags: tags,
      date: new Date().toString()
    };
    dispatch(actionCreator().addNewPost(newPost));
    dispatch(actionCreator().changeModalVisability());
  }

  function titleChage(e: any) {
    setTitle(e.target.value);
  }

  function textChange(e: any) {
    setText(e.target.value);
  }

  function changeTags(currentTags: any) {
    setTags(currentTags);
  }

  return (
    <Modal
      title='Create new Post'
      visible={visability}
      onOk={handleOk}
      onCancel={handelCancel}
    >
      Title
      <Input
        value={title}
        placeholder='Enter posts title'
        allowClear
        onChange={titleChage}
      />
      Text
      <Input.TextArea
        value={text}
        placeholder='Enter text'
        allowClear
        onChange={textChange}
        autoSize
      />
      Tags
      <TagsPeacker searchingTags={tags} setTags={changeTags} />
    </Modal>
  );
}
