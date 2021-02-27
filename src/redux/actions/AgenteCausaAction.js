import {
    GET_TRAYECTO_AGENTECAUSAENFERMEDAD_INIT,
    GET_TRAYECTO_AGENTECAUSAENFERMEDAD_SUCCESS,
    GET_TRAYECTO_AGENTECAUSAENFERMEDAD_FAILURE
} from "../types/trayectoType";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
// import { agenteCausa } from "../../util/fakeApi";
import { createHttpGetClient } from '../common';

export const getData = createHttpGetClient(window.REACT_APP_AGENTE_CAUSA_ENFERMEDAD);

export const getAgenteCausa = () => async(dispatch) => {
    dispatch({
        type: GET_TRAYECTO_AGENTECAUSAENFERMEDAD_INIT,
        payload: true
    });

    getData()
        .then((response) => {
            if (response.status === 200){
                dispatch(successCallAgenteCausa(response.data.content[0]));
            } else {
              dispatch(updateForm("errorStep", 0));
              dispatch(updateForm("mensajeErrorApi", window.REACT_APP_AGENTE_CAUSA_ENFERMEDAD));
              dispatch(handleSetStep(1004));
            }
        })
        .catch(() => {
            dispatch(errorCallAgenteCausa());
            dispatch(updateForm("errorStep", 0));
            dispatch(updateForm("mensajeErrorApi", window.REACT_APP_AGENTE_CAUSA_ENFERMEDAD));
            dispatch(handleSetStep(1004));
        });

    const successCallAgenteCausa = (partes) => ({
        type: GET_TRAYECTO_AGENTECAUSAENFERMEDAD_SUCCESS,
        payload: partes // CAMBIAR DE PARTES_CUERPO A AGENTE_CAUSA
    });

    const errorCallAgenteCausa = () => ({
        type: GET_TRAYECTO_AGENTECAUSAENFERMEDAD_FAILURE
    });
};
