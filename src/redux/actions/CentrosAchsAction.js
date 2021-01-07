import {
  GET_CENTROS_INIT,
  GET_CENTROS_SUCCESS,
  GET_CENTROS_FAILURE,
} from "../types/centrosAchsType";
import Axios from "axios";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";

export const getData = async () => {
  return Axios.get(window.REACT_APP_CENTROSACHS);
};

export const getCentros = () => async (dispatch) => {
  dispatch({
    type: GET_CENTROS_INIT,
    payload: true,
  });

  getData()
    .then((response) => {
      if(response.data.status === 200 || response.data.status === 304){
        dispatch(successCallCENTROS(response.data.content.response));
      }else{
        dispatch(updateForm("errorStep", 0));
        dispatch(updateForm("mensajeErrorApi", window.REACT_APP_CENTROSACHS));
        dispatch(handleSetStep(1004));
      }     
    })
    .catch((error) => {
      dispatch(errorCallCENTROS());
      dispatch(updateForm("errorStep", 0));
      dispatch(updateForm("mensajeErrorApi", window.REACT_APP_CENTROSACHS));
      dispatch(handleSetStep(1004));
    });

  const successCallCENTROS = (centros) => ({
    type: GET_CENTROS_SUCCESS,
    payload: centros,
  });

  const errorCallCENTROS = () => ({
    type: GET_CENTROS_FAILURE,
  });
};
