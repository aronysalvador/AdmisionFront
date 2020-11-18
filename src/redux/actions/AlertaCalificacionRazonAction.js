import {
  GET_RAZON_ALERTA_INIT,
  GET_RAZON_ALERTA_SUCCESS,
  GET_RAZON_ALERTA_FAILURE,
} from "../types/alertaCalificacionRazonType";
import Axios from "axios";

export const getData = async () => {
  return Axios.get(window.REACT_APP_ALERTAS);
};

export const getRazonAlertaPrincipal = () => async (dispatch) => {
  dispatch({
    type: GET_RAZON_ALERTA_INIT,
    payload: true,
  });

  //getData()

  getData()
    .then((response) => {
      dispatch(successCallRazonAlerta(response.data.content.response[0].opciones));
    })
    .catch((error) => {
      dispatch(errorCallRazonAlerta());
    });

  const successCallRazonAlerta = (razon) => ({
    type: GET_RAZON_ALERTA_SUCCESS,
    payload: razon,
  });

  const errorCallRazonAlerta = () => ({
    type: GET_RAZON_ALERTA_FAILURE,
  });
};
