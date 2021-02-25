import {
  GET_IDIOMA_INIT,
  GET_IDIOMA_SUCCESS,
  GET_IDIOMA_FAILURE
} from "../types/idiomaType";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import { createHttpGetClient } from '../common';

export const getData = createHttpGetClient(window.REACT_APP_IDIOMAS);

export const getIdiomas = () => async (dispatch) => {
  dispatch({
    type: GET_IDIOMA_INIT,
    payload: true
  });

  getData()
    .then((response) => {
      if (response.status === 200){
        dispatch(successCall(response.data.content[0]));
      } else {
        dispatch(updateForm("errorStep", 0));
        dispatch(updateForm("mensajeErrorApi", window.REACT_APP_IDIOMAS));
        dispatch(handleSetStep(1004));
      }
    })
    .catch((error) => {
      dispatch(errorCall());
      dispatch(updateForm("errorStep", 0));
      dispatch(updateForm("mensajeErrorApi", window.REACT_APP_IDIOMAS));
      dispatch(handleSetStep(1004));
    });

  const successCall = (dato) => ({
    type: GET_IDIOMA_SUCCESS,
    payload: dato
  });

  const errorCall = () => ({
    type: GET_IDIOMA_FAILURE
  });
};
