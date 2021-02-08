import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postsQuantityActions } from '../../store/reducers/postsQuantityReducer';
import { tagsActions } from '../../store/reducers/searchingTagsReducer';
import { getTags } from '../../store/selectors/tags-selector';
import TagsPeacker from './TagsPicker';

export default function SearchTagsPeacker() {
  const dispatch = useDispatch();
  const tags: string[] | [] = useSelector(getTags);

  function setTags(currentTags: string[]) {
    dispatch(tagsActions.setTags(currentTags));
  }

  useEffect(() => {
    dispatch(postsQuantityActions.changePage(1));
  }, [tags])

  return <div className='search-tags-peacker-container'>
    Add tag to filter
    <TagsPeacker searchingTags={tags} setTags={setTags} />
  </div>;
}