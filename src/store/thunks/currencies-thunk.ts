import { actionCreator } from '../actions';
import { Dispatch } from 'redux';
import { getCurrencies } from '../../api/api_requests';
import { ActionCurrenciesTypes } from '../reducers/currenciesPageReducer';
import { AxiosResponse } from 'axios';
 
export const getCurrenciesThunkCreator = () => {
  return (dispatch: Dispatch<ActionCurrenciesTypes>): void => {
    dispatch(actionCreator().changeCurrenciesLoadingStatus(true));
    getCurrencies()
    .then((response) => {
      const currencies = response.data.slice(0, 5).map((el: any, ind: number) => {
        return {
          ...el,
          key: ind
        };
      });
      dispatch(actionCreator().getCurrenciesSuccessAction(currencies));
      dispatch(actionCreator().changeCurrenciesLoadingStatus(false));
    })
    .catch((e: any) => {
      console.log(e);
      dispatch(actionCreator().getCurrenciesErrorAction());
      dispatch(actionCreator().changeCurrenciesLoadingStatus(false));
    })
  } 
}