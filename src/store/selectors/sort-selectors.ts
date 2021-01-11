import { RootState } from "../store";

export function getSortByDateStatus(state: RootState): number {
  return state.sortReducer.sortByDateStatus;
}

export function getSortAuthorName(state: RootState): string | null {
  return state.sortReducer.sortByAuthor;
}