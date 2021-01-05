import { types } from '../actions';

const initialState = {
  modalWindow: {
    postModalVisability: false,
    authorizationModalVisability: false
  }
};

export default function modalReducer(state = initialState, action: any) {
  switch (action.type) {
    case types.CHANGE_MODAL_POST_VISABILITY: {
      return {
        ...state,
        modalWindow: {
          ...state.modalWindow,
          postModalVisability: !state.modalWindow.postModalVisability
        }
      };
    }
    case types.CHANGE_AUTHORIZATION_MODAL_VISABILITY: {
      return {
        ...state,
        modalWindow: {
          ...state.modalWindow,
          authorizationModalVisability: !state.modalWindow.authorizationModalVisability
        }
      };
    }
    default: {
      return state;
    }
  }
}
