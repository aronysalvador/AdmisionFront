import { getNacionalidades } from  './../redux/actions/NacionalidadesAction';
import { getPaises } from  './../redux/actions/PaisesAction';
import { getIdiomas } from  './../redux/actions/IdiomasAction';


describe("Nacionalidades",()=>{
    it("Probar Endpoint que obtiene Nacionalidades",async()=>{
        const resultado = await getNacionalidades()
        const status = resultado ? resultado.status : 0
        if(status==200){
            const total = resultado ? resultado.data.content[0].length :0
            expect(total).toBeGreaterThan(0)
            console.log('Nacionalidades: '+total)
        }else{
            console.log("status: "+status)
        }
        expect(resultado.status).toEqual(200)
    })
});

describe("Idiomas",()=>{
    it("Probar Endpoint que obtiene Idiomas",async()=>{
        const resultado = await getIdiomas()
        const status = resultado ? resultado.status : 0
        if(status==200){
            const total = resultado ? resultado.data.content[0].length :0
            expect(total).toBeGreaterThan(0)
            console.log('Idiomas: '+total)
        }else{
            console.log("status: "+status)
        }
        expect(resultado.status).toEqual(200)
    })
});

describe("Paises",()=>{
    it("Probar Endpoint que obtiene los Paises",async()=>{
        const resultado = await getPaises()
        const status = resultado ? resultado.status : 0
        if(status==200){
            const total = resultado ? resultado.data.content[0].length :0
            expect(total).toBeGreaterThan(0)
            console.log('Paises: '+total)
        }else{
            console.log("status: "+status)
        }
        expect(resultado.status).toEqual(200)
    })
});