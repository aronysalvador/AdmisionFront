export const AdmissionForm = {
  step: 1002, //Inicio

  percentage: 0,
  rut: "",
  isAfiliado: "",
  empresa: "",
  rutEmpresa: "",
  isapreSeleccionado: {},

  lugarAccidente: "",
  objetoAccidente: "",
  descripcionAccidente: "",

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
};
