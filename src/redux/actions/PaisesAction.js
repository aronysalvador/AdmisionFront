import {
  GET_PAIS_INIT,
  GET_PAIS_SUCCESS,
  GET_PAIS_FAILURE,
} from "../types/paisType";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import { createHttpGetClient } from '../common';

export const getData = createHttpGetClient(window.REACT_APP_PAISES);

export const getPaises = () => async (dispatch) => {
  dispatch({
    type: GET_PAIS_INIT,
    payload: true,
  });

  getData()
    .then((response) => {
      if(response.status === 200){
        dispatch(successCall(response.data.content[0]));
      }else{
        dispatch(updateForm("errorStep", 0));
        dispatch(updateForm("mensajeErrorApi", window.REACT_APP_PAISES));
        dispatch(handleSetStep(1004));
      }
    })
    .catch((error) => {
      dispatch(errorCall());
      dispatch(updateForm("errorStep", 0));
      dispatch(updateForm("mensajeErrorApi", window.REACT_APP_PAISES));
      dispatch(handleSetStep(1004));
    });

  const successCall = (dato) => ({
    type: GET_PAIS_SUCCESS,
    payload: dato,
  });

  const errorCall = () => ({
    type: GET_PAIS_FAILURE,
  });
};
