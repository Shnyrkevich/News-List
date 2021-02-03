import { Currency } from './reducers/currenciesPageReducer';
import { TPost, TUser } from './reducers/postsReducer';
import { IUser } from './reducers/userAuthorizationReducer';
import { CurrentRssNews, RssNewsSource } from './reducers/rssNewReducer'; 

export const types = {
  ADD_NEW_POST: 'ADD_NEW_POST' as const,
  SET_ACTUAL_POSTS: 'SET_ACTUAL_POSTS' as const,
  DELETE_POST: 'DELETE_POST' as const,
  CHANGE_POST: 'CHANGE_POST' as const,
  CHANGE_MODAL_POST_VISABILITY: 'CHANGE_MODAL_POST_VISABILITY' as const,
  CHANGE_AUTHORIZATION_MODAL_VISABILITY: 'CHANGE_AUTHORIZATION_MODAL_VISABILITY' as const,
  CHANGE_USER_MODAL_VISABILITY: 'CHANGE_USER_MODAL_VISABILITY' as const,
  CHANGE_POSTS_QUANTITY: 'CHANGE_POSTS_QUANTITY' as const,
  CHANGE_PAGE: 'CHANGE_PAGE' as const,
  LOG_IN: 'LOG_IN' as const,
  SET_TAGS_FOR_SEARCH: 'SET_TAGS_FOR_SEARCH' as const,
  ADD_NEW_USER: 'ADD_NEW_USER' as const,
  CHANGE_USER_DATA: 'CHANGE_USER_DATA' as const,
  DELETE_USER: 'DELETE_USER' as const,
  EXIT_USER: 'EXIT_USER' as const,
  CHANGE_SORT_BY_DATE_STATUS: 'CHANGE_SORT_BY_DATE_STATUS' as const,
  SET_AUTHOR_FOR_SORT: 'SET_AUTHOR_FOR_SORT' as const,
  CHANGE_USER_IN_POSTS: 'CHANGE_USER_IN_POSTS' as const,
  GET_CURRENCIES_SUCCESS: 'GET_CURRENCIES_SUCCESS' as const,
  GET_CURRENCIES_ERROR: 'GET_CURRENCIES_ERROR' as const,
  CHANGE_CURRENCIES_LOADING_STATUS: 'CHANGE_CURRENCIES_LOADING_STATUS' as const,
  SET_CURRENT_RSS_NEWS_SUCCESS: 'SET_CURRENT_RSS_NEWS_SUCCESS' as const,
  ADD_NEW_RSS_SOURCE: 'ADD_NEW_RSS_SOURCE' as const,
  CHANGE_RSS_PAGE_LOADING_STATUS: 'CHANGE_RSS_PAGE_LOADING_STATUS' as const
};

export type NewPost = {
  user: TUser
  title: string
  text: string 
  tags: string[]
  date: string
}

export type AddNewPostAction = {
  type: typeof types.ADD_NEW_POST
  newPost: NewPost
}

export type DeletePostAction = {
  type: typeof types.DELETE_POST
  id: number
}

export type ChangePostAction= {
  type: typeof types.CHANGE_POST
  post: TPost
}

export type SetActualPostsAction = {
  type: typeof types.SET_ACTUAL_POSTS
  posts: TPost[]
}

export type ChangeModalVisabilityAction = {
  type: typeof types.CHANGE_MODAL_POST_VISABILITY
}

export type ChangeAuthorizationModalVisabilityAction = {
  type: typeof types.CHANGE_AUTHORIZATION_MODAL_VISABILITY
}

export type ChangeUserModalVisabilityAction = {
  type: typeof types.CHANGE_USER_MODAL_VISABILITY
}

export type ChangePostsQuantityAction = {
  type: typeof types.CHANGE_POSTS_QUANTITY
  quantity: number
}

export type ChangePageAction = {
  type: typeof types.CHANGE_PAGE
  page: number
}

export type SetTagsAction = {
  type: typeof types.SET_TAGS_FOR_SEARCH
  tags: string[]
}

export type NewUser = {
  login: string
  password: string
  avatar: string | null
}

export type AddNewUserAction = {
  type: typeof types.ADD_NEW_USER
  newUser: NewUser
}

export type DeleteUserAction = {
  type: typeof types.DELETE_USER
  id: number
}

export type ChangeUserDataAction = {
  type: typeof types.CHANGE_USER_DATA
  user: IUser
}

export type LogInAction = {
  type: typeof types.LOG_IN
  user: IUser
}

export type UserExitAction = {
  type: typeof types.EXIT_USER
}

export type ChangeSortByDateStatusAction = {
  type: typeof types.CHANGE_SORT_BY_DATE_STATUS
  status: number
}

export type SetAuthorForSortAction = {
  type: typeof types.SET_AUTHOR_FOR_SORT
  authorName: string | null
}

export type ChangeUserInPostsAction = {
  type: typeof types.CHANGE_USER_IN_POSTS
  user: TUser
}

export type GetCurrenciesSuccessAction = {
  type: typeof types.GET_CURRENCIES_SUCCESS
  currencies: Currency[]
}

export type GetCurrenciesErrorAction = {
  type: typeof types.GET_CURRENCIES_ERROR
}

export type ChangeCurrenciesLoadingStatus = {
  type: typeof types.CHANGE_CURRENCIES_LOADING_STATUS
  status: boolean
}

export type SetCurrentRssNewsAction = {
  type: typeof types.SET_CURRENT_RSS_NEWS_SUCCESS
  data: CurrentRssNews
}

export type AddNewRssSourceAction = {
  type: typeof types.ADD_NEW_RSS_SOURCE
  source: RssNewsSource
}

export type ChangeLoadingStatusOnRssPageAction = {
  type: typeof types.CHANGE_RSS_PAGE_LOADING_STATUS
  status: boolean
}

export const actionCreator = () => {
  return {
    addNewPost: (newPost: NewPost): AddNewPostAction => ({ type: types.ADD_NEW_POST, newPost }),
    deletePost: (id: number): DeletePostAction => ({ type: types.DELETE_POST, id}),
    changePost: (post: TPost): ChangePostAction => ({ type: types.CHANGE_POST, post }),
    setActualPosts: ((posts: TPost[]): SetActualPostsAction => ({ type: types.SET_ACTUAL_POSTS, posts })),
    changeModalVisability: (): ChangeModalVisabilityAction => ({ type: types.CHANGE_MODAL_POST_VISABILITY }),
    changeAuthorizationModalVisability: (): ChangeAuthorizationModalVisabilityAction => ({ type: types.CHANGE_AUTHORIZATION_MODAL_VISABILITY }),
    changePostsQuantity: (quantity: number): ChangePostsQuantityAction => ({ type: types.CHANGE_POSTS_QUANTITY, quantity }),
    changePage: (page: number): ChangePageAction => ({ type: types.CHANGE_PAGE, page }),
    setTags: (tags: string[]): SetTagsAction => ({ type: types.SET_TAGS_FOR_SEARCH, tags }),
    addNewUser: (newUser: NewUser): AddNewUserAction => ({ type: types.ADD_NEW_USER, newUser }),
    deleteUser: (id: number): DeleteUserAction => ({ type: types.DELETE_USER, id }),
    changeUserData: (user: IUser): ChangeUserDataAction => ({ type: types.CHANGE_USER_DATA, user }),
    logIn: (user: IUser): LogInAction => ({ type: types.LOG_IN, user }),
    userExit: (): UserExitAction => ({ type: types.EXIT_USER }),
    changeUserModalVisability: (): ChangeUserModalVisabilityAction => ({ type: types.CHANGE_USER_MODAL_VISABILITY }),
    changeSortByDateStatus: (status: number): ChangeSortByDateStatusAction => ({ type: types.CHANGE_SORT_BY_DATE_STATUS, status }),
    setAuhorForSort: (authorName: string | null): SetAuthorForSortAction => ({ type: types.SET_AUTHOR_FOR_SORT, authorName }),
    changeUserInPosts: (user: TUser): ChangeUserInPostsAction => ({ type: types.CHANGE_USER_IN_POSTS, user }),
    getCurrenciesErrorAction: (): GetCurrenciesErrorAction => ({ type: types.GET_CURRENCIES_ERROR }),
    getCurrenciesSuccessAction: (currencies: any): GetCurrenciesSuccessAction => ({ type: types.GET_CURRENCIES_SUCCESS, currencies }),
    changeCurrenciesLoadingStatus: (status: boolean): ChangeCurrenciesLoadingStatus => ({ type: types.CHANGE_CURRENCIES_LOADING_STATUS, status }),
    setCurrentRssNews: (data: CurrentRssNews): SetCurrentRssNewsAction => ({ type: types.SET_CURRENT_RSS_NEWS_SUCCESS, data }),
    addNewRssNewsSource: (source: RssNewsSource): AddNewRssSourceAction => ({ type: types.ADD_NEW_RSS_SOURCE, source }),
    changeLoadingStatusOnRssPage: (status: boolean): ChangeLoadingStatusOnRssPageAction => ({ type: types.CHANGE_RSS_PAGE_LOADING_STATUS, status }),
  };
};
