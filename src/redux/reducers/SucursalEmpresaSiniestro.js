import {
  SET_SUCURSALES_EMPRESA_SINIESTRO_INIT,
  SET_SUCURSALES_EMPRESA_SINIESTRO_SUCCESS,
  SET_SUCURSALES_EMPRESA_SINIESTRO_FAILURE,
} from "../types/SucursalesEmpresaSiniestroTypes";

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: null,
};

export default function sucursalEmpresaSiniestro(
  state = INITIAL_STATE,
  action
) {
  switch (action.type) {
    case SET_SUCURSALES_EMPRESA_SINIESTRO_INIT:
      return { ...state, loading: true };

    case SET_SUCURSALES_EMPRESA_SINIESTRO_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };

    case SET_SUCURSALES_EMPRESA_SINIESTRO_FAILURE:
      return { ...state, error: action.payload, loading: false };

    default:
      return { ...state };
  }
}
