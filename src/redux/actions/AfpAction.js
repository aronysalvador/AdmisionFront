import {
  GET_AFP_INIT,
  GET_AFP_SUCCESS,
  GET_AFP_FAILURE,
} from "../types/afpType";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import { createHttpClient } from 'util/http.util';
import { cacheAsyncCallback } from 'util/cache.util';

const httpClient = createHttpClient({ url: window.REACT_APP_AFP })

export const getData = async () => {
  return httpClient.get();
};

export const getAFP = () => async (dispatch) => {
  dispatch({
    type: GET_AFP_INIT,
    payload: true,
  });

  getData()
    .then((response) => {
      if(response.status === 200){
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
