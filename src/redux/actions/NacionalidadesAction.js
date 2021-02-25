import {
  GET_NACIONALIDAD_INIT,
  GET_NACIONALIDAD_SUCCESS,
  GET_NACIONALIDAD_FAILURE
} from "../types/nacionalidadType";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import { createHttpGetClient } from '../common';

export const getData = createHttpGetClient(window.REACT_APP_NACIONALIDADES);

export const getNacionalidades = () => async (dispatch) => {
  dispatch({
    type: GET_NACIONALIDAD_INIT,
    payload: true
  });
  getData()
    .then((response) => {
      if (response.status === 200){
        dispatch(successCall(response.data.content[0]));
      } else {
        dispatch(updateForm("errorStep", 0));
        dispatch(updateForm("mensajeErrorApi", window.REACT_APP_NACIONALIDADES));
        dispatch(handleSetStep(1004));
      }
    })
    .catch((error) => {
      dispatch(errorCall());
      dispatch(updateForm("errorStep", 0));
      dispatch(updateForm("mensajeErrorApi", window.REACT_APP_NACIONALIDADES));
      dispatch(handleSetStep(1004));
    });

  const successCall = (dato) => ({
    type: GET_NACIONALIDAD_SUCCESS,
    payload: dato
  });

  const errorCall = () => ({
    type: GET_NACIONALIDAD_FAILURE
  });
};
