import { useState, useEffect, useCallback } from "react";
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
import arrow from './../../img/arrow_forward.svg'
import { getWelcomeStyle } from "../../css/welcomeStyle";
import { ErrorOutline } from "@material-ui/icons";
import Switch from '@material-ui/core/Switch';
import AutoComplete from "@material-ui/lab/Autocomplete";
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
    const welcomeStyle = getWelcomeStyle();
    const dispatch = useDispatch();
    const { addmissionForm: { percentage, sucursalEmpresaSiniestro, urlMapasucursalEmpresaSiniestro, comunaSiniestro, DireccionEmpresa, comunaEmpresa, lugarReferenciaSiniestro, fechaHoraSiniestro, tipoSiniestro, AccidenteEnSucursal }, microsoftReducer } = useSelector((state) => state, shallowEqual);

    const [ date, setDate ] = useState(fechaHoraSiniestro ? moment(fechaHoraSiniestro.split(" ")[0], "DD-MM-YYYY").format("DD-MM-YYYY") : moment().format("DD-MM-YYYY"));
    const [ validDate, setValidDate ] = useState(true);

    const [ hour, setHour ] = useState(fechaHoraSiniestro ? moment(fechaHoraSiniestro.split(" ")[1], "HH:mm").format("HH:mm") : moment().format("HH:mm"));
    const [ validHour, setValidHour ] = useState(true);

    const [ sucursal, setSucursal ] = useState(sucursalEmpresaSiniestro ? sucursalEmpresaSiniestro : "");
    const [ mapaUrl, setMapaUrl ] = useState(urlMapasucursalEmpresaSiniestro ? urlMapasucursalEmpresaSiniestro : "");
    const [ nombreComuna, setNombreComuna ]=useState(comunaSiniestro?comunaSiniestro:"");
    const [ direccionValida, setDireccionValida ] = useState(false)

    const clearData = () => {
        dispatch(updateForm("sucursalEmpresaSiniestro", ""))
        dispatch(updateForm("urlMapasucursalEmpresaSiniestro", ""))
    }

    const [ lugarReferencia, setLugarReferencia ] = useState(!lugarReferenciaSiniestro ? "" : lugarReferenciaSiniestro);
    const [ isLugarReferenciaValid, setIsLugarReferenciaValid ] = useState(lugarReferenciaSiniestro?lugarReferenciaSiniestro:false);

    const handleOnClick = (respuesta) => {
        dispatch(updateForm("AccidenteEnSucursal", respuesta));
    };

    const updateValues = useCallback(
        (campo, value) => {
            dispatch(updateForm(campo, value))
        },
        [ dispatch ]
    )

    useEffect(() => {
        if (validDate && validHour)
            updateValues("fechaHoraSiniestro", `${date} ${hour}`);
    }, [ date, validDate, hour, validHour, updateValues ])

    const handleNext = () => {
        updateValues("fechaHoraSiniestro", `${date} ${hour}`)
        updateValues("sucursalEmpresaSiniestro", sucursal)
        updateValues("urlMapasucursalEmpresaSiniestro", mapaUrl)
        updateValues("comunaSiniestro", nombreComuna)
        updateValues("lugarReferenciaSiniestro", lugarReferencia)
        dispatch(handleSetStep("x_next", 10.1))
    }

    const [ stateCheck, setStateCheck ] = useState(false);
    const handleChange = (event) => {
        setStateCheck(event.target.checked);
        if (event.target.checked){
            console.log('marcado')
        }
    };

      const [ region, setRegion ] = useState();
      const [ comuna, setComuna ] = useState();
      const { data: segurenciaRegion } = useSelector((state) => state.regionForm, shallowEqual);

      const { data: segurenciaComuna } = useSelector(
        (state) => state.comunaForm,
        shallowEqual
      );

      const comunaFiltrada = segurenciaComuna.filter(comuna => comuna?.codigo_region === region?.codigo)

    const CustomSwitch = withStyles({
        switchBase: {
          color: "#FAFAFA",
          '&$checked': {
            color: "#00B2A9"
          },
          '&$checked + $track': {
            backgroundColor: "#00B2A9"
          }
        },
        checked: {},
        track: {}
    })(Switch);

    return (
        <div className={comunClass.rootNew}>
            <div className={comunClass.displayDesk}>
                <Header userMsal={ microsoftReducer.userMsal } />
            </div>
            <div className={comunClass.beginContainerDesk}>
                <Cabecera
                    id={"InfoAccidente-BtnBack"}
                    dispatch={() => dispatch(handleSetStep("x_back", 10.1))}
                    percentage={percentage}
                />
            </div>
            <div className={comunClass.boxDesk3}>
                <div className={comunClass.bottomElement} style={{position: 'inherit'}}>
                    <div className={comunClass.displayMobile}>
                        <div className={spaceStyle.spaceMin1} />
                    </div>

                    <div className='container-fluid'>
                        <div className='row'>

                            <div className='col-md-5'>
                                <div className='col-md-12'>
                                    <div className={comunClass.backgroundGrey}>

                                        <div>
                                            <Grid className={comunClass.subtitleBlack2}>
                                                ¿
                                                <Grid component='span' className={comunClass.titleBlue}>
                                                Cuando y a qué hora
                                                </Grid>
                                                &nbsp;sucedió el accidente?
                                            </Grid>
                                        </div>

                                        <div className='container' style={{maxWidth: "30em", minHeight: "210px"}}>
                                            <div className='row'>
                                                <div className='col-md-12'>
                                                    <Grid
                                                        className={comunClass.tituloTextBox}
                                                        style={{marginBottom: '8px', textAlign: "left"}}
                                                    >
                                                        Fecha de accidente
                                                    </Grid>

                                                    <Date date={date} setDate={setDate} id='InfoAccidente-Lbl1'
setValidDate={setValidDate}
                                                    />
                                                </div>
                                                <div className='col-md-12' style={{ paddingTop: '2em' }}>
                                                    <Grid
                                                        className={comunClass.tituloTextBox}
                                                        style={{marginBottom: '8px', textAlign: "left"}}
                                                    >
                                                        Hora de accidente
                                                    </Grid>

                                                    <Time id={"InfoAccidente-Lbl2"} time={hour} setTime={setHour}
setValidHour={setValidHour}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className='col-md-7'>
                                <div className='col-md-12'>
                                    <div className={comunClass.backgroundGrey}>
                                        <div>
                                            <Grid className={comunClass.subtitleBlack2}>
                                                Indica la dirección
                                                <Grid component='span' className={comunClass.titleBlue}>
                                                &nbsp;en donde ocurrió el accidente
                                                </Grid>
                                            </Grid>
                                        </div>
                                        {stateCheck ?
                                        <div className='container' style={{maxWidth: "40em", minHeight: "210px"}}>
                                            <div className='row'>
                                                <Grid className={comunClass.tituloTextBox} style={{ marginBottom: '0px', textAlign: "left"}}>
                                                    Nombre de la calle
                                                </Grid>
                                                <NoPaddingTextField
                                                    id={"InfoAccidente-Lbl3"}
                                                    helperText={
                                                    !isLugarReferenciaValid && "Debes ingresar al menos una referencia"
                                                    }
                                                    error={!isLugarReferenciaValid}
                                                    value={lugarReferencia}
                                                    autoComplete='off'
                                                    variant='outlined'
                                                    size='small'
                                                    margin='dense'
                                                    required
                                                    fullWidth
                                                    onChange={(e) => {
                                                        let texto = Format.caracteresInvalidos(e.target.value);
                                                        setLugarReferencia(texto);
                                                        if (texto.length > 0){ setIsLugarReferenciaValid(true); dispatch(updateForm("lugarReferenciaSiniestro", texto)); } else { setIsLugarReferenciaValid(false); }
                                                    }}
                                                    InputProps={{
                                                        endAdornment: (
                                                            <ClearIcon onClick={() => { setLugarReferencia(""); setIsLugarReferenciaValid(false); dispatch(updateForm("lugarReferenciaSiniestro", "")); } } style={{ cursor: 'pointer' }} />
                                                        )
                                                    }}
                                                    style={{background: "#ffff", borderRadius: "0.7em"}}
                                                />
                                            </div>
                                            <div className='row'>
                                                <div className='col-md-6'>
                                                    <Grid className={comunClass.tituloTextBox} style={{ marginBottom: '0px', textAlign: "left"}}>
                                                        Número de la dirección
                                                    </Grid>
                                                    <NoPaddingTextField
                                                        id={"InfoAccidente-Lbl3"}
                                                        helperText={
                                                        !isLugarReferenciaValid && "Debes ingresar al menos una referencia"
                                                        }
                                                        error={!isLugarReferenciaValid}
                                                        value={lugarReferencia}
                                                        autoComplete='off'
                                                        variant='outlined'
                                                        size='small'
                                                        margin='dense'
                                                        required
                                                        fullWidth
                                                        onChange={(e) => {
                                                            let texto = Format.caracteresInvalidos(e.target.value);
                                                            setLugarReferencia(texto);
                                                            if (texto.length > 0){ setIsLugarReferenciaValid(true); dispatch(updateForm("lugarReferenciaSiniestro", texto)); } else { setIsLugarReferenciaValid(false); }
                                                        }}
                                                        InputProps={{
                                                            endAdornment: (
                                                                <ClearIcon onClick={() => { setLugarReferencia(""); setIsLugarReferenciaValid(false); dispatch(updateForm("lugarReferenciaSiniestro", "")); } } style={{ cursor: 'pointer' }} />
                                                            )
                                                        }}
                                                        style={{background: "#ffff", borderRadius: "0.7em"}}
                                                    />
                                                    <Typography className={comunClass.mobileCaption}>
                                                        Si no tiene número escribir&nbsp;<Grid component='span' style={{ fontFamily: "Roboto, Helvetica, Arial" }}>"0"</Grid>
                                                    </Typography>
                                                </div>
                                                <div className='col-md-6'>
                                                    <Grid className={comunClass.tituloTextBox} style={{ marginBottom: '0px', textAlign: "left"}}>
                                                        Sitio específico
                                                    </Grid>
                                                    <NoPaddingTextField
                                                        id={"InfoAccidente-Lbl3"}
                                                        helperText={
                                                        !isLugarReferenciaValid && "Debes ingresar al menos una referencia"
                                                        }
                                                        error={!isLugarReferenciaValid}
                                                        value={lugarReferencia}
                                                        autoComplete='off'
                                                        variant='outlined'
                                                        size='small'
                                                        margin='dense'
                                                        required
                                                        fullWidth
                                                        onChange={(e) => {
                                                            let texto = Format.caracteresInvalidos(e.target.value);
                                                            setLugarReferencia(texto);
                                                            if (texto.length > 0){ setIsLugarReferenciaValid(true); dispatch(updateForm("lugarReferenciaSiniestro", texto)); } else { setIsLugarReferenciaValid(false); }
                                                        }}
                                                        InputProps={{
                                                            endAdornment: (
                                                                <ClearIcon onClick={() => { setLugarReferencia(""); setIsLugarReferenciaValid(false); dispatch(updateForm("lugarReferenciaSiniestro", "")); } } style={{ cursor: 'pointer' }} />
                                                            )
                                                        }}
                                                        style={{background: "#ffff", borderRadius: "0.7em"}}
                                                    />
                                                    <Typography className={comunClass.mobileCaption}>
                                                        Ejemplo: Piso 21, Are 453,Puesto 12A
                                                    </Typography>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='col-md-6'>
                                                    <Typography className={comunClass.tituloTextBox} variant='subtitle2' style={{ float: "left", marginTop: "5px" }}>
                                                        Region
                                                    </Typography>
                                                    <AutoComplete
                                                        id={"RegionEP-Lbl1"}
                                                        value={region}
                                                        onChange={(event, value) => {
                                                        setRegion(value);
                                                        }}
                                                        options={segurenciaRegion}
                                                        getOptionLabel={(option) => option.nombre}
                                                        getOptionSelected={(option, value) =>
                                                        value.value === option.value
                                                        }
                                                        renderInput={(params) => (
                                                        <TextField
                                                            {...params}
                                                            variant='outlined'
                                                            size='small'
                                                            error={!region}
                                                            helperText={!region && 'Debe ingresar una región' }
                                                            InputProps={{
                                                            ...params.InputProps,
                                                            style: { marginTop: "7px" }
                                                            }}
                                                        />
                                                        )}
                                                    />
                                                </div>
                                                <div className='col-md-6'>
                                                    <Typography className={comunClass.tituloTextBox} variant='subtitle2'style={{ float: "left", marginTop: "5px" }}>
                                                        Comuna
                                                    </Typography>
                                                    <AutoComplete
                                                        id={"ComunaEP-Lbl1"}
                                                        disabled={!region}
                                                        value={comuna}
                                                        onChange={(event, value) => {
                                                            setComuna(value);
                                                        }}
                                                        options={comunaFiltrada}
                                                        getOptionLabel={(option) => option.nombre}
                                                        getOptionSelected={(option, value) =>
                                                            value.value === option.value
                                                        }
                                                        renderInput={(params) => (
                                                        <TextField
                                                            {...params}
                                                            variant='outlined'
                                                            size='small'
                                                            error={!comuna }
                                                            helperText={!comuna && 'Debe ingresar una comuna'}
                                                            InputProps={{
                                                            ...params.InputProps,
                                                            style: { marginTop: "7px" }
                                                            }}
                                                        />
                                                        )}
                                                    />
                                                </div>
                                            </div>
                                            <div className='row' style={{cursor: 'left'}} onClick={() => setStateCheck(false)}>
                                                <div className='col-md-3'>
                                                    <img
                                                        id={"RelatoCompleto-BtnNo"}
                                                        alt='arrow'
                                                        src={arrow}
                                                        style={{ float: 'left'}}
                                                        type='button'
                                                    />
                                                    <Grid className={comunClass.tituloTextBox2}style={{ marginTop: '5px'}}>
                                                        Volver atrás
                                                    </Grid>
                                                </div>
                                            </div>
                                        </div>
                                        :
                                        <div className='container' style={{maxWidth: "40em", minHeight: "210px"}}>
                                            <div className='row'>
                                                <div className='col-md-12'>
                                                    <Lugar
                                                        titulo={"Dirección"}
                                                        sucursal={sucursal}
                                                        setSucursal={setSucursal}
                                                        mapaUrl={mapaUrl}
                                                        setMapaUrl={setMapaUrl}
                                                        nombreComuna={nombreComuna}
                                                        setNombreComuna={setNombreComuna}
                                                        valido={direccionValida}
                                                        setValido={setDireccionValida}
                                                        DireccionEmpresa={DireccionEmpresa}
                                                        comunaEmpresa={comunaEmpresa}
                                                        sucursalEmpresaSiniestro={sucursalEmpresaSiniestro}
                                                        clearData={clearData}
                                                        tipoSiniestro={tipoSiniestro?.Id ? tipoSiniestro.Id : 1}
                                                    />
                                                </div>
                                                <div className='col-md-12' style={{ paddingTop: '2em' }}>
                                                    <Grid className={comunClass.tituloTextBox} style={{ marginBottom: '0px', textAlign: "left"}}>
                                                        Referencia
                                                    </Grid>
                                                    <NoPaddingTextField
                                                        id={"InfoAccidente-Lbl3"}
                                                        helperText={
                                                        !isLugarReferenciaValid && "Debes ingresar al menos una referencia"
                                                        }
                                                        error={!isLugarReferenciaValid}
                                                        value={lugarReferencia}
                                                        autoComplete='off'
                                                        variant='outlined'
                                                        size='small'
                                                        margin='dense'
                                                        required
                                                        fullWidth
                                                        onChange={(e) => {
                                                            let texto = Format.caracteresInvalidos(e.target.value);
                                                            setLugarReferencia(texto);
                                                            if (texto.length > 0){ setIsLugarReferenciaValid(true); dispatch(updateForm("lugarReferenciaSiniestro", texto)); } else { setIsLugarReferenciaValid(false); }
                                                        }}
                                                        InputProps={{
                                                            endAdornment: (
                                                                <ClearIcon onClick={() => { setLugarReferencia(""); setIsLugarReferenciaValid(false); dispatch(updateForm("lugarReferenciaSiniestro", "")); } } style={{ cursor: 'pointer' }} />
                                                            )
                                                        }}
                                                        style={{background: "#ffff", borderRadius: "0.7em"}}
                                                    />
                                                    <Typography className={comunClass.mobileCaption}>
                                                        Ejemplo: Piso 21, Área 453, Puesto 12A
                                                    </Typography>
                                                    <div style={{ paddingTop: '1em'}}>
                                                        <div className={welcomeStyle.titleContainerCardsEmail3}>
                                                            <div className={welcomeStyle.divRowBottomEmail}>
                                                                <ErrorOutline />
                                                                <Typography className={welcomeStyle.itemText2}>
                                                                    ¿No encuentras la dirección?
                                                                </Typography>
                                                                <div style={{ marginLeft: "176px"}}>
                                                                    <CustomSwitch
                                                                        id='ValidarCorreoElectronico-CustomSwitch1'
                                                                        checked={stateCheck}
                                                                        onChange={handleChange}
                                                                        color='default'
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className={welcomeStyle.divRowBottomEmail}>
                                                                <Typography className={welcomeStyle.pBegin}>
                                                                    Ingresa la dirección del accidente de manera manual
                                                                </Typography>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        }
                                    </div>
                                </div>
                            </div>
                            {tipoSiniestro.Id === 1 &&
                            <>
                            <div className={spaceStyle.spaceMin1} />
                            <div className={[ 'row', comunClass.backgroundGrey ].join(' ')} style={{maxWidth: "90%", margin: "auto"}}>
                                <div className='col-md-10' style={{textAlign: "left"}}>
                                <Grid className={`${comunClass.textPrimaryRelato}`} style={{width: "auto"}}>
                                    ¿El accidente ocurrió en
                                    <Grid component='span' className={`${comunClass.textPrimaryRelatoBlue}`}>
                                        &nbsp;sucursal
                                    </Grid>
                                    &nbsp;a la que pertenece el trabajador?
                                </Grid>
                                </div>
                                <div className='col-md-2' style={{ display: "contents" }}>
                                    <img
                                        id={"RelatoCompleto-BtnSi"}
                                        alt='siTrabajo'
                                        src={AccidenteEnSucursal ==="Si" ? yesActive : yesDisabled}
                                        type='button'
                                        style={{ marginRight: "5px" }}
                                        onClick={() => handleOnClick("Si")}
                                    />
                                    <img
                                        id={"RelatoCompleto-BtnNo"}
                                        alt='noTrabajo'
                                        src={AccidenteEnSucursal ==="No" ? notActive :notDisabled}
                                        type='button'
                                        onClick={() => handleOnClick("No")}
                                    />
                                </div>
                            </div>
                            </>
                            }
                            <div className='col-md-12'>
                                <div className={spaceStyle.space2} />
                                <Button
                                    id={"InfoAccidente-Btn1"}
                                    variant='contained'
                                    className={comunClass.buttonAchs}
                                    disabled={tipoSiniestro.Id === 1 ? !validDate || !validHour || !isLugarReferenciaValid || !direccionValida || !AccidenteEnSucursal : (!validDate || !validHour || !isLugarReferenciaValid || !direccionValida)}
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
