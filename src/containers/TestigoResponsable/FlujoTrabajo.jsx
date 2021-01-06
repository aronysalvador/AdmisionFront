import React, { useState} from "react";
import Header from "../../components/header/index";
import Cabecera from "../../components/cabecera/index";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import { getComunStyle } from "../../css/comun";
import { getSpaceStyle } from "../../css/spaceStyle";
import Button from "@material-ui/core/Button";
import Grid from '@material-ui/core/Grid';
import yesDisabled from './../../img/yesWork.svg'
import notDisabled from './../../img/notWork.svg'
import yesActive from './../../img/yesActive.svg'
import notActive from './../../img/notActive.svg'
import ClearIcon from "@material-ui/icons/Clear";
import { withStyles } from '@material-ui/core/styles';
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker } from '@material-ui/pickers'
import { ThemeProvider } from "@material-ui/styles";
import {defaultMaterialThemeKeyboardTimePicker} from "../../css/styleTimePicker"; 
import {defaultMaterialThemeKeyboardDatePicker} from "../../css/styleDatePicker";
import image from './../../img/iconClock.svg'
import imageDate from './../../img/iconCalendar.svg'
import MomentUtils from '@date-io/moment';
import moment from "moment";
import "moment/locale/es";

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

const FlujoTrabajo = () => {
    const { addmissionForm: { percentage, CamposDocumentos ,  responsableForm, fechaHoraResponsable }, microsoftReducer:{userMsal} } = useSelector((state) => state, shallowEqual);
    const dispatch = useDispatch();

    const comunClass = getComunStyle();
    const spaceStyle = getSpaceStyle();

    const dateFormatter = str => {
        return str;
    };   

    const [selectedDate, setSelectedDate] = useState(fechaHoraResponsable ? moment() : null);
    const [date, setDate] = useState(fechaHoraResponsable ? moment(fechaHoraResponsable.split(" ")[0], "DD-MM-YYYY").format("DD-MM-YYYY") : null);  
    const [validDate, setValidDate] = useState(fechaHoraResponsable.length>0 ? true :false);  
    const onDateChange = (date, value) => {
        if(date){
        setSelectedDate(date);
        setDate(value);
        setValidDate(true)
        }else{
            setSelectedDate(date);
            setDate(value);
            setValidDate(false)
        }
    };

    const [selectedHour, setSelectedHour] = useState(fechaHoraResponsable ? moment() : null);
    const [hour, setHour] = useState(fechaHoraResponsable ? moment(fechaHoraResponsable.split(" ")[1], "HH:mm").format("HH:mm") : null);    
    const [validHour, setValidHour] = useState(fechaHoraResponsable.length>0 ? true :false);  
    const onHourChange = (date, value) => {
        setSelectedHour(date);
        setHour(value);
        if(date){
            setValidHour(true)
        }else{
            setValidHour(false)
        }
    };

    const handleOnClick = (respuesta) => {
        if(respuesta === "Si"){
            CamposDocumentos.TestigoS = "x"
            CamposDocumentos.TestigoN = ""
            dispatch(updateForm("CamposDocumentos", CamposDocumentos));
        }else{
            CamposDocumentos.TestigoS = ""
            CamposDocumentos.TestigoN = "x"
            dispatch(updateForm("CamposDocumentos", CamposDocumentos));
            dispatch(updateForm("testigos",  { nombre: "", cargo: "" }));
        }
        if((CamposDocumentos.TestigoS === "x" || CamposDocumentos.TestigoN === "x") && responsableForm){
            dispatch(handleSetStep(18.01))
        }
        
    };

    const handleOnClickResponsable = (respuesta) => {
        if(respuesta === "Si"){
            dispatch(updateForm("responsableForm", respuesta));
        }else{
            dispatch(updateForm("fechaHoraResponsable", ``))
            dispatch(updateForm("responsable",  { nombre: "", cargo: "" }));
            dispatch(updateForm("responsableForm", respuesta));
            dispatch(handleSetStep(18.01))         
        }
    };
    return (
        <div className={comunClass.root}>
        <div className={comunClass.displayDesk}> 
            <Header userMsal={ userMsal }/>
        </div>
        <div className={comunClass.beginContainerDesk}>
            <Cabecera
            id="FlujoTrabajo-BtnBack"
            dispatch={() => dispatch(handleSetStep(10.1))}
            percentage={percentage}
            />
        </div>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                <div className={comunClass.boxDesk} style={{textAlign: 'right'}}>

                    <div className={['row', comunClass.backgroundGrey].join(' ')}>
                        <div className="col-md-10" style={{textAlign:"left"}}>
                        <Grid className={`${comunClass.textPrimaryRelato}`} >
                            ¿Alguien fue
                            <Grid component="span"  className={`${comunClass.textPrimaryRelatoBlue}`}>
                                &nbsp;testigo&nbsp;
                            </Grid> 
                            de lo que sucedió?
                        </Grid>
                        </div>
                        <div className="col-md-2" style={{ display: "contents" }}>
                            <img
                            id="FlujoTrabajo-Img1"
                            alt="siTrabajo"
                            src={CamposDocumentos.TestigoS ==="x" ? yesActive : yesDisabled}
                            type="button"
                            style={{ marginRight: "5px" }}
                            onClick={() => handleOnClick("Si")}
                            />

                            <img
                            id="FlujoTrabajo-Img2"
                            alt="noTrabajo"
                            src={CamposDocumentos.TestigoN ==="x" ? notActive :notDisabled}
                            type="button"
                            onClick={() => handleOnClick("No")}                       
                            />
                        </div>
                    </div>    

                    <div className={spaceStyle.space1} />

                    <div className={['row', comunClass.backgroundGrey].join(' ')}>
                        <div className="col-md-10" style={{textAlign:"left"}}>
                        <Grid className={`${comunClass.textPrimaryRelato}`} >
                            ¿Se le 
                            <Grid component="span"  className={`${comunClass.textPrimaryRelatoBlue}`}>
                                &nbsp;reportó el accidente a un responsable&nbsp;
                            </Grid> 
                            en la empresa?
                        </Grid>
                        </div>
                        <div className="col-md-2" style={{ display: "contents" }}>
                            <img                            
                            id="FlujoTrabajo-Img3"
                            alt="siTrabajo"
                            src={responsableForm === "Si" ? yesActive : yesDisabled}
                            type="button"
                            style={{ marginRight: "5px" }}
                            onClick={() => handleOnClickResponsable("Si")}
                            />

                            <img         
                            id="FlujoTrabajo-Img4"
                            alt="noTrabajo"
                            src={responsableForm === "No" ? notActive :notDisabled}
                            type="button"
                            onClick={() => handleOnClickResponsable("No")}                       
                            />
                        </div>
                    </div> 

                    <div className={spaceStyle.space1} />
                    
                    {responsableForm ==="Si" &&
                    <>
                    <div className="row justify-content-center">
                        <div className="col-md-5 " style={{textAlign:"left"}}>
                                <Grid
                                    className={comunClass.tituloTextBox}
                                    style={{marginBottom:'15px', textAlign: "left"}}
                                    >
                                        Fecha de aviso
                                </Grid> 
                                <div  style={{ zIndex: 9 }} >
                                    <MuiPickersUtilsProvider libInstance={moment} utils={MomentUtils} >
                                        <ThemeProvider theme={defaultMaterialThemeKeyboardDatePicker}>
                                        <NoPaddingDatePicker         
                                            id="FlujoTrabajo-Datepicker1"
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
                                            onError={(e)=>{if(e){ setValidDate(false) } }}
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
                                                    <ClearIcon onClick={()=>{onDateChange(null,null)}} style={{cursor:'pointer'}} />
                                                )
                                                
                                            }}
                                    />
                                    </ThemeProvider>
                                    </MuiPickersUtilsProvider>    
                                </div>
                        </div>
                        <div className="col-md-5 " style={{textAlign:"left"}}>
                                <Grid
                                    className={comunClass.tituloTextBox}
                                    style={{marginBottom:'15px', textAlign: "left"}}
                                    >
                                        Hora de aviso
                                </Grid> 

                                <div  style={{ zIndex: 9 }} >
                                    <MuiPickersUtilsProvider utils={MomentUtils} libInstance={moment}  >
                                    <ThemeProvider theme={defaultMaterialThemeKeyboardTimePicker}>
                                        <NoPaddingPicker     
                                            id="FlujoTrabajo-Timepicker1"                         
                                            value={selectedHour}
                                            format="HH:mm"
                                            inputValue={hour}
                                            onChange={onHourChange}
                                            rifmFormatter={dateFormatter}    
                                            inputVariant="outlined"                            
                                            InputAdornmentProps={{ position: 'start'}}
                                            ampm={false}
                                            fullWidth
                                            helperText={validHour ? "Formato de 24 hrs Ejemplo: 18:30" : "Formato invalido" } 
                                            onError={(e)=>{if(e){ setValidHour(false) }}}
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

                    <div className={spaceStyle.space1} />           

                    <div style={{ position: "relative", textAlign:"center" }}>
                        <Button
                            id="FlujoTrabajo-Btn1"
                            className={comunClass.buttonAchs}
                            variant="contained"
                            disabled={!validDate || !validHour}
                            onClick={() => {
                                dispatch(updateForm("fechaHoraResponsable", `${date} ${hour}`))
                                dispatch(handleSetStep(18.01))
                            }}
                        >
                            Continuar
                        </Button>
                    </div>
                    </>
                    }                 
                </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default FlujoTrabajo;
