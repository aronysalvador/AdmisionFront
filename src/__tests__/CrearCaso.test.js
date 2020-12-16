import { sendingCaso } from  './../redux/actions/AdmissionAction';

describe("Load",()=>{
  
    it("Probar Endpoint de creación de caso",async()=>{

        const resultado = await sendingCaso({})
        
        expect(resultado.data.status).toEqual(500)
    })
})

