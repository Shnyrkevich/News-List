import {
  types,
  SetCurrentRssNewsAction,
  AddNewRssSourceAction,
  ChangeLoadingStatusOnRssPageAction
} from '../actions';

export type RssNewsSource = {
  sourceName: string
  sourceLink: string
}

export type CurrentRssNews = {
  description: string
  sourceNewsData: any[]
}

type RssPage = {
  rssNewsSources: RssNewsSource[]
  currentSource: CurrentRssNews | null
  isLoading: boolean
}

type InitialState = {
  rssPage: RssPage
}

const initialState: InitialState = {
  rssPage: {
    rssNewsSources: [
      {
        sourceName: 'TUT.BY',
        sourceLink: 'https://news.tut.by/rss/all.rss'
      },
      {
        sourceName: 'Hubr',
        sourceLink: 'https://habr.com/ru/rss/hubs/all/'
      }
    ],
    currentSource: null,
    isLoading: false
  }
}

type ActionType = ChangeLoadingStatusOnRssPageAction | AddNewRssSourceAction | SetCurrentRssNewsAction;

export default function rssNewsReducer(state = initialState, action: ActionType): InitialState {
  switch(action.type) {
    case types.CHANGE_RSS_PAGE_LOADING_STATUS: {
      return {
        ...state,
        rssPage: {
          ...state.rssPage,
          isLoading: action.status,
        }
      }
    }
    case types.SET_CURRENT_RSS_NEWS_SUCCESS: {
      return {
        ...state,
        rssPage: {
          ...state.rssPage,
          currentSource: action.data,
        }
      }
    }
    case types.ADD_NEW_RSS_SOURCE: {
      return {
        ...state,
        rssPage: {
          ...state.rssPage,
          rssNewsSources: [...state.rssPage.rssNewsSources, action.source],
        }
      }
    }
    default: {
      return state;
    }
  }
}