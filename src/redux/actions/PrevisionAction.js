import {
    SEARCH_ISAPRES,
    SEARCH_ISAPRES_SUCCESS,
    SEARCH_ISAPRES_ERROR,
} from '../types/addmissionFormType'
import Axios from 'axios';

//Consultar Isapres de API
export function searchIsapres (isapres) {
    return async (dispatch) => {
        dispatch(  searchIsapresAll() );

        try {
            const response = await Axios.get('http://localhost:4000/isapres');
            dispatch( successCallIsapres(response.data) )
        } catch (error) {
            console.log(error);
            dispatch( errorCallIsapres() )
           
        }
    }
}

const searchIsapresAll = () => ({
    type: SEARCH_ISAPRES,
    payload: true
}) 

const successCallIsapres = (isapres) => ({
    type: SEARCH_ISAPRES_SUCCESS,
    payload: isapres
})

const errorCallIsapres = () => ({
    type: SEARCH_ISAPRES_ERROR
})