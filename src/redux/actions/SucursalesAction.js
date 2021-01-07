import {
  GET_SUCURSALES_INIT,
  GET_SUCURSALES_SUCCESS,
  GET_SUCURSALES_FAILURE,
} from "../types/sucursalesType";
import Axios from "axios";
import { updateForm, handleSetStep } from "./AdmissionAction";

export const obtenerData = async (rut, token) => {
  return Axios.get(`${window.REACT_APP_SUCURSALES}?rutEmpresa=${rut}`, {
    headers: {
      "x-access-token": token
    }
  }
);
};

export const getSucursales = (rut) => async (dispatch, getState) => {
  dispatch({
    type: GET_SUCURSALES_INIT,
    payload: true,
  });

  obtenerData(rut, getState().microsoftReducer.token)
    .then((response) => {
      if(response.status === 200 || response.status === 304){        
        dispatch(successCallSucursales(response.data));  
      }else{
        dispatch(updateForm("errorStep", 3));
        dispatch(updateForm("mensajeErrorApi", window.REACT_APP_SUCURSALES));
        dispatch(handleSetStep(1004));
      }
  
    })
    .catch((error) => {
      dispatch(errorCallSucursales());
      dispatch(updateForm("errorStep", 3));
      dispatch(updateForm("mensajeErrorApi", window.REACT_APP_SUCURSALES));
      dispatch(handleSetStep(1004));
    });

  const successCallSucursales = (sucursales) => ({
    type: GET_SUCURSALES_SUCCESS,
    payload: sucursales,
  });

  const errorCallSucursales = () => ({
    type: GET_SUCURSALES_FAILURE,
  });
};


export const obtenerValidacion = async (rut, token) => {
  return Axios.get(window.REACT_APP_RAZON_SOCIAL_RUT+rut, {
    headers: {
      "x-access-token": token
    }
  }
);
};


export const getValidar = (isValid, rut) => async (dispatch, getState) => {
  if(rut.length <= 7)
    return;
  dispatch({
    type: GET_SUCURSALES_INIT,
    payload: true,
  });
  if (isValid) {
    dispatch(updateForm("rutEmpresa", rut));
   await obtenerValidacion(rut, getState().microsoftReducer.token)
      .then(async(response) => {
        if(response.data.status === 200 || response.data.status === 304){
          const json = response.data      
          if(json.content.response[0] !== undefined){
  
           await dispatch(updateForm("razonSocial", json.content.response[0])) 
          await   dispatch(updateForm("razonSocialForm", json.content.response[0]?.name)) 
            //dispatch(updateForm("rutEmpresa", rut.replace(/\./g,'')));
          await  dispatch(updateForm("rutEmpresa", rut));
  
          
          await dispatch(getSucursales(rut.replace(/\./g,'').toUpperCase()))
          }else{
  
          // dispatch(updateForm("rutEmpresa", rut.replace(/\./g,''))) 
          dispatch(updateForm("rutEmpresa", rut));
            dispatch(updateForm("razonSocial", "")) 
            dispatch(updateForm("razonSocialForm", "")) 
           
          }
        }else{
          dispatch(updateForm("errorStep", 3));
          dispatch(updateForm("mensajeErrorApi", window.REACT_APP_RAZON_SOCIAL_RUT));
          dispatch(handleSetStep(1004));
          
        }
      })
      .catch((error) => {
        console.log(error)
        dispatch(updateForm("errorStep", 3));
        dispatch(updateForm("mensajeErrorApi", window.REACT_APP_RAZON_SOCIAL_RUT));
        dispatch(handleSetStep(1004));
        
      })
  }

};
