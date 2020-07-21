import {
  SET_STEP,
  UPDATE_FORM,
  SEND_ISAPRES,
  SEND_TESTIGO,
  SEND_RESPONSABLE,
  LOAD_STATE_SESSIONSTORAGE,
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
    default:
      return state;
  }
}
