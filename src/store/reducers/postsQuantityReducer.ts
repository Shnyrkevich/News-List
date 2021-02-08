import { InferActionsTypes } from '../store';

export const postsQuantityActions = {
  changePostsQuantity: (quantity: number) => ({ type: 'CHANGE_POSTS_QUANTITY', quantity } as const),
  changePage: (page: number) => ({ type: 'CHANGE_PAGE', page } as const),
};

export type PostsQuantityActionsTypes = InferActionsTypes<typeof postsQuantityActions>;

export type TPostsQuantity = {
  quantity: number
  actualPage: number
}

type InitialState = {
  postsQuantity: TPostsQuantity
}

const initialState: InitialState = {
  postsQuantity: {
    quantity: 3,
    actualPage: 1,
  }
};

export default function postsQuantityReducer(state = initialState, action: PostsQuantityActionsTypes): InitialState {
  switch(action.type) {
    case 'CHANGE_POSTS_QUANTITY': {
      return {
        ...state,
        postsQuantity: {
            ...state.postsQuantity,
            quantity: action.quantity,
            }
      }
    }
    case 'CHANGE_PAGE': {
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