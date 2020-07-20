import {
    SEARCH_ISAPRES_INIT,
    SEARCH_ISAPRES_SUCCESS,
    SEARCH_ISAPRES_FAILURE,
} from '../types/addmissionFormType'
import {getIsapres} from '../../util/fakeApi'


export const searchIsapres = () =>async(dispatch) =>{
    dispatch(  {
    type: SEARCH_ISAPRES_INIT,
    payload: true
} );
   
getIsapres().then((response) => {
        dispatch( successCallIsapres(response) )
    }).catch((error) => {
        dispatch( errorCallIsapres() )
    })
    }

const successCallIsapres = (isapres) => ({
    type: SEARCH_ISAPRES_SUCCESS,
    payload: isapres
})

const errorCallIsapres = () => ({
    type: SEARCH_ISAPRES_FAILURE
})