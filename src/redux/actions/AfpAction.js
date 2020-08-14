import {
  GET_AFP_INIT,
  GET_AFP_SUCCESS,
  GET_AFP_FAILURE,
} from "../types/afpType";
import Axios from "axios";

export const getData = async () => {
  return Axios.get(process.env.REACT_APP_AFP);
};

export const getAFP = () => async (dispatch) => {
  dispatch({
    type: GET_AFP_INIT,
    payload: true,
  });

  getData()
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
