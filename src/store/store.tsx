import { createStore, combineReducers } from 'redux';
import postsReducer from './reducers/postsReducer';
import modalReducer from './reducers/modalReducer';
import postsQuantityReducer from './reducers/postsQuantityReducer';
import searchingTagsReducer from './reducers/searchingTagsReducer';
import userAuthorizationReducer from './reducers/userAuthorizationReducer';

let reducers = combineReducers({
  postsReducer,
  modalReducer,
  postsQuantityReducer,
  searchingTagsReducer,
  userAuthorizationReducer
});

let store = createStore(reducers);

export default store;
