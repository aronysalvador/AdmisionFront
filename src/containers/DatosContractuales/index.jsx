import { useState, useEffect } from 'react';
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { getComunStyle } from "../../css/comun";
import { getSpaceStyle } from "../../css/spaceStyle";
import Header from "../../components/header/index";
import Cabecera from "../../components/cabecera/index";
import SelectsAutocomplete from './../../components/SelectsAutocomplete'
import { TextField } from "@material-ui/core";
import { Format } from "../../helpers/strings";
import ClearIcon from '@material-ui/icons/Clear';
import Grid from '@material-ui/core/Grid';
import Time from './../../components/Pickers/Time'
import PickerDate from './../../components/Pickers/Date-YM'
import moment from "moment";
import "moment/locale/es";
import { ValidarFechaMesAnio, ValidarHora } from 'helpers/utils';
moment.locale("es");

const NoTopTextField = withStyles({
    root: {
        '&& .MuiOutlinedInput-notchedOutline': {
            top: "-2px"
        }
    }
})(TextField);

export default () => {
    const comunClass = getComunStyle();
    const spaceStyle = getSpaceStyle();

    const dispatch = useDispatch();
    const {
        addmissionForm: { percentage, profesionForm, cargoForm, tipoDeContrato, tipoJornadaForm, tipoRemuneracion, categoriaOcupacionalForm, ingresoTrabajoActualVisual, inicioJornadaLaboral, finJornadaLaboral, CamposDocumentos, FechaSintomasEP, FechaExposicionAgenteEP },
        microsoftReducer,
        profesionForm: profesionList,
        categoriaOcupacionalForm: categoriaList,
        tipoContratoForm: tipoContratoList,
        tipoRemuneracionForm: tipoRemuneracionList,
        tipoJornadaLaboralForm: tipoJornadaLaboralList
    } = useSelector((state) => state, shallowEqual);

    const [ profesion, setProfesion ] = useState(profesionForm?profesionForm:"");
    const [ categoriaOcup, setCategoriaOcup ] = useState(categoriaOcupacionalForm?categoriaOcupacionalForm:"");
    const [ contrato, setContrato ] = useState(tipoDeContrato?tipoDeContrato:"");
    const [ cargo, setCargo ] = useState(cargoForm?cargoForm:"");
    const [ remuneracion, setRemuneracion ] = useState(tipoRemuneracion?tipoRemuneracion:"");
    const [ jornada, setJornada ] = useState(tipoJornadaForm?tipoJornadaForm:"");
    const [ errorCargo, setErrorCargo ] = useState(false);
    const [ valid, setValid ] = useState(false);
    const [ errorFecha, setErrorFecha ] = useState("");

    const stringToHours = (str) => {
        return moment(str, "HH:mm").format("HH:mm")
    }

    const stringToDate = (str) => {
        return moment(str, "MM-YYYY").format("MM-YYYY")
    }

    const [ entrada, setEntrada ] = useState(inicioJornadaLaboral ? stringToHours(inicioJornadaLaboral) : stringToHours("09:30"));

    const [ salida, setSalida ] = useState(finJornadaLaboral?stringToHours(finJornadaLaboral):stringToHours("18:30"));

    const [ ingreso, setIngreso ] = useState(ingresoTrabajoActualVisual?stringToDate(ingresoTrabajoActualVisual):moment().format("MM-YYYY"));

    const handleCargoChange = (texto) => {
        if (texto.length < 5)
            setErrorCargo(true);
        else
            setErrorCargo(false);
    }

    const validateEP = (ingreso) => {
        if ((FechaSintomasEP === undefined || FechaSintomasEP === null || FechaSintomasEP === "") && (FechaExposicionAgenteEP === undefined || FechaExposicionAgenteEP === null || FechaExposicionAgenteEP === ""))
            return true;
        if (!ingreso)
            return false;
        let [ mes, anio ] = ingreso.split("-");
        let [ , month, year ] = FechaSintomasEP.split(".");
        if (
            parseInt(anio) > parseInt(year) ||
            parseInt(anio) === parseInt(year) && parseInt(mes) > parseInt(month)
        ){
            setErrorFecha("La fecha debe ser anterior al inicio de sintomas "+FechaSintomasEP)

            return false;
        }

        [ , month, year ] = FechaExposicionAgenteEP.split(".");
        if (
            parseInt(anio) > parseInt(year) ||
            parseInt(anio) === parseInt(year) && parseInt(mes) > parseInt(month)
        ){
            setErrorFecha("La fecha debe ser anterior a la exposición de agentes "+FechaExposicionAgenteEP)

            return false;
        }

        return true;
    }

    useEffect(() => {
        setErrorFecha("");

        let validprofesion= validObject(profesion);
        let validcategoriaOcup = validObject(categoriaOcup);
        let validcontrato = validObject(contrato);
        let validcargo = validObject(cargo);
        let validremuneracion = validObject(remuneracion);
        let validjornada = validObject(jornada);

        if (
                (
                    (profesion!=="" && validprofesion) &&
                    (categoriaOcup!=="" && validcategoriaOcup) &&
                    (contrato!=="" && validcontrato) &&
                    (cargo!=="" && validcargo) &&
                    (remuneracion!=="" && validremuneracion) &&
                    (jornada!=="" && validjornada)
                ) &&
                (ValidarHora(entrada) && ValidarHora(salida)) &&
                (ValidarFechaMesAnio(ingreso))
            ){
               setValid(validateEP(ingreso));

               return;
            }
        else {
            setValid(false);

            return;
        }
    }, [ profesion, categoriaOcup, contrato, cargo, remuneracion, jornada, entrada, salida, ingreso ])

    const validObject = (data) => {
        let valid = true;
        if (typeof data === "object"){
            if (data === null){
                valid = false
            } else {
                if ((Object.keys(data).length === 0)){
                    valid = false
                }
            }
        }

        return valid
    }

    const handleNext = () => {
        dispatch(updateForm("profesionForm", profesion));
        dispatch(updateForm("cargoForm", cargo));
        dispatch(updateForm("tipoDeContrato", contrato));
        dispatch(updateForm("tipoJornadaForm", jornada));
        dispatch(updateForm("tipoRemuneracion", remuneracion));
        dispatch(updateForm("categoriaOcupacionalForm", categoriaOcup));
        dispatch(updateForm("ingresoTrabajoActualVisual", ingreso));
        let x = ingreso.split("-")
        dispatch(updateForm("ingresoTrabajoActual", `${x[1]}-${x[0]}-01T00:00:00.000Z`)); // formato anterior
        dispatch(updateForm("inicioJornadaLaboral", entrada));
        dispatch(updateForm("finJornadaLaboral", salida));
        dispatch(handleSetStep((categoriaOcup.nombre==="Empleadores" || categoriaOcup.nombre==="Trabajador independiente") ? 25.1 : 26.1))
    }

    return (
        <div className={comunClass.root}>
            <div className={comunClass.displayDesk}>
                <Header
                    userMsal={ microsoftReducer.userMsal }
                />
            </div>
            <div className={comunClass.beginContainerDesk}>
                <Cabecera
                    id='DatosContractuales-BtnBack'
                    dispatch={() => {
                        dispatch(handleSetStep(CamposDocumentos?.anteceNocuenta === "x" ? 19.23 : 19.24, 19.4))
                    }}
                    percentage={percentage}
                />
            </div>

            <div className={comunClass.boxDesk2}>
                <div className={comunClass.bottomElement2} style={{position: 'inherit'}}>
                    <div className={comunClass.displayMobile}>
                        <div className={spaceStyle.spaceMin1} />
                    </div>

                    <div className='container'>
                        <div className='row'>

                            <div className='col-md-6'>

                                <div className={[ 'col-md-12', comunClass.backgroundGrey ].join(' ')}>
                                    <SelectsAutocomplete
                                        id='DatosContractuales-AutocompleteCategorias'
                                        first='dark'
                                        txt1='Tipo de'
                                        txt2='categoría ocupacional'
                                        data={categoriaOcup}
                                        setData={setCategoriaOcup}
                                        listado={categoriaList}
                                        options={[ 'id', 'nombre' ]}
                                    />

                                    <div className={comunClass.displayDesk}>
                                        <div className={spaceStyle.space1} />
                                    </div>

                                    <SelectsAutocomplete
                                        id='DatosContractuales-AutocompleteContratos'
                                        first='dark'
                                        txt1='Tipo de'
                                        txt2='contrato'
                                        data={contrato}
                                        setData={setContrato}
                                        listado={tipoContratoList}
                                        options={[ 'id', 'nombre' ]}
                                    />

                                    <div className={comunClass.displayDesk}>
                                        <div className={spaceStyle.space1} />
                                    </div>

                                    <SelectsAutocomplete
                                        id='DatosContractuales-AutocompleteProfesiones'
                                        first='blue'
                                        txt1='Profesión u oficio'
                                        txt2='del paciente'
                                        data={profesion}
                                        setData={setProfesion}
                                        listado={profesionList}
                                        options={[ 'codigo', 'nombre' ]}
                                    />

                                    <div className={comunClass.displayDesk}>
                                        <div className={spaceStyle.space1} />
                                    </div>

                                    <div className={comunClass.containerTextBoxDataCont}>
                                        <Grid className={[ comunClass.titleBlackDataCont, comunClass.textPrimaryDeskDataCont ]}>
                                            <Grid component='span' className={[ comunClass.titleBlue, comunClass.titleBlueDataCont ]}>
                                                Cargo
                                            </Grid>
                                            &nbsp; del paciente en la empresa
                                        </Grid>
                                        <NoTopTextField
                                            id='DatosContractuales-Input1'
                                            value={cargo}
                                            onFocus={() => setErrorCargo(false)}
                                            onChange={(e) => setCargo(Format.caracteresInvalidos(e.target.value))}
                                            onBlur={(e) => handleCargoChange(Format.caracteresInvalidos(e.target.value))}
                                            helperText={
                                                errorCargo
                                                ? "Debe ingresar al menos 5 caracteres"
                                                : "Ejemplo: Analista, Operario, Maestro"
                                            }
                                            error={errorCargo}
                                            margin='dense'
                                            variant='outlined'
                                            autoComplete='off'
                                            type='text'
                                            inputProps={{ maxLength: 25 }}
                                            fullWidth
                                            InputProps={{
                                                style: {background: "#ffff"},
                                                endAdornment: (
                                                        <ClearIcon style={{cursor: 'pointer'}} onClick={() => {
                                                            setErrorCargo(false)
                                                            setCargo("");
                                                        }}
                                                        />
                                                )
                                            }}
                                        />
                                    </div>

                                </div>

                            </div>

                            <div className='col-md-6'>

                                <div className={[ 'col-md-12', comunClass.backgroundGrey ].join(' ')}>

                                    <SelectsAutocomplete
                                        id='DatosContractuales-AutocompleteRemuneración'
                                        first='dark'
                                        txt1='Tipo de'
                                        txt2='remuneración'
                                        data={remuneracion}
                                        setData={setRemuneracion}
                                        listado={tipoRemuneracionList}
                                        options={[ 'id', 'nombre' ]}
                                    />

                                    <div className={comunClass.displayDesk}>
                                        <div className={spaceStyle.space1} />
                                    </div>

                                    <SelectsAutocomplete
                                        id='DatosContractuales-AutocompleteJornada'
                                        first='dark'
                                        txt1='Tipo de'
                                        txt2='jornada'
                                        data={jornada}
                                        setData={setJornada}
                                        listado={tipoJornadaLaboralList}
                                        options={[ 'id', 'nombre' ]}
                                    />

                                    <div className={comunClass.displayDesk}>
                                        <div className={spaceStyle.space1} />
                                    </div>

                                    <div className={comunClass.containerTextBoxDataCont}>
                                        <Grid className={[ comunClass.titleBlackDataCont, comunClass.textPrimaryDeskDataCont ]}>
                                        Horario jornada
                                            <Grid component='span' className={[ comunClass.titleBlue, comunClass.titleBlueDataCont ]}>
                                                &nbsp; del día del accidente
                                            </Grid>
                                        </Grid>

                                        <div className='row'>

                                            <div className='col-md-6'>

                                                <div>
                                                    <Grid
                                                    className={comunClass.tituloTextBox}
                                                    style={{marginBottom: '5px'}}
                                                    >
                                                    Entrada
                                                    </Grid>
                                                </div>

                                                <Time id='DatosContractuales-TimePicker1' time={entrada} setTime={setEntrada} />

                                            </div>

                                            <div className='col-md-6'>

                                                <div>
                                                    <Grid
                                                    className={comunClass.tituloTextBox}
                                                    style={{marginBottom: '5px'}}
                                                    >
                                                    Salida
                                                    </Grid>
                                                </div>

                                                <Time id='DatosContractuales-TimePicker2' time={salida} setTime={setSalida} />

                                            </div>

                                        </div>

                                    </div>

                                    <div className={comunClass.displayDesk}>
                                        <div className={spaceStyle.space1} />
                                    </div>

                                    <div className={comunClass.containerTextBoxDataCont}>
                                        <Grid className={[ comunClass.titleBlackDataCont, comunClass.textPrimaryDeskDataCont ]}>
                                            <Grid component='span' className={[ comunClass.titleBlue, comunClass.titleBlueDataCont ]}>
                                            Fecha de ingreso
                                            </Grid>
                                                &nbsp;a su trabajo
                                        </Grid>
                                        <PickerDate date={ingreso} setDate={setIngreso} id='DatosContractuales-DatePicker1' />
                                        <div style={{color: "red"}}>{errorFecha}</div>
                                    </div>

                                    <div className={comunClass.displayDesk}>
                                        <div className={spaceStyle.space1} />
                                    </div>

                                </div>

                            </div>

                            <div className='col-md-12'>
                            <div className={spaceStyle.spaceMin05} />
                                <Button
                                    id='DatosContractuales-Btn1'
                                    variant='contained'
                                    className={comunClass.buttonAchs}
                                    disabled={!valid}
                                    onClick={() => handleNext() }
                                >
                                    Continuar
                                </Button>
                            </div>

                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
}