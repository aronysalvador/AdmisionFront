import {
  GET_NACIONALIDAD_INIT,
  GET_NACIONALIDAD_SUCCESS,
  GET_NACIONALIDAD_FAILURE,
} from "../types/nacionalidadType";
//import Axios from "axios";

export const getData = async () => {
  //return Axios.get(process.env.REACT_APP_NACIONALIDADES);
  // return {
  //   content: [
  //     {
  //       nombre: "Chileno",
  //       id: 1,
  //       codigo: 'CHI'
  //     },
  //     {
  //       nombre: "Peruano",
  //       id: 2,
  //       codigo: 'PER'
  //     },
  //     {
  //       nombre: "Argentino",
  //       id: 3,
  //       codigo: 'ARG'
  //     }
  //   ],
  //   status: 200,
  //   mensaje: "Operación exitosa"
  // }
  return {
    content: [
      {
        nombre: "Chileno",
        id: 1,
        codigo: 'CHI'
      },
      {
        nombre: "Peruano",
        id: 2,
        codigo: 'PER'
      },
      {
        nombre: "Argentino",
        id: 3,
        codigo: 'ARG'
      }
    ]
  }
}

export const getNacionalidades = () => async (dispatch) => {
  dispatch({
    type: GET_NACIONALIDAD_INIT,
    payload: true,
  });
  getData()
    .then((response) => {
      dispatch(successCall(response.content));
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
