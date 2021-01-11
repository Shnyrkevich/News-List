export function getTags(state: any): string[] | [] {
  return state.searchingTagsReducer.searchingTags;
}