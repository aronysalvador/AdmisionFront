import {
    GET_CRITERIOS_INIT,
    GET_CRITERIOS_SUCCESS,
    GET_CRITERIOS_FAILURE
} from "../types/criteriosType";

const INITIAL_STATE = {
    data: [],
    loading: false,
    error: null
};

export default function criteriosForm(state = INITIAL_STATE, action) {
    switch (action.type) {
        case GET_CRITERIOS_INIT:
            return {...state, loading: true };

        case GET_CRITERIOS_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false
            };

        case GET_CRITERIOS_FAILURE:
            return {...state, error: action.payload, loading: false };

        default:
            return {...state };
    }
}