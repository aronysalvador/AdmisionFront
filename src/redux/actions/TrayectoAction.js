import {
  GET_TRAYECTO_INIT,
  GET_TRAYECTO_SUCCESS,
  GET_TRAYECTO_FAILURE,
  GET_TRAYECTO_MEDIOTRANSPORTE_INIT,
  GET_TRAYECTO_MEDIOTRANSPORTE_SUCCESS,
  GET_TRAYECTO_MEDIOTRANSPORTE_FAILURE,
} from "../types/trayectoType";
import Axios from "axios";

export const getDataTipoAccidente = async () => {
  return Axios.get(window.REACT_APP_TIPO_ACCIDENTE_TRAYECTO);
};

export const getDataMediosTransporte = async () => {
  return Axios.get(window.REACT_APP_MEDIO_TRANSPORTE_TRAYECTO);
};

export const getTiposAccidenteTrayecto = () => async (dispatch) => {
  dispatch({
    type: GET_TRAYECTO_INIT,
    payload: true,
  });

  getDataTipoAccidente()
    .then((response) => {
      dispatch(successCall(response.data.content[0]));
    })
    .catch((error) => {
      dispatch(errorCall());
    });

  const successCall = (dato) => ({
    type: GET_TRAYECTO_SUCCESS,
    payload: dato,
  });

  const errorCall = () => ({
    type: GET_TRAYECTO_FAILURE,
  });
};


export const getMediosTransporteTrayecto = () => async (dispatch) => {
  dispatch({
    type: GET_TRAYECTO_MEDIOTRANSPORTE_INIT,
    payload: true,
  });

  getDataMediosTransporte()
    .then((response) => {
      dispatch(successCall(response.data.content[0]));
    })
    .catch((error) => {
      dispatch(errorCall());
    });

  const successCall = (dato) => ({
    type: GET_TRAYECTO_MEDIOTRANSPORTE_SUCCESS,
    payload: dato,
  });

  const errorCall = () => ({
    type: GET_TRAYECTO_MEDIOTRANSPORTE_FAILURE,
  });
};