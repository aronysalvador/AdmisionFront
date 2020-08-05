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

  Axios.get(`https://wa-desa-msorquestador.azurewebsites.net/api/sap/afp`)
    .then((response) => {
      dispatch(successCallAFP(response.data.content[0]));
    })
    .catch((error) => {
      dispatch(errorCallAFP());
    });

  const successCallAFP = (afp) => ({
    type: GET_AFP_SUCCESS,
    payload: afp,
  });

  const errorCallAFP = () => ({
    type: GET_AFP_FAILURE,
  });
};
