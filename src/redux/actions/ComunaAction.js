import {
  GET_COMUNA_INIT,
  GET_COMUNA_SUCCESS,
  GET_COMUNA_FAILURE
} from "../types/comunaType";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import { createHttpGetClient } from '../common';

export const getData = createHttpGetClient(window.REACT_APP_COMUNA);

export const getComuna = () => async (dispatch) => {
  dispatch({
    type: GET_COMUNA_INIT,
    payload: true
  });

  getData()
    .then((response) => {
      if (response.status === 200){
        dispatch(successCallComuna(response.data.content[0]));
      } else {
        dispatch(updateForm("errorStep", 0));
        dispatch(updateForm("mensajeErrorApi", window.REACT_APP_COMUNA));
        dispatch(handleSetStep(1004));
      }
    })
    .catch(() => {
      dispatch(errorCallComuna());
      dispatch(updateForm("errorStep", 0));
      dispatch(updateForm("mensajeErrorApi", window.REACT_APP_COMUNA));
      dispatch(handleSetStep(1004));
    });

  const successCallComuna = (comuna) => ({
    type: GET_COMUNA_SUCCESS,
    payload: comuna
  });

  const errorCallComuna = () => ({
    type: GET_COMUNA_FAILURE
  });
};
