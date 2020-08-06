import {
  GET_CATEGORIAOCUPACIONAL_INIT,
  GET_CATEGORIAOCUPACIONAL_SUCCESS,
  GET_CATEGORIAOCUPACIONAL_FAILURE,
} from "../types/categoriaOcupacionalType";
import Axios from "axios";
import { getCategoriaOcupacional } from "../../util/fakeApi";

export const getData = async() =>{
  return  Axios.get(process.env.REACT_APP_CATEGORIA_OCUPACIONAL)
}

export const getCategoriaOcupacionalPrincipal = () => async (dispatch) => {
  dispatch({
    type: GET_CATEGORIAOCUPACIONAL_INIT,
    payload: true,
  });

  getData()
    .then((response) => {
      dispatch(successCallCategoria(response.data.content[0]));
    })
    .catch((error) => {
      dispatch(errorCallCategoria());
    });

  const successCallCategoria = (jornada) => ({
    type: GET_CATEGORIAOCUPACIONAL_SUCCESS,
    payload: jornada,
  });

  const errorCallCategoria = () => ({
    type: GET_CATEGORIAOCUPACIONAL_FAILURE,
  });
};
