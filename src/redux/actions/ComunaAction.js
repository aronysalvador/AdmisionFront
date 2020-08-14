import {
  GET_COMUNA_INIT,
  GET_COMUNA_SUCCESS,
  GET_COMUNA_FAILURE,
} from "../types/comunaType";
import Axios from "axios";

export const getData = async () => {
  return Axios.get(process.env.REACT_APP_COMUNA);
};

export const getComuna = () => async (dispatch) => {
  dispatch({
    type: GET_COMUNA_INIT,
    payload: true,
  });

  getData()
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
