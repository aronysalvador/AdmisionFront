export const Rut = {
	validaRut (rutCompleto) {
        if (typeof rutCompleto === 'undefined' || rutCompleto === null)
            return false

        if (rutCompleto === "1-9")
            return false

        rutCompleto = Rut.clean(rutCompleto)

		if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test(rutCompleto))
			return false;
		let tmp 	= rutCompleto.split('-')
		let digv	= String(tmp[1])
		let rut 	= tmp[0]
		if (digv === 'K') digv = 'k'

		return (String(Rut.dv(rut)) === digv)
	},
	dv(T){
		let M=0, S=1;
		for (;T; T=Math.floor(T/10))
			S=(S+T%10*(9-M++%6))%11

		return S?S-1:'k'
    },
    clean (rut){
        return rut.replace(/\./g, "")
    }
}

export const formateaRut = (rut) => {
    if (typeof rut === 'undefined' || rut === null)
        return ""

    let actual = rut.replace(/^0+/, "");
    if (actual !== '' && actual.length > 1) {
        let sinPuntos = actual.replace(/\./g, "");
        let actualLimpio = sinPuntos.replace(/-/g, "");
        let inicio = actualLimpio.substring(0, actualLimpio.length - 1);
        var rutPuntos = "";
        let i = 0;
        let j = 1;
        for (i = inicio.length - 1; i >= 0; i--) {
            let letra = inicio.charAt(i);
            rutPuntos = letra + rutPuntos;
            if (j % 3 === 0 && j <= inicio.length - 1)
                rutPuntos = "." + rutPuntos;

            j++;
        }
        let dv = actualLimpio.substring(actualLimpio.length - 1);
        rutPuntos = rutPuntos + "-" + dv;
    }

    return rutPuntos;
}