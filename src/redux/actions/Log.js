import {
    POST_LOG_INIT,
    POST_LOG_SUCCESS,
    POST_LOG_FAILURE,
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

  //   return Axios.post(process.env.REACT_APP_LOG_BEGIN, params);
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
  //   return Axios.post(process.env.REACT_APP_LOG_END, params);
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
  

  export const handleData = async (email, fechaHora, centro) => {
    var x = fechaHora.split(" ");
    let params = {
        opcion:1,
        centro,
        email,
        fecha: x[0],
        hora: x[1],
    }

    return await Axios.post(process.env.REACT_APP_LOG, params);
  };
  
  export const handleLog = (email, fechaHora, centro) => (dispatch) => {
      dispatch({
        type: POST_LOG_INIT,
        payload: true,
      });
  
     handleData(email, fechaHora, centro)
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

  export const handleUpdate = async (params) => {
    return await Axios.post(process.env.REACT_APP_LOG, params);
  };
    
  export const handleLogUpdate = (datos) => (dispatch) => {
      dispatch({
        type: POST_LOG_INIT,
        payload: true,
      });
  
      handleUpdate(datos)
      .then((response) => {
          if(response.status === 200){            
            dispatch(successCallLog(datos.Id));
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
    return await Axios.post(process.env.REACT_APP_LOG, params);
  };
    
  export const handlEndLog = (datos) => (dispatch) => {
      dispatch({
        type: POST_LOG_INIT,
        payload: true,
      });
  
      handleEnd(datos)
      .then((response) => {
          if(response.status === 200){            
            dispatch(successCallLog(0));
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