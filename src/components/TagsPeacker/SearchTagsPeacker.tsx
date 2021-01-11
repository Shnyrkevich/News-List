import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreator } from '../../store/actions';
import { getTags } from '../../store/selectors/tags-selector';
import TagsPeacker from './TagsPeacker';

export default function SearchTagsPeacker() {
  const dispatch = useDispatch();
  const tags: string[] | [] = useSelector(getTags);

  function setTags(currentTags: string[]) {
    dispatch(actionCreator().setTags(currentTags));
  }

  useEffect(() => {
    dispatch(actionCreator().changePage(1));
  }, [tags])

  return <div className='search-tags-peacker-container'>
    Add tag to filter
    <TagsPeacker searchingTags={tags} setTags={setTags} />
  </div>;
}