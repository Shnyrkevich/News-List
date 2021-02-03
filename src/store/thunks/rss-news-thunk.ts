import { actionCreator } from '../actions';
import { Dispatch } from 'redux';
import { getRssNews } from '../../api/api_requests';
 
export const getCurrentRssNewsThunkCreator = (rssNewsUrl: string) => {
  return (dispatch: Dispatch): void => {
    dispatch(actionCreator().changeLoadingStatusOnRssPage(true));
    getRssNews(rssNewsUrl)
    .then((response: any) => {
      console.log(response);
      dispatch(actionCreator().setCurrentRssNews({
        description: response.data.feed.description,
        sourceNewsData: response.data.items
      }));
      dispatch(actionCreator().changeLoadingStatusOnRssPage(false));
    })
    .catch((e: any) => {
      console.log(e);
      dispatch(actionCreator().changeLoadingStatusOnRssPage(false));
    })
  } 
}