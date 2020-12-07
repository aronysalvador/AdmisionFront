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


   // PRIMERA VERSION //   
  // // VARIABLES ENTORNO
  // // REACT_APP_LOG_BEGIN=http://localhost/api/logs/beginLog
  // // REACT_APP_LOG_END=http://localhost/api/logs/endLog

  // export const postData = async (email, inicio) => {
  //   let params = {
  //       email,
  //       inicio
  //   }

  //   return Axios.post(window.REACT_APP_LOG_BEGIN, params);
  // };
  
  // export const createLog = (email, inicio) => async (dispatch) => {
  //   dispatch({
  //     type: POST_LOG_INIT,
  //     payload: true,
  //   });
  
  //   postData(email, inicio)
  //     .then((response) => {
  //         if(response.status === 200){            
  //           var ID = response.data.content[0][0].ID ? response.data.content[0][0].ID : 0
  //           dispatch(successCallLog(ID));
  //         }else{
  //           dispatch(errorCallLog("error"));
  //         }
  //     })
  //     .catch((error) => {
  //       dispatch(errorCallLog(error));
  //     });
  
  //   const successCallLog = ID => ({
  //     type: POST_LOG_SUCCESS,
  //     payload: ID
  //   });
  
  //   const errorCallLog = (error) => ({
  //     type: POST_LOG_FAILURE,
  //     payload: error
  //   });
  // };
  
  // export const postEndData = async (ID, fin) => {
  //   let params = {
  //       ID,
  //       fin
  //   }
  //   return Axios.post(window.REACT_APP_LOG_END, params);
  // };
  
  // export const endLog = (ID, fin) => async (dispatch) => {
  //   dispatch({
  //     type: POST_LOG_INIT,
  //     payload: true,
  //   });
  
  //   postEndData(ID, fin)
  //     .then((response) => {
  //         if(response.status === 200){            
  //           dispatch(successCallLog(0));
  //         }else{
  //           dispatch(errorCallLog("error"));
  //         }
  //     })
  //     .catch((error) => {
  //       dispatch(errorCallLog(error));
  //     });
  
  //   const successCallLog = ID => ({
  //     type: POST_LOG_SUCCESS,
  //     payload: ID
  //   });
  
  //   const errorCallLog = (error) => ({
  //     type: POST_LOG_FAILURE,
  //     payload: error
  //   });
  // };
  // PRIMERA VERSION //
  

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


  // export const handleUpdate = async (params) => {
  //   return await Axios.post(window.REACT_APP_LOG, params);
  // };
    
  // export const handleLogUpdate = (datos) => (dispatch) => {
  //     dispatch({
  //       type: POST_LOG_INIT,
  //       payload: true,
  //     });
  
  //     handleUpdate(datos)
  //     .then((response) => {
  //         if(response.status === 200){            
  //           dispatch(successCallLog(datos.Id));
  //         }else{
  //           dispatch(errorCallLog(response.data.error));
  //         }
  //     })
  //     .catch((error) => {
  //       dispatch(errorCallLog(error));
  //     });
  
  //   const successCallLog = ID => ({
  //     type: POST_LOG_SUCCESS,
  //     payload: ID
  //   });

  //   const errorCallLog = (error) => ({
  //     type: POST_LOG_FAILURE,
  //     payload: error
  //   });
  // };


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


  // export const ExitLog = () => (dispatch) => {
  //     dispatch({
  //       type: POST_LOG_SUCCESS,
  //       payload: 0
  //     });
  // };

  export const handleStepLogPage = async (params) => {
    return await Axios.post(window.REACT_APP_LOG, params);
  };

  export const stepLogPage = (datos) => (dispatch) => {
    dispatch({
      type: POST_LOG_INIT_STEP,
      payload: true,
    });

    // console.log(datos)
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
