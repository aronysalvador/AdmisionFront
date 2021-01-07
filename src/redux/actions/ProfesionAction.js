import {
  GET_PROFESION_INIT,
  GET_PROFESION_SUCCESS,
  GET_PROFESION_FAILURE,
} from "../types/profesionType";
import Axios from "axios";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";

export const getData = async () => {
  return Axios.get(window.REACT_APP_PROFESION);
};

export const getProfesion = () => async (dispatch) => {
  dispatch({
    type: GET_PROFESION_INIT,
    payload: true,
  });

  getData()
    .then((response) => {
      if(response.data.status === 200 || response.data.status === 304){
        dispatch(successCallProfesion(response.data.content.response));
      }else{
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
    payload: afp,
  });

  const errorCallProfesion = () => ({
    type: GET_PROFESION_FAILURE,
  });
};
