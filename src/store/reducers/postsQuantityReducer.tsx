import { types } from '../actions';

const initialState = {
    postsQuantity: {
        quantity: 3,
        actualPage: 1,
    }
};

export default function postsQuantityReducer(state = initialState, action: any) {
    switch(action.type) {
        case types.CHANGE_POSTS_QUANTITY: {
            return {
                ...state,
                postsQuantity: {
                    ...state.postsQuantity,
                    quantity: action.data,
                }
            }
        }
        case types.CHANGE_PAGE: {
            return {
                ...state,
                postsQuantity: {
                    ...state.postsQuantity,
                    actualPage: action.data,
                }
            }
        }
        default: {
            return state;
        }
    }
}