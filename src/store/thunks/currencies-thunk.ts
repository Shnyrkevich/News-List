import { actionCreator } from '../actions';
import { Dispatch } from 'redux';
import axios from 'axios';
 
export const getCurrenciesThunkCreator = () => {
  return (dispatch: Dispatch): void => {
    axios.get('https://www.nbrb.by/api/exrates/rates?periodicity=0')
    .then((response: any) => {
      const currencies: any[] = response.data.slice(0, 5).map((el: any, ind: number) => {
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