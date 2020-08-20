import { getCenters } from "./../redux/actions/microsoft.action";
import { getData } from "./../redux/actions/UserCenterAction";

describe("Obtener centros del usuario microsoft", () => {
  it("Probar Endpoint que obtiene centros", async () => {
    const resultado = await getCenters("asalvadorn@ext.achs.cl");
    const status = resultado ? resultado.status : 0;
    if (status == 200) {
      console.log("Centros: " + resultado.data.data.length);
    } else {
      console.log("status: " + status);
    }
    expect(resultado.status).toEqual(200);
  });
});

describe("Guardar centro del usuario microsoft", () => {
  it("Probar Endpoint que enviar centro del usuario", async () => {
    const resultado = await getData("asalvadorn@ext.achs.cl",{"ID":50021418,"NOMBRE":"UNIDAD SALUD EP ANTOFAGASTA","tipo":"UC"}
);
    const status = resultado ? resultado.status : 0;
    if (status == 200) {
       console.log("User modificado:");
        console.log(resultado.data.content[0])
    } else {
        console.log("status: " + status);
    }
    expect(resultado.status).toEqual(200);
  });
});
