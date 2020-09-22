import {
  SET_STEP,
  UPDATE_FORM,
  SEND_ISAPRES,
  SEND_TESTIGO,
  SEND_RESPONSABLE,
  LOAD_STATE_SESSIONSTORAGE,
  SEND_CENTROACHS,
  DATE_EMPRESA_FAILURE,
} from "../types/addmissionFormType";
import Axios from "axios";
import { formateaRut } from "../../helpers/rut";

import { handleLog, handlEndLog } from "./Log";
import { FechaHora } from './../../helpers/utils'

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

export const obtenerData = async (rut) => {
  return Axios.get(process.env.REACT_APP_VALIDAR_DATA_PACIENTE + `?rut=${rut}`);
};

export const obtenerDataRazon = async (rutEmpresa) => {
  return Axios.get(process.env.REACT_APP_RAZON_SOCIAL_RUT + rutEmpresa);
};

export const saveRut = (rut) => {
  return (dispatch, getState) => {
    obtenerData(rut)
      .then((result) => {
        // console.log("REUSLT", result);
        let BpCreado = result.data.content.response.BpCreado;
        if (BpCreado) {
          //Guardar datos adicionales paciente requeridos por SAP
          const {
            apellidoMaterno,
            apellidoPaterno,
            nombre,
            fechaNacimiento,
            masculino,
            femenino,
            nacionalidad,
            lugarNacimiento,
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
              lugarNacimiento,
              estadoCivil,
            })
          );

          // determinar siguiente paso
          var STEP = "";
          if (Object.keys(result.data.content.response.cita).length !== 0) {
            STEP = 5.82;
          } else if (result.data.content.response.siniestros.length > 0) {
            const mensajeAlerta = "Este paciente ya tiene un siniestro";
            const mensajeBoton = "Ver su(s) siniestro(s)";
            const origen = "getRut";
            dispatch(
              updateForm("siniestroOpciones", {
                mensajeAlerta,
                mensajeBoton,
                origen,
              })
            );
            STEP = 5.83;
          } else {
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
          }

          dispatch(handleSetStep(STEP));

          dispatch(saveRazonSocial(result.data.content.response.RutPagador));

          dispatch(updateForm("cita", result.data.content.response.cita));
          dispatch(
            updateForm("siniestros", result.data.content.response.siniestros)
          );
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
          dispatch(
            updateForm(
              "direccionParticular",

              result.data.content.response.direccionParticular
            )
          );
          dispatch(
            updateForm(
              "comunaDireccionParticular",
              result.data.content.response.direccionParticular.split(",")[1]
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
          dispatch(
            updateForm(
              "BP",

              result.data.content.response.BP 
                ? result.data.content.response.BP
                : ""
            )
          );
          const { microsoftReducer: { userMsal } } = getState();
          const { email } = userMsal;
          const { addmissionForm: {centrosForm, tipoSiniestro, BP} } = getState();

           dispatch(handleLog({email, fecha: FechaHora(), centro: centrosForm, tipoSiniestro: tipoSiniestro, Rut: rut, BP: BP })) 

        } else {
          // NO TIENE BP
          //dispatch(setStep(500, 0));
          
          const { microsoftReducer: { userMsal } } = getState();
          const { email } = userMsal;
          const { addmissionForm: {centrosForm, tipoSiniestro } } = getState();
          dispatch(handleLog({email, fecha: FechaHora(), centro: centrosForm, tipoSiniestro: tipoSiniestro, Rut: rut, BP: "" })) 

          dispatch(setStep(5.81, 0));
          dispatch(updateForm("rut", ""));
          dispatch(updateForm("razonSocial", ""));
          dispatch(updateForm("rutEmpresa", ""));
          dispatch(updateForm("isAfiliado", "No"));
          dispatch(updateForm("SucursalEmpresa", ""));
          dispatch(updateForm("DireccionEmpresa", ""));
          dispatch(updateForm("comunaEmpresa", ""));
          dispatch(updateForm("direccionParticular", ""));
          dispatch(updateForm("telefonoParticular", ""));
          dispatch(updateForm("BP", ""));

        }
      })
      .catch((error) => {
        console.log("error: " + String(error));
      });
  };
};

const saveRazonSocial = (rut) => {
  return (dispatch) => {
    if (rut) {
      obtenerDataRazon(rut)
        .then((result) => {
          dispatch(updateForm("razonSocial", result.data.content.response[0]));
        })
        .catch((error) => {
          console.log("error: " + String(error));
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

export const validarData = async (data) => {
  return Axios.get(
    process.env.REACT_APP_VALIDAR_DATA_EMPRESA +
      "validate?rutPaciente=" +
      data.rutPaciente +
      "&rutEmpresa=" +
      data.rutEmpresa +
      "&BpSucursal=" +
      data.BpSucursal
  );
};

export const validarAfiliacion = (data) => (dispatch) => {
  validarData(data)
    .then((response) => {
      // dispatch({
      //   type: DATE_EMPRESA_SUCCESS,
      //   payload: response
      // });
      // console.log( response.data.content.response )

      console.log(response.data.content);
      if (Object.entries(response.data.content).length === 0) {
        //respuesta vacia
        dispatch(handleSetStep(500));
      } else {
        console.log(response.data.content.response.length);
        if (response.data.content.response.length === 0) {
          dispatch(handleSetStep(500));
        } else {
          const {
            Empresa,
            Sucursal,
            CotizacionesPaciente,
          } = response.data.content.response;
          if (Empresa !== "Afiliada") {
            dispatch(handleSetStep(5.11));
          } else if (Sucursal !== "Vigente") {
            dispatch(handleSetStep(5.13));
          } else if (!CotizacionesPaciente) {
            dispatch(handleSetStep(5.12));
          } else {
            dispatch(handleSetStep(5.7));
          }
        }
      }
    })
    .catch((error) => {
      dispatch({
        type: DATE_EMPRESA_FAILURE,
        payload: error,
      });
    });
};

export const crearAdmisionSiniestroSAP = () => (dispatch, getState) => {
  try {
    const { addmissionForm } = getState();
    const { LogForm: {ID} } = getState();

    const objeto = {
      id_tipo: 1,
      id_estado: 2,
      rut_paciente: addmissionForm.rut, //"8960683-7",
      mail_admisionista: addmissionForm.emailusuario,
      admision_json: addmissionForm,
    };

    //console.log("*********************************************")
    //console.log(JSON.stringify(objeto))
    //console.log("*********************************************")

    Axios.post(process.env.REACT_APP_INTEGRACION_SAP, objeto)
      .then(({ data }) => {
        if (data.status === 200) {
          const siniestroID = data.content[0].siniestroID;
          dispatch(updateForm("siniestroID", siniestroID));
          dispatch(handleSetStep(1001));
        }
        if (data.status === 500) {
          const mensajeErrorSAP = data.mensaje;
          dispatch(updateForm("mensajeErrorSAP", mensajeErrorSAP));
          dispatch(handleSetStep(1002));
        }

        const {siniestroID,EpisodioID} = data.content[0]        
        dispatch(handlEndLog({Id: ID, fecha: FechaHora(), siniestroID: siniestroID ? siniestroID : 0, EpisodioID: EpisodioID ? EpisodioID : 0})) 

      })
      .catch((err) =>{ dispatch(handleSetStep(1002)); dispatch(handlEndLog({Id: ID, fecha: FechaHora(), siniestroID: 0, EpisodioID: 0}));  } );
  } catch (error) {
    const { LogForm: {ID} } = getState();
    dispatch(handlEndLog({Id: ID, fecha: FechaHora(), siniestroID: 0, EpisodioID: 0})); 
    dispatch(handleSetStep(1002));
  }
};
