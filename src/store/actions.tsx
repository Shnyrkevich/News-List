import { IProps } from "../components/Posts/post";

export const types = {
  ADD_NEW_POST: "ADD_NEW_POST",
  DELETE_POST: "DELETE_POST",
  CHANGE_POST: "CHANGE_POST",
  OPEN_MODAL: "OPEN_MODAL",
  CLOSE_MODAL: "ClOSE_MODAL"
};

export const actionCreator = () => {
  return {
    addNewPost: (post) => ({ type: types.ADD_NEW_POST, data: post }),
    deletePost: (postId: number) => ({ type: types.DELETE_POST, data: postId }),
    changePost: (post: IProps) => ({ type: types.CHANGE_POST, data: post }),
    openModal: (modalType: string) => ({
      type: types.OPEN_MODAL,
      data: modalType
    }),
    closeModal: () => ({
      type: types.CLOSE_MODAL
    })
  };
};
