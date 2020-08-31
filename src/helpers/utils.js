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