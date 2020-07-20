import {
    SEARCH_POSITION_INIT,
    SEARCH_POSITION_SUCCESS,
    SEARCH_POSITION_FAILURE
} from "../types/witnessResponsableType";
import {getCargos} from '../../util/fakeApi';

export const searchCargos = () =>async(dispatch) =>{
    dispatch(  {
    type: SEARCH_POSITION_INIT,
    payload: true
} );
   
getCargos().then((response) => {
        dispatch( successCallCargos(response) )
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