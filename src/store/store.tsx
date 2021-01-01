import { createStore, combineReducers } from "redux";
import postsReducer from "./reducers/postsReducer";
import modalReducer from './reducers/modalReducer';

let reducers = combineReducers({
  postsReducer,
  modalReducer,
});

let store = createStore(reducers);
console.log(store);
window.state = store;

export default store;
