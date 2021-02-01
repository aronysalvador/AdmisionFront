import React, { useState } from "react"
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import Header from "../../components/header/index";
import Cabecera from "../../components/cabecera/index";
import { getComunStyle } from "../../css/comun";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { getSpaceStyle } from "../../css/spaceStyle";
import Grid from '@material-ui/core/Grid';
import Date from './../../components/Pickers/Date'
import Time from './../../components/Pickers/Time-ClearIcon'
import { Button, TextField, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import ClearIcon from "@material-ui/icons/Clear";
import Lugar from "../LugarSiniestroTrayecto/Lugar"
import { Format } from "../../helpers/strings";
import yesDisabled from './../../img/yesWork.svg'
import notDisabled from './../../img/notWork.svg'
import yesActive from './../../img/yesActive.svg'
import notActive from './../../img/notActive.svg'
import moment from "moment";
import "moment/locale/es";
moment.locale("es");


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
    const {  addmissionForm: { percentage, sucursalEmpresaSiniestro, urlMapasucursalEmpresaSiniestro, comunaSiniestro, DireccionEmpresa, lugarReferenciaSiniestro, fechaHoraSiniestro, tipoSiniestro, AccidenteEnSucursal }, microsoftReducer } = useSelector((state) => state, shallowEqual);

    const [date, setDate] = useState(fechaHoraSiniestro ? moment(fechaHoraSiniestro.split(" ")[0], "DD-MM-YYYY").format("DD-MM-YYYY") : moment().format("DD-MM-YYYY"));  
    const [validDate, setValidDate] = useState(true);  

    const [hour, setHour] = useState(fechaHoraSiniestro ? moment(fechaHoraSiniestro.split(" ")[1], "HH:mm").format("HH:mm") : moment().format("HH:mm"));    
    const [validHour, setValidHour] = useState(true);  

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

    const handleOnClick = (respuesta) => {
        dispatch(updateForm("AccidenteEnSucursal", respuesta));
    };

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
                <Header userMsal={ microsoftReducer.userMsal }/>
            </div>
            <div className={comunClass.beginContainerDesk}>
                <Cabecera
                    id={"InfoAccidente-BtnBack"}
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
                                                        style={{marginBottom:'8px', textAlign: "left"}}
                                                    >
                                                        Fecha de accidente
                                                    </Grid> 

                                                    <Date date={date} setDate={setDate} id="InfoAccidente-Lbl1" setValidDate={setValidDate} />
                                                </div>
                                                <div className="col-md-12" style={{ paddingTop: '2em' }}>
                                                    <Grid
                                                        className={comunClass.tituloTextBox}
                                                        style={{marginBottom:'8px', textAlign: "left"}}
                                                    >
                                                        Hora de accidente
                                                    </Grid> 

                                                    <Time  id={"InfoAccidente-Lbl2"}  time={hour} setTime={setHour} setValidHour={setValidHour} />
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
                                                    style={{ marginBottom:'0px', textAlign: "left"}}
                                                    >
                                                        Referencia
                                                    </Grid> 
                                                    <div>
                                                        <NoPaddingTextField
                                                            id={"InfoAccidente-Lbl3"}
                                                            helperText={
                                                            !isLugarReferenciaValid && "Debes ingresar al menos una referencia"
                                                            }
                                                            error={!isLugarReferenciaValid}
                                                            value={lugarReferencia}
                                                            autoComplete="off"  
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

                            {tipoSiniestro.Id === 1 && 
                            
                            <div className={['row', comunClass.backgroundGrey].join(' ')}>
                                <div className="col-md-10" style={{textAlign:"left"}}>
                                <Grid className={`${comunClass.textPrimaryRelato}`} >
                                    ¿El accidente ocurrió en  
                                    <Grid component="span"  className={`${comunClass.textPrimaryRelatoBlue}`}>
                                        &nbsp;sucursal
                                    </Grid> 
                                    &nbsp;a la que pertenece el trabajador?
                                </Grid>
                                </div>
                                <div className="col-md-2" style={{ display: "contents" }}>
                                    <img
                                        id={"RelatoCompleto-BtnSi"}
                                        alt="siTrabajo"
                                        src={AccidenteEnSucursal ==="Si" ? yesActive : yesDisabled}
                                        type="button"
                                        style={{ marginRight: "5px" }}
                                        onClick={() => handleOnClick("Si")}
                                    />

                                    <img
                                        id={"RelatoCompleto-BtnNo"}
                                        alt="noTrabajo"
                                        src={AccidenteEnSucursal ==="No" ? notActive :notDisabled}
                                        type="button"
                                        onClick={() => handleOnClick("No")}                       
                                    />
                                </div>
                            </div>                   
                            
                            }

                            <div className="col-md-12">
                                <div className={spaceStyle.space2} />
                                <Button
                                    id={"InfoAccidente-Btn1"}
                                    variant="contained"
                                    className={comunClass.buttonAchs}
                                    disabled={tipoSiniestro.Id === 1 ? (!validDate || !validHour || !isLugarReferenciaValid || !direccionValida || !AccidenteEnSucursal) : (!validDate || !validHour || !isLugarReferenciaValid || !direccionValida)}
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