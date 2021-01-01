import React, { useState } from "react";
import "./post.css";
import { Avatar, Typography, Menu, Space, Dropdown, Popconfirm, Input, Button } from "antd";
import { UserOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { actionCreator } from "../../store/actions";

interface User {
  name: string;
  avatar: string;
}

export interface IProps {
  id: number;
  user: User;
  title: string;
  text: string;
  newsImage: string;
}

export function Post(props: IProps) {
  const dispatch = useDispatch();
  const [editStatus, setEditStatus] = useState(false);
  const [text, setText] = useState(props.text);
  const [title, setTitle] = useState(props.title);

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

  function handleEditModeConfirm() {
    const editedPost = {
      ...props,
      text: text,
      title: title,
    }
    dispatch(actionCreator().changePost(editedPost));
    setEditStatus(false);
  }

  const menu = (
    <Menu onClick={handleDropdown}>
      <Menu.Item key="1" icon={<EditOutlined />}>
        Edit
      </Menu.Item>
      <Menu.Item key="2" icon={<DeleteOutlined />}>
        <Popconfirm title="Are you sure？" okText="Yes" cancelText="No"  onConfirm={() => dispatch(actionCreator().deletePost(props.id))}>
          <a href="#">Delete</a>
        </Popconfirm>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="post-container">
      <div className="post-container_user">
        <Space align="center">
          {props.user.avatar ? (
            <Avatar src={props.user.avatar} size={50} />
          ) : (
            <Avatar icon={<UserOutlined />} size={50} />
          )}
          <p className="post-container_user-name">{props.user.name}</p>
        </Space>
        { editStatus ? null : <Dropdown.Button overlay={menu}>Settings</Dropdown.Button> }
      </div>
      <div className="post-container_content">
        {
          editStatus ? <>
            <Input placeholder='Enter posts Title' value={title} onChange={handleEditInputTitle}/>
            <Input.TextArea placeholder='Enter text' value={text} onChange={handleEditInputText} />
          </> : <>
            <Typography.Title level={4}>{props.title}</Typography.Title>
            <Typography.Paragraph className="post-container_content-text">
              {props.text}
            </Typography.Paragraph>
            <div className="post-container_content-image-container">
              {props.newsImage ? (
                <img src={props.newsImage} alt="background" />
              ) : null}
            </div>
          </>
        }
      </div>
      { editStatus ? <div className="post-container_controls">
        <Button onClick={() => handleEditModeConfirm()}>Ok</Button>
        <Popconfirm title="Are you sure？" okText="Yes" cancelText="No" onConfirm={() => setEditStatus(false)}>
          <Button>Cancel</Button>
        </Popconfirm>
      </div> : null }
    </div>
  );
}
