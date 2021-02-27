import {
    GET_TRAYECTO_INIT,
    GET_TRAYECTO_SUCCESS,
    GET_TRAYECTO_FAILURE,
    GET_TRAYECTO_MEDIOTRANSPORTE_INIT,
    GET_TRAYECTO_MEDIOTRANSPORTE_SUCCESS,
    GET_TRAYECTO_MEDIOTRANSPORTE_FAILURE,
    GET_TRAYECTO_PARTECUERPOAFECTADA_INIT,
    GET_TRAYECTO_PARTECUERPOAFECTADA_SUCCESS,
    GET_TRAYECTO_PARTECUERPOAFECTADA_FAILURE,
    GET_TRAYECTO_AGENTECAUSAENFERMEDAD_INIT,
    GET_TRAYECTO_AGENTECAUSAENFERMEDAD_SUCCESS,
    GET_TRAYECTO_AGENTECAUSAENFERMEDAD_FAILURE
} from "../types/trayectoType";

const INITIAL_STATE = {
    data: [],
    loading: false,
    error: null
};

export function tipoAccidenteTrayectoForm(state = INITIAL_STATE, action) {
    switch (action.type) {
        case GET_TRAYECTO_INIT:
            return {...state, loading: true };

        case GET_TRAYECTO_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false
            };

        case GET_TRAYECTO_FAILURE:
            return {...state, error: action.payload, loading: false };

        default:
            return {...state };
    }
}

export function mediosTransporteForm(state = INITIAL_STATE, action) {
    switch (action.type) {
        case GET_TRAYECTO_MEDIOTRANSPORTE_INIT:
            return {...state, loading: true };

        case GET_TRAYECTO_MEDIOTRANSPORTE_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false
            };

        case GET_TRAYECTO_MEDIOTRANSPORTE_FAILURE:
            return {...state, error: action.payload, loading: false };

        default:
            return {...state };
    }
}

export function parteCuerpoAfectadaForm(state = INITIAL_STATE, action) {
    switch (action.type) {
        case GET_TRAYECTO_PARTECUERPOAFECTADA_INIT:
            return {...state, loading: true };

        case GET_TRAYECTO_PARTECUERPOAFECTADA_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false
            };

        case GET_TRAYECTO_PARTECUERPOAFECTADA_FAILURE:
            return {...state, error: action.payload, loading: false };

        default:
            return {...state };
    }
}

export function agenteCausaEnfermedadForm(state = INITIAL_STATE, action) {
    switch (action.type) {
        case GET_TRAYECTO_AGENTECAUSAENFERMEDAD_INIT:
            return {...state, loading: true };

        case GET_TRAYECTO_AGENTECAUSAENFERMEDAD_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false
            };

        case GET_TRAYECTO_AGENTECAUSAENFERMEDAD_FAILURE:
            return {...state, error: action.payload, loading: false };

        default:
            return {...state };
    }
}