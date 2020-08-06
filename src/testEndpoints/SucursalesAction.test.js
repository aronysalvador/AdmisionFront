import { obtenerData } from "./../redux/actions/SucursalesAction";

describe("Sucursales", () => {
  it("Probar Endpoint que obtiene data de Sucursales", async () => {
    const resultado = await obtenerData("70360100-6");

    const status = resultado ? resultado.status : 0;
    if (status == 200) {
      console.log("Sucursales: " + resultado.data.content[0].IsAfiliado);
    } else {
      console.log("status: " + status);
    }
    expect(resultado.status).toEqual(200);
  });
});
