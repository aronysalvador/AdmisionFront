import {
  GET_AFP_INIT,
  GET_AFP_SUCCESS,
  GET_AFP_FAILURE
} from "../types/afpType";

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: null
};

export default function afpForm(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_AFP_INIT:
      return { ...state, loading: true };

    case GET_AFP_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false
      };

    case GET_AFP_FAILURE:
      return { ...state, error: action.payload, loading: false };

    default:
      return { ...state };
  }
}
