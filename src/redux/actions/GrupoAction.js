import {
  GET_GRUPO_INIT,
  GET_GRUPO_SUCCESS,
  GET_GRUPO_FAILURE,
} from "../types/grupoType";
import Axios from "axios";
import { handleSetStep, updateForm } from "./AdmissionAction";

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
      if(response.data.status === 200 || response.data.status === 304){
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