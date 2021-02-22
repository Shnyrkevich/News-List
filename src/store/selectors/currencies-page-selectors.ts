import { CurrencyData } from '../reducers/currenciesPageReducer';
import { RootState } from '../store';

export function getCurrencies(state: RootState): CurrencyData {
  return state.currenciesPageReducer.currenciesPage.currencyData;
}

export function getCurrenciesIsLoading(state: RootState): boolean {
  return state.currenciesPageReducer.currenciesPage.isLoading;
}
