import {
  GET_TRAYECTO_PARTECUERPOAFECTADA_INIT,
  GET_TRAYECTO_PARTECUERPOAFECTADA_SUCCESS,
  GET_TRAYECTO_PARTECUERPOAFECTADA_FAILURE,
} from "../types/trayectoType";

import Axios from "axios";

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
      dispatch(successCallParteCuerpo(response.data.content[0]));
    })
    .catch((error) => {
      dispatch(errorCallParteCuerpo());
    });

  const successCallParteCuerpo = (partes) => ({
    type: GET_TRAYECTO_PARTECUERPOAFECTADA_SUCCESS,
    payload: partes,
  });

  const errorCallParteCuerpo = () => ({
    type: GET_TRAYECTO_PARTECUERPOAFECTADA_FAILURE,
  });
};
