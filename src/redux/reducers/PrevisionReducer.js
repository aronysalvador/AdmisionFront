import {
    SEARCH_ISAPRES_INIT,
    SEARCH_ISAPRES_SUCCESS,
    SEARCH_ISAPRES_FAILURE,
} from '../types/addmissionFormType'
import {PrevisionForm} from '../models/PrevisionForm'

export default function payload(state = PrevisionForm, action) {

    switch (action.type) {
      
        case SEARCH_ISAPRES_INIT:
            return{
                ...state,
                loading: action.payload
            } 
        case SEARCH_ISAPRES_SUCCESS:
            return{
                ...state,
                loading: false,
                error: null,
                isapres : action.payload
            } 
        case SEARCH_ISAPRES_FAILURE:
            return{
                ...state,
                loading: false,
                error: true,
                isapres : action.payload
            } 
        
        default:
            return state;
    }
}