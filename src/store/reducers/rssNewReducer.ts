import {
  types,
  SetCurrentRssNewsAction,
  AddNewRssSourceAction,
  ChangeLoadingStatusOnRssPageAction,
  ToggleVerificationLoadingStatusAction,
  DeleteRssNewsSourceAction
} from '../actions';

export type RssNewsSource = {
  key: number
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
    currentSource: null,
    isLoading: false
  }
}

type ActionType = ChangeLoadingStatusOnRssPageAction | AddNewRssSourceAction | SetCurrentRssNewsAction | ToggleVerificationLoadingStatusAction
                  | DeleteRssNewsSourceAction;

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
    case types.TOGGLE_VERIFICATION_LOADING_STATUS: {
      return {
        ...state,
        rssPage: {
          ...state.rssPage,
          linkVerificationLoadingStatus: action.status
        }
      }
    }
    case types.DELETE_RSS_NEWS_SOURCE: {
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