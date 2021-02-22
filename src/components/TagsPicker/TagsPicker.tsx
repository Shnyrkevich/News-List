import React, { useState, useCallback } from 'react';
import './tags.css';
import { Tag, Input, Tooltip } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

type IProps = {
  searchingTags: string[]
  setTags: (currentTags: string[]) => void 
}

export default function TagsPeacker(props: IProps) {
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [editInputIndex, setEditInputIndex] = useState(-1);
  const [editInputValue, setEditInputValue] = useState('');

  const measuredRef = useCallback((node: Input) => {
    if (node !== null && inputVisible) {
      node.focus();
    }
  }, [inputVisible]);

  const measuredEditRef = useCallback((node: Input) => {
    if (node !== null) {
      node.focus();
    }
  }, [editInputIndex]);

  function handleClose(removedTag: string) {
    props.setTags(props.searchingTags.filter((tag: string) => (tag) !== removedTag));
  }

  function showInput() {
    setInputVisible(true);
  } 

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  function handleInputConfirm() {
    if (inputValue && props.searchingTags.indexOf(inputValue) === -1) {
      props.setTags([...props.searchingTags, inputValue])
    }
    setInputVisible(false);
    setInputValue('');
  }

  function handleEditInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEditInputValue(e.target.value);
  }

  function handleEditInputConfirm() {
    const newTags = [...props.searchingTags];
    newTags[editInputIndex] = editInputValue;
    props.setTags(newTags);
    setEditInputValue('');
    setEditInputIndex(-1);
  }

  return (
    <div className='tags-peacker'>
      {props.searchingTags.map((tag, index) => {
        if (editInputIndex === index) {
          return (
            <Input
              ref={measuredEditRef}
              key={tag}
              size='small'
              className='tag-input'
              value={editInputValue}
              onChange={handleEditInputChange}
              onBlur={handleEditInputConfirm}
              onPressEnter={handleEditInputConfirm}
            />
          );
        }

        const isLongTag = tag.length > 20;

        const tagElem = (
          <Tag
            className='edit-tag'
            key={tag}
            closable={true}
            onClose={() => handleClose(tag)}
          >
            <span
              onDoubleClick={e => {
                  setEditInputIndex(index);
                  setEditInputValue(tag);
                  e.preventDefault();
              }}
            >
              {isLongTag ? `${tag.slice(0, 20)}...` : tag}
            </span>
          </Tag>
        );
        return isLongTag ? (
          <Tooltip title={tag} key={tag}>
            {tagElem}
          </Tooltip>
        ) : (
          tagElem
        );
      })}
      {inputVisible && (
        <Input
          ref={measuredRef}
          type='text'
          size='small'
          className='tag-input'
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputConfirm}
          onPressEnter={handleInputConfirm}
        />
      )}
      {!inputVisible && props.searchingTags.length <= 10 ? (
        <Tag className='site-tag-plus' onClick={showInput}>
          <PlusOutlined /> New Tag
        </Tag>
      ) : null}
    </div>
  );
}