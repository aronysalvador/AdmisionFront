import {
  GET_NACIONALIDAD_INIT,
  GET_NACIONALIDAD_SUCCESS,
  GET_NACIONALIDAD_FAILURE,
} from "../types/nacionalidadType";
import Axios from "axios";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";

export const getData = async () => {
  return Axios.get(window.REACT_APP_NACIONALIDADES);
}

export const getNacionalidades = () => async (dispatch) => {
  dispatch({
    type: GET_NACIONALIDAD_INIT,
    payload: true,
  });
  getData()
    .then((response) => {
      if(response.data.status === 200){
        dispatch(successCall(response.data.content[0]));
      }else{
        dispatch(updateForm("mensajeErrorApi", window.REACT_APP_NACIONALIDADES));
        dispatch(handleSetStep(1004));
      }      
    })
    .catch((error) => {
      dispatch(errorCall());
      dispatch(updateForm("mensajeErrorApi", window.REACT_APP_NACIONALIDADES));
      dispatch(handleSetStep(1004));
    });

  const successCall = (dato) => ({
    type: GET_NACIONALIDAD_SUCCESS,
    payload: dato,
  });

  const errorCall = () => ({
    type: GET_NACIONALIDAD_FAILURE,
  });
};
