import { 
  types,
  ChangeSortByDateStatusAction,
  SetAuthorForSortAction
} from '../actions';

type InitialState = {
  sortByDateStatus: number
  sortByAuthor: string | null
}

type AcionType = ChangeSortByDateStatusAction | SetAuthorForSortAction;

const initialState: InitialState = {
  sortByDateStatus: 0,
  sortByAuthor: null
}

export default function sortReducer( state = initialState, action: AcionType ): InitialState {
  switch(action.type) {
    case types.CHANGE_SORT_BY_DATE_STATUS: {
      return {
        ...state,
        sortByDateStatus: action.status
      }
    }
    case types.SET_AUTHOR_FOR_SORT: {
      return {
        ...state,
        sortByAuthor: action.authorName
      }
    }
    default: {
      return state;
    }
  }
}