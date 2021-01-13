import { actionCreator } from '../actions';
import { Dispatch } from 'redux';
import axios from 'axios';
 
export const getCurrenciesThunkCreator = () => {
  return (dispatch: Dispatch): void => {
    dispatch(actionCreator().changeCurrenciesLoadingStatus(true));
    axios.get('https://www.nbrb.by/api/exrates/rates?periodicity=0')
    .then((response: any) => {
      dispatch(actionCreator().getCurrenciesSuccessAction(response.data.slice(0, 5)));
      dispatch(actionCreator().changeCurrenciesLoadingStatus(false));
    })
    .catch((e: any) => {
      console.log(e);
      dispatch(actionCreator().getCurrenciesErrorAction());
      dispatch(actionCreator().changeCurrenciesLoadingStatus(false));
    })
  } 
}