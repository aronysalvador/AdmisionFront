import { combineReducers } from 'redux'
import addmissionForm from '../reducers/AdmissionFormReducers'
import previsionForm from '../reducers/PrevisionReducer'

export default combineReducers({ addmissionForm, previsionForm });