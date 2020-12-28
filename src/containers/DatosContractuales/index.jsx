import React, { useState, useEffect } from 'react';
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { handleSetStep,updateForm } from "../../redux/actions/AdmissionAction";
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
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker } from '@material-ui/pickers'
import { ThemeProvider } from "@material-ui/styles";
import {defaultMaterialThemeKeyboardTimePicker} from "../../css/styleTimePicker"; 
import {defaultMaterialThemeKeyboardDatePicker} from "../../css/styleDatePicker";
import image from './../../img/iconClock.svg'
import imageDate from './../../img/iconCalendar.svg'
import MomentUtils from '@date-io/moment';
import moment from "moment";
import "moment/locale/es";
moment.locale("es");

export default () =>{ 
    const comunClass = getComunStyle();
    const spaceStyle = getSpaceStyle();

    const NoPaddingPicker = withStyles({
        root: {
          '&& .MuiOutlinedInput-input': {
            padding: "8.5px 14px"
          }
        }
    })(KeyboardTimePicker);

    const NoPaddingDatePicker = withStyles({
        root: {
          '&& .MuiOutlinedInput-input': {
            padding: "8.5px 14px"
          }
        }
    })(KeyboardDatePicker);

        
    const dispatch = useDispatch();
    const { 
        addmissionForm: { percentage, profesionForm, cargoForm, tipoDeContrato, tipoJornadaForm, tipoRemuneracion, categoriaOcupacionalForm, ingresoTrabajoActualVisual, inicioJornadaLaboral, finJornadaLaboral },  
        microsoftReducer, 
        profesionForm: profesionList, 
        categoriaOcupacionalForm: categoriaList,
        tipoContratoForm: tipoContratoList,
        tipoRemuneracionForm: tipoRemuneracionList,
        tipoJornadaLaboralForm: tipoJornadaLaboralList
     } = useSelector((state) => state, shallowEqual);

    const [profesion, setProfesion] = useState(profesionForm?profesionForm:"");
    const [categoriaOcup, setCategoriaOcup] = useState(categoriaOcupacionalForm?categoriaOcupacionalForm:"");
    const [contrato, setContrato] = useState(tipoDeContrato?tipoDeContrato:"");
    const [cargo, setCargo] = useState(cargoForm?cargoForm:"");
    const [remuneracion, setRemuneracion] = useState(tipoRemuneracion?tipoRemuneracion:"");
    const [jornada, setJornada] = useState(tipoJornadaForm?tipoJornadaForm:"");
    const [errorCargo, setErrorCargo] = useState(false);
    const [valid, setValid] = useState(false);

    const stringToHours = (str) => {
        return moment(str, "HH:mm").format("HH:mm")
    }
    
    const stringToDate = (str) => {
        return moment(str, "MM-YYYY").format("MM-YYYY")
    }    

    const dateFormatter = str => {
        return str;
    };    
    
    const inputRefEntrada = React.useRef();
    const [selectedDate, setDate] = useState(moment());
    const [entrada, setEntrada] = useState(inicioJornadaLaboral ? stringToHours(inicioJornadaLaboral) : stringToHours("09:30"));    
    const onDateChange = (date, value) => {
        setDate(date);
        setEntrada(value);
    };

    const inputRefSalida = React.useRef();
    const [selectedDateSalida, setDateSalida] = useState(moment());
    const [salida, setSalida] = useState(finJornadaLaboral?stringToHours(finJornadaLaboral):stringToHours("18:30"));  
    const onDateChangeSalida = (date, value) => {
        setDateSalida(date);
        setSalida(value);
    };

    const inputRefIngreso = React.useRef();
    const [selectedDateIngreso, setDateIngreso] = useState(moment());
    const [ingreso, setIngreso] = useState(ingresoTrabajoActualVisual?stringToDate(ingresoTrabajoActualVisual):moment().format("MM-YYYY"));  
    const onDateChangeIngreso = (date, value) => {
        setDateIngreso(date);
        setIngreso(value);
    };


    const handleCargoChange = (texto) => {        
        if (texto.length < 5) {
            setErrorCargo(true);
        }else{
            setErrorCargo(false);
        }        
    }

    useEffect(()=>{       
        if(profesion!=="" && categoriaOcup!=="" && contrato!=="" && cargo!=="" && remuneracion!=="" && jornada!=="" && entrada!=="" && salida!=="" && ingreso!==""){
            setValid(true)  
        }else{
            setValid(false)
        }
        // eslint-disable-next-line
    },[profesion,categoriaOcup,contrato,cargo,remuneracion,jornada,entrada,salida,ingreso])


    const handleNext = () => {
        dispatch(updateForm("profesionForm", profesion));
        dispatch(updateForm("cargoForm", cargo));
        dispatch(updateForm("tipoDeContrato", contrato));
        dispatch(updateForm("tipoJornadaForm", jornada));
        dispatch(updateForm("tipoRemuneracion", remuneracion));
        dispatch(updateForm("categoriaOcupacionalForm", categoriaOcup));
        dispatch(updateForm("ingresoTrabajoActualVisual", ingreso));
        let x = ingreso.split("-")
        dispatch(updateForm("ingresoTrabajoActual", `${x[1]}-${x[0]}-01T00:00:00.000Z`)); //formato anterior
        dispatch(updateForm("inicioJornadaLaboral", entrada));
        dispatch(updateForm("finJornadaLaboral", salida));       
        dispatch(handleSetStep((categoriaOcup.nombre==="Empleadores" || categoriaOcup.nombre==="Cuenta Propia") ? 25.1 : 26.1))
    }

    return(
        <div className={comunClass.root}>
            <div className={comunClass.displayDesk}> 
                <Header
                    userMsal={ microsoftReducer.userMsal }
                />
            </div>
            <div className={comunClass.beginContainerDesk}>
                <Cabecera
                    dispatch={() => dispatch(handleSetStep(19.2))}
                    percentage={percentage}
                />
            </div>   


            <div className={comunClass.boxDesk2}>
                <div className={comunClass.bottomElement2} style={{position:'inherit'}}>
                    <div className={comunClass.displayMobile}>
                        <div className={spaceStyle.spaceMin1} />
                    </div>


                    <div className="container">
                        <div className="row">
    
                            <div className='col-md-6'>

                                <div  className={['col-md-12', comunClass.backgroundGrey].join(' ')}>

                                    <SelectsAutocomplete
                                        first="dark"
                                        txt1="Ingresar la"
                                        txt2="categoría ocupacional" 
                                        data={categoriaOcup}
                                        setData={setCategoriaOcup}
                                        listado={categoriaList}
                                        options={['id','nombre']}
                                    />

                                    <div className={comunClass.displayDesk}>
                                        <div className={spaceStyle.space1} />
                                    </div>

                                    <SelectsAutocomplete
                                        first="dark"
                                        txt1="Tipo de"
                                        txt2="contrato" 
                                        data={contrato}
                                        setData={setContrato}
                                        listado={tipoContratoList}
                                        options={['id','nombre']}
                                    />

                                    <div className={comunClass.displayDesk}>
                                        <div className={spaceStyle.space1} />
                                    </div>

                                    <SelectsAutocomplete
                                        first="blue"
                                        txt1="Profesión u oficio"
                                        txt2="del paciente" 
                                        data={profesion}
                                        setData={setProfesion}
                                        listado={profesionList}
                                        options={['codigo','nombre']}
                                    />

                                    <div className={comunClass.displayDesk}>
                                        <div className={spaceStyle.space1} />
                                    </div>

                                    <div className={comunClass.containerTextBoxDataCont}>
                                        <Grid className={[comunClass.titleBlackDataCont, comunClass.textPrimaryDeskDataCont]}>
                                            <Grid component="span" className={[comunClass.titleBlue, comunClass.titleBlueDataCont]}>
                                                Cargo
                                            </Grid>          
                                            &nbsp; del paciente en la empresa
                                        </Grid> 
                                        <TextField
                                            id="cargo"
                                            value={cargo}
                                            onFocus={()=>setErrorCargo(false)}
                                            onChange={(e) => setCargo(Format.caracteresInvalidos(e.target.value))}
                                            onBlur={(e)=>handleCargoChange(Format.caracteresInvalidos(e.target.value))}
                                            helperText={
                                                errorCargo
                                                ? "Debe ingresar al menos 5 caracteres"
                                                : "Ejemplo: Analista, Operario, Maestro"
                                            }
                                            error={errorCargo}
                                            margin="dense"
                                            variant="outlined"
                                            autoComplete="off"
                                            type="text"
                                            inputProps={{ maxLength: 25 }}
                                            fullWidth
                                            InputProps={{
                                                style: {
                                                    background: "#ffff"
                                                },
                                                endAdornment: (                                                
                                                        <ClearIcon style={{cursor:'pointer'}}  onClick={() => {
                                                            setErrorCargo(false)
                                                            setCargo("");
                                                        }} />
                                                ),
                                            }}
                                        />
                                    </div>

                                </div>

                            </div>
                        
                            <div className='col-md-6'>

                                <div className={['col-md-12', comunClass.backgroundGrey].join(' ')}>
                                    
                                    <SelectsAutocomplete
                                        first="dark"
                                        txt1="Tipo de"
                                        txt2="remuneración" 
                                        data={remuneracion}
                                        setData={setRemuneracion}
                                        listado={tipoRemuneracionList}
                                        options={['id','nombre']}
                                    />

                                    <div className={comunClass.displayDesk}>
                                        <div className={spaceStyle.space1} />
                                    </div>
                                    
                                    <SelectsAutocomplete
                                        first="dark"
                                        txt1="Tipo de"
                                        txt2="jornada" 
                                        data={jornada}
                                        setData={setJornada}
                                        listado={tipoJornadaLaboralList}
                                        options={['id','nombre']}
                                    />

                                    <div className={comunClass.displayDesk}>
                                        <div className={spaceStyle.space1} />
                                    </div>

                                    <div className={comunClass.containerTextBoxDataCont}>
                                        <Grid className={[comunClass.titleBlackDataCont, comunClass.textPrimaryDeskDataCont]}>
                                            Seleccionar
                                            <Grid component="span" className={[comunClass.titleBlue, comunClass.titleBlueDataCont]}>
                                                &nbsp; horario
                                            </Grid>                                                      
                                        </Grid> 

                                        <div className="row">

                                            <div className="col-md-6">

                                                <div>
                                                    <Grid
                                                    className={comunClass.tituloTextBox}
                                                    style={{marginBottom:'5px'}}
                                                    >
                                                    Entrada
                                                    </Grid>
                                                </div>
                                                <div  style={{ zIndex: 9}} >
                                                    <MuiPickersUtilsProvider utils={MomentUtils} libInstance={moment}  >
                                                        <ThemeProvider theme={defaultMaterialThemeKeyboardTimePicker}>
                                                            <NoPaddingPicker
                                                                inputRef={inputRefEntrada}                                                             
                                                                value={selectedDate}
                                                                format="HH:mm"
                                                                inputValue={entrada}
                                                                onChange={onDateChange}
                                                                rifmFormatter={dateFormatter}
                                                                onError={(e)=>{if(e){inputRefEntrada.current.focus();}}}                                                             
                                                                inputVariant="outlined"                                                            
                                                                InputAdornmentProps={{ position: 'start'}}
                                                                ampm={false}
                                                                fullWidth
                                                                invalidDateMessage="Formato invalido"
                                                                keyboardIcon={<img alt="clock" src={image} />}
                                                                style={{
                                                                    paddingTop: "3px",
                                                                    background: "#ffff"
                                                                }}
                                                        />
                                                        </ThemeProvider>
                                                    </MuiPickersUtilsProvider>  
                                                </div>

                                            </div>

                                            <div className="col-md-6">
    
                                                <div>
                                                    <Grid
                                                    className={comunClass.tituloTextBox}
                                                    style={{marginBottom:'5px'}}
                                                    >
                                                    Salida
                                                    </Grid>
                                                </div>
                                                <div  style={{ zIndex: 9}} >
                                                    <MuiPickersUtilsProvider utils={MomentUtils} libInstance={moment} >
                                                        <ThemeProvider theme={defaultMaterialThemeKeyboardTimePicker}>
                                                            <NoPaddingPicker
                                                                inputRef={inputRefSalida}                                                             
                                                                value={selectedDateSalida}
                                                                format="HH:mm"
                                                                inputValue={salida}
                                                                onChange={onDateChangeSalida}
                                                                rifmFormatter={dateFormatter}
                                                                onError={(e)=>{if(e){inputRefSalida.current.focus();}}}                                                             
                                                                inputVariant="outlined"                                                            
                                                                InputAdornmentProps={{ position: 'start'}}
                                                                ampm={false}
                                                                fullWidth
                                                                invalidDateMessage="Formato invalido"
                                                                keyboardIcon={<img alt="clock" src={image} />}
                                                                style={{
                                                                    paddingTop: "3px",
                                                                    background: "#ffff"
                                                                }}
                                                        />
                                                        </ThemeProvider>
                                                    </MuiPickersUtilsProvider>  
                                                </div>

                                            </div>

                                        </div>  

                                    </div>

                                    <div className={comunClass.displayDesk}>
                                        <div className={spaceStyle.space1} />
                                    </div>

                                    <div className={comunClass.containerTextBoxDataCont}>
                                        <Grid className={[comunClass.titleBlackDataCont, comunClass.textPrimaryDeskDataCont]}>                    
                                            <Grid component="span" className={[comunClass.titleBlue, comunClass.titleBlueDataCont]}>
                                            Fecha de ingreso
                                            </Grid> 
                                                &nbsp;a su trabajo   
                                        </Grid> 
                                        <div  style={{ zIndex: 9}} >
                                            <MuiPickersUtilsProvider libInstance={moment} utils={MomentUtils} >
                                                <ThemeProvider theme={defaultMaterialThemeKeyboardDatePicker}>
                                                <NoPaddingDatePicker
                                                    inputVariant="outlined"
                                                    views={["year", "month"]}
                                                    disableFuture

                                                    inputRef={inputRefIngreso}                                                             
                                                    value={selectedDateIngreso}
                                                    format="MM-YYYY"
                                                    inputValue={ingreso}
                                                    onChange={onDateChangeIngreso}
                                                    rifmFormatter={dateFormatter}
                                                    onError={(e)=>{if(e){inputRefIngreso.current.focus();}}}                                 

                                                    animateYearScrolling       
                                                    InputAdornmentProps={{ position: 'start'}}
                                                    fullWidth
                                                    invalidDateMessage="Formato invalido"
                                                    maxDateMessage="La fecha no puede exceder al día de hoy"
                                                    minDateMessage="La fecha es invalida"
                                                    keyboardIcon={<img alt="calendar" src={imageDate}/>}
                                                    style={{
                                                        paddingTop: "3px",
                                                        background: "#ffff"
                                                    }}
                                            />
                                            </ThemeProvider>
                                            </MuiPickersUtilsProvider>    
                                        </div>
                                    </div>

                                    <div className={comunClass.displayDesk}>
                                        <div className={spaceStyle.space1} />
                                    </div>


                                </div>

                            </div>
                            
                            <div className="col-md-12">
                            <div className={spaceStyle.spaceMin05} />
                                <Button
                                    variant="contained"
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