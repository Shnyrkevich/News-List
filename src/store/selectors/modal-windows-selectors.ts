export function getAddNewPostModalVisability(state: any): boolean {
  return state.modalReducer.modalWindow.postModalVisability;
}

export function getAuthorizationModalVisability(state: any): boolean {
  return state.modalReducer.modalWindow.authorizationModalVisability;
}

export function getEditUserModalVisability(state: any): boolean {
  return state.modalReducer.modalWindow.editUserModalVisability;
}

