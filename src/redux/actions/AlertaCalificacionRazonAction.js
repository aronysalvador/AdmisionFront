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

  // Mostrar alertas segun tipo de siniestro 
  getData()
    .then((response) => {
      let data = response.data.content.response[0].opciones
      dispatch(successCallRazonAlerta(data));      
    })
    .catch((error) => {
      dispatch(errorCallRazonAlerta(error));
    });
};

const successCallRazonAlerta = (razon) => ({
  type: GET_RAZON_ALERTA_SUCCESS,
  payload: razon,
});

const errorCallRazonAlerta = (error) => {
  console.log(error);
  return  ({
    type: GET_RAZON_ALERTA_FAILURE,
  })
};