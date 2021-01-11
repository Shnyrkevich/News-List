import { createStore, combineReducers } from 'redux';
import postsReducer from './reducers/postsReducer';
import modalReducer from './reducers/modalReducer';
import postsQuantityReducer from './reducers/postsQuantityReducer';
import searchingTagsReducer from './reducers/searchingTagsReducer';
import userAuthorizationReducer from './reducers/userAuthorizationReducer';
import sortReducer from './reducers/sortReducer';

let reducers = combineReducers({
  postsReducer,
  modalReducer,
  postsQuantityReducer,
  searchingTagsReducer,
  userAuthorizationReducer,
  sortReducer
});

export type RootState = ReturnType<typeof reducers>

let store = createStore(reducers);

export default store;
