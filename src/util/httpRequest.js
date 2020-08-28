import Axios from "axios";

export const httpPost = async (url, body) => {
  const { state, data } = await Axios.post(url, body, {});
  return state;
};
