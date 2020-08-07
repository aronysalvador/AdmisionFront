import {
  GET_SUCURSALES_INIT,
  GET_SUCURSALES_SUCCESS,
  GET_SUCURSALES_FAILURE,
} from "../types/sucursalesType";
import Axios from "axios";

export const obtenerData = async (rut) => {
  return Axios.get(`${process.env.REACT_APP_SUCURSALES}?rutEmpresa=${rut}`);
};

export const getSucursales = (rut) => async (dispatch) => {
  dispatch({
    type: GET_SUCURSALES_INIT,
    payload: true,
  });

  obtenerData(rut)
    .then((response) => {
      dispatch(successCallSucursales(response.data));
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
