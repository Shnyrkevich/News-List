import { RootState } from "../store";

export function getTags(state: RootState): string[] | [] {
  return state.searchingTagsReducer.searchingTags;
}