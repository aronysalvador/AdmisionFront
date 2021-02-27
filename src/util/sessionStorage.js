import { AdmissionForm } from "../redux/models/AdmissionForm";

export const getSessionStorageState = (key = "persist:addmissionForm") => {
  const state = JSON.parse(sessionStorage.getItem(key));

  return state ? convertStringToObject(state) : AdmissionForm;
};

export const convertStringToObject = (state) => {
  let obj = {};
  Object.keys(state).forEach((x) => {
    obj[x] = JSON.parse(state[x]);
  });

  return Object.keys(obj).length === 0 ? AdmissionForm : obj;
};
