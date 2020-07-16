import {
    SEARCH_ISAPRES,
    SEARCH_ISAPRES_SUCCESS,
    SEARCH_ISAPRES_ERROR,
} from '../types/addmissionFormType'
import {PrevisionForm} from '../models/PrevisionForm'

export default function payload(state = PrevisionForm, action) {

    switch (action.type) {
      
        case SEARCH_ISAPRES:
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
        case SEARCH_ISAPRES_ERROR:
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