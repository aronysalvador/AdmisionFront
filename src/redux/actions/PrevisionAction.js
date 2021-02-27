import {
  SEARCH_ISAPRES_INIT,
  SEARCH_ISAPRES_SUCCESS,
  SEARCH_ISAPRES_FAILURE
} from "../types/addmissionFormType";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import { createHttpGetClient } from '../common';

export const fetchData = createHttpGetClient(window.REACT_APP_ISAPRES);

export const searchIsapres = () => async (dispatch) => {
  dispatch({
    type: SEARCH_ISAPRES_INIT,
    payload: true
  });

  fetchData()
    .then((response) => {
      if (response.status === 200){
        dispatch(successCallIsapres(response.data.content[0]));
      } else {
        dispatch(updateForm("errorStep", 0));
        dispatch(updateForm("mensajeErrorApi", window.REACT_APP_ISAPRES));
        dispatch(handleSetStep(1004));
      }
    })
    .catch(() => {
      dispatch(errorCallIsapres());
      dispatch(updateForm("errorStep", 0));
      dispatch(updateForm("mensajeErrorApi", window.REACT_APP_ISAPRES));
      dispatch(handleSetStep(1004));
    });
};

const successCallIsapres = (isapres) => ({
  type: SEARCH_ISAPRES_SUCCESS,
  payload: isapres
});

const errorCallIsapres = () => ({
  type: SEARCH_ISAPRES_FAILURE
});
