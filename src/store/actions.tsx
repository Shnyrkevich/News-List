import { IPost } from './reducers/postsReducer';
import { IUser } from './reducers/userAuthorizationReducer';

export const types = {
  ADD_NEW_POST: 'ADD_NEW_POST',
  SET_ACTUAL_POSTS: 'SET_ACTUAL_POSTS',
  DELETE_POST: 'DELETE_POST',
  CHANGE_POST: 'CHANGE_POST',
  CHANGE_MODAL_POST_VISABILITY: 'CHANGE_MODAL_POST_VISABILITY',
  CHANGE_AUTHORIZATION_MODAL_VISABILITY: 'CHANGE_AUTHORIZATION_MODAL_VISABILITY',
  CHANGE_USER_MODAL_VISABILITY: 'CHANGE_USER_MODAL_VISABILITY',
  CHANGE_POSTS_QUANTITY: 'CHANGE_POSTS_QUANTITY',
  CHANGE_PAGE: 'CHANGE_PAGE',
  LOG_IN: 'LOG_IN',
  SET_TAGS_FOR_SEARCH: 'SET_TAGS_FOR_SEARCH',
  ADD_NEW_USER: 'ADD_NEW_USER',
  CHANGE_USER_DATA: 'CHANGE_USER_DATA',
  DELETE_USER: 'DELETE_USER',
  EXIT_USER: 'EXIT_USER',

};

export const actionCreator = () => {
  return {
    addNewPost: (post: IPost) => ({ type: types.ADD_NEW_POST, data: post }),
    deletePost: (postId?: number) => ({ type: types.DELETE_POST, data: postId }),
    changePost: (post: any) => ({ type: types.CHANGE_POST, data: post }),
    setActualPosts: ((posts: IPost[]) => ({ type: types.SET_ACTUAL_POSTS, data: posts })),
    changeModalVisability: () => ({ type: types.CHANGE_MODAL_POST_VISABILITY }),
    changeAuthorizationModalVisability: () => ({ type: types.CHANGE_AUTHORIZATION_MODAL_VISABILITY }),
    changePostsQuantity: (quantity: number) => ({ type: types.CHANGE_POSTS_QUANTITY, data: quantity }),
    changePage: (page: number) => ({ type: types.CHANGE_PAGE, data: page }),
    setTags: (tags: String[]) => ({ type: types.SET_TAGS_FOR_SEARCH, data: tags }),
    addNewUser: (user: IUser) => ({ type: types.ADD_NEW_USER, data: user }),
    deleteUser: (id?: number) => ({ type: types.DELETE_USER, data: id }),
    changeUserData: (newData: IUser) => ({ type: types.CHANGE_USER_DATA, data: newData }),
    logIn: (authData: IUser) => ({ type: types.LOG_IN, data: authData }),
    userExit: () => ({ type: types.EXIT_USER }),
    changeUserModalVisability: () => ({ type: types.CHANGE_USER_MODAL_VISABILITY }),
  };
};
