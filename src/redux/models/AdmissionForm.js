export const AdmissionForm = {
  step: 26.1,
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
  responsable: { nombre: "", cargo: "" },
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
  siniestroDetalle: {},

  DireccionTemporal: {},  // direccion temporal que es enviada al mapa dinámico
  LatTemporal: "",  // latitud temporal que es enviada al mapa dinámico
  LongTemporal: "",  // longitud temporal que es enviada al mapa dinámico
};
