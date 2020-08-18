import {
  GET_PROFESION_INIT,
  GET_PROFESION_SUCCESS,
  GET_PROFESION_FAILURE,
} from "../types/profesionType";
import Axios from "axios";

export const getData = async () => {
  return Axios.get(process.env.REACT_APP_PROFESION);
};

export const getProfesion = () => async (dispatch) => {
  dispatch({
    type: GET_PROFESION_INIT,
    payload: true,
  });

  getData()
    .then((response) => {
      dispatch(successCallProfesion(response.data.content.response));
    })
    .catch((error) => {
      dispatch(errorCallProfesion());
    });

  const successCallProfesion = (afp) => ({
    type: GET_PROFESION_SUCCESS,
    payload: afp,
  });

  const errorCallProfesion = () => ({
    type: GET_PROFESION_FAILURE,
  });
};
