import Axios from "axios";

export const getToken = async () => {
    const result = await Axios.post(window.REACT_APP_ADMISION+'GenerarTokenTests', {
          key: "791c9419-b1d7-4002-80bc-a1eedf461ccd",
          secret: "46d14424-69e7-4d9f-88ad-314cb3183816"
      });

    return result.data.token
}
