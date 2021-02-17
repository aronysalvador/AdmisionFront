import { obtenerData } from  '../redux/actions/AdmissionAction';

import Axios from "axios";

const getToken = async() => {
    const result = await Axios.post(window.REACT_APP_ADMISION+'GenerarTokenTests', {
          "key": "791c9419-b1d7-4002-80bc-a1eedf461ccd",
          "secret": "46d14424-69e7-4d9f-88ad-314cb3183816"
      });
    return result.data.token
}


describe("Load",()=>{
  
    it("Probar Endpoint que obtiene data de Afiliado",async()=>{
        const resultado = await obtenerData('11111111-1', await getToken())
        const status = resultado ? resultado.status : 0;
        let variable = (status>=200 && status<300)  ? true: false
        expect(variable).toBeTruthy()
    })
})
