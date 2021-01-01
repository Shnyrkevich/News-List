import { createStore, combineReducers } from "redux";
import postsReducer from "./reducers/postsReducer";
import modalReducer from './reducers/modalReducer';
import postsQuantityReducer from './reducers/postsQuantityReducer';

let reducers = combineReducers({
  postsReducer,
  modalReducer,
  postsQuantityReducer
});

let store = createStore(reducers);
console.log(store);

export default store;
