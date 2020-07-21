import { combineReducers } from "redux";
import addmissionForm from "../reducers/AdmissionFormReducers";
import sucursalesEmpresaSiniestro from "./SucursalesEmpresaSiniestro";
import previsionForm from "../reducers/PrevisionReducer";

export default combineReducers({
  addmissionForm,
  sucursalesEmpresaSiniestro,
  previsionForm,
});
