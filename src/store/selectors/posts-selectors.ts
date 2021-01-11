import { TPost } from '../reducers/postsReducer';
import { TPostsQuantity } from '../reducers/postsQuantityReducer';
import { RootState } from '../store';

export function getActualPosts(state: RootState): TPost[] {
  return state.postsReducer.postsPage.actualPosts;
}

export function getPosts(state: RootState): TPost[] {
  return state.postsReducer.postsPage.posts;
}

export function getPostsQuantity(state: RootState): TPostsQuantity {
  return state.postsQuantityReducer.postsQuantity;
} 