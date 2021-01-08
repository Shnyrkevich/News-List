import { TPost, TUser } from './reducers/postsReducer';
import { IUser } from './reducers/userAuthorizationReducer';

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
  avatar: string
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
  };
};
