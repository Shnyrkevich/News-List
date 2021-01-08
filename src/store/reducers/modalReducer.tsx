import { 
  types,
  ChangeAuthorizationModalVisabilityAction,
  ChangeUserModalVisabilityAction,
  ChangeModalVisabilityAction,
 } from '../actions';

type TModalWindow = {
  postModalVisability: boolean
  authorizationModalVisability: boolean
  editUserModalVisability: boolean
}

type InitialState = {
  modalWindow: TModalWindow
}

const initialState: InitialState = {
  modalWindow: {
    postModalVisability: false,
    authorizationModalVisability: false,
    editUserModalVisability: false,
  }
};

type ActionTypes = ChangeAuthorizationModalVisabilityAction | ChangeModalVisabilityAction | ChangeUserModalVisabilityAction;

export default function modalReducer(state = initialState, action: ActionTypes): InitialState {
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
    case types.CHANGE_USER_MODAL_VISABILITY: {
      return {
        ...state,
        modalWindow: {
          ...state.modalWindow,
          editUserModalVisability: !state.modalWindow.editUserModalVisability
        }
      }
    }
    default: {
      return state;
    }
  }
}
