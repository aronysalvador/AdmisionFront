const sucursales = [
    { id: 1, direccion: "Av Carlos Valdovinos" },
    { id: 2, direccion: "Av Vicuña Mackenna" },
    { id: 3, direccion: "Alameda" },
    { id: 4, direccion: "Huerfanos" },
    { id: 5, direccion: "Juan carlos Rider" },
    { id: 6, direccion: "Los militares" },
];

export const getSucursalesUsuarios = async(rut) => {
    return sucursales;
};

export const sucursalesOficina = [{
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
    {
        id: 14,
        key: "13110",
        nombreSucursal: "La Florida 6",
        numero: 2000,
        comunaNombre: "La Florida",
    },
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

export const getRazonSocial = async() => {
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

export const getTipoJornadaLaboral = async() => {
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

const categoriaOcupacional = [
    { id: 1, nombre: "Empleador" },
    { id: 2, nombre: "Trabajador Dependiente" },
    { id: 3, nombre: "Trabajador Independiente" },
    { id: 4, nombre: "Familiar no remunerado" },
    { id: 5, nombre: "Trabajador voluntario" },
];

export const getCategoriaOcupacional = async() => {
    return categoriaOcupacional;
};

const tiposDeContrato = [
    { id: 1, nombre: "Indefinido" },
    { id: 2, nombre: "Plazo fijo" },
    { id: 3, nombre: "Por obra" },
    { id: 4, nombre: "Temporada" },
];

export const getTiposDeContrato = () => {
    return tiposDeContrato;
};


export const getAffiliateValidations = async(rut) => {
    return {
        id: 1,
        BPValue: '1002615349',
        rutAfiliado: rut,
        cita: {
            fecha: '14 Mayo',
            hora: '08:30',
            lugar: 'Puente Alto',
            unidad: 'Cirugía'
        },
        siniestros: [{
                id: 17454785,
                descripcion: 'Trayecto',
                fecha: '13 Jun 2020',
                CUN: 'CUN',
                codigoUnicoNacionalExterno: 'CUNE',
                cesa: 'CeSa',
                interLComercial: 'InterLComercial',
                tipoLey: 'Tipo Ley',
                reposoActivo: true,
                hora: '13:24'
            },
            {
                id: 24457874,
                descripcion: 'Trabajo',
                fecha: '13 Jun 2020',
                CUN: 'CUN',
                codigoUnicoNacionalExterno: 'CUNE',
                cesa: 'CeSa',
                interLComercial: 'InterLComercial',
                tipoLey: 'Tipo Ley',
                reposoActivo: true,
                hora: '18:23'
            }
        ]
    }
};
const razonAlerta = [{
        key: 1,
        nombre: "Posible causa no laboral",
        tipo: [{
                key: 1,
                nombre: "Accidente sin presentación oportuna, sin testigo y aviso tardío a empresa",
            },
            {
                key: 2,
                nombre: "Accidente en Trámites personales",
            },
            {
                key: 3,
                nombre: "Accidente ocurrido en el extranjero",
            },
            {
                key: 4,
                nombre: "Actividad Deportiva y/o Recreativa",
            },
            {
                key: 5,
                nombre: "Broma en el Lugar de Trabajo",
            },
        ],
    },
    { key: 2, nombre: "Dirigente sindical en cometido gremial" },
    { key: 3, nombre: "Trabajo a distancia" },
    { key: 4, nombre: "Fuerza mayor extraña" },
    { key: 5, nombre: "Accidente en control médico" },
    { key: 6, nombre: "No registra alerta" },
];

export const getRazonAlerta = async() => {
    return razonAlerta;
};


const agenteCausaJson = [
    { id: 1, code: "0001", nombre: "0001 Ruido (estable o fluctuante)", nombreSAP: "Ruido (estable o fluctuante)" },
    { id: 2, code: "0002", nombre: "0002 Sílice cristalizada-cuarzo", nombreSAP: "Sílice cristalizada-cuarzo" },
    { id: 3, code: "0004", nombre: "0004 Falta de orden y planificación del trabajo", nombreSAP: "Falta de orden y planificación del trabajo" },
    { id: 4, code: "0005", nombre: "0005 Falta de orden y aseo", nombreSAP: "Falta de orden y aseo" },
    { id: 5, code: "0006", nombre: "0006 Falta de orden y aseo", nombreSAP: "Falta de orden y aseo" }
];

export const agenteCausa = async() => {
    return agenteCausaJson;
};

const CriteriosGravedadJson = [
    { key: 49, value: "Otro", nombre: "1 - Otro" },
    { key: 50, value: "Grave", nombre: "2 - Grave" },
    { key: 51, value: "Fatal", nombre: "3 - Fatal" }
];

export const CriteriosGravedad = async() => {
    return CriteriosGravedadJson;
};