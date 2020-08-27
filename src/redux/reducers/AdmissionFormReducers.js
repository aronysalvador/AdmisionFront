import {
  SET_STEP,
  UPDATE_FORM,
  SEND_ISAPRES,
  SEND_TESTIGO,
  SEND_RESPONSABLE,
  LOAD_STATE_SESSIONSTORAGE,
  CLEAR_STATE,
  DATE_EMPRESA_SUCCESS,
  DATE_EMPRESA_FAILURE
} from "../types/addmissionFormType";
import { AdmissionForm } from "../models/AdmissionForm";

export default function payload(state = AdmissionForm, action) {
  switch (action.type) {
    case LOAD_STATE_SESSIONSTORAGE:
      return { ...action.payload };
    case SET_STEP:
      return {
        ...state,
        step: action.payload.step,
        percentage: action.payload.percentage,
      };
    case UPDATE_FORM:
      return {
        ...state,
        [action.payload.stateType]: action.payload.value,
      };

    case SEND_ISAPRES:
      return {
        ...state,
        isapreSeleccionado: action.payload,
      };

    case SEND_TESTIGO:
      return {
        ...state,
        testigos: action.payload,
      };
    case SEND_RESPONSABLE:
      return {
        ...state,
        responsable: action.payload,
      };
    case CLEAR_STATE:
      var response = AdmissionForm
      response.centrosForm = state.centrosForm
      response.tipoSiniestro = state.tipoSiniestro
      console.log(state.centrosForm)
      return response;

    case DATE_EMPRESA_SUCCESS:
      return {
        ...state,
      };      
    case DATE_EMPRESA_FAILURE:
      return {
        ...state,
        error: action.payload,
      };      
    default:
      return state;
  }
}
