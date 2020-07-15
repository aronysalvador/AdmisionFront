import { MSAL_INIT, MSAL_SUCCESS, MSAL_FAILURE } from '../types/microsoftType.js'
import msalservice from '../../services/msalservice'
import graphservice from '../../services/graphservice'

export async function getUserProfile(scopes) {
  const accessToken = await msalservice.acquireTokenSilent({ scopes })
  if (accessToken) {
    const user = await graphservice(accessToken)
    return user
  }
  return null
}

export const login = scopes => async dispatch => {
  dispatch({
    type: MSAL_INIT,
  })

  try {
    await msalservice.loginPopup({
      scopes,
      prompt: 'select_account',
    })

    const user = await getUserProfile(scopes)
    const userMsal = {
      displayName: user.displayName,
      email: user.mail || user.userPrincipalName,
    }
    dispatch({
      type: MSAL_SUCCESS,
      payload: userMsal,
    })

  } catch (err) {
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

    dispatch({
      type: MSAL_FAILURE,
      payload: {
        error,
      },
    })
  }
}

export const logout = () => () => {
  msalservice.logout()
}

export const isExistAccount = scopes => async dispatch => {
  dispatch({
    type: MSAL_INIT,
  })

  try {
    const user = await getUserProfile(scopes)
    if (user) {
      const userMsal = {
        displayName: user.displayName,
        email: user.mail || user.userPrincipalName,
      }
      dispatch({
        type: MSAL_SUCCESS,
        payload: userMsal,
      })

    }
  } catch (err) {
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

    dispatch({
      type: MSAL_FAILURE,
      payload: {
        error,
      },
    })
  }
}

export const getAccount = () => () => {
  const usermsal = msalservice.getAccount()
  return usermsal
}
