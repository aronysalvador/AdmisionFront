import { combineReducers } from "redux";
import addmissionForm from "../reducers/AdmissionFormReducers";
import fechaHoraSiniestro from "../reducers/FechaHoraSiniestroReducer";

export default combineReducers({
  addmissionForm,
  fechaHoraSiniestroReducer: fechaHoraSiniestro,
});
