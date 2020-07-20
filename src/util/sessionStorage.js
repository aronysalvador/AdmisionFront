export const getSessionStorageState = (key = "persist:addmissionForm") => {
  const state = JSON.parse(sessionStorage.getItem(key));
  return convertStringToObject(state);
};

const convertStringToObject = (state = []) => {
  let obj = {};
  Object.keys(state).map((x) => {
    obj[x] = JSON.parse(state[x]);
  });
  return obj;
};
