import {
  GET_CENTROS_INIT,
  GET_CENTROS_SUCCESS,
  GET_CENTROS_FAILURE,
} from "../types/centrosAchsType";
import Axios from "axios";

export const getData = async () => {
  return Axios.get(window.REACT_APP_CENTROSACHS);
};

export const getCentros = () => async (dispatch) => {
  dispatch({
    type: GET_CENTROS_INIT,
    payload: true,
  });

  getData()
    .then((response) => {
      dispatch(successCallCENTROS(response.data.content.response));
    })
    .catch((error) => {
      dispatch(errorCallCENTROS());
    });

  const successCallCENTROS = (centros) => ({
    type: GET_CENTROS_SUCCESS,
    payload: centros,
  });

  const errorCallCENTROS = () => ({
    type: GET_CENTROS_FAILURE,
  });
};
