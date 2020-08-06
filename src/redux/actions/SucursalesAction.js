import {
  GET_SUCURSALES_INIT,
  GET_SUCURSALES_SUCCESS,
  GET_SUCURSALES_FAILURE,
} from "../types/sucursalesType";
import Axios from "axios";

export const getSucursales = (rut) => async (dispatch) => {
  dispatch({
    type: GET_SUCURSALES_INIT,
    payload: true,
  });

  Axios.get(
    `https://wa-desa-msorquestador.azurewebsites.net/api/sap/sucursales?rutEmpresa=${rut}`
  )
    .then((response) => {
      dispatch(successCallSucursales(response.data.content[0]));
    })
    .catch((error) => {
      dispatch(errorCallSucursales());
    });

  const successCallSucursales = (sucursales) => ({
    type: GET_SUCURSALES_SUCCESS,
    payload: sucursales,
  });

  const errorCallSucursales = () => ({
    type: GET_SUCURSALES_FAILURE,
  });
};
