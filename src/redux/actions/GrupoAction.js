import {
  GET_GRUPO_INIT,
  GET_GRUPO_SUCCESS,
  GET_GRUPO_FAILURE
} from "../types/grupoType";
import { handleSetStep, updateForm } from "./AdmissionAction";
import { createHttpGetClient } from '../common';

export const getData = createHttpGetClient(window.REACT_APP_GRUPOS);

export const getGrupo = () => async (dispatch) => {
  dispatch({
    type: GET_GRUPO_INIT,
    payload: true
  });

  getData()
    .then((response) => {
      if (response.status === 200){
        dispatch(successCallGrupo(response.data.content[0]));
      } else {
        dispatch(updateForm("errorStep", 0));
        dispatch(updateForm("mensajeErrorApi", window.REACT_APP_GRUPOS));
        dispatch(handleSetStep(1004));
      }
    })
    .catch((error) => {
      dispatch(errorCallGrupo());
      dispatch(updateForm("errorStep", 0));
      dispatch(updateForm("mensajeErrorApi", window.REACT_APP_GRUPOS));
      dispatch(handleSetStep(1004));
    });

  const successCallGrupo = (grupo) => ({
    type: GET_GRUPO_SUCCESS,
    payload: grupo
  });

  const errorCallGrupo = () => ({
    type: GET_GRUPO_FAILURE
  });
};
