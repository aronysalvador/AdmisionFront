import { getData } from "./../redux/actions/ComunaAction";
import { getToken } from './common';

describe("SeleccionarComuna ", () => {
  it("Probar Endpoint que obtiene Comuna ", async () => {
    const resultado = await getData(await getToken());
    const status = resultado ? resultado.status : 0;
    if (status == 200) {
      const total = resultado ? resultado.data.content[0].length : 0;
      expect(total).toBeGreaterThan(0);
      console.log("Comuna: " + total);
    } else {
      console.log("status: " + status);
    }
    expect(resultado.status).toEqual(200);
  });
});

