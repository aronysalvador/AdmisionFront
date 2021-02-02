import {
  GET_REMUNERACION_INIT,
  GET_REMUNERACION_SUCCESS,
  GET_REMUNERACION_FAILURE,
} from "../types/tipoRemuneracionType";
import Axios from "axios";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";

export const getData = async()=>{
  return  Axios.get(window.REACT_APP_TIPO_REMUNERACIONES)
}

export const getRemuneracion = () => async (dispatch) => {
  dispatch({
    type: GET_REMUNERACION_INIT,
    payload: true,
  });

  getData()
    .then((response) => {
      if(response.status === 200){
        dispatch(successCallRemuneracion(response.data.content[0]));
      }else{
        dispatch(updateForm("errorStep", 0));
        dispatch(updateForm("mensajeErrorApi", window.REACT_APP_TIPO_REMUNERACIONES));
        dispatch(handleSetStep(1004));
      }     
    })
    .catch((error) => {
      dispatch(errorCallRemuneracion());
      dispatch(updateForm("errorStep", 0));
      dispatch(updateForm("mensajeErrorApi", window.REACT_APP_TIPO_REMUNERACIONES));
      dispatch(handleSetStep(1004));
    });

  const successCallRemuneracion = (remuneracion) => ({
    type: GET_REMUNERACION_SUCCESS,
    payload: remuneracion,
  });

  const errorCallRemuneracion = () => ({
    type: GET_REMUNERACION_FAILURE,
  });
};
