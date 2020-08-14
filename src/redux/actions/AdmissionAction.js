import {
    SET_STEP,
    UPDATE_FORM,
    SEND_ISAPRES,
    SEND_TESTIGO,
    SEND_RESPONSABLE,
    LOAD_STATE_SESSIONSTORAGE,
    SEND_CENTROACHS,
} from "../types/addmissionFormType";
import Axios from "axios";
import { formateaRut } from "../../helpers/rut";
import { getAffiliateValidations } from "../../util/fakeApi";

const totalSteps = 27;

export const loadStateFromSessionStorage = (state) => {
    return {
        type: LOAD_STATE_SESSIONSTORAGE,
        payload: state,
    };
};

export const setStep = (step, percentage) => {
    return {
        type: SET_STEP,
        payload: {
            step,
            percentage,
        },
    };
};

export const updateForm = (stateType, value) => {
    return {
        type: UPDATE_FORM,
        payload: {
            stateType,
            value,
        },
    };
};

export const handleSetStep = (step) => {
    return (dispatch) => {
        dispatch(setStep(step, getPercentage(step)));
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

export const obtenerData = async(rut) => {
    return Axios.get(process.env.REACT_APP_AFILIADO + `?rut=${rut}`);
};

export const saveRut = (rut) => {
    return (dispatch) => {
        obtenerData(rut)
            .then((result) => {

                console.log("REUSLT", result);
                let isAfiliado = result.data.content.response.IsAfiliado;
                if (isAfiliado) {
                    console.log("RESULTADO OBTENER DATA", result);

                    dispatch(updateForm("citas", result.data.content.response.citas));
                    dispatch(updateForm("siniestros", result.data.content.response.siniestros));
                    dispatch(updateForm("razonSocialForm", result.data.content.response.NombreEmpresa));
                    dispatch(updateForm("rutEmpresa", result.data.content.response.RutPagador));
                    dispatch(updateForm("isAfiliado", "Si"));
<<<<<<< HEAD
                    dispatch(updateForm("SucursalEmpresa", result.data.content.response.SucursalEmpresa));
                    dispatch(updateForm("DireccionEmpresa", result.data.content.response.DireccionEmpresa));
                    dispatch(updateForm("comunaEmpresa", result.data.content.response.comunaEmpresa));
                    dispatch(updateForm("direccionParticular", result.data.content.response.direccionParticular));
                    dispatch(updateForm("telefonoParticular", result.data.content.response.telefonoParticular === "0" ?
                        "" : result.data.content.response.telefonoParticular));

                    // let arraySiniestros = [ {
                    //     id: 17454785,
                    //     descripcion: 'Trayecto',
                    //     fecha: '13 Jun 2020',
                    //     CUN: 'CUN',
                    //     codigoUnicoNacionalExterno: 'CUNE',
                    //     cesa: 'CeSa',
                    //     interLComercial: 'InterLComercial',
                    //     tipoLey: 'Tipo Ley',
                    //     reposoActivo: true,
                    //     hora: '13:24'
                    //   },
                    //   {
                    //     id: 24457874,
                    //     descripcion: 'Trabajo',
                    //     fecha: '13 Jun 2020',
                    //     CUN: 'CUN',
                    //     codigoUnicoNacionalExterno: 'CUNE',
                    //     cesa: 'CeSa',
                    //     interLComercial: 'InterLComercial',
                    //     tipoLey: 'Tipo Ley',
                    //     reposoActivo: true,
                    //     hora: '18:23'
                    //   },
                    //   {
                    //     id: 17454785,
                    //     descripcion: 'Trayecto',
                    //     fecha: '13 Jun 2020',
                    //     CUN: 'CUN',
                    //     codigoUnicoNacionalExterno: 'CUNE',
                    //     cesa: 'CeSa',
                    //     interLComercial: 'InterLComercial',
                    //     tipoLey: 'Tipo Ley',
                    //     reposoActivo: true,
                    //     hora: '13:24'
                    //   },
                    //   {
                    //     id: 17454785,
                    //     descripcion: 'Trayecto',
                    //     fecha: '13 Jun 2020',
                    //     CUN: 'CUN',
                    //     codigoUnicoNacionalExterno: 'CUNE',
                    //     cesa: 'CeSa',
                    //     interLComercial: 'InterLComercial',
                    //     tipoLey: 'Tipo Ley',
                    //     reposoActivo: true,
                    //     hora: '13:24'
                    //   },];
                    //     dispatch(updateForm("siniestros", arraySiniestros));
                    //     dispatch(handleSetStep(5.83));
                    if (!result.data.content.response.BpCreado && false) {
                        dispatch(handleSetStep(5.81));
                    } else if (result.data.content.response.citas.length > 0 && false) {
                        dispatch(handleSetStep(5.82));
                    } else if (result.data.content.response.siniestros.length > 0 && false) {
                        dispatch(handleSetStep(5.83));
                    } else {
                        //pasó todas las validaciones
                        var STEP = "";
                        if (!result.data.content.response.NombreEmpresa ||
                            !result.data.content.response.SucursalEmpresa ||
                            !result.data.content.response.DireccionEmpresa ||
                            !result.data.content.response.RutPagador
                        ) {
                            // si falta info de la empresa
                            STEP = 5.4; //form empresa
                        } else if (!result.data.content.response.direccionParticular) {
                            // si no tiene direccion
                            STEP = 5.2; //form direccion
                        } else if (!result.data.content.response.telefonoParticular ||
                            result.data.content.response.telefonoParticular === "0"
                        ) {
                            // si no tiene telefono
                            STEP = 5.3; //form telefono
                        } else {
                            // si todos los datos relevantes están llenos
                            STEP = 5.1; // resumen data
                        }
                        dispatch(handleSetStep(STEP));
                    }
                } else {
=======
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

            updateForm("comunaEmpresa", result.data.content.response.comunaEmpresa)

                    );
                    dispatch(
                        updateForm(
                            "direccionParticular",

              result.data.content.response.direccionParticular

                        )
                    );

                    dispatch(
                        updateForm(
                            "telefonoParticular",

              result.data.content.response.telefonoParticular === "0"
                ? ""
                : result.data.content.response.telefonoParticular

                        )
                    );

          if (!result.data.content.response.BpCreado) { 
            dispatch(handleSetStep(5.81));
          } else if (result.data.content.response.citas.length > 0) {
            dispatch(handleSetStep(5.82));
          } else if (result.data.content.response.siniestros.length > 0) {
            dispatch(handleSetStep(5.83));
          } else {
            var STEP = "";
            if (
              !result.data.content.response.NombreEmpresa ||
              !result.data.content.response.SucursalEmpresa ||
              !result.data.content.response.DireccionEmpresa ||
              !result.data.content.response.RutPagador
            ) {
              // si falta info de la empresa
              STEP = 5.4; //form empresa
            } else if (!result.data.content.response.direccionParticular) {
              // si no tiene direccion
              STEP = 5.2; //form direccion
            } else if (
              !result.data.content.response.telefonoParticular ||
              result.data.content.response.telefonoParticular === "0"
            ) {
              // si no tiene telefono
              STEP = 5.3; //form telefono
            } else {
              // si todos los datos relevantes están llenos
              STEP = 5.1; // resumen data
            }
            dispatch(handleSetStep(STEP));
          }
        } else {
>>>>>>> a19379cc37dc2f38c6c855599319bd8dce60c6a7

                    dispatch(setStep(500, 0));
                    dispatch(updateForm("rut", ""));
                    dispatch(updateForm("razonSocialForm", ""));
                    dispatch(updateForm("rutEmpresa", ""));
                    dispatch(updateForm("isAfiliado", "No"));
                    dispatch(updateForm("SucursalEmpresa", ""));
                    dispatch(updateForm("DireccionEmpresa", ""));
                    dispatch(updateForm("comunaEmpresa", ""));
                    dispatch(updateForm("direccionParticular", ""));
                    dispatch(updateForm("telefonoParticular", ""));
                }
            })
            .catch((error) => {
                console.log("error: " + String(error));
            });
    };
};

export const saveAnswer = (answerType, answerValue, step) => {


    return (dispatch) => {
        dispatch(updateForm(answerType, answerValue));
        dispatch(handleSetStep(step));
    };
};

//Envia la Isapres Seleccionada
export function sendIsapres(id) {
    return (dispatch) => {
        dispatch(sendCallIsapres(id));
        dispatch(handleSetStep(6));
    };
}

const sendCallIsapres = (id) => ({
    type: SEND_ISAPRES,
    payload: id,
});

//Envia Datos de Testigos
export function sendCargo(name, cargo) {
    return (dispatch) => {
        dispatch(sendCallTestigo(name, cargo));
    };
}

const sendCallTestigo = (name, cargo) => ({
    type: SEND_TESTIGO,
    payload: {
        nombre: name,
        cargo: cargo,
    },
});

//Envia Datos de Testigos
export function sendResponsable(name, cargo) {
    return (dispatch) => {
        dispatch(sendCallResponsable(name, cargo));
    };
}

const sendCallResponsable = (name, cargo) => ({
    type: SEND_RESPONSABLE,
    payload: {
        nombre: name,
        cargo: cargo,
    },
});

//Envia Datos de Centro ACHS
export function sendCentroAchs(nombre, codigo, uoMedica, uoTratamiento) {
    return (dispatch) => {
        dispatch(sendCallCentroAchs(nombre, codigo, uoMedica, uoTratamiento));
    };
}

const sendCallCentroAchs = (nombre, codigo, uoMedica, uoTratamiento) => ({
    type: SEND_CENTROACHS,
    payload: {
        nombre: nombre,
        codigo: codigo,
        uoMedica: uoMedica,
        uoTratamiento: uoTratamiento,
    },
});