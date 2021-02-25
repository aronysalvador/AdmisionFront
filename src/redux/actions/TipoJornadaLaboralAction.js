import {
  GET_JORNADA_LABORAL_INIT,
  GET_JORNADA_LABORAL_SUCCESS,
  GET_JORNADA_LABORAL_FAILURE
} from "../types/tipoJornadaLaboralType";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import { createHttpGetClient } from '../common';

export const getData = createHttpGetClient(window.REACT_APP_JORNADA_TRABAJO);

export const getJornadaLaboralPrincipal = () => async (dispatch) => {
  dispatch({
    type: GET_JORNADA_LABORAL_INIT,
    payload: true
  });

  getData()
    .then((response) => {
      if (response.status === 200){
        dispatch(successCallTipoJornada(response.data.content[0]));
      } else {
        dispatch(updateForm("errorStep", 0));
        dispatch(updateForm("mensajeErrorApi", window.REACT_APP_JORNADA_TRABAJO));
        dispatch(handleSetStep(1004));
      }
    })
    .catch(() => {
      dispatch(errorCallTipoJornada());
      dispatch(updateForm("errorStep", 0));
      dispatch(updateForm("mensajeErrorApi", window.REACT_APP_JORNADA_TRABAJO));
      dispatch(handleSetStep(1004));
    });

  const successCallTipoJornada = (jornada) => ({
    type: GET_JORNADA_LABORAL_SUCCESS,
    payload: jornada
  });

  const errorCallTipoJornada = () => ({
    type: GET_JORNADA_LABORAL_FAILURE
  });
};
