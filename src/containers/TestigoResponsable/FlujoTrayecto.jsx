import React, { useState , useEffect} from "react";
import Header from "../../components/header/index";
import Cabecera from "../../components/cabecera/index";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { handleSetStep, updateForm, sendResponsable,sendCargo } from "../../redux/actions/AdmissionAction";
import { getComunStyle } from "../../css/comun";
import { getSpaceStyle } from "../../css/spaceStyle";
import Button from "@material-ui/core/Button";
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import { TextField, InputAdornment } from "@material-ui/core";
import {  IconButton } from "material-ui";
import ClearIcon from "@material-ui/icons/Clear";
import { withStyles } from '@material-ui/core/styles';
import specialBlue from "./../../util/color/specialBlue";
import { Format } from "../../helpers/strings";
import InputMasked from "../../containers/EditarTelefono/InputMasked";
import Mask from "../../containers/EditarTelefono/phone";
import { Pipes } from "../../containers/EditarTelefono/phone";
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

const FlujoTrayecto = () => {
    const { addmissionForm: { percentage, CamposDocumentos ,  fechaHoraResponsable, responsable ,testigos, TipoAvisoResponsable }, microsoftReducer:{userMsal} } = useSelector((state) => state, shallowEqual);
    const dispatch = useDispatch();

    const comunClass = getComunStyle();
    const spaceStyle = getSpaceStyle();
    const dateFormatter = str => {
        return str;
    };   

    const [selectedDate, setSelectedDate] = useState(fechaHoraResponsable ? moment() : null);
    const [date, setDate] = useState(fechaHoraResponsable ? moment(fechaHoraResponsable.split(" ")[0], "DD-MM-YYYY").format("DD-MM-YYYY") : null);  
    const [validDate, setValidDate] = useState(false);  
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
    const [validHour, setValidHour] = useState(false);  
    const onHourChange = (date, value) => {
        setSelectedHour(date);
        setHour(value);
        if(date){
            setValidHour(true)
        }else{
            setValidHour(false)
        }      
    };

    const [nombreResponsable, saveNombreResponsable] = useState(() => {
        return !responsable ? "" : responsable.nombre;
    });
    
    const [cargoResponsable, saveCargoResponsable] = useState(() => {
        return !responsable ? "" : responsable.cargo;
    });

    const [nombreTestigo, saveNombreTestigo] = useState(() => {
        return !testigos ? "" : testigos.nombre;
    });
    
    const [cargoTestigo, saveCargoTestigo] = useState(() => {
        return !testigos ? "" : testigos.cargo;
    });

    const [check,setCheck] = useState(TipoAvisoResponsable? TipoAvisoResponsable : {})

    const [datosTestig, setDatosTestig] = useState(() => {
        return !CamposDocumentos.DatosTestig ? "" : CamposDocumentos.DatosTestig; //"+56 9"
      });

    const [btnValido, setBtnValido] = useState(false)

    const handleOnChange = (e) => {
        const value = e.target.value;
        if (value !== datosTestig) {
          const result = Pipes.advanced(value);
          //const isValid = /^\+?56\d{9}$/.test(result.replace(/\s/g, ""));
          setDatosTestig(result);
        }
      };

      useEffect(() =>{
          let valida = false;

          if(nombreTestigo.length>0 || cargoTestigo.length>0){
              if(!nombreTestigo || !cargoTestigo){
                  valida=true
              }
          }

          setBtnValido(valida)

      }, [nombreTestigo, cargoTestigo])

      useEffect(() =>{
          let valida = false;
          if(nombreResponsable.length>0 || cargoResponsable.length>0 || Object.keys(check).length !==0 || date?.length>0 || hour?.length>0 ){
              if(!nombreResponsable || !cargoResponsable || !check.id || (check.id===5 && !check.especificacion) || !validDate || !validHour){
                  valida=true
              }
          }
          
          setBtnValido(valida)

      }, [nombreResponsable, cargoResponsable, check, validDate, date, validHour, hour])

    const BlueRadio = withStyles({
        root: {
          color: specialBlue,
          '&$checked': {
            color: specialBlue[600],
          },
        },
        checked: {},
      })((props) => <Radio color="default" {...props} />);

    return (
        <div className={comunClass.root}>
        <div className={comunClass.displayDesk}> 
            <Header userMsal={ userMsal }/>
        </div>
        <div className={comunClass.beginContainerDesk}>
            <Cabecera
            dispatch={() => dispatch(handleSetStep(10.1))}
            percentage={percentage}
            />
        </div>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                <div className={comunClass.boxDeskTestigo} style={{textAlign: 'right'}}>
  
                    <div className="row justify-content-center">
                        <div className="col-md-7" style={{textAlign:"left"}}>
                        <div  className={['col-md-12', comunClass.backgroundGrey].join(' ')}>
                                <Grid className={`${comunClass.textPrimaryRelato}`} >
                                    ¿Se le 
                                    <Grid component="span"  className={`${comunClass.textPrimaryRelatoBlue}`}>
                                        &nbsp;reportó el accidente a un responsable&nbsp;
                                    </Grid> 
                                    en la empresa?
                                </Grid>
                            <div className="row">
                                <div className="col-md-6">
                                    <Grid className={comunClass.tituloTextBox} style={{marginTop:"5px "}}>
                                    Nombre responsable
                                    </Grid>
                                    <TextField
                                    id="nombreResponsable"
                                    value={nombreResponsable}
                                    onChange={(e) => saveNombreResponsable(Format.caracteresInvalidos(e.target.value))}
                                    //helperText="Ejemplo: Luis Morales"
                                    margin="dense"
                                    variant="outlined"
                                    autoComplete="off"
                                    type="text"
                                    fullWidth
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton onClick={() => { saveNombreResponsable("") }}>
                                                    <ClearIcon />
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                        style: {
                                            background: "#ffff"
                                        },
                                    }}
                                    />
         
                                </div>
                                <div className="col-md-6" style={{marginTop: "10px"}}>
                                <Grid
                                    className={comunClass.tituloTextBox}
                                    style={{marginBottom:'5px'}}
                                    >
                                        Fecha de aviso
                                </Grid> 
                                <div  style={{ zIndex: 9 }} >
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
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <Grid className={comunClass.tituloTextBox} style={{marginTop:"5px "}}>
                                    Cargo o relación responsable
                                    </Grid>
                                    <TextField
                                    id="cargoResponsable"
                                    value={cargoResponsable}
                                    onChange={(e) => saveCargoResponsable(Format.caracteresInvalidos(e.target.value))}
                                    helperText="Ejemplo:Jefe de area, Prevensionista"        
                                    margin="dense"
                                    variant="outlined"
                                    autoComplete="off"
                                    type="text"
                                    fullWidth
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton onClick={() => { saveCargoResponsable("") }}>
                                                    <ClearIcon />
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                        style: {
                                            background: "#ffff"
                                        },
                                    }}
                                    />
         
                                </div>
                                <div className="col-md-6" style={{marginTop: "10px"}}>
                                <Grid
                                    className={comunClass.tituloTextBox}
                                    style={{marginBottom:'5px'}}
                                    >
                                        Hora de aviso
                                </Grid> 

                                <div  style={{ zIndex: 9 }} >
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
                            <Grid className={`${comunClass.textPrimaryRelato}`} >
                                    ¿Cómo dio 
                                    <Grid component="span"  className={`${comunClass.textPrimaryRelatoBlue}`}>
                                        &nbsp;aviso del accidente&nbsp;
                                    </Grid> 
                                    ?
                            </Grid>
                            <div className="row">
                                <div className="col-md-6" style={{ marginBottom: "10px"}}>
                                    <div className={check.id === 1 ? comunClass.roundedBlue2 : comunClass.roundedNormal2}>
                                        <div className={comunClass.containerOpction} style={{alignItems:"flex-end "}}>
                                            <BlueRadio
                                                checked={check.id === 1}
                                                onChange={()=>setCheck({ id:1, description: "Presencial" })}
                                                value={check.id}
                                                name="radio-button-demo"
                                                inputProps={{ 'aria-label': 'C' }}
                                            />
                                            <p className={comunClass.txtRadios} style={{ marginTop: "17px" }}>Presencial</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className={check.id === 2 ? comunClass.roundedBlue2 : comunClass.roundedNormal2}>
                                        <div className={comunClass.containerOpction}>
                                            <BlueRadio
                                                checked={check.id === 2}
                                                onChange={()=>{setCheck({ id:2, description: "E-mail" })}}
                                                value={check.id}
                                                name="radio-button-demo"
                                                inputProps={{ 'aria-label': 'C' }}
                                            />
                                            <p className={comunClass.txtRadios} style={{ marginTop: "17px" }}>E-mail</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6" style={{ marginBottom: "10px"}}>
                                    <div className={check.id === 3 ? comunClass.roundedBlue2 : comunClass.roundedNormal2}>
                                        <div className={comunClass.containerOpction}>
                                            <BlueRadio
                                                checked={check.id === 3}
                                                onChange={()=>{setCheck({ id:3, description: "Llamada telefónica" })}}
                                                value={check.id}
                                                name="radio-button-demo"
                                                inputProps={{ 'aria-label': 'C' }}
                                            />
                                            <p className={comunClass.txtRadios} style={{ marginTop: "17px" }}>Llamada telefónica</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className={check.id === 4 ? comunClass.roundedBlue2 : comunClass.roundedNormal2}>
                                        <div className={comunClass.containerOpction}>
                                            <BlueRadio
                                                checked={check.id === 4}
                                                onChange={()=>{setCheck({ id:4, description: "Whatsapp" })}}
                                                value={check.id}
                                                name="radio-button-demo"
                                                inputProps={{ 'aria-label': 'C' }}
                                            />
                                            <p className={comunClass.txtRadios} style={{ marginTop: "17px" }}>Whatsapp</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                            <div className={check.id === 5 ? comunClass.roundedBlueNoMargin : comunClass.roundedNormalNoMargin}>
                                    <div style={{width: "100%"}}>
                                        
                                        <div className={comunClass.containerOpction}>
                                            <BlueRadio
                                                checked={check.id === 5}
                                                onChange={()=>{setCheck({ id:5, description: "Otro", especificacion: "" })}}
                                                value={check.id}
                                                name="radio-button-demo"
                                                inputProps={{ 'aria-label': 'C' }}
                                            />
                                            <p className={comunClass.txtRadios} style={{ marginTop: "22px" }}>Otro</p>
                                            
                                            <TextField
                                                onClick={()=>{setCheck({ id:5, description: "Otro", especificacion: "" })}}
                                                focused={check.id === 5?true:false}
                                                id="especificacion"
                                                value={check.especificacion?check.especificacion:""}
                                                onChange={(e) =>  setCheck({ id:5, description: "Otro", especificacion: Format.caracteresInvalidos(e.target.value) }) }
                                                margin="dense"
                                                variant="outlined"
                                                fullWidth
                                                autoComplete="off"
                                                type="text"
                                                style={{ background: "#ffff" , marginTop: "17px"}}
                                                inputProps={{ maxLength: 200 }}
                                                InputProps={{
                                                    endAdornment: (
                                                        <ClearIcon style={{cursor:'pointer'}} onClick={() => {
                                                                         setCheck({ id:5, description: "Otro", especificacion: "" })
                                                                     }} 
                                                        />
                                                    ),
                                                    style: {
                                                        width: "90%",
                                                        marginLeft:"20px",
                                                        marginTop:"-5px"
                                                    }
                                                }}
                                            />                                       
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-5" style={{textAlign:"left"}}>                     
                        <div  className={['col-md-12', comunClass.backgroundGrey].join(' ')}>
                                <Grid className={`${comunClass.textPrimaryRelato}`} >
                                    ¿Alguien fue 
                                    <Grid component="span"  className={`${comunClass.textPrimaryRelatoBlue}`}>
                                        &nbsp;testigo&nbsp;
                                    </Grid> 
                                    de lo que sucedió?
                                </Grid>
                                <div className="row">
                                <div className="col-md-10">
                                    <Grid className={comunClass.tituloTextBox} style={{marginTop:"5px "}}>
                                    Nombre testigo
                                    </Grid>
                                    <TextField
                                    id="nombreTestigo"
                                    value={nombreTestigo}
                                    onChange={(e) => saveNombreTestigo(Format.caracteresInvalidos(e.target.value))}
                                    margin="dense"
                                    variant="outlined"
                                    autoComplete="off"
                                    type="text"
                                    fullWidth
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton onClick={() => { saveNombreTestigo("") }}>
                                                    <ClearIcon />
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                        style: {
                                            background: "#ffff"
                                        },
                                    }}
                                    />
                                 </div>   
                                </div>
                                <div className="row">
                                <div className="col-md-10">
                                    <Grid className={comunClass.tituloTextBox} style={{marginTop:"5px "}}>
                                    Cargo o relación testigo
                                    </Grid>
                                    <TextField
                                    id="cargoTestigo"
                                    value={cargoTestigo}
                                    onChange={(e) => saveCargoTestigo(Format.caracteresInvalidos(e.target.value))}
                                    helperText="Ejemplo: Guardia, Jefe, Compañero de trabajo"
                                    margin="dense"
                                    variant="outlined"
                                    autoComplete="off"
                                    type="text"
                                    fullWidth
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton onClick={() => { saveCargoTestigo("") }}>
                                                    <ClearIcon />
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                        style: {
                                            background: "#ffff"
                                        },
                                    }}
                                    />
                                 </div>   
                                </div>

                                <div className="row">
                                <div className="col-md-10">
                                    <Grid className={comunClass.tituloTextBox} style={{marginTop:"5px "}}>
                                    Teléfono (Opcional)
                                    </Grid>
                                    <InputMasked
                                    mask={Mask.advanced}
                                    setTelefono={setDatosTestig}
                                    handleOnChange={handleOnChange}
                                    telefono={datosTestig}
                                    step={14}
                                    />
                                 </div>   
                                </div>
                        </div>
                        </div>
                    </div> 

                    <div className={spaceStyle.space1} />           

                    <div style={{ position: "relative", textAlign:"center" }}>
                        <Button
                            className={comunClass.buttonAchs}
                            variant="contained"
                            disabled={btnValido}
                            onClick={() => {

                                let json = { ...CamposDocumentos }

                                if(nombreTestigo || cargoTestigo){
                                    json.TestigoS = "x"
                                    json.TestigoN = ""
                                    json.DatosTestig=datosTestig

                                    dispatch(sendCargo(nombreTestigo, cargoTestigo));
                                    dispatch(updateForm("testigoForm", nombreTestigo + "-" + cargoTestigo));                                   
                                    console.log("SI Testigo")
                                }else{
                                    json.TestigoS = ""
                                    json.TestigoN = "x"
                                    json.DatosTestig=""
                                    dispatch(updateForm("testigos",  { nombre: "", cargo: "" }));
                                    console.log("NO Testigo")
                                }

                                if(nombreResponsable && cargoResponsable){
                                    dispatch(sendResponsable(nombreResponsable, cargoResponsable));
                                    dispatch(updateForm("responsableForm", nombreResponsable + "-" + cargoResponsable));
                                    dispatch(updateForm("fechaHoraResponsable", `${date} ${hour}`))
                                        switch (check.id) {
                                            case 1:
                                                json.avisoPresen="x"  
                                                json.avisoMail=""  
                                                json.avisoFono=""  
                                                json.avisoOtro=""  
                                                json.avisoCual=""  
                                                break;
                                            case 2:
                                                json.avisoPresen=""  
                                                json.avisoMail="x"  
                                                json.avisoFono=""  
                                                json.avisoOtro=""  
                                                json.avisoCual=""  
                                                break;
                                            case 3:
                                                json.avisoPresen=""  
                                                json.avisoMail=""  
                                                json.avisoFono="x"  
                                                json.avisoOtro=""  
                                                json.avisoCual=""  
                                                break;
                                            case 4:
                                                json.avisoPresen=""  
                                                json.avisoMail=""  
                                                json.avisoFono=""  
                                                json.avisoOtro="x"  
                                                json.avisoCual=check.description  
                                                break;
                                            case 5:
                                                json.avisoPresen=""  
                                                json.avisoMail=""  
                                                json.avisoFono=""  
                                                json.avisoOtro="x"  
                                                json.avisoCual=check.especificacion  
                                                break;
                                        
                                            default:
                                                break;
                                        }

                                        dispatch(updateForm("TipoAvisoResponsable", check));
                                        console.log("SI Resposanble")
                                    }else{
                                        json.avisoPresen=""  
                                        json.avisoMail=""  
                                        json.avisoFono=""  
                                        json.avisoOtro=""  
                                        json.avisoCual=""

                                        dispatch(updateForm("responsable",  { nombre: "", cargo: "" }));
                                        dispatch(updateForm("fechaHoraResponsable",  ""));
                                        console.log("NO Resposanble")
                                    }        
                                    

                                dispatch(updateForm("CamposDocumentos", json));                        
                                dispatch(handleSetStep(18.01))
                                console.log("next")
                            }}
                        >
                            Continuar
                        </Button>
                    </div>            
                </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default FlujoTrayecto;
