import {
  GET_JORNADA_LABORAL_INIT,
  GET_JORNADA_LABORAL_SUCCESS,
  GET_JORNADA_LABORAL_FAILURE,
} from "../types/tipoJornadaLaboralType";
import Axios from "axios";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";


export const getData = async () => {
  return Axios.get(window.REACT_APP_JORNADA_TRABAJO);
};

export const getJornadaLaboralPrincipal = () => async (dispatch) => {
  dispatch({
    type: GET_JORNADA_LABORAL_INIT,
    payload: true,
  });

  getData()
    .then((response) => {
      if(response.data.status === 200){
        dispatch(successCallTipoJornada(response.data.content[0]));
      }else{
        dispatch(updateForm("errorStep", 0));
        dispatch(updateForm("mensajeErrorApi", window.REACT_APP_JORNADA_TRABAJO));
        dispatch(handleSetStep(1004));
      }   
    })
    .catch((error) => {
      dispatch(errorCallTipoJornada());
      dispatch(updateForm("errorStep", 0));
      dispatch(updateForm("mensajeErrorApi", window.REACT_APP_JORNADA_TRABAJO));
      dispatch(handleSetStep(1004));
    });

  const successCallTipoJornada = (jornada) => ({
    type: GET_JORNADA_LABORAL_SUCCESS,
    payload: jornada,
  });

  const errorCallTipoJornada = () => ({
    type: GET_JORNADA_LABORAL_FAILURE,
  });
};
