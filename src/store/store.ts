import { createStore, combineReducers, applyMiddleware } from 'redux';
import postsReducer from './reducers/postsReducer';
import modalReducer from './reducers/modalReducer';
import postsQuantityReducer from './reducers/postsQuantityReducer';
import searchingTagsReducer from './reducers/searchingTagsReducer';
import userAuthorizationReducer from './reducers/userAuthorizationReducer';
import sortReducer from './reducers/sortReducer';
import currenciesPageReducer from './reducers/currenciesPageReducer';
import thunk from 'redux-thunk';

let reducers = combineReducers({
  postsReducer,
  modalReducer,
  postsQuantityReducer,
  searchingTagsReducer,
  userAuthorizationReducer,
  sortReducer,
  currenciesPageReducer
});

export type RootState = ReturnType<typeof reducers>

let store = createStore(reducers, applyMiddleware(thunk));

export default store;
