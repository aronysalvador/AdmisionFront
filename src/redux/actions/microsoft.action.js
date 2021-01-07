import {
  MSAL_INIT,
  MSAL_SUCCESS,
  MSAL_FAILURE,
  SAVE_TOKEN,
} from "../types/microsoftType.js";
import msalservice from "../../services/msalservice";
import graphservice from "../../services/graphservice";
import Axios from "axios";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";

export async function getUserProfile(scopes) {
  const accessToken = await msalservice.acquireTokenSilent({ scopes });
  if (accessToken) {
    const user = await graphservice(accessToken);
    return user;
  }
  return null;
}

export const login = (scopes) => async (dispatch, getState) => {
  dispatch({ type: MSAL_INIT });

  try {
    await msalservice.loginPopup({ scopes, prompt: "select_account" });
    const user = await getUserProfile(scopes);
    const userTempArray = user.displayName.split(",");
    let iniciales = "";
    if (Array.isArray(userTempArray) && userTempArray.length === 2) {
      iniciales =
        String(userTempArray[1]).trim().charAt(0) +
        String(userTempArray[0]).trim().charAt(0);
    }
    const userMsal = {
      displayName: user.displayName,
      email: user.mail || user.userPrincipalName,
      iniciales: iniciales,
    };
    dispatch({ type: MSAL_SUCCESS, payload: userMsal });
    //PARCHE
    var userSAP =await  homologacionSap(dispatch, userMsal.email)
    if(userSAP){
      var step =await  isNuevaAdmisionista(dispatch, userMsal.email, getState)
      dispatch(handleSetStep(step));
    }else{
      dispatch(handleSetStep(1003));
    }

    
  } catch (err) {
    let error = {};
    if (typeof err === "string") {
      const errParts = err.split("|");
      error =
        errParts.length > 1
          ? { message: errParts[1], debug: errParts[0] }
          : { message: err };
    } else {
      error = {
        message: err.message,
        debug: JSON.stringify(err),
      };
    }
    alert(error.message)
    dispatch({ type: MSAL_FAILURE, payload: { error } });
  }
};

export const logout = () => async (dispatch) => {
  sessionStorage.clear();
  dispatch(handleSetStep(0));
  msalservice.logout();
};

export const getAccount = () => async (dispatch) => {
  const usermsal = msalservice.getAccount();
  const step = usermsal === null ? 0 : 1;
  dispatch(handleSetStep(step))
  return usermsal;
};

export const getCenters = async(email, token) => {
  return  await Axios.get(window.REACT_APP_CENTER_USER+'?email='+email, {
    headers: {
      "x-access-token": token
    }
  });
}

const isNuevaAdmisionista = async(dispatch, email, getState) => {
    const result = await getCenters(email, getState().microsoftReducer.token);
      
    if(result.data.data.length > 0) {
      dispatch(updateForm("centrosForm", result.data.data[0].centrosForm));
      return 1
    }else {
      return 40
    }
};

export const obtenerUsuarioSap = async (email) => {
  return Axios.get(window.REACT_APP_HOMOLOGACION+'?email='+email);
};

export const guardar_token = (token) => {
  return {
    type: SAVE_TOKEN,
    payload: token
  }
}

const homologacionSap = async(dispatch, email) => {
  const result = await obtenerUsuarioSap(email);

  if(result.data.content[0].length > 0 && result.data.token) { 
      dispatch(guardar_token(result.data.token));
      dispatch(updateForm("usuarioSAP", result.data.content[0]));
    return true
  }else {   
    return false
  }
};