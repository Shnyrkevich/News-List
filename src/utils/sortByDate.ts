import { TPost } from '../store/reducers/postsReducer';

export function sortByDate(status: number, data: TPost[]): TPost[] {
  if (status === 0) return [...data];
  const sortedMas = data.slice(0).sort((a: TPost, b: TPost) => {
    const aDate = Date.parse(a.date);
    const bDate = Date.parse(b.date);
    return status === 1 ? aDate - bDate : bDate - aDate;
  });
  return sortedMas;
}
