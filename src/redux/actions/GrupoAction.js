import {
  GET_GRUPO_INIT,
  GET_GRUPO_SUCCESS,
  GET_GRUPO_FAILURE,
} from "../types/grupoType";
import Axios from "axios";
import axiosRetry from 'axios-retry';
import { handleSetStep, updateForm } from "./AdmissionAction";

axiosRetry(Axios, { retries: 3 });
export const getData = async () => {
  return Axios.get(window.REACT_APP_GRUPOS);
};

export const getGrupo = () => async (dispatch) => {
  dispatch({
    type: GET_GRUPO_INIT,
    payload: true,
  });

  getData()
    .then((response) => {
      if(response.status === 200){
        dispatch(successCallGrupo(response.data.content[0]));
      }else{
        dispatch(updateForm("errorStep", 0));
        dispatch(updateForm("mensajeErrorApi", window.REACT_APP_GRUPOS));
        dispatch(handleSetStep(1004));
      }
    })
    .catch((error) => {
      dispatch(errorCallGrupo());
      dispatch(updateForm("errorStep", 0));
      dispatch(updateForm("mensajeErrorApi", window.REACT_APP_GRUPOS));
      dispatch(handleSetStep(1004));
    });

  const successCallGrupo = (grupo) => ({
    type: GET_GRUPO_SUCCESS,
    payload: grupo,
  });

  const errorCallGrupo = () => ({
    type: GET_GRUPO_FAILURE,
  });
};
