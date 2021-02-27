import {
  GET_RAZON_ALERTA_INIT,
  GET_RAZON_ALERTA_SUCCESS,
  GET_RAZON_ALERTA_FAILURE
} from "../types/alertaCalificacionRazonType";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import { createHttpGetClient } from '../common';

export const getData = createHttpGetClient(window.REACT_APP_ALERTAS);

export const getRazonAlertaPrincipal = () => async (dispatch) => {
  dispatch({
    type: GET_RAZON_ALERTA_INIT,
    payload: true
  });

  // Mostrar alertas segun tipo de siniestro
  getData()
    .then((response) => {
      if (response.status === 200){
        let data = response.data.content.response[0].opciones
        dispatch(successCallRazonAlerta(data));
      } else {
        dispatch(updateForm("errorStep", 0));
        dispatch(updateForm("mensajeErrorApi", window.REACT_APP_ALERTAS));
        dispatch(handleSetStep(1004));
      }
    })
    .catch((error) => {
      dispatch(errorCallRazonAlerta(error));
      dispatch(updateForm("errorStep", 0));
      dispatch(updateForm("mensajeErrorApi", window.REACT_APP_ALERTAS));
      dispatch(handleSetStep(1004));
    });
};

const successCallRazonAlerta = (razon) => ({
  type: GET_RAZON_ALERTA_SUCCESS,
  payload: razon
});

const errorCallRazonAlerta = () => {
  return ({
    type: GET_RAZON_ALERTA_FAILURE
  })
};
