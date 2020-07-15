import { combineReducers } from "redux";
import addmissionForm from "../reducers/AdmissionFormReducers";
import fechaHoraSiniestro from "../reducers/FechaHoraSiniestroReducer";
import sucursalesEmpresaSiniestro from "./SucursalesEmpresaSiniestro";
import sucursalEmpresaSiniestro from "./SucursalEmpresaSiniestro";
export default combineReducers({
  addmissionForm,
  fechaHoraSiniestro,
  sucursalesEmpresaSiniestro,
  sucursalEmpresaSiniestro,
});
