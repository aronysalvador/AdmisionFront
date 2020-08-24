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

  export const postData = async (email, inicio) => {
    let params = {
        email,
        inicio
    }

    return Axios.post(process.env.REACT_APP_LOG_BEGIN, params);
  };
  
  export const createLog = (email, inicio) => async (dispatch) => {
    dispatch({
      type: POST_LOG_INIT,
      payload: true,
    });
  
    postData(email, inicio)
      .then((response) => {
          if(response.status === 200){            
            var ID = response.data.content[0][0].ID ? response.data.content[0][0].ID : 0
            dispatch(successCallLog(ID));
          }else{
            dispatch(errorCallLog("error"));
          }
      })
      .catch((error) => {
        console.log(error)
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
  
  export const postEndData = async (ID, fin) => {
    let params = {
        ID,
        fin
    }
    return Axios.post(process.env.REACT_APP_LOG_END, params);
  };
  
  export const endLog = (ID, fin) => async (dispatch) => {
    dispatch({
      type: POST_LOG_INIT,
      payload: true,
    });
  
    postEndData(ID, fin)
      .then((response) => {
          if(response.status === 200){            
            dispatch(successCallLog(0));
          }else{
            dispatch(errorCallLog("error"));
          }
      })
      .catch((error) => {
        console.log(error)
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
  