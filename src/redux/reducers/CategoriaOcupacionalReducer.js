import {
  GET_CATEGORIAOCUPACIONAL_INIT,
  GET_CATEGORIAOCUPACIONAL_SUCCESS,
  GET_CATEGORIAOCUPACIONAL_FAILURE
} from "../types/categoriaOcupacionalType";

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: null
};

export default function categoriaOcupacionalForm(
  state = INITIAL_STATE,
  action
) {
  switch (action.type) {
    case GET_CATEGORIAOCUPACIONAL_INIT:
      return { ...state, loading: true };

    case GET_CATEGORIAOCUPACIONAL_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false
      };

    case GET_CATEGORIAOCUPACIONAL_FAILURE:
      return { ...state, error: action.payload, loading: false };

    default:
      return { ...state };
  }
}
