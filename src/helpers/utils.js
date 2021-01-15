import store from "./../store"

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
            let comunaSAP =  await validarComuna(direccion.description);
            if(Object.keys(comunaSAP).length !== 0){
                respuesta.valida=true
                respuesta.comuna = comunaSAP.nombre
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
            let comunaSAP =  await validarComuna(direccion.description);
            if(Object.keys(comunaSAP).length !== 0){
                respuesta.valida=true
                respuesta.comuna = comunaSAP.nombre
            } else
                respuesta.valida = false
        }
    }

    return respuesta;
}

const validarComuna = async(direccion) => {
    return new Promise(async function(resolve) {
        let COMUNAS = []
        const array = store.getState().comunaForm.data
        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            element.nombre=eliminarDiacriticos(element.nombre)
            COMUNAS.push(element)
        }

        // console.log("COMUNAS")
        // console.log(COMUNAS)

        let comuna = (eliminarDiacriticos(direccion).toUpperCase()).split(",");

        // console.log("comuna")
        // console.log(comuna)

        let result = COMUNAS.filter((o) => comuna.includes(o.nombre));       
        if(result.length>0){resolve(result[0]);}else{resolve([]);}   
   
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
