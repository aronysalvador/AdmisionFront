import {
  GET_PAIS_INIT,
  GET_PAIS_SUCCESS,
  GET_PAIS_FAILURE,
} from "../types/paisType";
import Axios from "axios";

export const getData = async () => {
  //return Axios.get(process.env.REACT_APP_IDIOMAS);
  return {
    content: [
      {
        nombre: "Chile",
        id: 1,
        codigo: 'CHI'
      },
      {
        nombre: "Perú",
        id: 2,
        codigo: 'PER'
      },
      {
        nombre: "Bolivia",
        id: 3,
        codigo: 'BOL'
      }
    ]
  }
};

export const getPaises = () => async (dispatch) => {
  dispatch({
    type: GET_PAIS_INIT,
    payload: true,
  });

  getData()
    .then((response) => {
      // dispatch(successCall(response.data.content[0]));
      dispatch(successCall(response.content));
    })
    .catch((error) => {
      dispatch(errorCall());
    });

  const successCall = (dato) => ({
    type: GET_PAIS_SUCCESS,
    payload: dato,
  });

  const errorCall = () => ({
    type: GET_PAIS_FAILURE,
  });
};
