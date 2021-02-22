import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal, Input, message } from 'antd';
import TagsPeacker from '../../TagsPicker/TagsPicker';
import { IUser } from '../../../store/reducers/userAuthorizationReducer';
import { getAuthUser } from '../../../store/selectors/user-selectors';
import { getAddNewPostModalVisability } from '../../../store/selectors/modal-windows-selectors';
import { modalWindowsActions } from '../../../store/reducers/modalReducer';
import { NewPost, postsActions } from '../../../store/reducers/postsReducer';

export default function PostModal() {
  const visability: boolean = useSelector(getAddNewPostModalVisability);
  const authUser: IUser | null = useSelector(getAuthUser);
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
    dispatch(modalWindowsActions.changeModalVisability());
  }

  function handleOk() {
    if (!authUser) return;
    if (!text.length || !title.length) {
      message.error('Title and text fields are must be filled!');
      return;
    }
    const newPost: NewPost = {
      user: {
        id: authUser.id,
        login: authUser.login,
        avatar: authUser.avatar
      },
      text: text,
      title: title,
      tags: tags,
      date: new Date().toString()
    };
    dispatch(postsActions.addNewPost(newPost));
    dispatch(modalWindowsActions.changeModalVisability());
  }

  function titleChage(e: React.ChangeEvent<HTMLInputElement>) {
    setTitle(e.target.value);
  }

  function textChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
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
        placeholder='Enter post title'
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
