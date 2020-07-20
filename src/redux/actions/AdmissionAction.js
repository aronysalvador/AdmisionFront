import {
  SET_STEP,
  UPDATE_FORM,
  SEND_ISAPRES,
  LOAD_STATE_SESSIONSTORAGE,
} from "../types/addmissionFormType";
import Axios from "axios";
import { formateaRut } from "../../helpers/rut";

const totalSteps = 8;

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
  return (step * 100) / totalSteps;
};

export const formatRut = (rut) => {
  return (dispatch) => {
    dispatch(setStep(2, getPercentage(2)));
    dispatch(updateForm("rut", formateaRut(rut)));
  };
};

export const saveRut = (rut) => {
  //  export const saveRut=(rut)=>async(dispatch,getState)=>{
  //const {} = getState()
  //}
  return (dispatch) => {
    Axios.get(
      `http://ci-desa-msorquestador.eastus.azurecontainer.io/api/employee/isAfiliado?rut=${rut}`
    )
      .then((result) => {
        let isAfiliado = result.data.content[0].isAfiliado;
        if (isAfiliado) {
          dispatch(handleSetStep(6));
          dispatch(updateForm("empresa", result.data.content[0].RutEmpresa));
          dispatch(
            updateForm("rutEmpresa", result.data.content[0].NombreEmpresa)
          );
          dispatch(updateForm("isAfiliado", "Si"));
        } else {
          dispatch(setStep(500, 0));
          dispatch(updateForm("rut", ""));
          dispatch(updateForm("empresa", ""));
          dispatch(updateForm("rutEmpresa", ""));
          dispatch(updateForm("isAfiliado", ""));
        }
      })
      .catch((error) => {
        console.log("error");
      });
  };
};

//Envia la Isapres Seleccionada
export function sendIsapres(id) {
  return (dispatch) => {
    dispatch(sendCallIsapres(id));
  };
}

const sendCallIsapres = (id) => ({
  type: SEND_ISAPRES,
  payload: id,
});
