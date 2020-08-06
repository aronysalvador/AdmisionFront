import {
  GET_JORNADA_LABORAL_INIT,
  GET_JORNADA_LABORAL_SUCCESS,
  GET_JORNADA_LABORAL_FAILURE,
} from "../types/tipoJornadaLaboralType";
import Axios from "axios";
import { getTipoJornadaLaboral } from "../../util/fakeApi";

export const getData = async() => {
  return   Axios.get(process.env.REACT_APP_JORNADA_TRABAJO)
}

export const getJornadaLaboralPrincipal = () => async (dispatch) => {
  dispatch({
    type: GET_JORNADA_LABORAL_INIT,
    payload: true,
  });

  getData()
    .then((response) => {
      dispatch(successCallTipoJornada(response.data.content[0]));
    })
    .catch((error) => {
      dispatch(errorCallTipoJornada());
    });

  const successCallTipoJornada = (jornada) => ({
    type: GET_JORNADA_LABORAL_SUCCESS,
    payload: jornada,
  });

  const errorCallTipoJornada = () => ({
    type: GET_JORNADA_LABORAL_FAILURE,
  });
};
