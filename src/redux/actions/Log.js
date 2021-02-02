import {
    POST_LOG_INIT,
    POST_LOG_SUCCESS,
    POST_LOG_FAILURE,
    POST_LOG_INIT_STEP,
    POST_LOG_SUCCESS_STEP,
    POST_LOG_FAILURE_STEP,
    LOAD_LOG_STATE_SESSIONSTORAGE
  } from "../types/LogType";
  import Axios from "axios";
  
  export const loadLogStateFromSessionStorage = (state) => {
    return {
      type: LOAD_LOG_STATE_SESSIONSTORAGE,
      payload: state,
    };
  };

  export const handleData = async (datos) => {
    var x = datos.fecha.split(" ");
    let params = {
        opcion:1,
        centro: datos.centro,
        email: datos.email,
        fecha: x[0],
        hora: x[1],
        rut: datos.Rut,
        tipoSiniestro: datos.tipoSiniestro,
        BP: datos.BP
    }

    return await Axios.post(window.REACT_APP_LOG, params);
  };
  
  export const handleLog = (datos) => (dispatch) => {
      dispatch({
        type: POST_LOG_INIT,
        payload: true,
      });
  
     handleData(datos)
      .then((response) => {
          if(response.status === 200){            
            var ID =  response.data.data.length>0 ? response.data.data[0].IdRegister : 0
            dispatch(successCallLog(ID));
          }else{
            dispatch(errorCallLog(response.data.error));
          }
      })
      .catch((error) => {
        dispatch(errorCallLog(error));
      });
  
    const successCallLog = ID => ({
      type: POST_LOG_SUCCESS,
      payload: ID
    });

    const errorCallLog = (error) => ({
      type: POST_LOG_FAILURE,
      payload: error
    });
  };


  export const handleEnd = async (params) => {
    params.opcion=100;
    return await Axios.post(window.REACT_APP_LOG, params);
  };
    
  export const handlEndLog = (datos) => (dispatch, getState) => {

      const { addmissionForm: { mensajeErrorSAP } } = getState();
      datos.duplicate = (datos.responseSap===200 && mensajeErrorSAP) ? true : false; // si la respuesta de sap fue exitosa y ademas hay un mensaje de error, quiere decir, que sap fallo al menos 1 vez anteriormente y por ende hay q duplicar el registro

      dispatch({
        type: POST_LOG_INIT,
        payload: true,
      });
  
      handleEnd(datos)
      .then((response) => {
          if(response.status === 200 && datos.responseSap === 200){            
            dispatch(successCallLog(0));
          }else{

              if(datos.responseSap === 200){
                dispatch(errorCallLog(response.data.error));
              }else{
                dispatch(errorCallLog("SAP ERROR"));
              }
          
          }
      })
      .catch((error) => {
        dispatch(errorCallLog(error));
      });
  
    const successCallLog = ID => ({
      type: POST_LOG_SUCCESS,
      payload: ID
    });

    const errorCallLog = (error) => ({
      type: POST_LOG_FAILURE,
      payload: error
    });
  };

  export const handleStepLogPage = async (params) => {
    return await Axios.post(window.REACT_APP_LOG, params);
  };

  export const stepLogPage = (datos) => (dispatch) => {
    dispatch({
      type: POST_LOG_INIT_STEP,
      payload: true,
    });

    handleStepLogPage(datos)
      .then((response) => {
          if(response.status === 200){  
            dispatch(successCallLogStep()); 
          }
      })
      .catch((error) => {
        dispatch(errorCallLogStep(error))
      });

      const successCallLogStep = ID => ({
        type: POST_LOG_SUCCESS_STEP
      });
  
      const errorCallLogStep = (error) => ({
        type: POST_LOG_FAILURE_STEP,
        payload: error
      });
  
  };
