import { RssNewsSource } from '../reducers/rssNewReducer';
import { RootState } from '../store';

export function getRssNewsSources(state: RootState): RssNewsSource[] {
  return state.rssNewsReducer.rssPage.rssNewsSources;
}

export function getRssNewsLoadingStatus(state: RootState): boolean {
  return state.rssNewsReducer.rssPage.isLoading;
}

export function getCurrentRssNews(state: RootState): any[] | null {
  return state.rssNewsReducer.rssPage.currentSourceData;
}

export function getLinkVerification(state: RootState): boolean {
  return state.rssNewsReducer.rssPage.linkVerificationLoadingStatus;
}
