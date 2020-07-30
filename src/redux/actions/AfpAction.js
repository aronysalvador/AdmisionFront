import {
  GET_AFP_INIT,
  GET_AFP_SUCCESS,
  GET_AFP_FAILURE,
} from "../types/afpType";
import Axios from "axios";

export const getAFP = () => async (dispatch) => {
  dispatch({
    type: GET_AFP_INIT,
    payload: true,
  });

  Axios.get(`http://fa-desa-tele-admision-datamaster.azurewebsites.net/api/AFP`)
    .then((response) => {
      dispatch(successCallAFP(response.data.content));
    })
    .catch((error) => {
      dispatch(errorCallAFP());
    });

  const successCallAFP = (isapres) => ({
    type: GET_AFP_SUCCESS,
    payload: isapres,
  });

  const errorCallAFP = () => ({
    type: GET_AFP_FAILURE,
  });
};
