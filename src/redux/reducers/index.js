import { combineReducers } from "redux";
import addmissionForm from "../reducers/AdmissionFormReducers";
import sucursalesEmpresaSiniestro from "./SucursalesEmpresaSiniestro";
import previsionForm from "../reducers/PrevisionReducer";
import microsoftReducer from "../reducers/microsoft.reducer";
import cargosForm from "../reducers/WitnessResponsableReducer";
import razonSocialForm from "../reducers/RazonSocialReducer";
import afpForm from "../reducers/AfpReducer";
import bpForm from "../reducers/BPReducer";
import nacionalidadForm from "../reducers/NacionalidadReducer";
import paisForm from "../reducers/PaisReducer";
import idiomaForm from "../reducers/IdiomaReducer";
import tipoJornadaLaboralForm from "../reducers/TipoJornadaLaboralReducer";
import categoriaOcupacionalForm from "../reducers/CategoriaOcupacionalReducer";
import tipoRemuneracionForm from "../reducers/TipoRemuneracionReducer";
import tipoContratoForm from "../reducers/TipoContratoReducer";
import comunaForm from "../reducers/ComunaReducer";
import sucursalesForm from "../reducers/SucursalesReducer";
import razonAlertaForm from "../reducers/AlertaCalificacionRazonReducer";
import centrosAchsForm from "../reducers/CentrosAchsReducer";
import profesionForm from "../reducers/ProfesionReducer";
import userCenterForm from "../reducers/UserCenterReducer";
import grupoForm from "../reducers/GrupoReducer";
import LogForm from "../reducers/LogReducer";
import { tipoAccidenteTrayectoForm, mediosTransporteForm, parteCuerpoAfectadaForm, agenteCausaEnfermedadForm } from "./TipoAccidenteTrayectoReducer";
import criteriosForm from "../reducers/CriteriosReducer";

export default combineReducers({
    addmissionForm,
    sucursalesEmpresaSiniestro,
    previsionForm,
    microsoftReducer,
    cargosForm,
    razonSocialForm,
    afpForm,
    grupoForm,
    bpForm,
    nacionalidadForm,
    paisForm,
    idiomaForm,
    tipoJornadaLaboralForm,
    categoriaOcupacionalForm,
    tipoRemuneracionForm,
    tipoContratoForm,
    comunaForm,
    sucursalesForm,
    razonAlertaForm,
    centrosAchsForm,
    profesionForm,
    userCenterForm,
    LogForm,
    tipoAccidenteTrayectoForm,
    mediosTransporteForm,
    parteCuerpoAfectadaForm,
    agenteCausaEnfermedadForm,
    criteriosForm
});