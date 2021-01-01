import React from "react";
import "./post.css";
import { Avatar, Typography, Menu, Space, Dropdown } from "antd";
import { UserOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";

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

const menu = (
  <Menu onClick={(e) => console.log(e)}>
    <Menu.Item key="1" icon={<EditOutlined />}>
      Edit
    </Menu.Item>
    <Menu.Item key="2" icon={<DeleteOutlined />}>
      Delete
    </Menu.Item>
  </Menu>
);

export function Post(props: IProps) {
  console.log(props);

  function handleDropdown(e) {
    console.log(e);
  }

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
        <Dropdown.Button overlay={menu}>Settings</Dropdown.Button>
      </div>
      <div className="post-container_content">
        <Typography.Title level={4}>{props.title}</Typography.Title>
        <Typography.Paragraph className="post-container_content-text">
          {props.text}
        </Typography.Paragraph>
        <div className="post-container_content-image-container">
          {props.newsImage ? (
            <img src={props.newsImage} alt="background" />
          ) : null}
        </div>
      </div>
    </div>
  );
}
