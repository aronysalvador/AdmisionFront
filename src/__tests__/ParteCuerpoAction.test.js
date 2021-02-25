import { getData } from '../redux/actions/ParteCuerpoAction';
import { getToken } from './common';

describe("Parte Cuerpo Afectada", () => {
    it("Probar Endpoint que obtiene Parte del Cuerpo Afectada EP", async() => {
        const resultado = await getData(await getToken())
        const status = resultado ? resultado.status : 0
        if (status == 200) {
            const total = resultado ? resultado.data.content[0].length : 0
            expect(total).toBeGreaterThan(0)
            console.log('Parte Cuerpo Afectada EP: ' + total)
        } else {
            console.log("status: " + status)
        }
        expect(resultado.status).toEqual(200)
    })
})
