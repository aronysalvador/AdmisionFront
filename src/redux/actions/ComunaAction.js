import {
  GET_COMUNA_INIT,
  GET_COMUNA_SUCCESS,
  GET_COMUNA_FAILURE,
} from "../types/comunaType";
import Axios from "axios";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";

export const getData = async () => {
  return Axios.get(window.REACT_APP_COMUNA);
};

export const getComuna = () => async (dispatch) => {
  dispatch({
    type: GET_COMUNA_INIT,
    payload: true,
  });

  getData()
    .then((response) => {
      if(response.data.status === 200 || response.data.status === 304){
        dispatch(successCallComuna(response.data.content[0]));
      }else{
        dispatch(updateForm("errorStep", 0));
        dispatch(updateForm("mensajeErrorApi", window.REACT_APP_COMUNA));
        dispatch(handleSetStep(1004));
      }
    })
    .catch((error) => {
      dispatch(errorCallComuna());
      dispatch(updateForm("errorStep", 0));
      dispatch(updateForm("mensajeErrorApi", window.REACT_APP_COMUNA));
      dispatch(handleSetStep(1004));
    });

  const successCallComuna = (comuna) => ({
    type: GET_COMUNA_SUCCESS,
    payload: comuna,
  });

  const errorCallComuna = () => ({
    type: GET_COMUNA_FAILURE,
  });
};

