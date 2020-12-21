import { getData } from "./../redux/actions/ComunaAction"

export function Fecha() {
    var fecha = (new Date().toLocaleString("en-US", { timeZone: 'America/Santiago', hour12: false })).replace(/[,]/g, "");
    var x = fecha.split(" ");
    var y = x[0].split("/");
    var newFecha = `${y[2]}-${('0'+y[0]).slice(-2)}-${('0'+y[1]).slice(-2)}`
    return newFecha
}

export function FechaHora() {
    var fecha = (new Date().toLocaleString("en-US", { timeZone: 'America/Santiago', hour12: false })).replace(/[,]/g, "");
    var x = fecha.split(" ");
    var y = x[0].split("/");
    var newFecha = `${y[2]}-${('0'+y[0]).slice(-2)}-${('0'+y[1]).slice(-2)} ${x[1]}`
    return newFecha
}

export function Hora() {
    var fecha = (new Date().toLocaleString("en-US", { timeZone: 'America/Santiago', hour12: false })).replace(/[,]/g, "");
    var x = fecha.split(" ");
    var newFecha = `${x[1]}`
    return newFecha
}

export const eliminarDiacriticos = (texto) => {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, "").replace(/ /g, "");
}

export const validarDireccionSN = async(direccion) => {

    var respuesta = { valida: false, comuna: null };

    if (typeof direccion.description === 'string') {

        const fragmentos = direccion.description.split(",")
        if (Array.isArray(fragmentos) && fragmentos.length >= 3) {
            var comuna = fragmentos[fragmentos.length - 2].toUpperCase().trim()
            if (comuna.includes("REGIÓN")) {
                if (fragmentos.length < 5) {
                    comuna = fragmentos[1].toUpperCase().trim()
                } else {
                    comuna = fragmentos[2].toUpperCase().trim()
                }
            }
            let comunaSAP =  await validarComuna(comuna);
            if(comunaSAP !== null){
                respuesta.valida=true
                respuesta.comuna = comunaSAP
            } else
                respuesta.valida = false

        }
    }


    return respuesta;
}

export const validarDireccion = async(direccion) => {

    var respuesta = { valida: false, comuna: null };
    if (typeof direccion.description === 'string') {

        const fragmentos = direccion.description.split(",")
        if (Array.isArray(fragmentos) && fragmentos.length >= 3 && fragmentos[0].match(/\d+/g)) {
            var comuna = fragmentos[fragmentos.length - 2].toUpperCase().trim()
            if (comuna.includes("REGIÓN")) {
                if (fragmentos.length < 5) {
                    comuna = fragmentos[1].toUpperCase().trim()
                } else {
                    comuna = fragmentos[2].toUpperCase().trim()
                }
            }
            let comunaSAP =  await validarComuna(comuna);
            if(comunaSAP !== null){
                respuesta.valida=true
                respuesta.comuna = comunaSAP
            } else
                respuesta.valida = false

        }
    }


    return respuesta;
}

const validarComuna = async(comuna) => {
    return new Promise(async function(resolve, reject) {
        const result = await getData()
        if (result.status === 200) {
            var COMUNAS = result.data.content[0]
            if (Array.isArray(COMUNAS)) {

                var resultValid = COMUNAS.find(ele => eliminarDiacriticos(ele.nombre) === eliminarDiacriticos(comuna))
                if (resultValid !== undefined) {
                    resolve(resultValid.nombre);
                    //NO BORRAR CONSOLE.LOG
                    console.log("Comuna ", resultValid.nombre);
                } else {
                    resolve(null);
                    //NO BORRAR CONSOLE.LOG
                    console.log(resultValid);
                }

            } else { resolve(null); }
        } else { resolve(null); }
    });
};

export const validarDireccionCorrecta=(direccion)=> {

    var string = direccion.toLowerCase();
    var patron = /[0-9]{2,}/;
    
    if(string.includes('calle')){
        return true
    }    
    else if(string.includes('avenida')){
        return true
    }
    else if(string.includes('av')){
        return true
    }
    else if(string.includes('casa')){
        return true
    }    
    else if(string.includes('dpto')){
        return true
    }
    else if(string.includes('departamento')){
        return true
    }
    else if(string.includes('villa')){
        return true
    }
    else if(string.includes('poblacion')){
        return true
    }
    else  if(patron.test(string)){
        return true
    }else{
        return false
    }

}
