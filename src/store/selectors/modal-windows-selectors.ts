import { RootState } from '../store';

export function getAddNewPostModalVisability(state: RootState): boolean {
  return state.modalReducer.modalWindow.postModalVisability;
}

export function getAuthorizationModalVisability(state: RootState): boolean {
  return state.modalReducer.modalWindow.authorizationModalVisability;
}

export function getEditUserModalVisability(state: RootState): boolean {
  return state.modalReducer.modalWindow.editUserModalVisability;
}

