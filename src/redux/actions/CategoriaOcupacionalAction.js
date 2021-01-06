import {
  GET_CATEGORIAOCUPACIONAL_INIT,
  GET_CATEGORIAOCUPACIONAL_SUCCESS,
  GET_CATEGORIAOCUPACIONAL_FAILURE,
} from "../types/categoriaOcupacionalType";
import Axios from "axios";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";

export const getData = async () => {
  return Axios.get(window.REACT_APP_CATEGORIA_OCUPACIONAL);
};

export const getCategoriaOcupacionalPrincipal = () => async (dispatch) => {
  dispatch({
    type: GET_CATEGORIAOCUPACIONAL_INIT,
    payload: true,
  });

  getData()
    .then((response) => {
      if(response.data.status === 200){
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
