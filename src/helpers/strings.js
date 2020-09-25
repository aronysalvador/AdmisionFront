export const Format = {
    formatizar: function(frase){
        frase = this.descapitalizar(frase)
        return frase.split(" ").map(palabra => {return this.capitalizar(palabra)}).join(" ")

    },
    descapitalizar: function(frase){
        return frase.toLowerCase();
    },
    capitalizar: function(palabra){
        return palabra.charAt(0).toUpperCase() + palabra.slice(1);
    }
}