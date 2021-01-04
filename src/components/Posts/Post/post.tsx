import React, { useState } from 'react';
import './post.css';
import { Avatar, Typography, Menu, Space, Dropdown, Popconfirm, Input, Button, Tag } from 'antd';
import { UserOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { actionCreator } from '../../../store/actions';
import TagsPeacker from '../../TagsPeacker/TagsPeacker';
import { IProps } from '../../../store/reducers/postsReducer';

const tagsColors = ['magenta', 'red', 'volcano', 'orange', 'gold', 'lime', 'green', 'cyan', 'blue', 'geekblue', 'purple'];

export function Post(props: IProps) {
  const dispatch = useDispatch();
  const [editStatus, setEditStatus] = useState(false);
  const [text, setText] = useState(props.text);
  const [title, setTitle] = useState(props.title);
  const [tags, setTags] = useState(props.tags);

  function handleDropdown(e: any) {
    if (e.key === '1') {
      setEditStatus(true);
    }
  }

  function handleEditInputText(e:any) {
    setText(e.target.value);
  }

  function handleEditInputTitle(e:any) {
    setTitle(e.target.value);
  }

  function changeTags(currentTags: string[]) {
    setTags(currentTags);
  }

  function handleEditModeConfirm() {
    const editedPost = {
      ...props,
      text: text,
      title: title,
      tags: tags
    }
    dispatch(actionCreator().changePost(editedPost));
    setEditStatus(false);
  }

  const menu = (
    <Menu onClick={handleDropdown}>
      <Menu.Item key='1' icon={<EditOutlined />}>
        Edit
      </Menu.Item>
      <Menu.Item key='2' icon={<DeleteOutlined />}>
        <Popconfirm title='Are you sure？' okText='Yes' cancelText='No'  onConfirm={() => dispatch(actionCreator().deletePost(props.id))}>
          <a href='#'>Delete</a>
        </Popconfirm>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className='post-container'>
      <div className='post-container_user'>
        <Space align='center'>
          {props.user.avatar ? (
            <Avatar src={props.user.avatar} size={50} />
          ) : (
            <Avatar icon={<UserOutlined />} size={50} />
          )}
          <Space direction='vertical'>
            <Typography.Text className='post-container_user-name'>{props.user.name}</Typography.Text>
            <Typography.Text type="secondary">{props.date}</Typography.Text>
          </Space>
        </Space>
        { editStatus ? null : <Dropdown.Button overlay={menu}>Settings</Dropdown.Button> }
      </div>
      <div className='post-container_content'>
        {
          editStatus ? <>
            <Input placeholder='Enter posts Title' value={title} onChange={handleEditInputTitle}/>
            <Input.TextArea placeholder='Enter text' value={text} onChange={handleEditInputText} autoSize />
          </> : <>
            <Typography.Title level={4}>{props.title}</Typography.Title>
            <Typography.Paragraph className='post-container_content-text' ellipsis={{ rows: 2, expandable: true, symbol: 'more' }}>
              {props.text}
            </Typography.Paragraph>
          </>
        }
      </div>
      <div className='tags-peacker'>
        { 
          editStatus ? 
          <TagsPeacker setTags={changeTags} searchingTags={tags} /> :
          tags.map((el: string, ind: number) => <Tag key={ind} color={tagsColors[Math.ceil(Math.random() * (tagsColors.length - 0))]}>{el}</Tag>)
        }
      </div>
      { editStatus ? 
        <div className='post-container_controls'>
          <Button onClick={() => handleEditModeConfirm()}>Ok</Button>
          <Popconfirm title='Are you sure？' okText='Yes' cancelText='No' onConfirm={() => setEditStatus(false)}>
            <Button>Cancel</Button>
          </Popconfirm>
        </div> : null
      }
    </div>
  );
}
