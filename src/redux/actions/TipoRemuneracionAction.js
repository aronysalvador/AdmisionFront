import {
  GET_REMUNERACION_INIT,
  GET_REMUNERACION_SUCCESS,
  GET_REMUNERACION_FAILURE,
} from "../types/tipoRemuneracionType";
import Axios from "axios";

export const getRemuneracion = () => async (dispatch) => {
  dispatch({
    type: GET_REMUNERACION_INIT,
    payload: true,
  });

  Axios.get(
    `https://wa-desa-msorquestador.azurewebsites.net/api/sap/tipoRemuneracion`
  )
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
