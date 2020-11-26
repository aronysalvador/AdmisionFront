import {
  GET_RAZON_ALERTA_INIT,
  GET_RAZON_ALERTA_SUCCESS,
  GET_RAZON_ALERTA_FAILURE,
} from "../types/alertaCalificacionRazonType";
import Axios from "axios";

export const getData = async () => {
  return Axios.get(window.REACT_APP_ALERTAS);
};

export const getRazonAlertaPrincipal = () => async (dispatch , getState) => {
  dispatch({
    type: GET_RAZON_ALERTA_INIT,
    payload: true,
  });

  const { addmissionForm: { tipoSiniestro } } = getState();
  //getData()

  getData()
    .then((response) => {
      let data = response.data.content.response[0].opciones
       if(tipoSiniestro.Id === 1){
        dispatch(successCallRazonAlerta(data));
       }else{
         data.splice(0,1)
         dispatch(successCallRazonAlerta(data));
       }
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
