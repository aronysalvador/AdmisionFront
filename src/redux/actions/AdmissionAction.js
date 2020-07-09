import {SET_STEP, UPDATE_FORM, UPDATE_ALL} from '../types/addmissionFormType'
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

export const updateAll = (object) => {
    return {
        type: UPDATE_ALL,
        payload: {
            stateType : object.stateType,
            value : object.value,
            step : object.step,
            percentage : object.percentage,
            empresa : object.empresa,
            rutEmpresa : object.rutEmpresa,
            isAfiliado: object.isAfiliado
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
                let obv= {
                    stateType : "rut",
                    value : rut,
                    step : 3,
                    percentage : getPercentage(3),
                    empresa : result.data.content[0].RutEmpresa,
                    rutEmpresa : result.data.content[0].NombreEmpresa,
                    isAfiliado: "Si"
                }
                dispatch(updateAll(obv))
            }else{
                let obv= {
                    stateType : "",
                    value : "",
                    step : 500,
                    percentage : 0,
                    empresa : "",
                    rutEmpresa : "",
                    isAfiliado: "No"
                }
                dispatch(updateAll(obv))
            }
        })
    }
}