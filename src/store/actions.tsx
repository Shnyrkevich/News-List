import { IProps } from "../components/Posts/post";

export const types = {
  ADD_NEW_POST: "ADD_NEW_POST",
  DELETE_POST: "DELETE_POST",
  CHANGE_POST: "CHANGE_POST",
  OPEN_MODAL: "OPEN_MODAL",
  CLOSE_MODAL: "ClOSE_MODAL",
  CHANGE_POSTS_QUANTITY: 'CHANGE_POSTS_QUANTITY',
  CHANGE_PAGE: 'CHANGE_PAGE',
};

export const actionCreator = () => {
  return {
    addNewPost: (post: any) => ({ type: types.ADD_NEW_POST, data: post }),
    deletePost: (postId: number) => ({ type: types.DELETE_POST, data: postId }),
    changePost: (post: IProps) => ({ type: types.CHANGE_POST, data: post }),
    openModal: (modalType: string) => ({ type: types.OPEN_MODAL }),
    closeModal: () => ({ type: types.CLOSE_MODAL }),
    changePostsQuantity: (quantity: number) => ({ type: types.CHANGE_POSTS_QUANTITY, data: quantity }),
    changePage: (page: number) => ({ type: types.CHANGE_PAGE, data: page }),
  };
};
