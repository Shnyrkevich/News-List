import {
  types,
  GetCurrenciesErrorAction,
  GetCurrenciesSuccessAction,
  ChangeCurrenciesLoadingStatus
} from '../actions';

export type Currency = {
  Cur_Abbreviation: string
  Cur_ID: number
  Cur_Name: string
  Cur_OfficialRate: number
  Cur_Scale: number
  Date: string
}

type InitialState = {
  currenciesPage: {
    isLoading: boolean,
    currencies: Currency[] | null | []
  }
}

const initialState: InitialState = {
  currenciesPage: {
    isLoading: false,
    currencies: null
  }
}

export type ActionCurrenciesTypes = GetCurrenciesErrorAction | GetCurrenciesSuccessAction | ChangeCurrenciesLoadingStatus;

export default function currenciesPageReducer(state = initialState, action: ActionCurrenciesTypes): InitialState {
  switch(action.type) {
    case types.GET_CURRENCIES_ERROR: {
      return {
        ...state,
        currenciesPage: {
          ...state.currenciesPage,
          currencies: [],
        }
      }
    }
    case types.GET_CURRENCIES_SUCCESS: {
      return {
        ...state,
        currenciesPage: {
          ...state.currenciesPage,
          currencies: action.currencies,
        }
      }
    }
    case types.CHANGE_CURRENCIES_LOADING_STATUS: {
      return {
        ...state,
        currenciesPage: {
          ...state.currenciesPage,
          isLoading: action.status,
        }
      }
    }
    default: {
      return state;
    }
  }
}