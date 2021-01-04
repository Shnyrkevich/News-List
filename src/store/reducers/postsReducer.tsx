import { types } from '../actions';
import { dateFix } from '../../utils/dateFix';

const initialState = {
  postsPage: {
    actualPosts: [],
    posts: [
      {
        id: 1,
        user: {
          name: 'Peter',
          avatar: null
        },
        text: 'asdasasdasd',
        title: 'ROMAN',
        tags: ['nature', 'scince', 'happy new year'],
        date: 'Mon Jan 04 2021 18:11:35 GMT+0300 (Москва, стандартное время)'
      },
      {
        id: 2,
        user: {
          name: 'Peter',
          avatar: null
        },
        text: 'asdasasdasd',
        title: 'ROMAN',
        tags: ['nature', 'scince', 'happy new year'],
        date: 'Mon Jan 04 2021 18:11:35 GMT+0300 (Москва, стандартное время)'
      },
      {
        id: 3,
        user: {
          name: 'Peter',
          avatar: null
        },
        text: 'asdasasdasd',
        title: 'ROMAN',
        tags: ['nature', 'scince', 'happy new year'],
        date: 'Mon Jan 04 2021 18:11:35 GMT+0300 (Москва, стандартное время)'
      },
      {
        id: 4,
        user: {
          name: 'Peter',
          avatar: null
        },
        text: 'asdasasdasd',
        title: 'ROMAN',
        tags: ['nature', 'scince', 'happy new year'],
        date: 'Mon Jan 04 2021 18:11:35 GMT+0300 (Москва, стандартное время)'
      },
      {
        id: 5,
        user: {
          name: 'Peter',
          avatar: null
        },
        text: 'asdasasdasd',
        title: 'Peka',
        tags: ['nature', 'scince', 'happy new year'],
        date: 'Mon Jan 04 2021 18:11:35 GMT+0300 (Москва, стандартное время)'
      },
      {
        id: 6,
        user: {
          name: 'Peter',
          avatar: null
        },
        text: 'asdasasdasd',
        title: 'Lola',
        tags: ['nature', 'scince', 'happy new year'],
        date: 'Mon Jan 04 2021 18:11:35 GMT+0300 (Москва, стандартное время)'
      }
    ]
  }
};

interface User {
  name: string;
  avatar: string;
}

export interface IProps {
  id: number;
  user: User;
  title: string;
  text: string;
  tags: string[],
  date: string
}

const postsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.ADD_NEW_POST: {
      return {
        ...state,
        postsPage: {
          ...state.postsPage,
          posts: [
            ...state.postsPage.posts,
            {
              id: state.postsPage.posts.length + 1,
              ...action.data
            }
          ]
        }
      };
    }
    case types.CHANGE_POST: {
      return {
        ...state,
        postsPage: {
          ...state.postsPage,
          posts: state.postsPage.posts.map((el) => {
            return el.id === action.data.id ? action.data : el;
          })
        }
      };
    }
    case types.DELETE_POST: {
      return {
        ...state,
        postsPage: {
          ...state.postsPage,
          posts: state.postsPage.posts.filter((el) => el.id !== action.data)
        }
      };
    }
    case types.SET_ACTUAL_POSTS: {
      return {
        ...state,
        postsPage: {
          ...state.postsPage,
          actualPosts: action.data,
        }
      }
    }
    default: {
      return state;
    }
  }
};

export default postsReducer;
