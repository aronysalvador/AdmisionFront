import {
  GET_TRAYECTO_INIT,
  GET_TRAYECTO_SUCCESS,
  GET_TRAYECTO_FAILURE,
} from "../types/trayectoType";
import Axios from "axios";

export const getData = async () => {
  console.log("voy s bucar", window.REACT_APP_TIPO_ACCIDENTE_TRAYECTO);
  return Axios.get(window.REACT_APP_TIPO_ACCIDENTE_TRAYECTO);
};

export const getTiposAccidenteTrayecto = () => async (dispatch) => {
  dispatch({
    type: GET_TRAYECTO_INIT,
    payload: true,
  });

  getData()
    .then((response) => {
      console.log("TIPO DE TRAYECOT:", response.data.content[0]);
      dispatch(successCall(response.data.content[0]));
    })
    .catch((error) => {
      dispatch(errorCall());
    });

  const successCall = (dato) => ({
    type: GET_TRAYECTO_SUCCESS,
    payload: dato,
  });

  const errorCall = () => ({
    type: GET_TRAYECTO_FAILURE,
  });
};
