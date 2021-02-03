import { CurrentRssNews, RssNewsSource } from '../reducers/rssNewReducer';
import { RootState } from '../store';

export function getRssNewsSources(state: RootState): RssNewsSource[] {
  return state.rssNewsReducer.rssPage.rssNewsSources;
}

export function getRssNewsLoadingStatus(state: RootState): boolean {
  return state.rssNewsReducer.rssPage.isLoading;
}

export function getCurrentRssNews(state: RootState): CurrentRssNews | null {
  return state.rssNewsReducer.rssPage.currentSource;
}

