import {
  GET_NACIONALIDAD_INIT,
  GET_NACIONALIDAD_SUCCESS,
  GET_NACIONALIDAD_FAILURE,
} from "../types/nacionalidadType";
import Axios from "axios";

export const getData = async () => {
  return Axios.get(process.env.REACT_APP_NACIONALIDADES);
}

export const getNacionalidades = () => async (dispatch) => {
  dispatch({
    type: GET_NACIONALIDAD_INIT,
    payload: true,
  });
  getData()
    .then((response) => {
      dispatch(successCall(response.data.content[0]));
    })
    .catch((error) => {
      dispatch(errorCall());
    });

  const successCall = (dato) => ({
    type: GET_NACIONALIDAD_SUCCESS,
    payload: dato,
  });

  const errorCall = () => ({
    type: GET_NACIONALIDAD_FAILURE,
  });
};
