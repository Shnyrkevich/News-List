import {
  types,
  AddNewUserAction,
  DeleteUserAction,
  ChangeUserDataAction,
  LogInAction,
  UserExitAction,
} from '../actions';

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

type ActionTypes = AddNewUserAction | DeleteUserAction | ChangeUserDataAction | LogInAction | UserExitAction;

const initialState: InitialState = {
  usersData: [
    {
      id: 1,
      login: 'Peter',
      password: '12345678',
      avatar: ''
    }
  ],
  activeUser: {
    isAuth: false,
    user: null
  }
}

export default function userAuthorizationReducer(state = initialState, action: ActionTypes): InitialState {
  switch(action.type) {
    case types.ADD_NEW_USER: {
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
    case types.DELETE_USER: {
      return {
        ...state,
        usersData: state.usersData.filter((el: IUser) => el.id !== action.id),
        activeUser: {
          isAuth: false,
          user: null,
        }
      }
    }
    case types.CHANGE_USER_DATA: {
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
    case types.LOG_IN: {
      return {
        ...state,
        activeUser: {
          isAuth: true,
          user: action.user
        }
      }
    }
    case types.EXIT_USER: {
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