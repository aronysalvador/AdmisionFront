import {
  GET_PROFESION_INIT,
  GET_PROFESION_SUCCESS,
  GET_PROFESION_FAILURE,
} from "../types/profesionType";

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: null,
};

export default function profesionForm(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_PROFESION_INIT:
      return { ...state, loading: true };

    case GET_PROFESION_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };

    case GET_PROFESION_FAILURE:
      return { ...state, error: action.payload, loading: false };

    default:
      return { ...state };
  }
}
