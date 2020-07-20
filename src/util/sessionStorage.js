const getSessionStorageState = (key = "persist:addmissionForm") => {
  const state = JSON.parse(sessionStorage.getItem(key));
  return state;
};
