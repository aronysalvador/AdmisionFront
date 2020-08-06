import { obtenerData } from  './../redux/actions/AdmissionAction';

describe("Load",()=>{
    it("Probar Endpoint que obtiene data de Afiliado",async()=>{
        const resultado = await obtenerData('11111111-1')

        const status = resultado ? resultado.status : 0
        if(status==200){
            console.log('Es Afiliado: '+resultado.data.content[0].IsAfiliado)
        }else{
            console.log("status: "+status)
        }
        expect(resultado.status).toEqual(200)
    })
})