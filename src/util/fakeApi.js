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

const isapres = [
  { id: 1, nombre: "COLMENA GOLDEN CROSS SOCIEDAD A" },
  { id: 2, nombre: "COOPERATIVA DE SALUD PROMEPART" },
  { id: 3, nombre: "INSTITUCIÓN DE SALUD PREVISIONA" },
  { id: 4, nombre: "INSTITUTO DE SALUD PREVISIONA" },
  { id: 5, nombre: "ISAPRE BANMEDICA SOCIEDAD ANONI" },
  { id: 6, nombre: "ISAPRE CHUQUICAMATA LTDA." },
  { id: 7, nombre: "ISAPRE CONSALUD S.A." },
  { id: 8, nombre: "ISAPRE CRISOL SOCIEDAD ANONIMA" },
  { id: 9, nombre: "ISAPRE CRUZ BLANCA SOCIEDAD ANOCB" },
  { id: 10, nombre: "ISAPREE VIDA PLENA SOCIEDAD ANO" },
  { id: 11, nombre: "ISAPRE FUNDACION" },
  { id: 12, nombre: "ISAPRE GALENICA SOCIEDAD ANONIM" },
  { id: 13, nombre: "ISAPRE GENESIS SOCIEDAD ANONIMA" },
  { id: 14, nombre: "ISAPRE ISAMEDICA SOCIEDAD ANONI" },
  { id: 15, nombre: "ISAPRE LA ARAUCANA SOCIEDAD ANO" },
  { id: 16, nombre: "ISAPRE MASTER SALUD SOCIEDAD AN" },
  { id: 17, nombre: "ISAPRE MASVIDA SOCIEDAD ANONIMA." },
  { id: 18, nombre: "ISAPRE NORMEDICA SOCIEDAD ANONI" },
  { id: 19, nombre: "ISAPRE NORTE GRANDE LTDA" },
  { id: 20, nombre: "ISAPRE RIO BLANCO LTDA" },
  { id: 21, nombre: "JEF.EJE.ADM.FONDOS DE SALUD DE" },
  { id: 22, nombre: "ISAPRE RIO BLANCO LTDA" },
  { id: 23, nombre: "ISAPRE MASTER SALUD SOCIEDAD AN" },
  { id: 24, nombre: "NUEVA MASVIDA SA" },
  { id: 25, nombre: "SAN LORENZO ISAPRE LTDA." },
  { id: 26, nombre: "VIDA TRES SOCIEDAD ANONIMA" },
];

export const getIsapres = async () => {
  return isapres;
};

const cargos = [
  { id: 1, cargo: "Mesero" },
  { id: 2, cargo: "Cocinero" },
  { id: 3, cargo: "Ayudante de Cocina" },
  { id: 4, cargo: "Chef" },
  { id: 5, cargo: "Administrador de caja" },
  { id: 6, cargo: "Gerente" },
];

export const getCargos = async () => {
  return cargos;
};

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
