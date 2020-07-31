const sucursales = [
  { id: 1, direccion: "Av Carlos Valdovinos" },
  { id: 2, direccion: "Av Vicuña Mackenna" },
  { id: 3, direccion: "Alameda" },
  { id: 4, direccion: "Huerfanos" },
  { id: 5, direccion: "Juan carlos Rider" },
  { id: 6, direccion: "Los militares" },
];

export const getSucursalesUsuarios = async (rut) => {
  return sucursales;
};

export const sucursalesOficina = [
  {
    id: 1,
    key: "13101",
    nombreSucursal: "Av Vicuña Mackenna",
    numero: 1200,
    comunaNombre: "Santiago",
  },
  {
    id: 2,
    key: "13101",
    nombreSucursal: "Av Matta",
    numero: 789,
    comunaNombre: "Santiago",
  },
  {
    id: 3,
    key: "13107",
    nombreSucursal: "Ciudad Empresarial",
    numero: 7890,
    comunaNombre: "Huechuraba",
  },
  {
    id: 4,
    key: "13000",
    nombreSucursal: "Florida Center",
    numero: 2000,
    comunaNombre: "La Florida",
  },

  {
    id: 5,
    key: "13109",
    nombreSucursal: "Americo Vespucio",
    numero: 1200,
    comunaNombre: "La Cisterna",
  },
  {
    id: 6,
    key: "13109",
    nombreSucursal: "Jose M. Carrera",
    numero: 1200,
    comunaNombre: "La Cisterna",
  },
  {
    id: 7,
    key: "13110",
    nombreSucursal: "Mall Florida Center",
    numero: 2000,
    comunaNombre: "La Florida",
  },
  {
    id: 9,
    key: "13110",
    nombreSucursal: "Gran Avenida 6700",
    numero: 2000,
    comunaNombre: "La Florida",
  },
  {
    id: 10,
    key: "13110",
    nombreSucursal: "Paulina 6700",
    numero: 2000,
    comunaNombre: "La Florida",
  },
  {
    id: 11,
    key: "13110",
    nombreSucursal: "Av la Florida",
    numero: 2000,
    comunaNombre: "La Florida",
  },
  {
    id: 12,
    key: "13110",
    nombreSucursal: "La Florida 4",
    numero: 2000,
    comunaNombre: "La Florida",
  },
  {
    id: 13,
    key: "13110",
    nombreSucursal: "La Florida 5",
    numero: 2000,
    comunaNombre: "La Florida",
  },
  // {
  //   id: 14,
  //   key: "13110",
  //   nombreSucursal: "La Florida 6",
  //   numero: 2000,
  //   comunaNombre: "La Florida",
  // },
];

const razonSocial = [
  { id: 1, nombre: "ACHS S.A" },
  { id: 2, nombre: "FALABELLA S.A" },
  { id: 3, nombre: "BANCO ESTADO S.A" },
  { id: 4, nombre: "BANCO BICE S.A" },
  { id: 5, nombre: "RIPLEY S.A" },
  { id: 6, nombre: "PARIS S.A" },
  { id: 7, nombre: "WALMART S.A" },
  { id: 8, nombre: "CLINICA SANTA MARIA S.A" },
  { id: 9, nombre: "FUSIONA S.A" },
  { id: 10, nombre: "TOTTUS S.A" },
  { id: 11, nombre: "KAUFMANN S.A" },
  { id: 12, nombre: "CLINICA ALEMANA" },
];

export const getRazonSocial = async () => {
  return razonSocial;
};

const jornadaLaboral = [
  { id: 1, nombre: "Lunes a Viernes" },
  { id: 2, nombre: "Lunes a Sábado" },
  { id: 3, nombre: "Lunes - Domingo" },
  { id: 4, nombre: "Turno Rotativo" },
  { id: 5, nombre: "Medio tiempo" },
  { id: 6, nombre: "Cesante" },
  { id: 7, nombre: "Trabajo a distancia" },
];

export const getTipoJornadaLaboral = async () => {
  return jornadaLaboral;
};

const tipoRemuneracion = [
  { id: 1, nombre: "Salario Fijo", selected: false },
  { id: 2, nombre: "Por comisión", selected: false },
  { id: 3, nombre: "Honorarios", selected: false },
];

export const getTiposRemuneracion = () => {
  return tipoRemuneracion;
};
