import { getRssNews } from '../../api/api_requests';
import { FormValues } from '../../components/AdministratorPage/AddNewRssSourceForm';
import { message } from 'antd';
import { RootState } from '../store';
import { RssNewsActionsTypes, RssNewsSource, rssNewsActions } from '../reducers/rssNewReducer';
import { ThunkAction } from 'redux-thunk';

type ThunkActionType = ThunkAction<void, RootState, unknown, RssNewsActionsTypes>;

export const getCurrentRssNewsThunkCreator = (rssNewsUrl: string): ThunkActionType => {
  return (dispatch) => {
    dispatch(rssNewsActions.changeLoadingStatusOnRssPage(true));
    getRssNews(rssNewsUrl)
    .then((response) => {
      dispatch(rssNewsActions.setCurrentRssNews(response.data.items.slice(0, 9)));
      dispatch(rssNewsActions.changeLoadingStatusOnRssPage(false));
    })
    .catch((e: any) => {
      console.log(e);
      dispatch(rssNewsActions.changeLoadingStatusOnRssPage(false));
    })
  } 
}

export const checkRssNewsSourceOnReadability = (values: FormValues): ThunkActionType => {
  return (dispatch, getState) => {
    dispatch(rssNewsActions.toggleVerificationLinkLoadingStatus(true));
    getRssNews(values.sourceLink)
    .then(() => {
      const sources = getState().rssNewsReducer.rssPage.rssNewsSources;
      if (sources.reduce((acc: boolean, el: RssNewsSource) => {
        return el.sourceLink === values.sourceLink || el.sourceName === values.sourceName ? true : false;
      }, false)) {
        throw new Error('We have the same data');
      }
      message.success('Yeah, the link is valid and has already added.');
      dispatch(rssNewsActions.addNewRssNewsSource({
        key: sources.length,
        ...values
      }));
      dispatch(rssNewsActions.toggleVerificationLinkLoadingStatus(false));
    })
    .catch((e: any) => {
      console.log(e);
      message.error('Sorry, your source link incorrect or we have already have the same.');
      dispatch(rssNewsActions.toggleVerificationLinkLoadingStatus(false));
    })
  }
}