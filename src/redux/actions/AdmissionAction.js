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

export const updateForm = (stateType, value) => {
    return {
        type: UPDATE_FORM,
        payload: {
            stateType,
            value,
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
        dispatch(setStep(2,getPercentage(2)))
        dispatch(updateForm("rut",formateaRut(rut)))
    }
}

export const saveRut = (rut) => {
    return (dispatch) => {
        Axios.get(`http://ci-desa-msorquestador.eastus.azurecontainer.io/api/employee/isAfiliado?rut=${rut}`).then((result) => {
            let isAfiliado = result.data.content[0].isAfiliado
            if(isAfiliado){
                dispatch(setStep(3,getPercentage(3)))
                dispatch(updateForm("rut",formateaRut(rut)))
                dispatch(updateForm("empresa",result.data.content[0].RutEmpresa))
                dispatch(updateForm("rutEmpresa",result.data.content[0].NombreEmpresa))
                dispatch(updateForm("isAfiliado","Si"))
            }else{
                dispatch(setStep(500,0))
                dispatch(updateForm("rut","",))
                dispatch(updateForm("empresa",""))
                dispatch(updateForm("rutEmpresa",""))
                dispatch(updateForm("isAfiliado",""))
            }
        })
    }
}