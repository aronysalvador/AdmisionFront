import { combineReducers } from "redux";
import addmissionForm from "../reducers/AdmissionFormReducers";
import sucursalesEmpresaSiniestro from "./SucursalesEmpresaSiniestro";
import previsionForm from "../reducers/PrevisionReducer";
import microsoftReducer from "../reducers/microsoft.reducer";
import cargosForm from "../reducers/WitnessResponsableReducer";

export default combineReducers({
  addmissionForm,
  sucursalesEmpresaSiniestro,
  previsionForm,
  microsoftReducer,
  cargosForm,
});
