import { types } from '../actions';

const initialState = {
  modalWindow: {
    visability: false
  }
};

export default function modalReducer(state = initialState, action: any) {
  switch (action.type) {
    case types.CHANGE_MODA_VISABILITY: {
      return {
        ...state,
        modalWindow: {
          visability: !state.modalWindow.visability
        }
      };
    }
    default: {
      return state;
    }
  }
}
