import { InferActionsTypes } from '../store';

export type NewUser = {
  login: string
  password: string
  avatar: string | null
}

export type IUser = {
  id: number
  login: string
  password: string
  avatar: string | null
}

export type IActiveUser = {
  isAuth: boolean
  user: IUser | null
}

type InitialState = {
  usersData: IUser[]
  activeUser: IActiveUser
}

export const userAuthorizationActions = {
  addNewUser: (newUser: NewUser) => ({ type: 'ADD_NEW_USER', newUser } as const),
  deleteUser: (id: number) => ({ type: 'DELETE_USER', id } as const),
  changeUserData: (user: IUser) => ({ type: 'CHANGE_USER_DATA', user } as const),
  logIn: (user: IUser) => ({ type: 'LOG_IN', user } as const),
  userExit: () => ({ type: 'EXIT_USER' } as const),
};

type UserAuthorizationActionsTypes = InferActionsTypes<typeof userAuthorizationActions>;

const initialState: InitialState = {
  usersData: [
    {
      id: 0,
      login: 'Admin',
      password: 'Admin',
      avatar: null
    },
    {
      id: 1,
      login: 'Peter',
      password: '12345678',
      avatar: null
    }
  ],
  activeUser: {
    isAuth: false,
    user: null
  }
}

export default function userAuthorizationReducer(state = initialState, action: UserAuthorizationActionsTypes): InitialState {
  switch(action.type) {
    case 'ADD_NEW_USER': {
      const newUser = {
        id: state.usersData.length + 1,
        ...action.newUser
      };
      return {
        ...state,
        usersData: [...state.usersData, newUser],
        activeUser: {
          isAuth: true,
          user: newUser,
        }
      }
    }
    case 'DELETE_USER': {
      return {
        ...state,
        usersData: state.usersData.filter((el: IUser) => el.id !== action.id),
        activeUser: {
          isAuth: false,
          user: null,
        }
      }
    }
    case 'CHANGE_USER_DATA': {
      return {
        ...state,
        usersData: state.usersData.map((el: IUser) => {
          return el.id === action.user.id ? action.user : el;
        }),
        activeUser: {
          isAuth: true,
          user: action.user,
        }
      }
    }
    case 'LOG_IN': {
      return {
        ...state,
        activeUser: {
          isAuth: true,
          user: action.user
        }
      }
    }
    case 'EXIT_USER': {
      return {
        ...state,
        activeUser: {
          isAuth: false,
          user: null
        }
      }
    }
    default: {
      return state;
    }
  }
}