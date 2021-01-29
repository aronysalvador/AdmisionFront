import {
  GET_TIPOCONTRATO_INIT,
  GET_TIPOCONTRATO_SUCCESS,
  GET_TIPOCONTRATO_FAILURE,
} from "../types/TipoContratoType";
import Axios from "axios";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";

export const getData = async() => {
  return  Axios.get(window.REACT_APP_TIPO_CONTRATO)
}

export const getContrato = () => async (dispatch) => {
  dispatch({
    type: GET_TIPOCONTRATO_INIT,
    payload: true,
  });

  getData()
    .then((response) => {
      if(response.status === 200){
        dispatch(successCallContrato(response.data.content[0]));
      }else{
        dispatch(updateForm("errorStep", 0));
        dispatch(updateForm("mensajeErrorApi", window.REACT_APP_TIPO_CONTRATO));
        dispatch(handleSetStep(1004));
      }      
    })
    .catch((error) => {
      dispatch(errorCallContrato());
      dispatch(updateForm("errorStep", 0));
      dispatch(updateForm("mensajeErrorApi", window.REACT_APP_TIPO_CONTRATO));
      dispatch(handleSetStep(1004));
    });

  const successCallContrato = (contrato) => ({
    type: GET_TIPOCONTRATO_SUCCESS,
    payload: contrato,
  });

  const errorCallContrato = () => ({
    type: GET_TIPOCONTRATO_FAILURE,
  });
};
