import {
  GET_CATEGORIAOCUPACIONAL_INIT,
  GET_CATEGORIAOCUPACIONAL_SUCCESS,
  GET_CATEGORIAOCUPACIONAL_FAILURE,
} from "../types/categoriaOcupacionalType";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import { createHttpGetClient } from '../common';

export const getData = createHttpGetClient(window.REACT_APP_CATEGORIA_OCUPACIONAL);

export const getCategoriaOcupacionalPrincipal = () => async (dispatch) => {
  dispatch({
    type: GET_CATEGORIAOCUPACIONAL_INIT,
    payload: true,
  });

  getData()
    .then((response) => {
      if(response.status === 200){
        dispatch(successCallCategoria(response.data.content[0]));
      }else{
        dispatch(updateForm("errorStep", 0));
        dispatch(updateForm("mensajeErrorApi", window.REACT_APP_CATEGORIA_OCUPACIONAL));
        dispatch(handleSetStep(1004));
      }
    })
    .catch((error) => {
      dispatch(errorCallCategoria());
      dispatch(updateForm("errorStep", 0));
      dispatch(updateForm("mensajeErrorApi", window.REACT_APP_CATEGORIA_OCUPACIONAL));
      dispatch(handleSetStep(1004));
    });

  const successCallCategoria = (jornada) => ({
    type: GET_CATEGORIAOCUPACIONAL_SUCCESS,
    payload: jornada,
  });

  const errorCallCategoria = () => ({
    type: GET_CATEGORIAOCUPACIONAL_FAILURE,
  });
};
