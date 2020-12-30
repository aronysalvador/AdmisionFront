import React, { useState , useEffect} from "react";
import Header from "../../components/header/index";
import Cabecera from "../../components/cabecera/index";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import { getComunStyle } from "../../css/comun";
import { getSpaceStyle } from "../../css/spaceStyle";
import Button from "@material-ui/core/Button";
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import { TextField, InputAdornment } from "@material-ui/core";
import { IconButton } from "material-ui";
import ClearIcon from "@material-ui/icons/Clear";
import Typography from "@material-ui/core/Typography";
import { withStyles } from '@material-ui/core/styles';
import specialBlue from "./../../util/color/specialBlue";
import FechaSiniestroDesk from "../../components/FechaSiniestro/FechaSiniestroCalendarDesk";
import HoraSiniestroDesk from "../../components/HoraSiniestro/HoraSiniestroDesk";
import { Format } from "../../helpers/strings";
import InputMasked from "../../containers/EditarTelefono/InputMasked";
import Mask from "../../containers/EditarTelefono/phone";
import { Pipes } from "../../containers/EditarTelefono/phone";
import { FormatListNumberedSharp } from "@material-ui/icons";

const FlujoTrayecto = () => {
    const { addmissionForm: { percentage, step,CamposDocumentos ,  responsableForm, fechaHoraResponsable, responsable ,testigos, TipoAvisoResponsable }, microsoftReducer:{userMsal} } = useSelector((state) => state, shallowEqual);
    const dispatch = useDispatch();

    const comunClass = getComunStyle();
    const spaceStyle = getSpaceStyle();

    const { days, month, year, horas, minutos } = fechaHoraResponsable;

    const [fechaSiniestro, setFechaSiniestro] = useState({});
    const [horaSiniestro, setHoraSiniestro] = useState({});

    function setFechaValueSiniestro(value) {
        setFechaSiniestro({ ...value });
    }
    function setHoraValueSiniestro(value) {
        value.minutos = minutosArray[value.indiceMinutos];
        setHoraSiniestro({ ...value });
      }
    
    const minutosArray = [0, 10, 20, 30, 40, 50]

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

    const [telefonoIsValid, setTelefonoIsValid] = useState(() => {
    return CamposDocumentos.DatosTestig ? true : false;
    });

    const [btnValido, setBtnValido] = useState(false)

    const handleOnChange = (e) => {
        const value = e.target.value;
        if (value !== datosTestig) {
          const result = Pipes.advanced(value);
          const isValid = /^\+?56\d{9}$/.test(result.replace(/\s/g, ""));
          setDatosTestig(result);
          setTelefonoIsValid(isValid);
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

          if(nombreResponsable.length>0 || cargoResponsable.length>0 || Object.keys(check).length !==0 || Object.keys(fechaSiniestro).length !==0 || Object.keys(horaSiniestro).length !==0){
              if(!nombreResponsable || !cargoResponsable || !check.id || (check.id===5 && !check.especificacion) || !fechaSiniestro.days>0 || !fechaSiniestro.month>0 || fechaSiniestro.year.length<4 || !horaSiniestro.horas>0 || !horaSiniestro.minutos>0){
                  valida=true
              }
          }

          setBtnValido(valida)

      }, [nombreResponsable, cargoResponsable, check, fechaSiniestro, horaSiniestro])

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
            dispatch={() => dispatch(handleSetStep("x",17.3))}
            percentage={percentage}
            />
        </div>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                <div className={comunClass.boxDeskTestigo} style={{textAlign: 'right'}}>
  
                    <div className="row justify-content-center">
                        <div className={['col-md-7', comunClass.backgroundGrey].join(' ')} style={{textAlign:"left"}}>
                                <Grid className={`${comunClass.textPrimaryRelato}`} >
                                    ¿Se le 
                                    <Grid component="span"  className={`${comunClass.textPrimaryRelatoBlue}`}>
                                        &nbsp;reportó el accidente a un responsable&nbsp;
                                    </Grid> 
                                    en la empresa?
                                </Grid>
                            <div className="row">
                                <div className="col-md-6">
                                    <Typography className={comunClass.tituloTextBox} style={{marginTop:"5px "}}>
                                    Nombre responsable
                                    </Typography>
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
                                    }}
                                    />
         
                                </div>
                                <div className="col-md-6">
                                    <FechaSiniestroDesk
                                    onChange={setFechaValueSiniestro}
                                    daysFromState={days}
                                    monthFromState={month}
                                    yearFromState={year}
                                    textLabel={"Fecha de aviso"}
                                />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <Typography className={comunClass.tituloTextBox} style={{marginTop:"5px "}}>
                                    Cargo o relación responsable
                                    </Typography>
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
                                    }}
                                    />
         
                                </div>
                                <div className="col-md-6">
                                <HoraSiniestroDesk
                                    onChange={setHoraValueSiniestro}
                                    horasFromState={horas}
                                    indiceMinutosFromState={minutosArray.indexOf(minutos)}
                                    minutos={minutosArray}
                                    textLabel={"Hora de aviso"}
                                />
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
                                <div className="col-md-6">
                                    <div className={check.id === 1 ? comunClass.roundedBlue2 : comunClass.roundedNormal2}>
                                        <div className={comunClass.containerOpction} style={{alignItems:"flex-end"}}>
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
                                <div className="col-md-6">
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
                                            <p className={comunClass.txtRadios} style={{ marginTop: "17px" }}>Otro</p>
                                            
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
                                                    )
                                                }}
                                            />
                                        
                                        </div>
                                        
                                        
                                        
                                        
                                        

                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={['col-md-5', comunClass.backgroundGrey].join(' ')} style={{textAlign:"left"}}>
                     
                                <Grid className={`${comunClass.textPrimaryRelato}`} >
                                    ¿Alguien fue 
                                    <Grid component="span"  className={`${comunClass.textPrimaryRelatoBlue}`}>
                                        &nbsp;testigo&nbsp;
                                    </Grid> 
                                    de lo que sucedió?
                                </Grid>
                                <div className="row">
                                <div className="col-md-10">
                                    <Typography className={comunClass.tituloTextBox} style={{marginTop:"5px "}}>
                                    Nombre testigo
                                    </Typography>
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
                                    }}
                                    />
                                 </div>   
                                </div>
                                <div className="row">
                                <div className="col-md-10">
                                    <Typography className={comunClass.tituloTextBox} style={{marginTop:"5px "}}>
                                    Cargo o relación testigo
                                    </Typography>
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
                                    }}
                                    />
                                 </div>   
                                </div>

                                <div className="row">
                                <div className="col-md-10">
                                    <Typography className={comunClass.tituloTextBox} style={{marginTop:"5px "}}>
                                    Teléfono (Opcional)
                                    </Typography>
                                    <InputMasked
                                    mask={Mask.advanced}
                                    setTelefono={setDatosTestig}
                                    handleOnChange={handleOnChange}
                                    telefono={datosTestig}
                                    step={step}
                                    />
                                 </div>   
                                </div>
                        </div>
                    </div> 

                    <div className={spaceStyle.space1} />

                   

                    <div className={spaceStyle.space1} />           

                    <div style={{ position: "relative", textAlign:"center" }}>
                        <Button
                            className={comunClass.buttonAchs}
                            variant="contained"
                            disabled={btnValido}
                            onClick={() => {
                                dispatch( updateForm("fechaHoraResponsable", {...fechaSiniestro, ...horaSiniestro,}));
                                //dispatch(handleSetStep(18.01))
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
