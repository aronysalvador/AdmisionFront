export const Format = {
    formatizar: function(frase){
        frase = this.descapitalizar(frase)
        return frase.split(" ").map(palabra => {return this.capitalizar(palabra)}).join(" ")

    },
    descapitalizar: function(frase){
        return frase ? frase.toLowerCase() : '';
    },
    capitalizar: function(palabra){
        return palabra.charAt(0).toUpperCase() + palabra.slice(1);
    },


    
    caracteresInvalidos: function(string, desacentizar = true){
        const acentos = {'á':'a','é':'e','í':'i','ó':'o','ú':'u','Á':'A','É':'E','Í':'I','Ó':'O','Ú':'U'};
        if(desacentizar)
            return string.replace(/[¿´+><"!$%&*/#()='?¡°|]+/g,"").split('').map( letra => acentos[letra] || letra).join('').toString();
        else
            return string.replace(/[¿´+><"!$%&*/#()='?¡°|]+/g,"").split('').join('').toString();
    }
}