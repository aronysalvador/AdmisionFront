import { getData } from  './../redux/actions/TipoContratoAction';
import { getToken } from './common';

describe("TipoDeContrato",()=>{
    it("Probar Endpoint que obtiene Tipos de Contrato",async()=>{
        const resultado = await getData(await getToken())
        const status = resultado ? resultado.status : 0
        if(status==200){
            const total = resultado ? resultado.data.content[0].length :0
            expect(total).toBeGreaterThan(0)
            console.log('Tipos de Contrato: '+total)
        }else{
            console.log("status: "+status)
        }
        expect(resultado.status).toEqual(200)
    })
})

