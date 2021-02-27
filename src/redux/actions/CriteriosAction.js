import {
    GET_CRITERIOS_INIT,
    GET_CRITERIOS_SUCCESS,
    GET_CRITERIOS_FAILURE
} from "../types/criteriosType";
// import { CriteriosGravedad } from "../../util/fakeApi";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import { createHttpGetClient } from '../common';

export const getData = createHttpGetClient(window.REACT_APP_CRITERIOS);

export const getCriteriosGravedad = () => async(dispatch) => {
    dispatch({
        type: GET_CRITERIOS_INIT,
        payload: true
    });

    getData()
        .then((response) => {
            if (response.status === 200) {
                dispatch(successCallCRITERIOS(response.data.content[0]));
                // console.log(response.data.content[0]);
            } else {
                dispatch(updateForm("errorStep", 0));
                dispatch(updateForm("mensajeErrorApi", window.REACT_APP_CRITERIOS));
                dispatch(handleSetStep(1004));
            }
        })
        .catch(() => {
            dispatch(errorCallCRITERIOS());
            dispatch(updateForm("errorStep", 0));
            dispatch(updateForm("mensajeErrorApi", window.REACT_APP_CRITERIOS));
            dispatch(handleSetStep(1004));
        });

    const successCallCRITERIOS = (criterios) => ({
        type: GET_CRITERIOS_SUCCESS,
        payload: criterios
    });

    const errorCallCRITERIOS = () => ({
        type: GET_CRITERIOS_FAILURE
    });
};
