import {SET_STEP,UPDATE_FORM,UPDATE_ALL} from '../types/addmissionFormType'
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
                step: action.payload.step,
                percentage : action.payload.percentage,
                [action.payload.stateType]: action.payload.value
            }
        case UPDATE_ALL:
            return {
                ...state,
                step: action.payload.step,
                percentage : action.payload.percentage,
                [action.payload.stateType]: action.payload.value,
                empresa : action.payload.empresa,
                rutEmpresa : action.payload.rutEmpresa,
                isAfiliado : action.payload.isAfiliado
            }          
        default:
            return state;
    }
}