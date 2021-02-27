import { getData } from '../redux/actions/GrupoAction';
import { getToken } from './common';

describe("Grupos Étnicos", () => {
    it("Probar Endpoint que obtiene los grupos étnicos", async() => {
        const resultado = await getData(await getToken())
        const status = resultado ? resultado.status : 0
        if (status==200){
            const total = resultado ? resultado.data.content[0].length :0
            expect(total).toBeGreaterThan(0)
            console.log('grupos étnicos: '+total)
        } else {
            console.log("status: "+status)
        }
        expect(resultado.status).toEqual(200)
    })
})
