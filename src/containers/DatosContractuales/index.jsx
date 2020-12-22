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
        addmissionForm: { percentage, profesionForm, cargoForm, tipoDeContrato, tipoJornadaForm, tipoRemuneracion, categoriaOcupacionalForm, ingresoTrabajoActual, inicioJornadaLaboral, finJornadaLaboral },  
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
    const [entrada, setEntrada] = useState(inicioJornadaLaboral?inicioJornadaLaboral:"09:30");
    const [salida, setSalida] = useState(finJornadaLaboral?finJornadaLaboral:"18:30");
    const [ingreso, setIngreso] = useState(ingresoTrabajoActual?ingresoTrabajoActual:moment().format("MM-YYYY"));
    const [errorCargo, setErrorCargo] = useState(false);
    const [valid, setValid] = useState(false);


    const handleCargoChange = (texto) => {        
        if (texto.length < 5) {
            setErrorCargo(true);
        }else{
            setErrorCargo(false);
        }        
    }

    useEffect(()=>{
        setValid(false)
        if(profesion!=="" && categoriaOcup!=="" && contrato!=="" && cargo!=="" && remuneracion!=="" && jornada!=="" && entrada!=="" && salida!=="" && ingreso!==""){
           handleNext()
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
        dispatch(updateForm("ingresoTrabajoActual", ingreso));
        dispatch(updateForm("inicioJornadaLaboral", entrada));
        dispatch(updateForm("finJornadaLaboral", salida));
        setValid(true)  
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
                                            <Grid component="span" className={[comunClass.titleBlue, comunClass.titleBlueDataCont]}>
                                                Seleccionar
                                            </Grid>          
                                            &nbsp; horario
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
                                                    <MuiPickersUtilsProvider utils={MomentUtils}  >
                                                        <ThemeProvider theme={defaultMaterialThemeKeyboardTimePicker}>
                                                            <NoPaddingPicker
                                                            inputVariant="outlined"
                                                            value={entrada}
                                                            inputValue={entrada}
                                                            onChange={(e)=>setEntrada(e.format("HH:mm"))}
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
                                                    <MuiPickersUtilsProvider utils={MomentUtils} >
                                                        <ThemeProvider theme={defaultMaterialThemeKeyboardTimePicker}>
                                                            <NoPaddingPicker
                                                            inputVariant="outlined"
                                                            value={salida}
                                                            inputValue={salida}
                                                            onChange={(e)=>setSalida(e.format("HH:mm"))}
                                                            InputAdornmentProps={{ position: 'start'}}
                                                            ampm={false}
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
                                            Fecha de ingreso
                                            <Grid component="span" className={[comunClass.titleBlue, comunClass.titleBlueDataCont]}>
                                            &nbsp;a su trabajo
                                            </Grid> 
                                        </Grid> 
                                        <div  style={{ zIndex: 9}} >
                                            <MuiPickersUtilsProvider libInstance={moment} utils={MomentUtils} >
                                                <ThemeProvider theme={defaultMaterialThemeKeyboardDatePicker}>
                                                <NoPaddingDatePicker
                                                    inputVariant="outlined"
                                                    views={["year", "month"]}
                                                    disableFuture
                                                    format="MM-YYYY"
                                                    inputValue={ingreso}
                                                    onChange={(e)=>setIngreso(e.format("MM-YYYY"))}
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
                                    onClick={() => dispatch(handleSetStep((categoriaOcup.nombre==="Empleadores" || categoriaOcup.nombre==="Cuenta Propia") ? 25.1 : 26.1)) }
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