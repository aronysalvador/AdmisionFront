import { combineReducers } from "redux";
import addmissionForm from "../reducers/AdmissionFormReducers";
import sucursalesEmpresaSiniestro from "./SucursalesEmpresaSiniestro";
import previsionForm from "../reducers/PrevisionReducer";
import microsoftReducer from "../reducers/microsoft.reducer";
import cargosForm from "../reducers/WitnessResponsableReducer";
import razonSocialForm from "../reducers/RazonSocialReducer";
import afpForm from "../reducers/AfpReducer";
import tipoJornadaLaboralForm from "../reducers/TipoJornadaLaboralReducer";
import categoriaOcupacionalForm from "../reducers/CategoriaOcupacionalReducer";
import tipoRemuneracionForm from "../reducers/TipoRemuneracionReducer";
import tipoContratoForm from "../reducers/TipoContratoReducer";
import comunaForm from "../reducers/ComunaReducer";
import sucursalesForm from "../reducers/SucursalesReducer";
import razonAlertaForm from "../reducers/AlertaCalificacionRazonReducer";
import centrosAchsForm from "../reducers/CentrosAchsReducer";

export default combineReducers({
    addmissionForm,
    sucursalesEmpresaSiniestro,
    previsionForm,
    microsoftReducer,
    cargosForm,
    razonSocialForm,
    afpForm,
    tipoJornadaLaboralForm,
    categoriaOcupacionalForm,
    tipoRemuneracionForm,
    tipoContratoForm,
    comunaForm,
    sucursalesForm,
    razonAlertaForm,
    centrosAchsForm,
});