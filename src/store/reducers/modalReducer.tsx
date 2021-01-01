import { types } from "../actions";

const initialState = {
  modalWindow: {
    visability: false
  }
};

export default function modalReducer(state = initialState, action: any) {
  switch (action.type) {
    case types.OPEN_MODAL: {
      return {
        ...state,
        modalWindow: {
          visability: true
        }
      };
    }
    case types.CLOSE_MODAL: {
      return {
        ...state,
        modalWindow: {
          visability: false,
        }
      };
    }
    default: {
      return state;
    }
  }
}
