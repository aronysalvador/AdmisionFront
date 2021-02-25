import {
  GET_SUCURSALES_EMPRESA_SINIESTRO_INIT,
  GET_SUCURSALES_EMPRESA_SINIESTRO_SUCCESS,
  GET_SUCURSALES_EMPRESA_SINIESTRO_FAILURE
} from "../types/SucursalesEmpresaSiniestroTypes";

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: null
};

export default function sucursalesEmpresaSiniestro(
  state = INITIAL_STATE,
  action
) {
  switch (action.type) {
    case GET_SUCURSALES_EMPRESA_SINIESTRO_INIT:
      return { ...state, loading: true };

    case GET_SUCURSALES_EMPRESA_SINIESTRO_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false
      };

    case GET_SUCURSALES_EMPRESA_SINIESTRO_FAILURE:
      return { ...state, error: action.payload, loading: false };

    default:
      return { ...state };
  }
}
