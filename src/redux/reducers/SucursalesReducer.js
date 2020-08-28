import {
  GET_SUCURSALES_INIT,
  GET_SUCURSALES_SUCCESS,
  GET_SUCURSALES_FAILURE,
} from "../types/sucursalesType";

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: null,
};

export default function sucursalesForm(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_SUCURSALES_INIT:
      return { ...state, loading: true, data: [] };

    case GET_SUCURSALES_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };

    case GET_SUCURSALES_FAILURE:
      return { ...state, error: action.payload, loading: false };

    default:
      return { ...state };
  }
}
