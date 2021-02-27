import {
    SEARCH_POSITION_INIT,
    SEARCH_POSITION_SUCCESS,
    SEARCH_POSITION_FAILURE
} from "../types/witnessResponsableType";
import Axios from "axios";

export const obtenerData = async() => {
    return await Axios.get(window.REACT_APP_CARGOS)
}

export const searchCargos = () => async(dispatch) => {
    dispatch({
    type: SEARCH_POSITION_INIT,
    payload: true
});

obtenerData()
.then((response) => {
        if (response.status === 200){
            dispatch(successCallCargos(response.data.content[0]))
        } else {
            dispatch(updateForm("errorStep", 3));
            dispatch(updateForm("mensajeErrorApi", window.REACT_APP_CARGOS));
            dispatch(handleSetStep(1004));
        }
    }).catch(() => {
        dispatch(errorCallCargos())
        dispatch(updateForm("errorStep", 3));
        dispatch(updateForm("mensajeErrorApi", window.REACT_APP_CARGOS));
        dispatch(handleSetStep(1004));
    })
    }

const successCallCargos = (testigos) => ({
    type: SEARCH_POSITION_SUCCESS,
    payload: testigos
})

const errorCallCargos = () => ({
    type: SEARCH_POSITION_FAILURE
})