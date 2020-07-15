import { combineReducers } from 'redux'
import addmissionForm from '../reducers/AdmissionFormReducers'
import microsoftReducer from '../reducers/microsoft.reducer'

export default combineReducers({ addmissionForm, microsoftReducer });