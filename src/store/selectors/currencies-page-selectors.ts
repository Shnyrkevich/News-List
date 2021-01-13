import { Currency } from '../reducers/currenciesPageReducer';
import { RootState } from '../store';

export function getCurrencies(state: RootState): Currency[] | null | [] {
  return state.currenciesPageReducer.currenciesPage.currencies;
}

export function getCurrenciesIsLoading(state: RootState): boolean {
  return state.currenciesPageReducer.currenciesPage.isLoading;
}
