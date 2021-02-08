import {
  SEARCH_ISAPRES_INIT,
  SEARCH_ISAPRES_SUCCESS,
  SEARCH_ISAPRES_FAILURE,
} from "../types/addmissionFormType";
import Axios from "axios";
import axiosRetry from 'axios-retry';
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";

axiosRetry(Axios, { retries: 3 });
export const fetchData = async () => {     
  return await Axios.get(window.REACT_APP_ISAPRES);
};

export const searchIsapres = () => async (dispatch) => {
  dispatch({
    type: SEARCH_ISAPRES_INIT,
    payload: true,
  });

  fetchData()
    .then((response) => {
      if(response.status === 200){
        dispatch(successCallIsapres(response.data.content[0]));
      }else{
        dispatch(updateForm("errorStep", 0));
        dispatch(updateForm("mensajeErrorApi", window.REACT_APP_ISAPRES));
        dispatch(handleSetStep(1004));
      } 
    })
    .catch((error) => {
      dispatch(errorCallIsapres());
      dispatch(updateForm("errorStep", 0));
      dispatch(updateForm("mensajeErrorApi", window.REACT_APP_ISAPRES));
      dispatch(handleSetStep(1004));
    });
};

const successCallIsapres = (isapres) => ({
  type: SEARCH_ISAPRES_SUCCESS,
  payload: isapres,
});

const errorCallIsapres = () => ({
  type: SEARCH_ISAPRES_FAILURE,
});
