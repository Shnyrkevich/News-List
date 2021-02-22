import React, { useEffect, useState } from 'react';
import { Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { TUser, TPost } from '../../store/reducers/postsReducer';
import { getPosts } from '../../store/selectors/posts-selectors';
import { sortsActions } from '../../store/reducers/sortReducer';
import { getSortAuthorName } from '../../store/selectors/sort-selectors';

const { Option } = Select;

export default function SortByAuthorNameSelect() {
  const dispatch = useDispatch();
  const posts: TPost[] = useSelector(getPosts);
  const activeSortName = useSelector(getSortAuthorName);
  const [ authors, setAuthors ] = useState<TUser[] | null>(null);

  useEffect(() => {
    const unicAuthors: TUser[] = [];
    posts.map((el: TPost) => el.user).forEach((user: TUser) => {
      if (!unicAuthors.find((el: TUser) => el.id === user.id && el.login === user.login)) {
        unicAuthors.push(user);
      }
    });
    setAuthors(unicAuthors);
  }, [posts])

  function handleChange(value: string): void {
    dispatch(sortsActions.setAuhorForSort(value));
  }

  return (
    <div className='search-select-container'>
      <Select
        allowClear={true}
        onClear={() => dispatch(sortsActions.setAuhorForSort(null))}
        style={{ width: 145 }}
        onChange={handleChange}
        placeholder={'Select an author'}
        defaultValue={activeSortName ? activeSortName : undefined}
      >
        {
          authors?.map((el: TUser, key: number) => (<Option value={el.login} key={key}>{el.login}</Option>))
        }
      </Select>
    </div>
  );
}
