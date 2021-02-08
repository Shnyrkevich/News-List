import { Dispatch } from 'redux';
import { getCurrencies } from '../../api/api_requests';
import { currenciesActions, CurrenciesActionsTypes } from '../reducers/currenciesPageReducer';
 
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
      dispatch(currenciesActions.getCurrenciesSuccessAction(currencies));
      dispatch(currenciesActions.changeCurrenciesLoadingStatus(false));
    })
    .catch((e: any) => {
      console.log(e);
      dispatch(currenciesActions.getCurrenciesErrorAction());
      dispatch(currenciesActions.changeCurrenciesLoadingStatus(false));
    })
  } 
}