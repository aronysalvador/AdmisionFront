import {
  GET_RAZON_ALERTA_INIT,
  GET_RAZON_ALERTA_SUCCESS,
  GET_RAZON_ALERTA_FAILURE,
} from "../types/alertaCalificacionRazonType";

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: null,
};

export default function razonAlertaForm(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_RAZON_ALERTA_INIT:
      return { ...state, loading: true };

    case GET_RAZON_ALERTA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };

    case GET_RAZON_ALERTA_FAILURE:
      return { ...state, error: action.payload, loading: false };

    default:
      return { ...state };
  }
}
