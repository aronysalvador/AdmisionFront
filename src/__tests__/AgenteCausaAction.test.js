import { getData } from '../redux/actions/AgenteCausaAction';
import { getToken } from './common';

describe("Agente Causal", () => {
    it("Probar Endpoint que obtiene Agente Causal EP", async() => {
        const resultado = await getData(await getToken())
        const status = resultado ? resultado.status : 0
        if (status == 200) {
            const total = resultado ? resultado.data.content[0].length : 0
            expect(total).toBeGreaterThan(0)
            console.log('Agente Causal EP: ' + total)
        } else {
            console.log("status: " + status)
        }
        expect(resultado.status).toEqual(200)
    })
})
