import {
  GET_TIPOCONTRATO_INIT,
  GET_TIPOCONTRATO_SUCCESS,
  GET_TIPOCONTRATO_FAILURE
} from "../types/TipoContratoType";

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: null
};

export default function tipoContratoForm(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_TIPOCONTRATO_INIT:
      return { ...state, loading: true };

    case GET_TIPOCONTRATO_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false
      };

    case GET_TIPOCONTRATO_FAILURE:
      return { ...state, error: action.payload, loading: false };

    default:
      return { ...state };
  }
}
