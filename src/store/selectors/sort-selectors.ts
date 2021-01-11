export function getSortByDateStatus(state: any): number {
  return state.sortReducer.sortByDateStatus;
}

export function getSortAuthorName(state: any): string | null {
  return state.sortReducer.sortByAuthor;
}