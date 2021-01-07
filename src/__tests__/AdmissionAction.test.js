import { obtenerData } from  '../redux/actions/AdmissionAction';
import { obtenerUsuarioSap } from "../redux/actions/microsoft.action"

const getToken = async() => {
    const result = await obtenerUsuarioSap("sadiazg@achs.cl")
    return result.data.token
}


describe("Load",()=>{
  
    it("Probar Endpoint que obtiene data de Afiliado",async()=>{
        const resultado = await obtenerData('11111111-1', await getToken())
        const status = resultado ? resultado.status : 0
        if(status==200){
            console.log('BpCreado: '+resultado.data.content.response.BpCreado)
        }else{
            console.log("status: "+status)
        }
        expect(resultado.status).toEqual(200)
    })
})
