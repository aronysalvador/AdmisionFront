import {
  GET_IDIOMA_INIT,
  GET_IDIOMA_SUCCESS,
  GET_IDIOMA_FAILURE,
} from "../types/idiomaType";
import Axios from "axios";

export const getData = async () => {
  return Axios.get(process.env.REACT_APP_IDIOMAS);
};

export const getIdiomas = () => async (dispatch) => {
  dispatch({
    type: GET_IDIOMA_INIT,
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
    type: GET_IDIOMA_SUCCESS,
    payload: dato,
  });

  const errorCall = () => ({
    type: GET_IDIOMA_FAILURE,
  });
};
