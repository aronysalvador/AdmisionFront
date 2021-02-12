import { MSAL_INIT, MSAL_SUCCESS, MSAL_FAILURE, SAVE_TOKEN } from '../types/microsoftType'
//import storage from '../../../config/storage'

/*
const user = JSON.parse(window.localStorage.getItem(storage.local.ldap.user))
const auth = JSON.parse(window.localStorage.getItem(storage.local.ldap.auth))
*/

const user = ""
const auth = ""

const initialState =
  auth && user
    ? { loading: false, authenticatedMsal: auth, userMsal: user, error: null }
    : { loading: false, authenticatedMsal: false, userMsal: {}, error: null }

export default function microsoft(state = initialState, action) {
  switch (action.type) {
    case MSAL_INIT:
      return { ...state, loading: true }

    case MSAL_SUCCESS:
      return {
        ...state,
        authenticatedMsal: true,
        userMsal: action.payload,
        loading: false,
      }

    case SAVE_TOKEN:
      return {
        ...state,
        token: action.payload
      }

    case MSAL_FAILURE:
      return { ...state, error: action.payload, loading: false }

    default:
      return state
  }
}
