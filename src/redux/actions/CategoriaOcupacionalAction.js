import {
  GET_CATEGORIAOCUPACIONAL_INIT,
  GET_CATEGORIAOCUPACIONAL_SUCCESS,
  GET_CATEGORIAOCUPACIONAL_FAILURE,
} from "../types/categoriaOcupacionalType";
//import Axios from "axios";
import { getCategoriaOcupacional } from "../../util/fakeApi";

export const getCategoriaOcupacionalPrincipal = () => async (dispatch) => {
  dispatch({
    type: GET_CATEGORIAOCUPACIONAL_INIT,
    payload: true,
  });

  //Axios.get(`http://fa-desa-tele-admision-datamaster.azurewebsites.net/api/AFP`)
  getCategoriaOcupacional()
    .then((response) => {
      dispatch(successCallCategoria(response));
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
