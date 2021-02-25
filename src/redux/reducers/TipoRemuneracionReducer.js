import {
  GET_REMUNERACION_INIT,
  GET_REMUNERACION_SUCCESS,
  GET_REMUNERACION_FAILURE
} from "../types/tipoRemuneracionType";

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: null
};

export default function tipoRemuneracionForm(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_REMUNERACION_INIT:
      return { ...state, loading: true };

    case GET_REMUNERACION_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false
      };

    case GET_REMUNERACION_FAILURE:
      return { ...state, error: action.payload, loading: false };

    default:
      return { ...state };
  }
}
