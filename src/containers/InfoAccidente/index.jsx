import React, { useState } from "react"
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import Header from "../../components/header/index";
import Cabecera from "../../components/cabecera/index";
import { getComunStyle } from "../../css/comun";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { getSpaceStyle } from "../../css/spaceStyle";
import Grid from '@material-ui/core/Grid';
import { Button, TextField, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker } from '@material-ui/pickers'
import { ThemeProvider } from "@material-ui/styles";
import {defaultMaterialThemeKeyboardTimePicker} from "../../css/styleTimePicker"; 
import {defaultMaterialThemeKeyboardDatePicker} from "../../css/styleDatePicker";
import image from './../../img/iconClock.svg'
import imageDate from './../../img/iconCalendar.svg'
import MomentUtils from '@date-io/moment';
import moment from "moment";
import "moment/locale/es";
import ClearIcon from "@material-ui/icons/Clear";
import Lugar from "../LugarSiniestroTrayecto/Lugar"
import { Format } from "../../helpers/strings";


const NoPaddingDatePicker = withStyles({
    root: {
      '&& .MuiOutlinedInput-input': {
        padding: "8.5px 14px"
      },
      '&& .MuiOutlinedInput-notchedOutline': {
        borderRadius: "0.7em"
      }
    }
})(KeyboardDatePicker);

const NoPaddingPicker = withStyles({
    root: {
      '&& .MuiOutlinedInput-input': {
        padding: "8.5px 14px"
      },
      '&& .MuiOutlinedInput-notchedOutline': {
        borderRadius: "0.7em"
      }
    }
})(KeyboardTimePicker);

const NoPaddingTextField = withStyles({
    root: {
      '&& .MuiOutlinedInput-input': {
        padding: "8.5px 14px"
      },
      '&& .MuiOutlinedInput-notchedOutline': {
        top: "-2px"
      }
    }
})(TextField);

const InfoAccidente = () => {
    const comunClass = getComunStyle();
    const spaceStyle = getSpaceStyle();
    const dispatch = useDispatch();
    const {  addmissionForm: { percentage, sucursalEmpresaSiniestro, urlMapasucursalEmpresaSiniestro, comunaSiniestro, DireccionEmpresa, lugarReferenciaSiniestro, fechaHoraSiniestro }, microsoftReducer } = useSelector((state) => state, shallowEqual);

    // const stringTodate = (fecha) => {
    //     let date = fecha.split(" ")[0]
    //     let x = date.split("-")
    //     let formatDate = x[2]+"-"+x[1]+"-"+x[0]
    //     return moment(formatDate, "DD-MM-YYYY").format("DD-MM-YYYY")
    // }

    const [selectedDate, setSelectedDate] = useState(moment());
    const [date, setDate] = useState(fechaHoraSiniestro ? moment(fechaHoraSiniestro.split(" ")[0], "DD-MM-YYYY").format("DD-MM-YYYY") : moment().format("DD-MM-YYYY"));  
    const [validDate, setValidDate] = useState(true);  
    const onDateChange = (date, value) => {
        setSelectedDate(date);
        setDate(value);
        if(date){
            setValidDate(true)
        }else{
            setValidDate(false)
        }
    };

    const [selectedHour, setSelectedHour] = useState(moment());
    const [hour, setHour] = useState(fechaHoraSiniestro ? moment(fechaHoraSiniestro.split(" ")[1], "HH:mm").format("HH:mm") : moment().format("HH:mm"));    
    const [validHour, setValidHour] = useState(true);  
    const onHourChange = (date, value) => {
        setSelectedHour(date);
        setHour(value);
        if(date){
            setValidHour(true)
        }else{
            setValidHour(false)
        }
    };

    const dateFormatter = str => {
        return str;
    };   

    const [sucursal, setSucursal] = useState(sucursalEmpresaSiniestro ? sucursalEmpresaSiniestro : "");
    const [mapaUrl, setMapaUrl] = useState(urlMapasucursalEmpresaSiniestro ? urlMapasucursalEmpresaSiniestro : "");
    const [nombreComuna,setNombreComuna]=useState(comunaSiniestro?comunaSiniestro:"");
    const [direccionValida, setDireccionValida] = useState(false)
        
    const clearData = () => {
        dispatch(updateForm("sucursalEmpresaSiniestro", ""))
        dispatch(updateForm("urlMapasucursalEmpresaSiniestro", ""))
    }

    const [lugarReferencia, setLugarReferencia] = useState(!lugarReferenciaSiniestro ? "" : lugarReferenciaSiniestro);
    const [isLugarReferenciaValid, setIsLugarReferenciaValid] = useState(lugarReferenciaSiniestro?lugarReferenciaSiniestro:false);

    const handleNext = () => {
        dispatch(updateForm("fechaHoraSiniestro", `${date} ${hour}`))
        dispatch(updateForm("sucursalEmpresaSiniestro", sucursal))
        dispatch(updateForm("urlMapasucursalEmpresaSiniestro", mapaUrl))
        dispatch(updateForm("comunaSiniestro", nombreComuna))
        dispatch(updateForm("lugarReferenciaSiniestro", lugarReferencia));
        dispatch(handleSetStep("x_next",10.1))
    }


    return (
        <div className={comunClass.rootNew}>
            <div className={comunClass.displayDesk}> 
                <Header
                    userMsal={ microsoftReducer.userMsal }
                />
            </div>
            <div className={comunClass.beginContainerDesk}>
                <Cabecera
                    dispatch={() => dispatch(handleSetStep("x_back",10.1))}
                    percentage={percentage}
                />
            </div>                           

            <div className={comunClass.boxDesk3}>
                <div className={comunClass.bottomElement} style={{position:'inherit'}}>
                    <div className={comunClass.displayMobile}>
                        <div className={spaceStyle.spaceMin1} />
                    </div>
                        

                    <div className="container-fluid">
                        <div className="row">

                            <div className="col-md-6">
                                <div className="col-md-12">
                                    <div className={comunClass.backgroundGrey}>

                                        <div>
                                            <Grid className={comunClass.subtitleBlack2}>
                                                ¿
                                                <Grid component="span"  className={comunClass.titleBlue}>
                                                Cuando y a qué hora
                                                </Grid>      
                                                &nbsp;sucedió el accidente?
                                        
                                            </Grid>
                                        </div>


                                    <div className="container" style={{maxWidth: "30em", minHeight: "250px"}}>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <Grid
                                                className={comunClass.tituloTextBox}
                                                style={{marginBottom:'15px', textAlign: "left"}}
                                                >
                                                    Fecha de accidente
                                                </Grid> 
                                                <div  style={{ zIndex: 9}} >
                                                    <MuiPickersUtilsProvider libInstance={moment} utils={MomentUtils} >
                                                        <ThemeProvider theme={defaultMaterialThemeKeyboardDatePicker}>
                                                        <NoPaddingDatePicker
                                                            inputVariant="outlined"
                                                            disableFuture   
                                                            value={selectedDate}
                                                            format="DD-MM-YYYY"
                                                            inputValue={date}
                                                            onChange={onDateChange}
                                                            rifmFormatter={dateFormatter}                                
                                                            animateYearScrolling       
                                                            InputAdornmentProps={{ position: 'start'}}
                                                            fullWidth
                                                            onError={(e)=>{if(e){ setValidDate(false); }}}
                                                            invalidDateMessage="Formato invalido"
                                                            maxDateMessage="La fecha no puede exceder al día de hoy"
                                                            minDateMessage="La fecha es invalida"
                                                            keyboardIcon={<img alt="calendar" src={imageDate}/>}
                                                            style={{
                                                                paddingTop: "3px",
                                                                background: "#ffff",
                                                                borderRadius: "0.7em"
                                                            }}
                                                            InputProps={{
                                                                endAdornment: (
                                                                    <ClearIcon onClick={()=>onDateChange(null,null)} style={{cursor:'pointer'}} />
                                                                )
                                                            }}
                                                    />
                                                    </ThemeProvider>
                                                    </MuiPickersUtilsProvider>    
                                                </div>
                                            </div>
                                            <div className="col-md-12" style={{ paddingTop: '2em' }}>
                                                <Grid
                                                className={comunClass.tituloTextBox}
                                                style={{marginBottom:'15px', textAlign: "left"}}
                                                >
                                                    Hora de accidente
                                                </Grid> 
                                                <div  style={{ zIndex: 9}} >
                                                     <MuiPickersUtilsProvider utils={MomentUtils} libInstance={moment}  >
                                                        <ThemeProvider theme={defaultMaterialThemeKeyboardTimePicker}>
                                                            <NoPaddingPicker                              
                                                                value={selectedHour}
                                                                format="HH:mm"
                                                                inputValue={hour}
                                                                onChange={onHourChange}
                                                                rifmFormatter={dateFormatter}                                               
                                                                inputVariant="outlined"                            
                                                                InputAdornmentProps={{ position: 'start'}}
                                                                ampm={false}
                                                                fullWidth
                                                                onError={(e)=>{if(e){ setValidHour(false) } }}
                                                                invalidDateMessage="Formato invalido"
                                                                keyboardIcon={<img alt="clock" src={image} />}
                                                                style={{
                                                                    paddingTop: "3px",
                                                                    background: "#ffff",
                                                                    borderRadius: "0.7em"
                                                                }}
                                                                InputProps={{
                                                                    endAdornment: (
                                                                        <ClearIcon onClick={()=>onHourChange(null,null)} style={{cursor:'pointer'}} />
                                                                    )
                                                                }}
                                                        />
                                                        </ThemeProvider>
                                                    </MuiPickersUtilsProvider>     
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="col-md-12">
                                    <div className={comunClass.backgroundGrey}>

                                        <div>
                                            <Grid className={comunClass.subtitleBlack2}>
                                            Indica la dirección 
                                                <Grid component="span"  className={comunClass.titleBlue}>
                                                &nbsp;en donde ocurrió el accidente
                                                </Grid>      

                                            </Grid>
                                        </div>
                                        
                                        <div className="container" style={{maxWidth: "30em", minHeight: "250px"}}>
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <Lugar                                                    
                                                        sucursal={sucursal}
                                                        setSucursal={setSucursal}
                                                        mapaUrl={mapaUrl} 
                                                        setMapaUrl={setMapaUrl}
                                                        nombreComuna={nombreComuna}
                                                        setNombreComuna={setNombreComuna}
                                                        valido={direccionValida}
                                                        setValido={setDireccionValida}
                                                        DireccionEmpresa={DireccionEmpresa}
                                                        sucursalEmpresaSiniestro={sucursalEmpresaSiniestro}
                                                        clearData={clearData}
                                                    />
                                                </div>
                                                <div className="col-md-12" style={{ paddingTop: '2em' }}>
                                                    <Grid
                                                    className={comunClass.tituloTextBox}
                                                    style={{ marginBottom:'8px', textAlign: "left"}}
                                                    >
                                                        Referencia
                                                    </Grid> 
                                                    <div>
                                                        <NoPaddingTextField
                                                                helperText={
                                                                !isLugarReferenciaValid && "Debes ingresar al menos una referencia"
                                                                }
                                                                error={!isLugarReferenciaValid}
                                                                value={lugarReferencia}
                                                                variant="outlined"
                                                                size="small"
                                                                margin="dense"
                                                                required
                                                                fullWidth
                                                                onChange={(e) => {
                                                                    let texto = Format.caracteresInvalidos(e.target.value);
                                                                    setLugarReferencia(texto);
                                                                    if(texto.length > 0){ setIsLugarReferenciaValid(true); }else{ setIsLugarReferenciaValid(false); }
                                                                }}
                                                                InputProps={{
                                                                    endAdornment: (
                                                                        <ClearIcon onClick={()=>{setLugarReferencia(""); setIsLugarReferenciaValid(false);} } style={{cursor:'pointer'}}  />
                                                                    ),
                                                                }}
                                                                style={{
                                                                    background: "#ffff",
                                                                    borderRadius: "0.7em"
                                                                }}
                                                            />
                                                            <Typography className={comunClass.mobileCaption}>
                                                                Ejemplo: Piso 21, Área 453, Puesto 12A
                                                            </Typography>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="col-md-12">
                                <div className={spaceStyle.space5} />
                                <Button
                                    variant="contained"
                                    className={comunClass.buttonAchs}
                                    disabled={!validDate || !validHour || !isLugarReferenciaValid || !direccionValida}
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

export default InfoAccidente