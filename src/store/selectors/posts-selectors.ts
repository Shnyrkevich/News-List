import { TPost } from '../reducers/postsReducer';
import { TPostsQuantity } from '../reducers/postsQuantityReducer';

export function getActualPosts(state: any): TPost[] {
  return state.postsReducer.postsPage.actualPosts;
}

export function getPosts(state: any): TPost[] {
  return state.postsReducer.postsPage.posts;
}

export function getPostsQuantity(state: any): TPostsQuantity {
  return state.postsQuantityReducer.postsQuantity;
} 