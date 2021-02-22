import { Dispatch } from 'redux';
import { getCurrencies } from '../../api/api_requests';
import { currenciesActions, CurrenciesActionsTypes, CurrencyData } from '../reducers/currenciesPageReducer';
 
export const getCurrenciesThunkCreator = () => {
  return (dispatch: Dispatch<CurrenciesActionsTypes>): void => {
    dispatch(currenciesActions.changeCurrenciesLoadingStatus(true));
    getCurrencies()
    .then((response) => {
      const currencies = response.data.slice(0, 5).map((el: any, ind: number) => {
        return {
          ...el,
          key: ind
        };
      });
      const currenciesData: CurrencyData = {
        currencies,
        currentDate: new Date().toString()
      };
      dispatch(currenciesActions.getCurrenciesSuccessAction(currenciesData));
      dispatch(currenciesActions.changeCurrenciesLoadingStatus(false));
    })
    .catch((e: any) => {
      console.log(e);
      dispatch(currenciesActions.getCurrenciesErrorAction());
      dispatch(currenciesActions.changeCurrenciesLoadingStatus(false));
    })
  } 
}