import {
  SET_FECHA_HORA_SINIESTRO_FAILURE,
  SET_FECHA_HORA_SINIESTRO_SUCCESS,
  SET_FECHA_HORA_SINIESTRO_INIT,
} from "../types/FechaHoraSiniestroType";

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: null,
};

export default function fechaHoraSiniestro(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_FECHA_HORA_SINIESTRO_INIT:
      return { ...state, loading: true };

    case SET_FECHA_HORA_SINIESTRO_SUCCESS:
      return {
        ...state,
        status: action.payload,
        loading: false,
      };

    case SET_FECHA_HORA_SINIESTRO_FAILURE:
      return { ...state, error: action.payload, loading: false };

    default:
      return { ...state };
  }
}
