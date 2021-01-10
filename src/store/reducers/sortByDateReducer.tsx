import { types, ChangeSortByDateStatusAction } from '../actions';

type InitialState = {
  sortByDateStatus: number
}

const initialState: InitialState = {
  sortByDateStatus: 0,
}

export default function sortByDateReducer( state = initialState, action: ChangeSortByDateStatusAction ): InitialState {
  switch(action.type) {
    case types.CHANGE_SORT_BY_DATE_STATUS: {
      return {
        ...state,
        sortByDateStatus: action.status
      }
    }
    default: {
      return state;
    }
  }
}