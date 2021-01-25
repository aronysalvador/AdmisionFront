
const countLines = file => {

    const data = require('fs').readFileSync(file);
    return data.toString().split('\n').length;

}


describe("Variables de entorno", ()=>{
    it("Leer archivos .env y comprobar que tengan las mismas variables", async() =>{
        const FileEnvDesa = "./env.desarrollo.config.js",
        FileEnvQa = "./env.qa.config.js",
        FileEnvStg = "./env.stg.config.js",
        FileEnvProd = "./env.prod.config.js"

           let variable = !(countLines(FileEnvDesa) === countLines(FileEnvQa) &&
           countLines(FileEnvQa) === countLines(FileEnvStg) &&
           countLines(FileEnvStg) === countLines(FileEnvProd)) ? false:true

           console.log("variable",variable)

           expect(variable).toBeTruthy()
    })
})

