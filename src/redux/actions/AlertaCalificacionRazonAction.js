import {
  GET_RAZON_ALERTA_INIT,
  GET_RAZON_ALERTA_SUCCESS,
  GET_RAZON_ALERTA_FAILURE,
} from "../types/alertaCalificacionRazonType";
import Axios from "axios";
import { handleSetStep,updateForm } from "../../redux/actions/AdmissionAction";

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
      if(response.data.status === 200){
        let data = response.data.content.response[0].opciones
        dispatch(successCallRazonAlerta(data));  
      }else{
        dispatch(updateForm("mensajeErrorApi", window.REACT_APP_ALERTAS));
        dispatch(handleSetStep(1004));
      }
          
    })
    .catch((error) => {
      dispatch(errorCallRazonAlerta(error));
      dispatch(updateForm("mensajeErrorApi", window.REACT_APP_ALERTAS));
      dispatch(handleSetStep(1004));
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