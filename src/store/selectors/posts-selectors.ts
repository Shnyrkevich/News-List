import { TPost } from '../reducers/postsReducer';
import { RootState } from '../store';
import { createSelector } from 'reselect';
import { getSortByDateStatus, getSortAuthorName } from './sort-selectors';
import { sortByDate } from '../../utils/sortByDate';
import { sortByAuthorName } from '../../utils/sortByAuthorName';
import { getTags } from './tags-selector';

export function getPosts(state: RootState): TPost[] {
  return state.postsReducer.postsPage.posts;
}

export function getActualPostsPage(state: RootState): number {
  return state.postsQuantityReducer.postsQuantity.actualPage;
}

export function getPostsQuantityOnPage(state: RootState): number {
  return state.postsQuantityReducer.postsQuantity.quantity;
}

const getSortedPosts = createSelector(
  getPosts,
  getSortByDateStatus, 
  getSortAuthorName, 
  (posts, sortByDateStatus, authorNameForSort) => {
    return sortByAuthorName(authorNameForSort, sortByDate(sortByDateStatus, posts));
  });

export const getPostsByTags = createSelector(
  getTags,
  getSortedPosts,
  (tags, posts) => {
    if (tags.length) {
      return posts.filter((el: TPost) => tags.reduce((acc: boolean, tag: string): boolean => {
        if (el.tags.includes(tag)) {
          acc = true;
        }
        return acc;
      }, false));
    }
    return posts;
  }
);

export const getActualPosts = createSelector(
  getPostsByTags,
  getActualPostsPage,
  getPostsQuantityOnPage,
  (posts, pageNumber, postsQuantity) => {
    return posts.slice(pageNumber * postsQuantity - postsQuantity, postsQuantity * pageNumber);
  }
);