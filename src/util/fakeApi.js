const sucursales = [
  { id: 1, direccion: "Av Carlos Valdovinos" },
  { id: 2, direccion: "Av Vickuña Mackenna" },
  { id: 3, direccion: "Alameda" },
  { id: 4, direccion: "Huerfanos" },
  { id: 5, direccion: "Juan carlos Rider" },
  { id: 6, direccion: "Los militares" },
];

export const getSucursalesUsuarios = async (rut) => {
  return sucursales;
};
