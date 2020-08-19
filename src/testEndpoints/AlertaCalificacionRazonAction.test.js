import { getData } from "./../redux/actions/AlertaCalificacionRazonAction";

describe("Alertas", () => {
  it("Probar Endpoint que obtiene las Alertas", async () => {
    const resultado = await getData();
    const status = resultado ? resultado.status : 0;
    if (status == 200) {
      const total = resultado ? resultado.data.content.response[0].opciones.length : 0;
      expect(total).toBeGreaterThan(0);
      console.log("Alertas: " + total);
    } else {
      console.log("status: " + status);
    }
    expect(resultado.status).toEqual(200);
  });
});
