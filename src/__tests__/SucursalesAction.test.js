import { obtenerData } from "./../redux/actions/SucursalesAction";
import { obtenerUsuarioSap } from "../redux/actions/microsoft.action"

const getToken = async() => {
  const result = await obtenerUsuarioSap("sadiazg@achs.cl")
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
