import {
    SEARCH_POSITION_INIT,
    SEARCH_POSITION_SUCCESS,
    SEARCH_POSITION_FAILURE
} from "../types/witnessResponsableType";
import {CargosForm} from '../models/WitnessResponsableForm';

export default function payload(state = CargosForm, action) {

    switch (action.type) {
      
        case SEARCH_POSITION_INIT:
            return{
                ...state,
                loading: action.payload
            } 
        case SEARCH_POSITION_SUCCESS:
            return{
                ...state,
                loading: false,
                error: null,
                cargos : action.payload
            } 
        case SEARCH_POSITION_FAILURE:
            return{
                ...state,
                loading: false,
                error: true,
                cargos : action.payload
            } 
        
        default:
            return state;
    }
}