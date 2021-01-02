export const types = {
  ADD_NEW_POST: "ADD_NEW_POST",
  SET_ACTUAL_POSTS: 'SET_ACTUAL_POSTS',
  DELETE_POST: "DELETE_POST",
  CHANGE_POST: "CHANGE_POST",
  OPEN_MODAL: "OPEN_MODAL",
  CLOSE_MODAL: "ClOSE_MODAL",
  CHANGE_POSTS_QUANTITY: 'CHANGE_POSTS_QUANTITY',
  CHANGE_PAGE: 'CHANGE_PAGE',
  SET_TAGS_FOR_SEARCH: 'SET_TAGS_FOR_SEARCH',
};

export const actionCreator = () => {
  return {
    addNewPost: (post: any) => ({ type: types.ADD_NEW_POST, data: post }),
    deletePost: (postId: number) => ({ type: types.DELETE_POST, data: postId }),
    changePost: (post: any) => ({ type: types.CHANGE_POST, data: post }),
    setActualPosts: ((posts: any) => ({ type: types.SET_ACTUAL_POSTS, data: posts })),
    openModal: (modalType: string) => ({ type: types.OPEN_MODAL }),
    closeModal: () => ({ type: types.CLOSE_MODAL }),
    changePostsQuantity: (quantity: number) => ({ type: types.CHANGE_POSTS_QUANTITY, data: quantity }),
    changePage: (page: number) => ({ type: types.CHANGE_PAGE, data: page }),
    setTags: (tags: String[]) => ({ type: types.SET_TAGS_FOR_SEARCH, data: tags })
  };
};
