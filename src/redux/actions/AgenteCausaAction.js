import {
    GET_TRAYECTO_AGENTECAUSAENFERMEDAD_INIT,
    GET_TRAYECTO_AGENTECAUSAENFERMEDAD_SUCCESS,
    GET_TRAYECTO_AGENTECAUSAENFERMEDAD_FAILURE,
} from "../types/trayectoType";

import Axios from "axios";

export const getData = async() => {
    return Axios.get(window.REACT_APP_AGENTE_CAUSA_ENFERMEDAD);
};

export const getAgenteCausa = () => async(dispatch) => {
    dispatch({
        type: GET_TRAYECTO_AGENTECAUSAENFERMEDAD_INIT,
        payload: true,
    });

    getData()
        .then((response) => {
            dispatch(successCallAgenteCausa(response.data.content[0]));
        })
        .catch((error) => {
            dispatch(errorCallAgenteCausa());
        });

    const successCallAgenteCausa = (partes) => ({
        type: GET_TRAYECTO_AGENTECAUSAENFERMEDAD_SUCCESS,
        payload: partes, //CAMBIAR
    });

    const errorCallAgenteCausa = () => ({
        type: GET_TRAYECTO_AGENTECAUSAENFERMEDAD_FAILURE,
    });
};