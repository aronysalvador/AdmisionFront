import {SET_STEP,UPDATE_FORM} from '../types/addmissionFormType'
import {AdmissionForm} from '../models/AdmissionForm'

export default function payload(state = AdmissionForm, action) {

    switch (action.type) {
        case SET_STEP:
            return{
                ...state,
                step: action.payload.step,
                percentage : action.payload.percentage
            }
        case UPDATE_FORM:
            return{
                ...state,
                [action.payload.stateType]: action.payload.value
            }          
        default:
            return state;
    }
}