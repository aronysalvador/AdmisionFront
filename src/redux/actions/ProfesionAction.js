import {
  GET_PROFESION_INIT,
  GET_PROFESION_SUCCESS,
  GET_PROFESION_FAILURE
} from "../types/profesionType";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import { createHttpGetClient } from '../common';

export const getData = createHttpGetClient(window.REACT_APP_PROFESION);

export const getProfesion = () => async (dispatch) => {
  dispatch({
    type: GET_PROFESION_INIT,
    payload: true
  });

  getData()
    .then((response) => {
      if (response.status === 200){
        dispatch(successCallProfesion(response.data.content.response));
      } else {
        dispatch(updateForm("errorStep", 0));
        dispatch(updateForm("mensajeErrorApi", window.REACT_APP_PROFESION));
        dispatch(handleSetStep(1004));
      }
    })
    .catch((error) => {
      dispatch(errorCallProfesion());
      dispatch(updateForm("errorStep", 0));
      dispatch(updateForm("mensajeErrorApi", window.REACT_APP_PROFESION));
      dispatch(handleSetStep(1004));
    });

  const successCallProfesion = (afp) => ({
    type: GET_PROFESION_SUCCESS,
    payload: afp
  });

  const errorCallProfesion = () => ({
    type: GET_PROFESION_FAILURE
  });
};
