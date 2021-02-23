import { fetchData } from  './../redux/actions/PrevisionAction';
import { getToken } from './common';

describe("HealthForecast, HealthForecastIsapre",()=>{
    it("Probar Endpoint que obtiene Isapres",async()=>{
        const resultado = await fetchData(await getToken())
        const status = resultado ? resultado.status : 0
        if(status==200){
            const total = resultado ? resultado.data.content[0].length :0
            expect(total).toBeGreaterThan(0)
            console.log('Isapre: '+total)
        }else{
            console.log("status: "+status)
        }
        expect(resultado.status).toEqual(200)
    })
})
