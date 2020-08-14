import { getData } from  './../redux/actions/CategoriaOcupacionalAction';

describe("CategoriaOcupacional",()=>{
    it("Probar Endpoint que obtiene Categoría Ocupacional",async()=>{
        const resultado = await getData()
        const status = resultado ? resultado.status : 0
        if(status==200){
            const total = resultado ? resultado.data.content[0].length :0
            expect(total).toBeGreaterThan(0)
            console.log('Categoría Ocupacional: '+total)
        }else{
            console.log("status: "+status)
        }
        expect(resultado.status).toEqual(200)
    })
})
