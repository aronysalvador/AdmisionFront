import { combineReducers } from "redux";
import addmissionForm from "../reducers/AdmissionFormReducers";
import sucursalesEmpresaSiniestro from "./SucursalesEmpresaSiniestro";
import sucursalEmpresaSiniestro from "./SucursalEmpresaSiniestro";
export default combineReducers({
  addmissionForm,
  sucursalesEmpresaSiniestro,
  sucursalEmpresaSiniestro,
});
