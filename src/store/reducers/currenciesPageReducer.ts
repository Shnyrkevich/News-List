import { InferActionsTypes } from '../store';

export const currenciesActions = {
  getCurrenciesErrorAction: () => ({ type: 'GET_CURRENCIES_ERROR' } as const),
  getCurrenciesSuccessAction: (currencyData: CurrencyData) => ({ type: 'GET_CURRENCIES_SUCCESS', currencyData } as const),  
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

export type CurrencyData = {
  currentDate: string,
  currencies: Currency[]
}

type InitialState = {
  currenciesPage: {
    isLoading: boolean,
    currencyData: CurrencyData | null
  }
}

const initialState: InitialState = {
  currenciesPage: {
    isLoading: false,
    currencyData: null
  }
}

export default function currenciesPageReducer(state = initialState, action: CurrenciesActionsTypes): InitialState {
  switch(action.type) {
    case 'GET_CURRENCIES_ERROR': {
      return {
        ...state,
        currenciesPage: {
          ...state.currenciesPage,
          currencyData: null
        }
      }
    }
    case 'GET_CURRENCIES_SUCCESS': {
      return {
        ...state,
        currenciesPage: {
          ...state.currenciesPage,
          currencyData: action.currencyData
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