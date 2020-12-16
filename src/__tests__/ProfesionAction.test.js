import { getData } from "./../redux/actions/ProfesionAction";

describe("Profesion", () => {
  it("Probar Endpoint que obtiene las Profesiones", async () => {
    const resultado = await getData();
    const status = resultado ? resultado.status : 0;
    if (status == 200) {
      const total = resultado ? resultado.data.content.response.length : 0;
      expect(total).toBeGreaterThan(0);
      console.log("Profesiones: " + total);
    } else {
      console.log("status: " + status);
    }
    expect(resultado.status).toEqual(200);
  });
});
