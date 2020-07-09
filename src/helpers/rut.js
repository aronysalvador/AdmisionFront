export const Rut = {
	validaRut : function (rutCompleto) {
        
        if(typeof rutCompleto === 'undefined' || rutCompleto === null)
            return false

        if(rutCompleto === "1-9")
            return false

        rutCompleto = Rut.clean(rutCompleto)

		if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test( rutCompleto ))
			return false;
		var tmp 	= rutCompleto.split('-')
		var digv	= String(tmp[1]) 
		var rut 	= tmp[0]
		if ( digv === 'K' ) digv = 'k'
		return (String(Rut.dv(rut)) === digv )
	},
	dv : function(T){
		var M=0,S=1;
		for(;T;T=Math.floor(T/10))
			S=(S+T%10*(9-M++%6))%11
		return S?S-1:'k'
    },
    clean : function (rut){
        return rut.replace(/\./g,"")
    }
}

export const formateaRut = (rut) =>{

    if(typeof rut === 'undefined' || rut === null)
        return ""

    var actual = rut.replace(/^0+/, "");
    if (actual !== '' && actual.length > 1) {
        var sinPuntos = actual.replace(/\./g, "");
        var actualLimpio = sinPuntos.replace(/-/g, "");
        var inicio = actualLimpio.substring(0, actualLimpio.length - 1);
        var rutPuntos = "";
        var i = 0;
        var j = 1;
        for (i = inicio.length - 1; i >= 0; i--) {
            var letra = inicio.charAt(i);
            rutPuntos = letra + rutPuntos;
            if (j % 3 === 0 && j <= inicio.length - 1) {
                rutPuntos = "." + rutPuntos;
            }
            j++;
        }
        var dv = actualLimpio.substring(actualLimpio.length - 1);
        rutPuntos = rutPuntos + "-" + dv;
    }
    return rutPuntos;
}