import {
  GET_AFP_INIT,
  GET_AFP_SUCCESS,
  GET_AFP_FAILURE,
} from "../types/afpType";
import Axios from "axios";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";

export const getData = async () => {
  return Axios.get(window.REACT_APP_AFP);
};

export const getAFP = () => async (dispatch) => {
  dispatch({
    type: GET_AFP_INIT,
    payload: true,
  });

  getData()
    .then((response) => {
      if(response.data.status === 200){
        dispatch(successCallAFP(response.data.content[0]));
      }else{
        dispatch(updateForm("errorStep", 0));
        dispatch(updateForm("mensajeErrorApi", window.REACT_APP_AFP));
        dispatch(handleSetStep(1004));
      }
    })
    .catch((error) => {
      dispatch(errorCallAFP());
      dispatch(updateForm("errorStep", 0));
      dispatch(updateForm("mensajeErrorApi", window.REACT_APP_AFP));
      dispatch(handleSetStep(1004));
    });

  const successCallAFP = (afp) => ({
    type: GET_AFP_SUCCESS,
    payload: afp,
  });

  const errorCallAFP = () => ({
    type: GET_AFP_FAILURE,
  });
};
