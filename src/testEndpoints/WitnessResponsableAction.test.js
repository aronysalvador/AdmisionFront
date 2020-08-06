import { obtenerData } from  './../redux/actions/WitnessResponsableAction';

describe("DataResponsable, DataWitness",()=>{
    it("Probar Endpoint que obtiene Cargos",async()=>{
        const resultado = await obtenerData()
        const status = resultado ? resultado.status : 0
        if(status==200){
            const total = resultado ? resultado.data.content[0].length :0
            expect(total).toBeGreaterThan(0)
            console.log('Cargos: '+total)
        }else{
            console.log("status: "+status)
        }
        expect(resultado.status).toEqual(200)
    })
})
