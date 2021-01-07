import {
  GET_TRAYECTO_PARTECUERPOAFECTADA_INIT,
  GET_TRAYECTO_PARTECUERPOAFECTADA_SUCCESS,
  GET_TRAYECTO_PARTECUERPOAFECTADA_FAILURE,
} from "../types/trayectoType";
import Axios from "axios";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";

export const getData = async () => {
  return Axios.get(window.REACT_APP_PARTES_DEL_CUERPO);
};

export const getPartesCuerpo = () => async (dispatch) => {
  dispatch({
    type: GET_TRAYECTO_PARTECUERPOAFECTADA_INIT,
    payload: true,
  });

  getData()
    .then((response) => {
      if(response.data.status === 200 || response.data.status === 304){
        dispatch(successCallParteCuerpo(response.data.content[0]));
      }else{
        dispatch(updateForm("errorStep", 0));
        dispatch(updateForm("mensajeErrorApi", window.REACT_APP_PARTES_DEL_CUERPO));
        dispatch(handleSetStep(1004));
      }
    })
    .catch((error) => {
      dispatch(errorCallParteCuerpo());
      dispatch(updateForm("errorStep", 0));
      dispatch(updateForm("mensajeErrorApi", window.REACT_APP_PARTES_DEL_CUERPO));
      dispatch(handleSetStep(1004));
    });

  const successCallParteCuerpo = (partes) => ({
    type: GET_TRAYECTO_PARTECUERPOAFECTADA_SUCCESS,
    payload: partes,
  });

  const errorCallParteCuerpo = () => ({
    type: GET_TRAYECTO_PARTECUERPOAFECTADA_FAILURE,
  });
};
