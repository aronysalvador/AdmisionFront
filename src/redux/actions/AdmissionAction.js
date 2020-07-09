import {SET_STEP, UPDATE_FORM} from '../types/addmissionFormType'
import Axios from 'axios';
import {formateaRut} from '../../helpers/rut'

const totalSteps = 4

export const setStep = (step,percentage) => {
    return {
        type: SET_STEP,
        payload: {
            step,
            percentage
        }
    }
}

export const updateForm = (stateType, value, step, percentage) => {
    return {
        type: UPDATE_FORM,
        payload: {
            stateType,
            value,
            step,
            percentage
        }
    }
}

export const handleSetStep = (step) =>{
    return (dispatch) => {
        dispatch(setStep(step,getPercentage(step)))
    }
}

const getPercentage = (step) =>{
    return step * 100 / totalSteps
}

export const formatRut = (rut) =>{
    return (dispatch) => {
        dispatch(updateForm("rut",formateaRut(rut),2,getPercentage(2)))
    }
}

export const saveRut = (rut) => {
    return (dispatch) => {
        Axios.get(`http://ci-desa-msorquestador.eastus.azurecontainer.io/api/employee/isAfiliado?rut=${rut}`).then((result) => {
            let isAfiliado = result.data.content[0].isAfiliado
            if(isAfiliado){
                dispatch(updateForm("rut",rut,3,getPercentage(3)))
            }else{
                dispatch(setStep(500,0))
            }
        })
    }
}