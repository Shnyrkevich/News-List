import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreator } from '../../store/actions';
import TagsPeacker from './TagsPeacker';

export default function SearchTagsPeacker() {
  const dispatch = useDispatch();
  const tags = useSelector((state: any) => state.searchingTagsReducer.searchingTags);

  function setTags(currentTags: string[]) {
    dispatch(actionCreator().setTags(currentTags));
  }

  return <TagsPeacker searchingTags={tags} setTags={setTags} />
}