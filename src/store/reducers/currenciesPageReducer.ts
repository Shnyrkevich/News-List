import { InferActionsTypes } from '../store';

export const currenciesActions = {
  getCurrenciesErrorAction: () => ({ type: 'GET_CURRENCIES_ERROR' } as const),
  getCurrenciesSuccessAction: (currencies: Currency[] | []) => ({ type: 'GET_CURRENCIES_SUCCESS', currencies } as const),  
  changeCurrenciesLoadingStatus: (status: boolean) => ({ type: 'CHANGE_CURRENCIES_LOADING_STATUS', status } as const)
};

export type CurrenciesActionsTypes = InferActionsTypes<typeof currenciesActions>;

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

export default function currenciesPageReducer(state = initialState, action: CurrenciesActionsTypes): InitialState {
  switch(action.type) {
    case 'GET_CURRENCIES_ERROR': {
      return {
        ...state,
        currenciesPage: {
          ...state.currenciesPage,
          currencies: [],
        }
      }
    }
    case 'GET_CURRENCIES_SUCCESS': {
      return {
        ...state,
        currenciesPage: {
          ...state.currenciesPage,
          currencies: action.currencies,
        }
      }
    }
    case 'CHANGE_CURRENCIES_LOADING_STATUS': {
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