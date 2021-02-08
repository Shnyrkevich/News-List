import { actionCreator } from '../actions';
import { Dispatch } from 'redux';
import { getRssNews } from '../../api/api_requests';
import { FormValues } from '../../components/AdministratorPage/AddNewRssSourceForm';
import { message } from 'antd';
import { RootState } from '../store';
import { ActionRssNewsTypes, RssNewsSource } from '../reducers/rssNewReducer';
import { ThunkAction } from 'redux-thunk';
import { AxiosResponse } from 'axios';

type ThunkActionType = ThunkAction<void, RootState, unknown, ActionRssNewsTypes>;

export const getCurrentRssNewsThunkCreator = (rssNewsUrl: string): ThunkActionType => {
  return (dispatch) => {
    dispatch(actionCreator().changeLoadingStatusOnRssPage(true));
    getRssNews(rssNewsUrl)
    .then((response) => {
      dispatch(actionCreator().setCurrentRssNews(response.data.items.slice(0, 9)));
      dispatch(actionCreator().changeLoadingStatusOnRssPage(false));
    })
    .catch((e: any) => {
      console.log(e);
      dispatch(actionCreator().changeLoadingStatusOnRssPage(false));
    })
  } 
}

export const checkRssNewsSourceOnReadability = (values: FormValues): ThunkActionType => {
  return (dispatch, getState) => {
    dispatch(actionCreator().toggleVerificationLinkLoadingStatus(true));
    getRssNews(values.sourceLink)
    .then(() => {
      const sources = getState().rssNewsReducer.rssPage.rssNewsSources;
      if (sources.reduce((acc: boolean, el: RssNewsSource) => {
        return el.sourceLink === values.sourceLink || el.sourceName === values.sourceName ? true : false;
      }, false)) {
        throw new Error('We have the same data');
      }
      message.success('Yeah, the link is valid and has already added.');
      dispatch(actionCreator().addNewRssNewsSource({
        key: sources.length,
        ...values
      }));
      dispatch(actionCreator().toggleVerificationLinkLoadingStatus(false));
    })
    .catch((e: any) => {
      console.log(e);
      message.error('Sorry, your source link incorrect or we have already have the same.');
      dispatch(actionCreator().toggleVerificationLinkLoadingStatus(false));
    })
  }
}