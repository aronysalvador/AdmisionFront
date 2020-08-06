import {
  GET_COMUNA_INIT,
  GET_COMUNA_SUCCESS,
  GET_COMUNA_FAILURE,
} from "../types/comunaType";
import Axios from "axios";

export const getComuna = () => async (dispatch) => {
  dispatch({
    type: GET_COMUNA_INIT,
    payload: true,
  });

  Axios.get(`https://wa-desa-msorquestador.azurewebsites.net/api/sap/comunas`)
    .then((response) => {
      dispatch(successCallComuna(response.data.content[0]));
    })
    .catch((error) => {
      dispatch(errorCallComuna());
    });

  const successCallComuna = (comuna) => ({
    type: GET_COMUNA_SUCCESS,
    payload: comuna,
  });

  const errorCallComuna = () => ({
    type: GET_COMUNA_FAILURE,
  });
};
