import {
  GET_TIPOCONTRATO_INIT,
  GET_TIPOCONTRATO_SUCCESS,
  GET_TIPOCONTRATO_FAILURE,
} from "../types/TipoContratoType";
import Axios from "axios";

export const getContrato = () => async (dispatch) => {
  dispatch({
    type: GET_TIPOCONTRATO_INIT,
    payload: true,
  });

  Axios.get(
    `https://wa-desa-msorquestador.azurewebsites.net/api/sap/tipoContrato`
  )
    .then((response) => {
      dispatch(successCallContrato(response.data.content[0]));
    })
    .catch((error) => {
      dispatch(errorCallContrato());
    });

  const successCallContrato = (contrato) => ({
    type: GET_TIPOCONTRATO_SUCCESS,
    payload: contrato,
  });

  const errorCallContrato = () => ({
    type: GET_TIPOCONTRATO_FAILURE,
  });
};
