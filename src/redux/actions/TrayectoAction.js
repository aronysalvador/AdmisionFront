import {
  GET_TRAYECTO_INIT,
  GET_TRAYECTO_SUCCESS,
  GET_TRAYECTO_FAILURE,
  GET_TRAYECTO_MEDIOTRANSPORTE_INIT,
  GET_TRAYECTO_MEDIOTRANSPORTE_SUCCESS,
  GET_TRAYECTO_MEDIOTRANSPORTE_FAILURE
} from "../types/trayectoType";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import { createHttpGetClient } from '../common';

export const getDataTipoAccidente = createHttpGetClient(window.REACT_APP_TIPO_ACCIDENTE_TRAYECTO);
export const getDataMediosTransporte = createHttpGetClient(window.REACT_APP_MEDIO_TRANSPORTE_TRAYECTO);

export const getTiposAccidenteTrayecto = () => async (dispatch) => {
  dispatch({
    type: GET_TRAYECTO_INIT,
    payload: true
  });

  getDataTipoAccidente()
    .then((response) => {
      if (response.status === 200){
        dispatch(successCall(response.data.content[0]));
      } else {
        dispatch(updateForm("errorStep", 0));
        dispatch(updateForm("mensajeErrorApi", window.REACT_APP_TIPO_ACCIDENTE_TRAYECTO));
        dispatch(handleSetStep(1004));
      }
    })
    .catch((error) => {
      dispatch(errorCall(error));
      dispatch(updateForm("errorStep", 0));
      dispatch(updateForm("mensajeErrorApi", window.REACT_APP_TIPO_ACCIDENTE_TRAYECTO));
      dispatch(handleSetStep(1004));
    });

  const successCall = (dato) => ({
    type: GET_TRAYECTO_SUCCESS,
    payload: dato
  });

  const errorCall = () => ({
    type: GET_TRAYECTO_FAILURE
  });
};

export const getMediosTransporteTrayecto = () => async (dispatch) => {
  dispatch({
    type: GET_TRAYECTO_MEDIOTRANSPORTE_INIT,
    payload: true
  });

  getDataMediosTransporte()
    .then((response) => {
      if (response.status === 200){
        dispatch(successCall(response.data.content[0]));
      } else {
        dispatch(updateForm("errorStep", 0));
        dispatch(updateForm("mensajeErrorApi", window.REACT_APP_MEDIO_TRANSPORTE_TRAYECTO));
        dispatch(handleSetStep(1004));
      }
    })
    .catch(() => {
      dispatch(errorCall());
      dispatch(updateForm("errorStep", 0));
      dispatch(updateForm("mensajeErrorApi", window.REACT_APP_MEDIO_TRANSPORTE_TRAYECTO));
      dispatch(handleSetStep(1004));
    });

  const successCall = (dato) => ({
    type: GET_TRAYECTO_MEDIOTRANSPORTE_SUCCESS,
    payload: dato
  });

  const errorCall = () => ({
    type: GET_TRAYECTO_MEDIOTRANSPORTE_FAILURE
  });
};
