import {
  GET_SUCURSALES_INIT,
  GET_SUCURSALES_SUCCESS,
  GET_SUCURSALES_FAILURE,
} from "../types/sucursalesType";
import Axios from "axios";
import { updateForm } from "./AdmissionAction";

export const obtenerData = async (rut) => {
  return Axios.get(`${window.REACT_APP_SUCURSALES}?rutEmpresa=${rut}`);
};

export const getSucursales = (rut) => async (dispatch) => {
  dispatch({
    type: GET_SUCURSALES_INIT,
    payload: true,
  });

  obtenerData(rut)
    .then((response) => {
      dispatch(successCallSucursales(response.data));
    })
    .catch((error) => {
      dispatch(errorCallSucursales());
    });

  const successCallSucursales = (sucursales) => ({
    type: GET_SUCURSALES_SUCCESS,
    payload: sucursales,
  });

  const errorCallSucursales = () => ({
    type: GET_SUCURSALES_FAILURE,
  });
};


export const obtenerValidacion = async (rut) => {
  return Axios.get(window.REACT_APP_RAZON_SOCIAL_RUT+rut);
};


export const getValidar = (isValid, rut) => async (dispatch) => {
  dispatch({
    type: GET_SUCURSALES_INIT,
    payload: true,
  });
  if (isValid) {
   await obtenerValidacion(rut)
      .then(async(response) => {
           
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
      })
      .catch((error) => {
        console.log(error)
        
      })
  }else{
      
    dispatch(updateForm("rutEmpresa", "")) 
    dispatch(updateForm("razonSocial", "")) 
    dispatch(updateForm("razonSocialForm", "")) 
  };

};
