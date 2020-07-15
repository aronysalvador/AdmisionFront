import { combineReducers } from "redux";
import addmissionForm from "../reducers/AdmissionFormReducers";
import sucursalesEmpresaSiniestro from "./SucursalesEmpresaSiniestro";

export default combineReducers({
  addmissionForm,
  sucursalesEmpresaSiniestro,
});
