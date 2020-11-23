import {
  GET_REMUNERACION_INIT,
  GET_REMUNERACION_SUCCESS,
  GET_REMUNERACION_FAILURE,
} from "../types/tipoRemuneracionType";
import Axios from "axios";

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
      dispatch(successCallRemuneracion(response.data.content[0]));
    })
    .catch((error) => {
      dispatch(errorCallRemuneracion());
    });

  const successCallRemuneracion = (remuneracion) => ({
    type: GET_REMUNERACION_SUCCESS,
    payload: remuneracion,
  });

  const errorCallRemuneracion = () => ({
    type: GET_REMUNERACION_FAILURE,
  });
};
