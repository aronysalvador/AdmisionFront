import {
  GET_RAZONSOCIAL_INIT,
  GET_RAZONSOCIAL_SUCCESS,
  GET_RAZONSOCIAL_FAILURE
} from "../types/razonSocialType";import { getRazonSocial } from "../../util/fakeApi";

export const getRazonSocialPrincipal = (rut) => async (dispatch) => {
  dispatch({ type: GET_RAZONSOCIAL_INIT });

  getRazonSocial(rut)
    .then((result) => {
      dispatch({
        type: GET_RAZONSOCIAL_SUCCESS,
        payload: result
      });
    })
    .catch((error) =>
      dispatch({
        type: GET_RAZONSOCIAL_FAILURE,
        payload: error
      })
    );
};
