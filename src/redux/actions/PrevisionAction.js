import {
  SEARCH_ISAPRES_INIT,
  SEARCH_ISAPRES_SUCCESS,
  SEARCH_ISAPRES_FAILURE,
} from "../types/addmissionFormType";
import Axios from "axios";

export const searchIsapres = () => async (dispatch) => {
  dispatch({
    type: SEARCH_ISAPRES_INIT,
    payload: true,
  });

  Axios.get(`https://wa-desa-msorquestador.azurewebsites.net/api/sap/isapres`)
    .then((response) => {
      dispatch(successCallIsapres(response.data.content[0]));
    })
    .catch((error) => {
      dispatch(errorCallIsapres());
    });
};

const successCallIsapres = (isapres) => ({
  type: SEARCH_ISAPRES_SUCCESS,
  payload: isapres,
});

const errorCallIsapres = () => ({
  type: SEARCH_ISAPRES_FAILURE,
});
