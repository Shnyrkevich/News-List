import { IUser } from '../reducers/userAuthorizationReducer';
import { RootState } from '../store';

export function getAuthUser(state: RootState): IUser | null {
  return state.userAuthorizationReducer.activeUser.user;
}

export function getIsAuth(state: RootState): boolean {
  return state.userAuthorizationReducer.activeUser.isAuth;
}

export function getUsers(state: RootState): IUser[] {
  return state.userAuthorizationReducer.usersData;
}