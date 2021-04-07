import {
  GET_REGION_INIT,
  GET_REGION_SUCCESS,
  GET_REGION_FAILURE
} from "../types/regionType";

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: null
};

export default function regionForm(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_REGION_INIT:
      return { ...state, loading: true };

    case GET_REGION_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false
      };

    case GET_REGION_FAILURE:
      return { ...state, error: action.payload, loading: false };

    default:
      return { ...state };
  }
}
