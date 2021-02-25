import store from "./../store"

export function Fecha() {
    let fecha = (new Date().toLocaleString("en-US", { timeZone: 'America/Santiago', hour12: false })).replace(/[,]/g, "");
    let x = fecha.split(" ");
    let y = x[0].split("/");
    let newFecha = `${y[2]}-${('0'+y[0]).slice(-2)}-${('0'+y[1]).slice(-2)}`

    return newFecha
}

export function FechaHora() {
    let fecha = (new Date().toLocaleString("en-US", { timeZone: 'America/Santiago', hour12: false })).replace(/[,]/g, "");
    let x = fecha.split(" ");
    let y = x[0].split("/");
    let newFecha = `${y[2]}-${('0'+y[0]).slice(-2)}-${('0'+y[1]).slice(-2)} ${x[1]}`

    return newFecha
}

export function Hora() {
    let fecha = (new Date().toLocaleString("en-US", { timeZone: 'America/Santiago', hour12: false })).replace(/[,]/g, "");
    let x = fecha.split(" ");
    let newFecha = `${x[1]}`

    return newFecha
}

export const eliminarDiacriticos = (texto) => {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, "").replace(/ /g, "");
}

export const validarDireccionSN = async(direccion) => {
    let respuesta = { valida: false, comuna: null };
    if (typeof direccion.description === 'string') {
        const fragmentos = direccion.description.split(",")
        if (Array.isArray(fragmentos) && fragmentos.length >= 3) {
            let comunaSAP = await validarComuna(direccion.description);
            if (Object.keys(comunaSAP).length !== 0) {
                respuesta.valida = true
                respuesta.comuna = comunaSAP.nombre
                    // console.log("valida: " + comunaSAP.nombre)
            } else
                { respuesta.valida = false }
        }
    }

    return respuesta;
}

export const validarDireccion = async(direccion) => {
    let respuesta = { valida: false, comuna: null };
    if (typeof direccion.description === 'string') {
        const fragmentos = direccion.description.split(",")
        if (Array.isArray(fragmentos) && fragmentos.length >= 3 && fragmentos[0].match(/\d+/g)) {
            let comunaSAP = await validarComuna(direccion.description);
            if (Object.keys(comunaSAP).length !== 0) {
                respuesta.valida = true
                respuesta.comuna = comunaSAP.nombre
                    // console.log("valida: "+comunaSAP.nombre)
            } else
                { respuesta.valida = false }
        }
    }

    return respuesta;
}

const validarComuna = async(direccion) => {
        let COMUNAS = await getComunas()
            // const array = store.getState().comunaForm.data
            // for (let index = 0; index < array.length; index++) {
            //     const element = array[index];
            //     element.nombre=eliminarDiacriticos(element.nombre)
            //     COMUNAS.push(element)
            // }

        // console.log("COMUNAS")
        // console.log(COMUNAS)

        let comuna = (eliminarDiacriticos(direccion).toUpperCase()).split(",");

        // console.log("comuna")
        // console.log(comuna)

        let result = COMUNAS.filter((o) => comuna.includes(eliminarDiacriticos(o.nombre)));
        if (result.length > 0) return result[0]; else return [];
};

const getComunas = () => {
    // console.log("buscando comunas... ")
    let loading = true
    let data = []
    do {
        // console.log("...")
        data = store.getState().comunaForm.data
        if (!store.getState().comunaForm.loading)
            loading = false
    }
    while (loading);

    return data
}

export const validarDireccionCorrecta = (direccion) => {
    let string = direccion.toLowerCase();
    let patron = /[0-9]{2,}/;

    if (string.includes('calle'))
        return true
     else if (string.includes('avenida'))
        return true
     else if (string.includes('av'))
        return true
     else if (string.includes('casa'))
        return true
     else if (string.includes('dpto'))
        return true
     else if (string.includes('departamento'))
        return true
     else if (string.includes('villa'))
        return true
     else if (string.includes('poblacion'))
        return true
     else if (patron.test(string))
        return true
     else
        return false
}
