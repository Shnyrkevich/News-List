import { types } from '../actions';

const initialState = {
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

export interface IUser {
  id?: number
  login: string
  password: string
  avatar?: string
}

export default function userAuthorizationReducer(state = initialState, action: any) {
  switch(action.type) {
    case types.ADD_NEW_USER: {
      const newUser = {
        id: state.usersData.length + 1,
        ...action.data
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
        usersData: state.usersData.filter((el: IUser) => el.id !== action.data.id),
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
          return el.id === action.data.id ? action.data : el;
        }),
        activeUser: {
          isAuth: true,
          user: action.data,
        }
      }
    }
    case types.LOG_IN: {
      return {
        ...state,
        activeUser: {
          isAuth: true,
          user: action.data
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