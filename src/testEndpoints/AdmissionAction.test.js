import { obtenerData } from  './../redux/actions/AdmissionAction';

describe("Load",()=>{
    it("Mostrar variables de entorno",async()=>{
        console.log("ENTORNO")
        console.log(process.env)
        console.log("ENTORNO")
    })
    it("Probar Endpoint que obtiene data de Afiliado",async()=>{
        const resultado = await obtenerData('11111111-1')
         //console.log(resultado.data.content)
        const status = resultado ? resultado.status : 0
        if(status==200){
            console.log('BpCreado: '+resultado.data.content.response.BpCreado)
        }else{
            console.log("status: "+status)
        }
        expect(resultado.status).toEqual(200)
    })
})
