import {
    SET_STEP,
    UPDATE_FORM,
    SEND_ISAPRES,
    SEND_TESTIGO,
    SEND_RESPONSABLE,
    LOAD_STATE_SESSIONSTORAGE,
    SEND_CENTROACHS,
    DATE_EMPRESA_FAILURE,
    RESPONSE_SUCCESS,
    RESPONSE_ERROR
} from "../types/addmissionFormType";
import Axios from "axios";
import { formateaRut } from "../../helpers/rut";
import { handleLog, handlEndLog, stepLogPage } from "./Log";
import { FechaHora } from './../../helpers/utils'
import { Pipes } from "./../../containers/EditarTelefono/phone";
import { getSucursales } from "./SucursalesAction";
import { getToken } from 'redux/selectors/auth.selector';

const totalSteps = 27;

export const loadStateFromSessionStorage = (state) => {
    return {
        type: LOAD_STATE_SESSIONSTORAGE,
        payload: state
    };
};

export const setStep = (step, percentage) => {
    return {
        type: SET_STEP,
        payload: {
            step,
            percentage
        }
    };
};

export const updateForm = (stateType, value) => {
    return {
        type: UPDATE_FORM,
        payload: {
            stateType,
            value
        }
    };
};

export const handleSetStep = (step, actual = null) => {
    return (dispatch, getState) => {
        // Mapear logs de pantallas
        const { LogForm: { ID } } = getState();
        if ((step !== -1 && step !== 0 && step !== 1 && step !== 2 && step !== 3 && step !== 26.4) && !actual) { // step !== 1.1 &&
            ID !== 0 && dispatch(stepLogPage({ Id: ID, fecha: FechaHora(), opcion: 7, id_campo: step }))
        }

        let PASO = step

        if (actual !== null) { // PANTALLAS QUE EVALUAN SEGUN EL TIPO DE SINIESTRO A DONDE DEBEN DIRIGIRSE
            const { addmissionForm: { tipoSiniestro } } = getState();
            const TIPO = tipoSiniestro.Id

            switch (actual) {
                // case 5.1: //PersonalData
                case 5.7: // CentroPaciente
                    // case 5.12: //NoQuotes
                    switch (TIPO) {
                        case 1:
                            // RelatoUnido
                            PASO = 6.06
                            break;
                        case 2:
                            PASO = 6.01
                            break;
                        case 3:
                            PASO = 6.04
                            break;
                        default:
                            PASO = 500
                            break;
                    }
                    break;

                case 6: // AccidentPlaceForm
                    switch (TIPO) {
                        case 1:
                            PASO = 5.7
                            break;
                        case 2:
                            PASO = 6.03
                            break;
                        case 3:
                            PASO = 500
                            break;
                        default:
                            PASO = 500
                            break;
                    }
                    break;

                    // Relato Unido
                case 6.06: // AccidentPlaceForm
                    switch (TIPO) {
                        case 1:
                            PASO = 5.7
                            break;
                        case 2:
                            PASO = 6.03
                            break;
                        case 3:
                            PASO = 500
                            break;
                        default:
                            PASO = 500
                            break;
                    }
                    break;

                case 8.1: // RelatoFinal
                    switch (TIPO) {
                        case 1:
                            PASO = 10.1
                            break;
                        case 2:
                            PASO = 9.01
                            break;
                        case 3:
                            PASO = 500
                            break;
                        default:
                            PASO = 500
                            break;
                    }
                    break;

                case 10: // FechaHoraSiniestro
                    switch (TIPO) {
                        case 1:
                            PASO = 8.1
                            break;
                        case 2:
                            PASO = 9.01
                            break;
                        case 3:
                            PASO = 500
                            break;
                        default:
                            PASO = 500
                            break;
                    }
                    break;

                case 10.1: // InfoAccidente
                    if (step === "x_back") { // hacia atras
                        switch (TIPO) {
                            case 1:
                                PASO = 8.1
                                break;
                            case 2:
                                PASO = 9.01
                                break;
                            case 3:
                                PASO = 500
                                break;
                            default:
                                PASO = 500
                                break;
                        }
                    } else { // hacia adelante
                        switch (TIPO) {
                            case 1:
                                PASO = 17.3
                                break;
                            case 2:
                                PASO = 17.4
                                break;
                            case 3:
                                PASO = 500
                                break;
                            default:
                                PASO = 500
                                break;
                        }
                    }
                    break;

                case 12: // LugarReferenciaSiniestro
                    switch (TIPO) {
                        case 1:
                            PASO = 12.1
                            break;
                        case 2:
                            PASO = 12.2
                            break;
                        case 3:
                            PASO = 500
                            break;
                        default:
                            PASO = 500
                            break;
                    }
                    break;

                case 13: // QuestionWitness
                    // case 17.3: //TestigoResponsable
                    switch (TIPO) {
                        case 1:
                            PASO = 12.1
                            break;
                        case 2:
                            PASO = 12.2
                            break;
                        case 3:
                            PASO = 500
                            break;
                        default:
                            PASO = 500
                            break;
                    }
                    break;

                case 17: // FechaHoraResponsable
                    switch (TIPO) {
                        case 1:
                            PASO = 17.1
                            break;
                        case 2:
                            PASO = 17.2
                            break;
                        case 3:
                            PASO = 17.1
                            break;
                        default:
                            PASO = 500
                            break;
                    }
                    break;

                case 17.1: // BoxQuestionResponsable
                    switch (TIPO) {
                        case 1:
                            PASO = 17
                            break;
                        case 2:
                            PASO = 17.2
                            break;
                        case 3:
                            PASO = 17
                            break;
                        default:
                            PASO = 500
                            break;
                    }
                    break;

                case 18.1: // BotonesAFP
                    switch (TIPO) {
                        case 1:
                        case 2:
                            PASO = step
                            break;
                        case 3:
                            PASO = 6.05
                            break;
                        default:
                            PASO = 500
                            break;
                    }
                    break;

                case 18.01: // Previsiones (AFP-Isapre) unificadas
                    if (step === "x_back") { // hacia atras
                        switch (TIPO) {
                            case 1:
                                PASO = 17.3
                                break;
                            case 2:
                                PASO = 17.4
                                break;
                            case 3:
                                PASO = 6.05
                                break;
                            default:
                                PASO = 500
                                break;
                        }
                    } else { // hacia adelante
                        switch (TIPO) {
                            case 1:
                                PASO = 19.4
                                break;
                            case 2:
                                PASO = 19.201
                                break;
                            case 3:
                                PASO = 19.4
                                break;
                            default:
                                PASO = 500
                                break;
                        }
                    }
                    break;

                case 19.4: // DatosContractuales
                    switch (TIPO) {
                        case 1:
                        case 3:
                            PASO = 18.01
                            break;
                        case 2:
                            PASO = step
                            break;
                        default:
                            PASO = 500
                            break;
                    }
                    break;

                default:
                    PASO = 500
                    break;
            }
            PASO !== 0 && dispatch(stepLogPage({ Id: ID, fecha: FechaHora(), opcion: 7, id_campo: PASO }))
        }

        dispatch(setStep(PASO, getPercentage(PASO)));
    };
};
const getPercentage = (step) => {
    return (step * 100) / parseFloat(totalSteps);
};

export const formatRut = (rut) => {
    return (dispatch) => {
        dispatch(setStep(2, getPercentage(2)));
        dispatch(updateForm("rut", formateaRut(rut)));
    };
};

export const obtenerData = async(rut, token) => {
    return Axios.get(window.REACT_APP_VALIDAR_DATA_PACIENTE + `?rut=${rut}`, {
        headers: {
            "x-access-token": token
        }
    });
};

export const obtenerDataRazon = async(rutEmpresa, token) => {
    return Axios.get(window.REACT_APP_RAZON_SOCIAL_RUT + rutEmpresa, {
        headers: {
            "x-access-token": token
        }
    });
};

export const saveRut = (rut) => {
    return async(dispatch, getState) => {
        const { microsoftReducer: { userMsal } } = getState();
        const { email } = userMsal;
        const { addmissionForm: { centrosForm, tipoSiniestro } } = getState();
        await dispatch(handleLog({ email, fecha: FechaHora(), centro: centrosForm, tipoSiniestro, Rut: rut, BP: "" }))

        obtenerData(rut, getState().microsoftReducer.token)
            .then((result) => {
                dispatch({
                    type: RESPONSE_SUCCESS,
                    payload: result
                });

                if (result.status === 200 || result.status === 206) { // || result.data.status === 304
                    let BpCreado = result.data.content.response ? result.data.content.response.BpCreado : "";
                    if (BpCreado) {
                        // Guardar datos adicionales paciente requeridos por SAP
                        const {
                            apellidoMaterno,
                            apellidoPaterno,
                            nombre,
                            idEtnia,
                            descripcionEtnia,
                            fechaNacimiento,
                            masculino,
                            femenino,
                            nacionalidad,
                            pais,
                            estadoCivil
                        } = result.data.content.response;

                        dispatch(
                            updateForm("datosAdicionalesSAP", {
                                apellidoMaterno,
                                apellidoPaterno,
                                nombre,
                                fechaNacimiento,
                                masculino,
                                femenino,
                                nacionalidad,
                                pais,
                                estadoCivil
                            })
                        );

                        if (idEtnia && descripcionEtnia) {
                            dispatch(
                                updateForm("grupoEtnico", {
                                    id: idEtnia,
                                    descripcion: descripcionEtnia
                                })
                            );
                        }

                        dispatch(updateForm("cita", result.data.content.response.cita));
                        dispatch(
                            updateForm("siniestros", result.data.content.response.siniestros)
                        );

                        if (result.data.content.response.RutPagador) {
                            dispatch(saveRazonSocial(result.data.content.response.RutPagador));
                            dispatch(getSucursales(result.data.content.response.RutPagador))

                            dispatch(
                                updateForm(
                                    "razonSocial",
                                    result.data.content.response.NombreEmpresa
                                )
                            );
                            dispatch(
                                updateForm("rutEmpresa", result.data.content.response.RutPagador)
                            );

                            dispatch(updateForm("isAfiliado", "Si"));
                            dispatch(
                                updateForm(
                                    "SucursalEmpresa",

                                    result.data.content.response.SucursalEmpresa
                                )
                            );
                            dispatch(
                                updateForm(
                                    "DireccionEmpresa",

                                    result.data.content.response.DireccionEmpresa
                                )
                            );
                            dispatch(
                                updateForm(
                                    "comunaEmpresa",
                                    result.data.content.response.comunaEmpresa
                                )
                            );
                        }
                        dispatch(
                            updateForm(
                                "direccionParticular",

                                result.data.content.response.direccionParticular
                            )
                        );
                        dispatch(
                            updateForm(
                                "comunaDireccionParticular",
                                result.data.content.response?.codigoComuna
                            )
                        );
                        dispatch(
                            updateForm(
                                "telefonoParticular",

                                result.data.content.response.telefonoParticular === "0" ?
                                "" :
                                Pipes.advanced(result.data.content.response.telefonoParticular)
                            )
                        );
                        dispatch(
                            updateForm(
                                "BP",

                                result.data.content.response.BP ?
                                result.data.content.response.BP :
                                ""
                            )
                        );

                        // determinar siguiente paso
                        let STEP = "";
                        if (result.data.content.response.cita.length > 0) {
                            STEP = 5.82;
                        } else if (result.data.content.response.siniestros.length > 0) {
                            const mensajeAlerta = "Este paciente ya tiene un siniestro";
                            const mensajeBoton = "Ver su(s) siniestro(s)";
                            const origen = "getRut";
                            dispatch(
                                updateForm("siniestroOpciones", {
                                    mensajeAlerta,
                                    mensajeBoton,
                                    origen
                                })
                            );
                            STEP = 5.83;
                        } else {
                            if (!result.data.content.response.NombreEmpresa ||
                                !result.data.content.response.SucursalEmpresa ||
                                !result.data.content.response.DireccionEmpresa ||
                                !result.data.content.response.RutPagador
                            ) {
                                // si falta info de la empresa
                                STEP = 5.4; // form empresa
                            } else if (!result.data.content.response.direccionParticular) {
                                // si no tiene direccion
                                STEP = 5.2; // form direccion
                            } else if (!result.data.content.response.telefonoParticular ||
                                result.data.content.response.telefonoParticular === "0"
                            ) {
                                // si no tiene telefono
                                STEP = 5.3; // form telefono
                            } else {
                                // si todos los datos relevantes están llenos
                                STEP = 5.1; // resumen data
                            }
                        }

                        dispatch(handleSetStep(STEP));
                        // actualizar BP reporte
                        if (result.data.content.response.BP){
                            const { LogForm: { ID } } = getState();
                            dispatch(stepLogPage({ Id: ID, opcion: 2, BP: result.data.content.response.BP }))
                        }
                    } else {
                        // NO TIENE BP
                        dispatch(updateForm("bpForm", result.data.content.response));
                        dispatch(handleSetStep(5.812));
                    }
                } else {
                    if (result.status === 203){
                        dispatch(updateForm("errorStep", 3));
                        dispatch(updateForm("mensajeErrorApi", "Paciente tiene 2 BP"));
                        dispatch(handleSetStep(1004));
                    } else {
                        dispatch(updateForm("errorStep", 3));
                        dispatch(updateForm("mensajeErrorApi", window.REACT_APP_VALIDAR_DATA_PACIENTE));
                        dispatch(handleSetStep(1004));
                    }
                }
            })
            .catch((error) => {
                dispatch({
                    type: RESPONSE_ERROR,
                    payload: error
                });
                dispatch(updateForm("errorStep", 3));
                dispatch(updateForm("mensajeErrorApi", window.REACT_APP_VALIDAR_DATA_PACIENTE));
                dispatch(handleSetStep(1004));
            });
    };
};

const saveRazonSocial = (rut) => {
    return (dispatch, getState) => {
        if (rut) {
            obtenerDataRazon(rut, getState().microsoftReducer.token)
                .then((result) => {
                    if (result.status === 200) {
                        dispatch(updateForm("razonSocial", result.data.content.response[0]));
                    } else {
                        dispatch(updateForm("errorStep", 3));
                        dispatch(updateForm("mensajeErrorApi", window.REACT_APP_RAZON_SOCIAL_RUT));
                        dispatch(handleSetStep(1004));
                    }
                })
                .catch(() => {
                    dispatch(updateForm("errorStep", 3));
                    dispatch(updateForm("mensajeErrorApi", window.REACT_APP_RAZON_SOCIAL_RUT));
                    dispatch(handleSetStep(1004));
                });
        }
    };
};

export const saveAnswer = (answerType, answerValue, step) => {
    return (dispatch) => {
        dispatch(updateForm(answerType, answerValue));
        dispatch(handleSetStep(step));
    };
};

// Envia la Isapres Seleccionada
export function sendIsapres(id) {
    return (dispatch) => {
        dispatch(sendCallIsapres(id));
        // dispatch(handleSetStep(6));
    };
}

const sendCallIsapres = (id) => ({
    type: SEND_ISAPRES,
    payload: id
});

// Envia Datos de Testigos
export function sendCargo(name, cargo) {
    return (dispatch) => {
        dispatch(sendCallTestigo(name, cargo));
    };
}

const sendCallTestigo = (name, cargo) => ({
    type: SEND_TESTIGO,
    payload: {
        nombre: name,
        cargo
    }
});

// Envia Datos de Testigos
export function sendResponsable(name, cargo) {
    return (dispatch) => {
        dispatch(sendCallResponsable(name, cargo));
    };
}

const sendCallResponsable = (name, cargo) => ({
    type: SEND_RESPONSABLE,
    payload: {
        nombre: name,
        cargo
    }
});

// Envia Datos de Centro ACHS
export function sendCentroAchs(nombre, codigo, uoMedica, uoTratamiento) {
    return (dispatch) => {
        dispatch(sendCallCentroAchs(nombre, codigo, uoMedica, uoTratamiento));
    };
}

const sendCallCentroAchs = (nombre, codigo, uoMedica, uoTratamiento) => ({
    type: SEND_CENTROACHS,
    payload: {
        nombre,
        codigo,
        uoMedica,
        uoTratamiento
    }
});

export const validarData = async(data) => {
    return Axios.get(
        window.REACT_APP_VALIDAR_DATA_EMPRESA +
        "validate?rutPaciente=" +
        data.rutPaciente +
        "&rutEmpresa=" +
        data.rutEmpresa +
        "&BpSucursal=" +
        data.BpSucursal,
        {
            headers: {
                'x-access-token': getToken()
            }
        }
    );
};

export const validarAfiliacion = (data) => (dispatch) => {
    validarData(data)
        .then((response) => {
            if (response.status === 200) {
                if (Object.entries(response.data.content).length === 0) {
                    // respuesta vacia
                    dispatch(handleSetStep(500));
                } else {
                    if (response.data.content.response.length === 0) {
                        dispatch(handleSetStep(500));
                    } else {
                        const {
                            Empresa,
                            Sucursal,
                            CotizacionesPaciente
                        } = response.data.content.response;
                        if (Empresa !== "Afiliada")
                            dispatch(handleSetStep(5.11));
                         else if (Sucursal !== "Vigente")
                            dispatch(handleSetStep(5.13));
                         else if (!CotizacionesPaciente)
                            dispatch(handleSetStep(5.12));
                         else
                            dispatch(handleSetStep(5.7)); // ("x", 5.1));
                    }
                }
            } else {
                dispatch(updateForm("errorStep", 0));
                dispatch(updateForm("mensajeErrorApi", window.REACT_APP_VALIDAR_DATA_EMPRESA));
                dispatch(handleSetStep(1004));
            }
        })
        .catch((error) => {
            dispatch({
                type: DATE_EMPRESA_FAILURE,
                payload: error
            });
            dispatch(updateForm("errorStep", 0));
            dispatch(updateForm("mensajeErrorApi", window.REACT_APP_VALIDAR_DATA_EMPRESA));
            dispatch(handleSetStep(1004));
        });
};

export const sendingCaso = async(objeto, token) => {
    return await Axios.post(window.REACT_APP_INTEGRACION_SAP, objeto, {
        headers: {
            "x-access-token": token
        }
    })
}

export const crearAdmisionSiniestroSAP = () => async(dispatch, getState) => {
    const { addmissionForm } = getState();
    const { LogForm: { ID } } = getState();
    const { microsoftReducer: { userMsal } } = getState();

    let JsonSap = addmissionForm
    delete JsonSap.siniestros;
    delete JsonSap.cita;
    // delete JsonSap.step;
    delete JsonSap.percentaje;
    if (JsonSap.razonAlertaForm && JsonSap.razonAlertaForm.id === 0)
        delete JsonSap.razonAlertaForm;

    const objeto = {
        id_tipo: 1,
        id_estado: 2,
        rut_paciente: addmissionForm.rut, // "8960683-7",
        mail_admisionista: userMsal.email,
        admision_json: JsonSap,
        telefono_paciente: addmissionForm.telefonoParticular,
        email_paciente: addmissionForm.emailusuario
    };

    // console.log("*********************************************")
    // console.log(JSON.stringify(objeto))
    // console.log("*********************************************")

    try {
        const result = await sendingCaso(objeto, getState().microsoftReducer.token);
        const data = result.data

        if (result.status === 200) {
            if (Object.keys(result).length > 0) {
                let duplicate = false;
                const { siniestroID, EpisodioID, IdEstadoAdmision, IdEstadoSiniestro } = data.content[0]

                if (IdEstadoAdmision !== 3) { // error en episodio
                    dispatch(updateForm("mensajeErrorSAP", "Error al crear episodio"));
                    dispatch(handleSetStep(1002.1));
                } else if (IdEstadoSiniestro !== 3 && IdEstadoSiniestro < 7) { // error en siniestro
                    dispatch(updateForm("mensajeErrorSAP", "Error al crear siniestro"));
                    dispatch(handleSetStep(1002.2));
                } else if (IdEstadoSiniestro === 7) { // error en documento
                    dispatch(updateForm("siniestroID", siniestroID));
                    dispatch(handleSetStep(1001.2));
                } else if (IdEstadoSiniestro === 8) { // error en status
                    dispatch(updateForm("siniestroID", siniestroID));
                    dispatch(handleSetStep(1001.3));
                } else {
                    if (siniestroID.match("[\\D]+") === null) {
                        dispatch(updateForm("siniestroID", siniestroID));

                        if (data?.content[0]?.FechaADmision) {
                            duplicate=true
                            dispatch(updateForm("duplicate", true));
                        }

                        dispatch(handleSetStep(1001));
                    } else {
                        dispatch(updateForm("mensajeErrorSAP", siniestroID));
                        dispatch(handleSetStep(1002));
                    }
                }

                EndLog(ID, siniestroID, EpisodioID, result.status, duplicate, dispatch)
            } else {
                dispatch(updateForm("mensajeErrorSAP", "Error de data"));
                dispatch(handleSetStep(1002));
                EndLog(ID, "", "", 500, false, dispatch)
            }
        } else {
            dispatch(updateForm("mensajeErrorSAP", data.content[0].mensaje));
            dispatch(handleSetStep(1002));
            EndLog(ID, "", "", 500, false, dispatch)
        }
    } catch (error) {
        dispatch(updateForm("mensajeErrorSAP", String(error.response.data.content[0].mensaje)));
        dispatch(handleSetStep(1002));
        EndLog(ID, "", "", 500, false, dispatch)
    }
};

const EndLog = (ID, siniestroID, EpisodioID, status, duplicate, dispatch) => {
    dispatch(handlEndLog({ Id: ID, fecha: FechaHora(), siniestroID: siniestroID ? siniestroID : 0, EpisodioID: EpisodioID ? EpisodioID : 0, responseSap: status, duplicate }))
}
