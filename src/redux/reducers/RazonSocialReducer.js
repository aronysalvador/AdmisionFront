import {
  GET_RAZONSOCIAL_INIT,
  GET_RAZONSOCIAL_SUCCESS,
  GET_RAZONSOCIAL_FAILURE,
} from "../types/razonSocialType";

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: null,
};

export default function razonSocialForm(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_RAZONSOCIAL_INIT:
      return { ...state, loading: true };

    case GET_RAZONSOCIAL_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };

    case GET_RAZONSOCIAL_FAILURE:
      return { ...state, error: action.payload, loading: false };

    default:
      return { ...state };
  }
}
