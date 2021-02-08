import { InferActionsTypes } from '../store';

export const rssNewsActions = {
  setCurrentRssNews: (data: any[]) => ({ type: 'SET_CURRENT_RSS_NEWS_SUCCESS', data } as const),
  addNewRssNewsSource: (source: RssNewsSource) => ({ type: 'ADD_NEW_RSS_SOURCE', source } as const),
  changeLoadingStatusOnRssPage: (status: boolean) => ({ type: 'CHANGE_RSS_PAGE_LOADING_STATUS', status } as const),
  toggleVerificationLinkLoadingStatus: (status: boolean) => ({ type: 'TOGGLE_VERIFICATION_LOADING_STATUS', status } as const),
  deleteRssNewsSource: (key: number) => ({ type: 'DELETE_RSS_NEWS_SOURCE', key } as const)
};

export type RssNewsActionsTypes = InferActionsTypes<typeof rssNewsActions>;

export type RssNewsSource = {
  key: number
  sourceName: string
  sourceLink: string
}

type RssPage = {
  rssNewsSources: RssNewsSource[]
  currentSourceData: any[] | null
  linkVerificationLoadingStatus: boolean
  isLoading: boolean
}

type InitialState = {
  rssPage: RssPage
}

const initialState: InitialState = {
  rssPage: {
    rssNewsSources: [
      {
        key: 0,
        sourceName: 'TUT.BY',
        sourceLink: 'https://news.tut.by/rss/all.rss'
      },
      {
        key: 1,
        sourceName: 'Hubr',
        sourceLink: 'https://habr.com/ru/rss/hubs/all/'
      }
    ],
    linkVerificationLoadingStatus: false,
    currentSourceData: null,
    isLoading: false
  }
}

export default function rssNewsReducer(state = initialState, action: RssNewsActionsTypes): InitialState {
  switch(action.type) {
    case 'CHANGE_RSS_PAGE_LOADING_STATUS': {
      return {
        ...state,
        rssPage: {
          ...state.rssPage,
          isLoading: action.status,
        }
      }
    }
    case 'SET_CURRENT_RSS_NEWS_SUCCESS': {
      return {
        ...state,
        rssPage: {
          ...state.rssPage,
          currentSourceData: action.data,
        }
      }
    }
    case 'ADD_NEW_RSS_SOURCE': {
      return {
        ...state,
        rssPage: {
          ...state.rssPage,
          rssNewsSources: [...state.rssPage.rssNewsSources, action.source],
        }
      }
    }
    case 'TOGGLE_VERIFICATION_LOADING_STATUS': {
      return {
        ...state,
        rssPage: {
          ...state.rssPage,
          linkVerificationLoadingStatus: action.status
        }
      }
    }
    case 'DELETE_RSS_NEWS_SOURCE': {
      return {
        ...state,
        rssPage: {
          ...state.rssPage,
          rssNewsSources: state.rssPage.rssNewsSources.filter((el: RssNewsSource) => el.key !== action.key),
        }
      }
    }
    default: {
      return state;
    }
  }
}