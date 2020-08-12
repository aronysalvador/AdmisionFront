import {
    GET_CENTROS_INIT,
    GET_CENTROS_SUCCESS,
    GET_CENTROS_FAILURE,
} from "../types/centrosAchsType";

const INITIAL_STATE = {
    data: [],
    loading: false,
    error: null,
};

export default function centrosAchsForm(state = INITIAL_STATE, action) {
    switch (action.type) {
        case GET_CENTROS_INIT:
            return {...state, loading: true };

        case GET_CENTROS_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false,
            };

        case GET_CENTROS_FAILURE:
            return {...state, error: action.payload, loading: false };

        default:
            return {...state };
    }
}