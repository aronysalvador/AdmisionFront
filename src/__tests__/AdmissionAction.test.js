import { obtenerData } from  '../redux/actions/AdmissionAction';
import { getToken } from './common';

describe("Load",()=>{

    it("Probar Endpoint que obtiene data de Afiliado",async()=>{
        const resultado = await obtenerData('11111111-1', await getToken())
        const status = resultado ? resultado.status : 0;
        let variable = (status>=200 && status<300)  ? true: false
        expect(variable).toBeTruthy()
    })
})
