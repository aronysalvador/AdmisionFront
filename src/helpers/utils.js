import { getData } from "./../redux/actions/ComunaAction"

export function Fecha() {
    var fecha =  (new Date().toLocaleString("en-US", {timeZone:'America/Santiago',hour12: false})).replace(/[,]/g, "");
    var x = fecha.split(" ");
    var y = x[0].split("/");
    var newFecha = `${y[2]}-${('0'+y[0]).slice(-2)}-${('0'+y[1]).slice(-2)}`
    return newFecha
}

export function FechaHora(){
    var fecha =  (new Date().toLocaleString("en-US", {timeZone:'America/Santiago',hour12: false})).replace(/[,]/g, "");
    var x = fecha.split(" ");
    var y = x[0].split("/");
    var newFecha = `${y[2]}-${('0'+y[0]).slice(-2)}-${('0'+y[1]).slice(-2)} ${x[1]}`
    return newFecha
}

export function Hora(){
    var fecha =  (new Date().toLocaleString("en-US", {timeZone:'America/Santiago',hour12: false})).replace(/[,]/g, "");
    var x = fecha.split(" ");
    var newFecha = `${x[1]}`
    return newFecha
}

export const eliminarDiacriticos=(texto)=> {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g,"");
}

export const validarDireccion=async(direccion)=> {
    
    var respuesta = { valida: false, comuna: null  };

    if(typeof direccion.description === 'string'){
     
        const fragmentos  = direccion.description.split(",")
          if(Array.isArray(fragmentos) && fragmentos.length >= 3 && fragmentos[0].match(/\d+/g) ){     
            var comuna = fragmentos[fragmentos.length-2].toUpperCase().trim()                                             
            if(comuna.includes("REGIÓN")){
                if(fragmentos.length<5){
                    comuna = fragmentos[1].toUpperCase().trim()
                }else{
                    comuna = fragmentos[2].toUpperCase().trim()
                }
            }
            respuesta.comuna=comuna
            var response =  await validarComuna(comuna);
            var valida=response.ok ? true : false;
            respuesta.valida=valida
          }
      }


      return respuesta;
}

const validarComuna = async (comuna) => {
    return new Promise(async function (resolve, reject) {        
        const result = await getData()
        if(result.status === 200){
          var COMUNAS = result.data.content[0]
            if(Array.isArray(COMUNAS)){       

                  var resultValid = COMUNAS.find(ele => eliminarDiacriticos(ele.nombre) === eliminarDiacriticos(comuna))
                  if( resultValid !== undefined  ){
                    resolve({ok: true});
                  }else{ resolve({ok: false}); }

            }else{ resolve({ok: false}); }
        }else{ resolve({ok: false}); }
    });
};
