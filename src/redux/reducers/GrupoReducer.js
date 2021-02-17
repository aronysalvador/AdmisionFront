import {
  GET_GRUPO_INIT,
  GET_GRUPO_SUCCESS,
  GET_GRUPO_FAILURE,
} from "../types/grupoType";

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: null,
};

export default function grupoForm(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_GRUPO_INIT:
      return { ...state, loading: true };

    case GET_GRUPO_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };

    case GET_GRUPO_FAILURE:
      return { ...state, error: action.payload, loading: false };

    default:
      return { ...state };
  }
}
