import {
  GET_NACIONALIDAD_INIT,
  GET_NACIONALIDAD_SUCCESS,
  GET_NACIONALIDAD_FAILURE
} from "../types/nacionalidadType";

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: null
};

export default function nacionalidadForm(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_NACIONALIDAD_INIT:
      return { ...state, loading: true };

    case GET_NACIONALIDAD_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false
      };

    case GET_NACIONALIDAD_FAILURE:
      return { ...state, error: action.payload, loading: false };

    default:
      return { ...state };
  }
}
