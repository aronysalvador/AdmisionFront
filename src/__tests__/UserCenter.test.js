import { getCenters } from "./../redux/actions/microsoft.action";
import { getData } from "./../redux/actions/UserCenterAction";
import { getToken } from './common';

describe("Obtener centros del usuario microsoft", () => {
  it("Probar Endpoint que obtiene centros", async () => {
    let resultado

      resultado = await getCenters("asalvadorn@ext.achs.cl", await getToken());


      const status = resultado ? resultado.status : 0;

      expect(resultado.status).toEqual(200);

  });
});

describe("Guardar centro del usuario microsoft", () => {
  it("Probar Endpoint que enviar centro del usuario", async () => {
    const resultado = await getData("asalvadorn@ext.achs.cl",{"ID":50021418,"NOMBRE":"UNIDAD SALUD EP ANTOFAGASTA","tipo":"UC"}, await getToken()
);
    const status = resultado ? resultado.status : 0;

    expect(resultado.status).toEqual(200);
  });
});
