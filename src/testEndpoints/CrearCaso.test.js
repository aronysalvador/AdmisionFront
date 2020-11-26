import { sendingCaso } from  './../redux/actions/AdmissionAction';

describe("Load",()=>{
  
    it("Probar Endpoint que obtiene data de Afiliado",async()=>{

        const objeto = {
            "id_tipo": 1,
            "id_estado": 2,
            "rut_paciente": "20.927.201-0",
            "mail_admisionista": "onunezc@ext.achs.cl",
            "admision_json": {
                "percentage": 3703.703703703704,
                "rut": "20.927.201-0",
                "isAfiliado": "Si",
                "empresa": "",
                "rutEmpresa": "70360100-6",
                "isapreSeleccionado": {
                    "id": "2000133146",
                    "nombre": "CRUZ BLANCA"
                },
                "lugarAccidente": "sadfasdfa",
                "objetoAccidente": "asdfasdf",
                "descripcionAccidente": "asdfsadf",
                "relatoAccidente": "Al momento del accidente estaba sadfasdfa. Lo que ocurrió fue que asdfsadf. El accidente ocurrió con asdfasdf.",
                "volverAConcatenar": false,
                "testigos": {
                    "nombre": "",
                    "cargo": ""
                },
                "responsable": {
                    "nombre": "",
                    "cargo": ""
                },
                "fechaHoraResponsable": {},
                "fechaHoraSiniestro": {
                    "days": 26,
                    "month": 11,
                    "year": 2020,
                    "horas": 12,
                    "indiceMinutos": 5,
                    "minutos": 50
                },
                "SucursalEmpresa": "",
                "DireccionEmpresa": "ERRAZURIZ356",
                "comunaEmpresa": "",
                "direccionParticular": "BLANCO GARCES 41, ESTACION CENTRAL",
                "telefonoParticular": "+56 9 3772 1849",
                "inicioJornadaLaboral": "9:30",
                "finJornadaLaboral": "18:30",
                "ingresoTrabajoActual": "2020-01-01T03:00:00.000Z",
                "desarrollarTrabajoHabitual": "Si",
                "tipoRemuneracion": {
                    "id": 1,
                    "nombre": "Salario Fijo",
                    "selected": true
                },
                "tipoDeContrato": {
                    "id": 1,
                    "nombre": "Indefinido",
                    "selected": true
                },
                "cargoForm": "asdfsdf",
                "sucursalEmpresaSiniestro": {
                    "description": "Errázuriz 356, Ancud, Chile",
                    "matched_substrings": [
                        {
                            "length": 9,
                            "offset": 0
                        },
                        {
                            "length": 3,
                            "offset": 10
                        }
                    ],
                    "place_id": "ChIJBTK_F1mNIpYRLEZYi35XBrU",
                    "reference": "ChIJBTK_F1mNIpYRLEZYi35XBrU",
                    "structured_formatting": {
                        "main_text": "Errázuriz 356",
                        "main_text_matched_substrings": [
                            {
                                "length": 9,
                                "offset": 0
                            },
                            {
                                "length": 3,
                                "offset": 10
                            }
                        ],
                        "secondary_text": "Ancud, Chile"
                    },
                    "terms": [
                        {
                            "offset": 0,
                            "value": "Errázuriz"
                        },
                        {
                            "offset": 10,
                            "value": "356"
                        },
                        {
                            "offset": 15,
                            "value": "Ancud"
                        },
                        {
                            "offset": 22,
                            "value": "Chile"
                        }
                    ],
                    "types": [
                        "street_address",
                        "geocode"
                    ]
                },
                "urlMapasucursalEmpresaSiniestro": "https://desa.salud.achs.cl/orquestador/api/geo/getMapaEstatico?id=ChIJBTK_F1mNIpYRLEZYi35XBrU&size=300x280",
                "SucursalEmpresaObjeto": {
                    "sucursalCargo": "0000000239",
                    "codigo": 239,
                    "nombre": "",
                    "id_comuna": "202",
                    "comuna": "ANCUD",
                    "codigo_region": 10,
                    "region": "X - Puerto Montt",
                    "direccion": "ERRAZURIZ356",
                    "latitud": "-41.466666666667",
                    "longitud": "-72.950000000000"
                },
                "centrosForm": {
                    "id": 6,
                    "Centro_m": "Alameda",
                    "UO_Medica": "ALAMAPRI",
                    "UO_Tratamiento": "ALATCAPR"
                },
                "siniestroDetalle": {},
                "siniestroOpciones": {
                    "mensajeAlerta": "Este paciente ya tiene un siniestro",
                    "mensajeBoton": "Ver su(s) siniestro(s)",
                    "origen": "getRut"
                },
                "tipoSiniestro": {
                    "Id": 1,
                    "Descripcion": "Accidente Trabajo"
                },
                "DireccionTemporal": {},
                "LatTemporal": "",
                "LongTemporal": "",
                "AccidenteEnSucursal": "No",
                "sucursalCargo": "0000000239",
                "comunaSiniestro": "ANCUD",
                "comunaDireccionParticular": "ESTACION CENTRAL",
                "BP": "1002615349",
                "mensajeErrorSAP": "",
                "TrabajadorIndependiente": "Si",
                "tab": 0,
                "usuarioSAP": "SADIAZG",
                "datosAdicionalesSAP": {
                    "apellidoMaterno": "Núñez",
                    "apellidoPaterno": "Chirinos",
                    "nombre": "Orianna Verhuzka",
                    "fechaNacimiento": "1983-09-07",
                    "masculino": "X",
                    "femenino": "",
                    "nacionalidad": "AR",
                    "lugarNacimiento": "Chile",
                    "estadoCivil": "2"
                },
                "razonSocial": {
                    "bp": "2000462553",
                    "name": "ASOCIACIÓN CHILENA DE SEGURIDAD",
                    "rut": "70360100-6"
                },
                "cantidadSucursales": 1,
                "comunaSucursal": {
                    "id": 13,
                    "codigo_region": 10,
                    "codigo_comuna": "202",
                    "nombre": "ANCUD"
                },
                "sucursales": [
                    {
                        "sucursalCargo": "0000000239",
                        "codigo": 239,
                        "nombre": "",
                        "id_comuna": "202",
                        "comuna": "ANCUD",
                        "codigo_region": 10,
                        "region": "X - Puerto Montt",
                        "direccion": "ERRAZURIZ356",
                        "latitud": "-41.466666666667",
                        "longitud": "-72.950000000000"
                    }
                ],
                "codigoSucursal": 239,
                "relatoAccidenteTemporal": "Al momento del accidente estaba sadfasdfa. Lo que ocurrió fue que asdfsadf. El accidente ocurrió con asdfasdf.",
                "lugarReferenciaSiniestro": "asdfsdf",
                "afpForm": {
                    "id": "369020105539063114",
                    "codigo": "004",
                    "nombre": "MODELO",
                    "selected": true
                },
                "profesionForm": {
                    "codigo": 2149,
                    "nombre": "Ingeniero(a)"
                },
                "tipoJornadaForm": {
                    "id": "1",
                    "nombre": "Lunes a Viernes",
                    "key": "369020200521591921",
                    "selected": true
                },
                "categoriaOcupacionalForm": {
                    "id": 3,
                    "nombre": "Cuenta Propia",
                    "selected": true
                },
                "emailusuario": "notienecorreo@achs.cl"
            },
            "telefono_paciente": "+56 9 3772 1849",
            "email_paciente": "notienecorreo@achs.cl"
        };


        const resultado = await sendingCaso(objeto)
        
        console.log(resultado)
        
        expect(resultado.status).toEqual(500)
    })
})
