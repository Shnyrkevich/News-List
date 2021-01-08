import { types, SetTagsAction } from '../actions';

type InitialState = {
  searchingTags: string[] | []
}

const initialState: InitialState = {
  searchingTags: []
}

export default function searchingTagsReducer(state = initialState, action: SetTagsAction): InitialState {
  switch(action.type) {
    case types.SET_TAGS_FOR_SEARCH: {
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