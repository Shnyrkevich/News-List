import { InferActionsTypes } from '../store';

export const tagsActions = {
  setTags: (tags: string[]) => ({ type: 'SET_TAGS_FOR_SEARCH', tags } as const),
};

type TagsActions = InferActionsTypes<typeof tagsActions>;

type InitialState = {
  searchingTags: string[] | []
}

const initialState: InitialState = {
  searchingTags: []
}

export default function searchingTagsReducer(state = initialState, action: TagsActions): InitialState {
  switch(action.type) {
    case 'SET_TAGS_FOR_SEARCH': {
      return {
        ...state,
        searchingTags: action.tags
      }
    }
    default: {
      return state;
    }
  }
}