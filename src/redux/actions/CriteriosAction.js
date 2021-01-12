import {
    GET_CRITERIOS_INIT,
    GET_CRITERIOS_SUCCESS,
    GET_CRITERIOS_FAILURE,
} from "../types/criteriosType";
import Axios from "axios";
// import { CriteriosGravedad } from "../../util/fakeApi";

import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";

export const getData = async() => {
    return Axios.get(window.REACT_APP_CRITERIOS);
    // return CriteriosGravedad();
};

export const getCriteriosGravedad = () => async(dispatch) => {
    dispatch({
        type: GET_CRITERIOS_INIT,
        payload: true,
    });

    getData()
        .then((response) => {
            if (response.data.status === 200 || response.data.status === 304) {
                dispatch(successCallCRITERIOS(response.data.content[0]));
                console.log(response.data.content[0]);
            } else {
                dispatch(updateForm("errorStep", 0));
                dispatch(updateForm("mensajeErrorApi", window.REACT_APP_CRITERIOS));
                dispatch(handleSetStep(1004));
            }
        })
        .catch((error) => {
            dispatch(errorCallCRITERIOS());
            dispatch(updateForm("errorStep", 0));
            dispatch(updateForm("mensajeErrorApi", window.REACT_APP_CRITERIOS));
            dispatch(handleSetStep(1004));
        });

    const successCallCRITERIOS = (criterios) => ({
        type: GET_CRITERIOS_SUCCESS,
        payload: criterios,
    });

    const errorCallCRITERIOS = () => ({
        type: GET_CRITERIOS_FAILURE,
    });
};