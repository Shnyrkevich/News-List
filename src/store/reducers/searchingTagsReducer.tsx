import { types } from '../actions';

const initialState = {
  searchingTags: []
}

interface IAction {
  type: string
  data: string[]
}

export default function searchingTagsReducer(state = initialState, action: IAction) {
  switch(action.type) {
    case types.SET_TAGS_FOR_SEARCH: {
      return {
        ...state,
        searchingTags: action.data
      }
    }
    default: {
      return state;
    }
  }
}