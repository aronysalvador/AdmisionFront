export const AdmissionForm = {
    step: 0,
    percentage: 0,
    rut: "",
    isAfiliado: "",
    empresa: "",
    rutEmpresa: "",
    isapreSeleccionado: {},

    lugarAccidente: "",
    objetoAccidente: "",
    descripcionAccidente: "",
    relatoAccidente: "",
    volverAConcatenar: false,

    testigos: { nombre: "", cargo: "" },
    responsable: [],
    fechaHoraResponsable: {},
    fechaHoraSiniestro: {},

    SucursalEmpresa: "",
    DireccionEmpresa: "",
    comunaEmpresa: "",
    direccionParticular: "",
    telefonoParticular: "",

    inicioJornadaLaboral: "",
    finJornadaLaboral: "",
    ingresoTrabajoActual: "",
    desarrollarTrabajoHabitual: "",
    tipoRemuneracion: {},

    tipoDeContrato: {},

    //State de Cargo
    cargoForm: "",
    //Lugar Exacto Sinietsro
    sucursalEmpresaSiniestro: "",
    urlMapasucursalEmpresaSiniestro: "",
    SucursalEmpresaObjeto: {},

    centrosForm: {},

    siniestros: [],
    siniestroDetalle: {}, //no va a SAP
    siniestroOpciones: {}, //no va a SAP

    tipoSiniestro: {},

    DireccionTemporal: {}, // direccion temporal que es enviada al mapa dinámico
    LatTemporal: "", // latitud temporal que es enviada al mapa dinámico
    LongTemporal: "", // longitud temporal que es enviada al mapa dinámico
    AccidenteEnSucursal: "",
    sucursalCargo: "", //Codigo de la sucursal

    comunaSiniestro: "",
    comunaDireccionParticular: "",

    BP: "",
    mensajeErrorSAP: "",

    TrabajadorIndependiente: "", // va al doumento de trayecto debe incluirse en CamposDocumentos
    tab: 0,

    coberturaSoap: "", // se debe pasar a SAP

    CamposDocumentos: { parteAfectada: "" }, // data para llenar docuemntos de trayecto

    FechaSintomasEP: {},

    TipoAvisoResponsable: {}
};