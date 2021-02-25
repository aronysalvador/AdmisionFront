import {
  GET_CENTROS_INIT,
  GET_CENTROS_SUCCESS,
  GET_CENTROS_FAILURE,
} from "../types/centrosAchsType";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import { createHttpGetClient } from '../common';

export const getData = createHttpGetClient(window.REACT_APP_CENTROSACHS);

export const getCentros = () => async (dispatch) => {
  dispatch({
    type: GET_CENTROS_INIT,
    payload: true,
  });

  getData()
    .then((response) => {
      if(response.status === 200){
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
