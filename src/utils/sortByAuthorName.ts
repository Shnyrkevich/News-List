import { TPost } from '../store/reducers/postsReducer';

export function sortByAuthorName(authorName: string | null, data: TPost[]): TPost[] {
  if (!authorName) return [...data];
  const sortedMas = data.filter((post: TPost) => post.user.login === authorName);
  return sortedMas;
}
