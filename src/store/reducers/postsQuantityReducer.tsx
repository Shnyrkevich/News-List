import {
  types,
  ChangePageAction,
  ChangePostsQuantityAction,
} from '../actions';

type TPostsQuantity = {
  quantity: number | null
  actualPage: number | null
}

type InitialState = {
  postsQuantity: TPostsQuantity
}

type ActionTypes = ChangePageAction | ChangePostsQuantityAction;

const initialState: InitialState = {
  postsQuantity: {
    quantity: 3,
    actualPage: 1,
  }
};

export default function postsQuantityReducer(state = initialState, action: ActionTypes): InitialState {
  switch(action.type) {
    case types.CHANGE_POSTS_QUANTITY: {
      return {
        ...state,
        postsQuantity: {
            ...state.postsQuantity,
            quantity: action.quantity,
            }
      }
    }
    case types.CHANGE_PAGE: {
      return {
        ...state,
        postsQuantity: {
            ...state.postsQuantity,
            actualPage: action.page,
        }
      }
    }
    default: {
      return state;
    }
  }
}