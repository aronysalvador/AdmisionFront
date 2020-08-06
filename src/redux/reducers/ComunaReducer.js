import {
  GET_COMUNA_INIT,
  GET_COMUNA_SUCCESS,
  GET_COMUNA_FAILURE,
} from "../types/comunaType";

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: null,
};

export default function comunaForm(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_COMUNA_INIT:
      return { ...state, loading: true };

    case GET_COMUNA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };

    case GET_COMUNA_FAILURE:
      return { ...state, error: action.payload, loading: false };

    default:
      return { ...state };
  }
}
