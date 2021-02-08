import { InferActionsTypes } from '../store';

export const sortsActions = {
  changeSortByDateStatus: (status: number) => ({ type: 'CHANGE_SORT_BY_DATE_STATUS', status } as const),
  setAuhorForSort: (authorName: string | null) => ({ type: 'SET_AUTHOR_FOR_SORT', authorName } as const),
};

type SortsActionsTypes = InferActionsTypes<typeof sortsActions>;

type InitialState = {
  sortByDateStatus: number
  sortByAuthor: string | null
}

const initialState: InitialState = {
  sortByDateStatus: 0,
  sortByAuthor: null
}

export default function sortReducer( state = initialState, action: SortsActionsTypes ): InitialState {
  switch(action.type) {
    case 'CHANGE_SORT_BY_DATE_STATUS': {
      return {
        ...state,
        sortByDateStatus: action.status
      }
    }
    case 'SET_AUTHOR_FOR_SORT': {
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