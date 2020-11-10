import {
  GET_PAIS_INIT,
  GET_PAIS_SUCCESS,
  GET_PAIS_FAILURE,
} from "../types/paisType";

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: null,
};

export default function paisForm(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_PAIS_INIT:
      return { ...state, loading: true };

    case GET_PAIS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };

    case GET_PAIS_FAILURE:
      return { ...state, error: action.payload, loading: false };

    default:
      return { ...state };
  }
}
