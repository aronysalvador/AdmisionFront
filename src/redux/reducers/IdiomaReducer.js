import {
  GET_IDIOMA_INIT,
  GET_IDIOMA_SUCCESS,
  GET_IDIOMA_FAILURE,
} from "../types/idiomaType";

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: null,
};

export default function idiomaForm(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_IDIOMA_INIT:
      return { ...state, loading: true };

    case GET_IDIOMA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };

    case GET_IDIOMA_FAILURE:
      return { ...state, error: action.payload, loading: false };

    default:
      return { ...state };
  }
}
