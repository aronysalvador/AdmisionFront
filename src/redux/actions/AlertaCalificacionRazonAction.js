import {
  GET_RAZON_ALERTA_INIT,
  GET_RAZON_ALERTA_SUCCESS,
  GET_RAZON_ALERTA_FAILURE,
} from "../types/alertaCalificacionRazonType";
import Axios from "axios";
import { getRazonAlerta } from "../../util/fakeApi";

//   export const getData = async() => {
//     return   Axios.get(process.env.REACT_APP_JORNADA_TRABAJO)
//   }

export const getRazonAlertaPrincipal = () => async (dispatch) => {
  dispatch({
    type: GET_RAZON_ALERTA_INIT,
    payload: true,
  });

  //getData()

  getRazonAlerta()
    .then((response) => {
      dispatch(successCallRazonAlerta(response));
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
