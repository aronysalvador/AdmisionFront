import { sendingCaso } from  './../redux/actions/AdmissionAction';

describe("Load",()=>{
  
    it("Probar Endpoint de creación de caso",async()=>{
        expect.assertions(2);
        try {
            const resultado = await sendingCaso({})
        } catch (e) {
            expect(e).toBeDefined()
            expect(e.response.status).toEqual(409)
        }
        
 
        
        //expect(resultado.statusCode).toEqual(500)
    })
})

