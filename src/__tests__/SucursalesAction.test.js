import { obtenerData } from "./../redux/actions/SucursalesAction";
import Axios from "axios";

const getToken = async() => {
    const result = await Axios.post(window.REACT_APP_ADMISION+'GenerarTokenTests', {
          "key": "791c9419-b1d7-4002-80bc-a1eedf461ccd",
          "secret": "46d14424-69e7-4d9f-88ad-314cb3183816"
      });
    return result.data.token
}

describe("Sucursales", () => {
  it("Probar Endpoint que obtiene data de Sucursales", async () => {
    const resultado = await obtenerData("70360100-6", await getToken());

    const status = resultado ? resultado.status : 0;
    if (status == 200) {
      console.log("Sucursales: " + resultado.data.length);
    } else {
      console.log("status: " + status);
    }
    expect(resultado.status).toEqual(200);
  });
});
