import {
  POST_LOG_INIT,
  POST_LOG_SUCCESS,
  POST_LOG_FAILURE,
  POST_LOG_INIT_STEP,
  POST_LOG_SUCCESS_STEP,
  POST_LOG_FAILURE_STEP,
  LOAD_LOG_STATE_SESSIONSTORAGE,
  INIT_SESSION_DATE
  } from "../types/LogType";
import { FechaHora } from "./../../helpers/utils"

  const formatDate = (fecha) => {
    let x = fecha.split(" ");
    let y = x[0].split("-");
    let newFecha = "( "+y[2]+"/"+y[1]+"/"+y[0]+" "+x[1]+" )";

    return newFecha
  }

  const INITIAL_STATE = {
    ID: 0,
    loading: false,
    error: null,
    fecha: formatDate(FechaHora())
  };

  export default function logForm(state = INITIAL_STATE, action) {
    switch (action.type) {
      case INIT_SESSION_DATE:
        return {
          ...state,
          fecha: formatDate(FechaHora())
      };

      case LOAD_LOG_STATE_SESSIONSTORAGE: {
        action.payload.fecha = state.fecha

        return { ...action.payload };
      }

      case POST_LOG_INIT:
      case POST_LOG_INIT_STEP:
        return { ...state, loading: true };

      case POST_LOG_SUCCESS:
        return {
          ...state,
          ID: action.payload,
          loading: false
        };
      case POST_LOG_SUCCESS_STEP:
        return {
          ...state,
          loading: false
        };

      case POST_LOG_FAILURE:
      case POST_LOG_FAILURE_STEP:
        return { ...state, error: action.payload, loading: false };

      default:
        return { ...state };
    }
  }