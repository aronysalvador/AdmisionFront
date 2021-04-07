import {
  GET_REGION_INIT,
  GET_REGION_SUCCESS,
  GET_REGION_FAILURE
} from "../types/regionType";
import { handleSetStep, updateForm } from "./AdmissionAction";
import { createHttpGetClient } from '../common';

export const getData = createHttpGetClient(window.REACT_APP_REGIONES);

export const getRegion = () => async (dispatch) => {
  dispatch({
    type: GET_REGION_INIT,
    payload: true
  });

  getData()
    .then((response) => {
      if (response.status === 200){
        dispatch(successCallComuna(response.data.content[0]));
      } else {
        dispatch(updateForm("errorStep", 0));
        dispatch(updateForm("mensajeErrorApi", window.REACT_APP_REGIONES));
        dispatch(handleSetStep(1004));
      }
    })
    .catch(() => {
      dispatch(errorCallComuna());
      dispatch(updateForm("errorStep", 0));
      dispatch(updateForm("mensajeErrorApi", window.REACT_APP_REGIONES));
      dispatch(handleSetStep(1004));
    });

  const successCallComuna = (comuna) => ({
    type: GET_REGION_SUCCESS,
    payload: comuna
  });

  const errorCallComuna = () => ({
    type: GET_REGION_FAILURE
  });
};
