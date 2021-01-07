import { sendingCaso } from  './../redux/actions/AdmissionAction';

describe("Load",()=>{
  
    it("Probar Endpoint de creación de caso",async()=>{

        await sendingCaso({})
        .then(res => {
            expect(res.status).toEqual(409)
        })
        .catch(err => {
            console.log(err.message)
        })
    })
})

