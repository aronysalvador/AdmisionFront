import {
  GET_JORNADA_LABORAL_INIT,
  GET_JORNADA_LABORAL_SUCCESS,
  GET_JORNADA_LABORAL_FAILURE
} from "../types/tipoJornadaLaboralType";

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: null
};

export default function tipoJornadaLaboralForm(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_JORNADA_LABORAL_INIT:
      return { ...state, loading: true };

    case GET_JORNADA_LABORAL_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false
      };

    case GET_JORNADA_LABORAL_FAILURE:
      return { ...state, error: action.payload, loading: false };

    default:
      return { ...state };
  }
}
