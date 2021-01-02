import { types } from "../actions";

const initialState = {
  postsPage: {
    actualPosts: [],
    posts: [
      {
        id: 1,
        user: {
          name: "Peter",
          avatar: null
        },
        text: "asdasasdasd",
        title: "ROMAN",
        newsImage:
          "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/baby-yoda-old-yoda-1574103229.jpg?crop=0.486xw:0.973xh;0.514xw,0&resize=980:*",
        tags: ['nature', 'scince', 'happy new year']
      },
      {
        id: 2,
        user: {
          name: "Peter",
          avatar: null
        },
        text: "asdasasdasd",
        title: "ROMAN",
        newsImage:
          "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/baby-yoda-old-yoda-1574103229.jpg?crop=0.486xw:0.973xh;0.514xw,0&resize=980:*",
        tags: ['nature', 'scince', 'happy new year']
      },
      {
        id: 3,
        user: {
          name: "Peter",
          avatar: null
        },
        text: "asdasasdasd",
        title: "ROMAN",
        newsImage:
          "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/baby-yoda-old-yoda-1574103229.jpg?crop=0.486xw:0.973xh;0.514xw,0&resize=980:*",
        tags: ['nature', 'scince', 'happy new year']
      },
      {
        id: 4,
        user: {
          name: "Peter",
          avatar: null
        },
        text: "asdasasdasd",
        title: "ROMAN",
        newsImage:
          "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/baby-yoda-old-yoda-1574103229.jpg?crop=0.486xw:0.973xh;0.514xw,0&resize=980:*",
        tags: ['nature', 'scince', 'happy new year']
      },
      {
        id: 5,
        user: {
          name: "Peter",
          avatar: null
        },
        text: "asdasasdasd",
        title: "Peka",
        newsImage:
          "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/baby-yoda-old-yoda-1574103229.jpg?crop=0.486xw:0.973xh;0.514xw,0&resize=980:*",
        tags: ['nature', 'scince', 'happy new year']
      },
      {
        id: 6,
        user: {
          name: "Peter",
          avatar: null
        },
        text: "asdasasdasd",
        title: "Lola",
        newsImage:
          "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/baby-yoda-old-yoda-1574103229.jpg?crop=0.486xw:0.973xh;0.514xw,0&resize=980:*",
        tags: ['nature', 'scince', 'happy new year']
      }
    ]
  }
};

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
