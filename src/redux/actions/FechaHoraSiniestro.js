import {
  SET_FECHA_HORA_SINIESTRO_FAILURE,
  SET_FECHA_HORA_SINIESTRO_SUCCESS,
  SET_FECHA_HORA_SINIESTRO_INIT,
} from "../types/FechaHoraSiniestroType";

const setFechaHoraSiniestroAction = (fechaHoraSiniestro) => async (
  dispatch
) => {
  dispatch({ type: SET_FECHA_HORA_SINIESTRO_INIT });
  dispatch({
    type: SET_FECHA_HORA_SINIESTRO_SUCCESS,
    payload: fechaHoraSiniestro,
  });
};
