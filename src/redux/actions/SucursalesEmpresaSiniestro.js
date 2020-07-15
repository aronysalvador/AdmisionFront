import {
  GET_SUCURSALES_EMPRESA_SINIESTRO_INIT,
  GET_SUCURSALES_EMPRESA_SINIESTRO_SUCCESS,
  GET_SUCURSALES_EMPRESA_SINIESTRO_FAILURE,
  SET_SUCURSALES_EMPRESA_SINIESTRO_FAILURE,
  SET_SUCURSALES_EMPRESA_SINIESTRO_SUCCESS,
  SET_SUCURSALES_EMPRESA_SINIESTRO_INIT,
} from "../types/SucursalesEmpresaSiniestroTypes";

import { getSucursalesUsuarios } from "../../util/fakeApi";

export const getSucursalesEmpresaSiniestro = (rut) => async (dispatch) => {
  dispatch({ type: GET_SUCURSALES_EMPRESA_SINIESTRO_INIT });

  getSucursalesUsuarios(rut)
    .then((result) => {
      dispatch({
        type: GET_SUCURSALES_EMPRESA_SINIESTRO_SUCCESS,
        payload: result,
      });
    })
    .catch((error) =>
      dispatch({
        type: GET_SUCURSALES_EMPRESA_SINIESTRO_FAILURE,
        payload: error,
      })
    );
};

export const setSucursalEmpresaSiniestro = (values) => async (dispatch) => {
  dispatch({ type: SET_SUCURSALES_EMPRESA_SINIESTRO_INIT });
  dispatch({ type: SET_SUCURSALES_EMPRESA_SINIESTRO_SUCCESS, payload: values });
};
