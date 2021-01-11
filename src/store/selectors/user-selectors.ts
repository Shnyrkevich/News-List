import { IUser } from '../reducers/userAuthorizationReducer';

export function getAuthUser(state: any): IUser {
  return state.userAuthorizationReducer.activeUser.user;
}

export function getIsAuth(state: any): boolean {
  return state.userAuthorizationReducer.activeUser.isAuth;
}

export function getUsers(state: any): IUser[] {
  return state.userAuthorizationReducer.usersData;
}