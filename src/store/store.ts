import { createStore, combineReducers, applyMiddleware } from 'redux';
import postsReducer from './reducers/postsReducer';
import modalReducer from './reducers/modalReducer';
import postsQuantityReducer from './reducers/postsQuantityReducer';
import searchingTagsReducer from './reducers/searchingTagsReducer';
import userAuthorizationReducer from './reducers/userAuthorizationReducer';
import sortReducer from './reducers/sortReducer';
import currenciesPageReducer from './reducers/currenciesPageReducer';
import rssNewsReducer from './reducers/rssNewReducer';
import thunk from 'redux-thunk';

let reducers = combineReducers({
  postsReducer,
  modalReducer,
  postsQuantityReducer,
  searchingTagsReducer,
  userAuthorizationReducer,
  sortReducer,
  currenciesPageReducer,
  rssNewsReducer
});

export type RootState = ReturnType<typeof reducers>

function saveToLocalStorage(state: RootState): void {
  try {
    const stateJSON = JSON.stringify(state);
    localStorage.setItem('state', stateJSON);
  } catch (e) {
    console.warn(e);
  }
}

function loadFromLocalStorage(): RootState | undefined {
  try {
    const localState = localStorage.getItem('state');
    if (localState === null) return undefined;
    return JSON.parse(localState);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
}

let store = createStore(reducers, loadFromLocalStorage(), applyMiddleware(thunk));

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
