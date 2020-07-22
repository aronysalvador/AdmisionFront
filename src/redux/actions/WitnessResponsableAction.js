import {
    SEARCH_POSITION_INIT,
    SEARCH_POSITION_SUCCESS,
    SEARCH_POSITION_FAILURE
} from "../types/witnessResponsableType";
import Axios from "axios";

export const searchCargos = () =>async(dispatch) =>{
    dispatch(  {
    type: SEARCH_POSITION_INIT,
    payload: true
} );

Axios.get(
    `https://wa-desa-msorquestador.azurewebsites.net/api/sap/cargos`
  )
.then((response) => {
        dispatch( successCallCargos(response.data.content[0]) )
    }).catch((error) => {
        dispatch( errorCallCargos() )
    })
    }

const successCallCargos = (testigos) => ({
    type: SEARCH_POSITION_SUCCESS,
    payload: testigos
})

const errorCallCargos = () => ({
    type: SEARCH_POSITION_FAILURE
})