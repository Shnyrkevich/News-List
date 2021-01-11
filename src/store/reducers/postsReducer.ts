import {
    types,
    AddNewPostAction,
    DeletePostAction,
    ChangePostAction,
    SetActualPostsAction,
    ChangeUserInPostsAction
} from '../actions';

export type TUser = {
  id: number
  login: string
  avatar?: string | null
}

export type TPost = {
  id: number
  user: TUser
  title: string
  text: string 
  tags: string[]
  date: string
}

type PostsPage = {
  actualPosts: TPost[]
  posts: TPost[]
}

type InitialState = {
  postsPage: PostsPage
}

type ActionTypes = AddNewPostAction | DeletePostAction | ChangePostAction | SetActualPostsAction | ChangeUserInPostsAction;

const initialState: InitialState = {
  postsPage: {
    actualPosts: [],
    posts: [
      {
        id: 1,
        user: {
          id: 1,
          login: 'Peter',
          avatar: null
        },
        text: 'You can introduce yourself to anyone you don’t know, or to remind someone you’ve met before who might have forgotten you. When you’re introducing yourself, you can add a little bit of information like where you first met, or what you do. You can even use your English learning as a conversation starter.',
        title: 'Introductions',
        tags: ['introduction', 'english'],
        date: 'Mon Jan 04 2021 18:11:35 GMT+0300 (Москва, стандартное время)'
      },
      {
        id: 2,
        user: {
          id: 1,
          login: 'Peter',
          avatar: null
        },
        text: 'Topics that are universal can be shared by almost anyone.\nThings like the weather, current news, sports and entertainment are usually safe conversation starters, especially when you’re speaking to a group—even if one person doesn’t really watch sports, someone else in the group might.\nAlthough these topics are talked about by many, some people might not be fans of sports, or might not follow entertainment news, so if you can, try to match people’s interests to the topic you choose. For example, if you’ve heard them talking about big news stories in the past, you could try to talk about a news story from today.',
        title: 'Universal Topics',
        tags: ['universal topics', 'english'],
        date: 'Mon Jan 04 2021 18:11:35 GMT+0300 (Москва, стандартное время)'
      },
      {
        id: 3,
        user: {
          id: 1,
          login: 'Peter',
          avatar: null
        },
        text: 'If you’re not sure what topic to talk about, or don’t have anything interesting to say, you can just ask someone about their day, or you can talk about yours.',
        title: 'About day',
        tags: ['day', 'english'],
        date: 'Mon Jan 04 2021 18:11:35 GMT+0300 (Москва, стандартное время)'
      },
      {
        id: 4,
        user: {
          id: 1,
          login: 'Peter',
          avatar: null
        },
        text: 'Some conversations are only appropriate in a work environment.\nStay even less personal at work than in more casual places, and avoid gossiping (talking about other people who are not present)! Instead, you can talk about the day, an upcoming party or meeting, or ask about the person’s job.',
        title: 'The Workplace',
        tags: ['work', 'english'],
        date: 'Mon Jan 04 2021 18:11:35 GMT+0300 (Москва, стандартное время)'
      },
      {
        id: 5,
        user: {
          id: 1,
          login: 'Peter',
          avatar: null
        },
        text: 'Some of the best small talk is about where you and your conversation partner are located.\nIt’s something you both share, so there’s no worry that they won’t know what you’re talking about. Look around and find something to comment on, or look at your partner and find something nice to compliment them on. Nothing makes people feel better than a genuine compliment!',
        title: 'Observations',
        tags: ['observations', 'english'],
        date: 'Mon Jan 04 2021 18:11:35 GMT+0300 (Москва, стандартное время)'
      },
      {
        id: 6,
        user: {
          id: 1,
          login: 'Peter',
          avatar: null
        },
        text: 'When you have something similar with your speaking partner, that means you have something to talk about. Find a mutual friend (a friend you both know) or a common interest or hobby, and you’ll have something to talk about.',
        title: 'Common Interests',
        tags: ['interests', 'english'],
        date: 'Mon Jan 04 2021 18:11:35 GMT+0300 (Москва, стандартное время)'
      }
    ]
  }
};

const postsReducer = (state = initialState, action: ActionTypes): InitialState => {
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
              ...action.newPost
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
            return el.id === action.post.id ? action.post : el;
          })
        }
      };
    }
    case types.DELETE_POST: {
      return {
        ...state,
        postsPage: {
          ...state.postsPage,
          posts: state.postsPage.posts.filter((el) => el.id !== action.id)
        }
      };
    }
    case types.SET_ACTUAL_POSTS: {
      return {
        ...state,
        postsPage: {
          ...state.postsPage,
          actualPosts: action.posts,
        }
      }
    }
    case types.CHANGE_USER_IN_POSTS: {
      return {
        ...state,
        postsPage: {
          ...state.postsPage,
          posts: state.postsPage.posts.map((el: TPost) => {
            if (action.user.id === el.user.id) {
              return {
                ...el,
                user: action.user
              }
            }
            return el;
          }),
        }
      }
    }
    default: {
      return state;
    }
  }
};

export default postsReducer;
