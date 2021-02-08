import { InferActionsTypes } from '../store';

export const modalWindowsActions = {
  changeModalVisability: () => ({ type: 'CHANGE_MODAL_POST_VISABILITY' } as const),
  changeAuthorizationModalVisability: () => ({ type: 'CHANGE_AUTHORIZATION_MODAL_VISABILITY' } as const),
  changeUserModalVisability: () => ({ type: 'CHANGE_USER_MODAL_VISABILITY' } as const),
};

export type ModalWindowsActionsTypes = InferActionsTypes<typeof modalWindowsActions>;

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

export default function modalReducer(state = initialState, action: ModalWindowsActionsTypes): InitialState {
  switch (action.type) {
    case 'CHANGE_MODAL_POST_VISABILITY': {
      return {
        ...state,
        modalWindow: {
          ...state.modalWindow,
          postModalVisability: !state.modalWindow.postModalVisability
        }
      };
    }
    case 'CHANGE_AUTHORIZATION_MODAL_VISABILITY': {
      return {
        ...state,
        modalWindow: {
          ...state.modalWindow,
          authorizationModalVisability: !state.modalWindow.authorizationModalVisability
        }
      };
    }
    case 'CHANGE_USER_MODAL_VISABILITY': {
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
