import { types } from "../actions";

const initialState = {
  modalWindow: {
    visability: false,
    type: ""
  }
};

export default function modalReducer(state = initialState, action: any) {
  switch (action.type) {
    case types.OPEN_MODAL: {
      return {
        ...state,
        modalWindow: {
          visability: true,
          type: action.data
        }
      };
    }
    case types.CLOSE_MODAL: {
      return {
        ...state,
        modalWindow: {
          visability: false,
          type: ""
        }
      };
    }
    default: {
      return state;
    }
  }
}
