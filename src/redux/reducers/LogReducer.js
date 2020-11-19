import {
  POST_LOG_INIT,
  POST_LOG_SUCCESS,
  POST_LOG_FAILURE,
  POST_LOG_INIT_STEP,
  POST_LOG_SUCCESS_STEP,
  POST_LOG_FAILURE_STEP,
  LOAD_LOG_STATE_SESSIONSTORAGE
  } from "../types/LogType";

  const INITIAL_STATE = {
    ID: 0,
    loading: false,
    error: null,
  };
  
  export default function logForm(state = INITIAL_STATE, action) {
    switch (action.type) {
      case LOAD_LOG_STATE_SESSIONSTORAGE:
        return { ...action.payload };

      case POST_LOG_INIT:
      case POST_LOG_INIT_STEP:
        return { ...state, loading: true };
  
      case POST_LOG_SUCCESS:
        return {
          ...state,
          ID: action.payload,
          loading: false,
        };
      case POST_LOG_SUCCESS_STEP:
        return {
          ...state,
          loading: false,
        };
  
      case POST_LOG_FAILURE:
      case POST_LOG_FAILURE_STEP:
        return { ...state, error: action.payload, loading: false };
  
      default:
        return { ...state };
    }
  }