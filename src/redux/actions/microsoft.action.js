import { MSAL_INIT, MSAL_SUCCESS, MSAL_FAILURE } from '../types/microsoftType.js'
import msalservice from '../../services/msalservice'
import graphservice from '../../services/graphservice'
import { handleSetStep } from '../../redux/actions/AdmissionAction'

export async function getUserProfile(scopes) {
  const accessToken = await msalservice.acquireTokenSilent({ scopes })
  if (accessToken) {
    const user = await graphservice(accessToken)
    return user
  }
  return null
}

export const login = scopes => async dispatch => {
  
  dispatch({type: MSAL_INIT,})

  try {
    await msalservice.loginPopup({scopes,prompt: 'select_account',})
    const user = await getUserProfile(scopes)
    const userTempArray = user.displayName.split(',')
    
    let iniciales = ""
    console.log(userTempArray)
    if(Array.isArray(userTempArray) && userTempArray.length === 2){
      iniciales = String(userTempArray[1]).trim().charAt(0) + String(userTempArray[0]).trim().charAt(0)
    }
    const userMsal = {
      displayName: user.displayName,
      email: user.mail || user.userPrincipalName,
      iniciales: iniciales
    }
    dispatch({type: MSAL_SUCCESS,payload: userMsal,})
    dispatch(handleSetStep(1))
  } catch (err) {
    console.log("************************ login() => err ",err)
    let error = {}

    if (typeof err === 'string') {
      const errParts = err.split('|')
      error =
        errParts.length > 1
          ? { message: errParts[1], debug: errParts[0] }
          : { message: err }
    } else {
      error = {
        message: err.message,
        debug: JSON.stringify(err),
      }
    }
    dispatch({type: MSAL_FAILURE,payload: {error,},})
    dispatch(handleSetStep(5001))
  }
}

export const logout = () => async(dispatch) => {
  msalservice.logout()
  dispatch(handleSetStep(0))
}

export const getAccount = () => async (dispatch) => {
  const usermsal = msalservice.getAccount()
  console.log("********************** getAccount() => usermsal ",usermsal)
  const step = usermsal === null ? 0 : 1
  //dispatch(handleSetStep(step))
  dispatch(handleSetStep(3))
  return usermsal
}