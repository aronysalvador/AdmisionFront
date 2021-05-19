import { useState } from "react";
import { connect } from "react-redux";
import { handleSetStep, updateForm, validarAfiliacion } from "../../redux/actions/AdmissionAction";
import Cabecera from "../../components/cabecera/index";
import { getComunStyle } from "../../css/comun";
import { getSpaceStyle } from "../../css/spaceStyle";
import { getWelcomeStyle } from "../../css/welcomeStyle";
import { cardSiniestroStyles } from "../../css/cardSiniestroStyle";
import BoxACHS from "../../components/share/BoxACHS/index";
import BoxEmpresa from "../../components/share/BoxEmpresa/index";
import { Button, Typography, withStyles } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import { Format } from "../../helpers/strings";
import InputMasked from "../../containers/EditarTelefono/InputMasked";
import Mask from "../../containers/EditarTelefono/phone";
import { Pipes } from "../../containers/EditarTelefono/phone";
import Switch from '@material-ui/core/Switch';
import { ErrorOutline } from "@material-ui/icons";
import Header from "../../components/header/index";
import image from './../../img/identify.svg'
import { validateEmailFormat } from "../../helpers/email";
import Email from 'react-email-autocomplete';

const PersonalData = (props) => {
  const { dispatch, addmissionForm, microsoftReducer } = props;
  const comunClass = getComunStyle();
  const spaceStyle = getSpaceStyle();
  const welcomeStyle = getWelcomeStyle();
  const classes = cardSiniestroStyles();

  const tituloEmpresa = "Dirección de la Sucursal";
  const contenidoDireccionEmpresa = [ Format.formatizar(addmissionForm.DireccionEmpresa) ];
  const contenidoRazonSocialForm = [ addmissionForm.razonSocial ? Format.formatizar(addmissionForm.razonSocial.name) : null ];
  const contenidoRutEmpresa = [ addmissionForm.rutEmpresa ];
  const tituloDireccion = "Dirección particular";
  const contenidoDireccion = [ Format.formatizar(addmissionForm.direccionParticular) ];

  const { apellidoPaterno, nombre } = addmissionForm.datosAdicionalesSAP;

  const { razonSocial, DireccionEmpresa, direccionParticular, telefonoParticular: TelefonoEmpleado, emailusuario,
    rut, rutEmpresa, SucursalEmpresaObjeto, comunaDireccionParticular, comunaDireccionParticularObjeto } = addmissionForm

  const [ telefono, setTelefono ] = useState(() => {
    return TelefonoEmpleado ? TelefonoEmpleado : "+56 9";
  });
  const [ telefonoIsValid, setTelefonoIsValid ] = useState(() => {
    return !!TelefonoEmpleado;
  });

  const handleOnChange = (e) => {
    const value = e.target.value;
    if (value !== telefono) {
      const result = Pipes.advanced(value);
      const isValid = /^\+?56\d{9}$/.test(result.replace(/\s/g, ""));
      setTelefono(result);
      setTelefonoIsValid(isValid);
    }
  };

  const [ stateCheck, setStateCheck ] = useState(TelefonoEmpleado === "+56 00 000 0000");

  const handleChange = (event) => {
    setStateCheck(event.target.checked);
    if (event.target.checked){
      setTelefono(Pipes.advanced("000000000"));
      setTelefonoIsValid(true);
    } else {
      setTelefono("+56");
      setTelefonoIsValid(false)
    }
  };

  const [ userEmail, setUserEmail ] = useState(() => {
    return !emailusuario ? "" : emailusuario;
  });

  const [ stateCheck2, setStateCheck2 ] = useState(() => {
    return (emailusuario==="notienecorreo@achs.cl") ? 1 : 0
  });
  const [ isEmailValid, setIsEmailValid ] = useState(true);

  const handleChange2 = (event) => {
    setStateCheck2(event.target.checked);
    if (event.target.checked){
      setIsEmailValid(validateEmailFormat("notienecorreo@achs.cl"));
      setUserEmail("notienecorreo@achs.cl");
    } else {
      setIsEmailValid(false);
      setUserEmail("");
    }
  };

  const handleEmailChange = (e) => {
    let valid = validateEmailFormat(e.target.value)
    setIsEmailValid(valid);
    setUserEmail(e.target.value);
  };

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

  const handleNext = () => {
    if (!razonSocial || !Object.entries(SucursalEmpresaObjeto).length === 0 || !DireccionEmpresa || !rutEmpresa) {
      // si falta info de la empresa
      dispatch(handleSetStep(5.4)); // form empresa
    }
    else if (!direccionParticular || !comunaDireccionParticular) {
      // si no tiene direccion, y comuna
      dispatch(handleSetStep(5.2));// form direccion
    }
    else if (direccionParticular && comunaDireccionParticular && razonSocial) {
      // si todos los datos relevantes están llenos
      dispatch(updateForm("telefonoParticular", telefono));
      dispatch(updateForm("emailusuario", userEmail));
      if (rut && rutEmpresa && SucursalEmpresaObjeto) {
        dispatch(validarAfiliacion({ rutPaciente: rut, rutEmpresa, BpSucursal: SucursalEmpresaObjeto.codigo}));
      } else
        dispatch(handleSetStep(500));
    }
  };

  return (
    <div className={comunClass.root}>
      <div className={comunClass.displayDesk}>
        <Header userMsal={ microsoftReducer.userMsal } />
      </div>
      <div className={comunClass.beginContainerDesk}>
        <Cabecera
          id={"PersonalData-BtnBack"}
          dispatch={() => dispatch(handleSetStep(3))}
          percentage={addmissionForm.percentage}
        />
      </div>
      <div className={comunClass.titlePrimaryDesk}>
        <Grid className={`${comunClass.titleBlack} ${comunClass.titleBlack2} ${comunClass.textPrimaryDesk}`}>
          Empieza
          <Grid component='span' className={`${comunClass.titleBlue} ${comunClass.titleBlue2}`}>
            &nbsp;verificando los datos de&nbsp;<br className={comunClass.displayMobile} />
          </Grid>
          <Grid component='span' className={comunClass.titleGray}>
            {Format.formatizar(nombre)} {Format.formatizar(apellidoPaterno)}
          </Grid>
        </Grid>

        <div className={comunClass.displayDeskImg}>
          <Grid component='span' className={comunClass.imgPrimaryDesk}>
            <img alt='identify' src={image} className={comunClass.imgPrimaryWidth} />
          </Grid>
        </div>
      </div>
      <div className={comunClass.boxDesk} style={{width: '100%'}}>
        {/* <div className={spaceStyle.space1} /> */}
        <div className='col-md-12'>
          <BoxEmpresa
            id={"PersonalData-Box1"}
            contenidoDireccionEmpresa={contenidoDireccionEmpresa}
            contenidoComunaEmpresa={ Format.formatizar(SucursalEmpresaObjeto.comuna)+", "+Format.formatizar(SucursalEmpresaObjeto.region) }
            contenidoRazonSocialForm={contenidoRazonSocialForm}
            contenidoRutEmpresa={contenidoRutEmpresa}
            titulo={tituloEmpresa}
            step={5.4}
          />
          {/* <div className={spaceStyle.spaceMin1} /> */}
          <div className={classes.containerBox} style={{margin: '15px 0'}}>
                <div className={classes.cuerpo}>
                    <div className={comunClass.containerTextBox} style={{minWidth: '350px'}}>
                        <Typography className={comunClass.tituloTextBox}>
                            Teléfono
                        </Typography>
                        <InputMasked
                            id={"EditarTelefonoCorreo-Lbl1"}
                            mask={Mask.advanced}
                            setTelefonoIsValid={setTelefonoIsValid}
                            setTelefono={setTelefono}
                            handleOnChange={handleOnChange}
                            telefono={telefono}
                            disabled={stateCheck}
                            // step={step}
                        />
                        <div className={welcomeStyle.titleContainerCardsEmailCorreo}>
                            <div className={welcomeStyle.divRowBottomEmail}>
                                <ErrorOutline />
                                <Typography
                                    variant='inherit'
                                    component='p'
                                    className={welcomeStyle.itemText2}
                                >
                                    Paciente&nbsp;<span style={{ color: "#00B2A9" }}>sin teléfono</span>
                                </Typography>
                                <div style={{ width: "40%", textAlign: "end" }}>
                                    <CustomSwitch
                                        id={"EditarTelefonoCorreo-Chk1"}
                                        checked={stateCheck}
                                        onChange={handleChange}
                                        color='default'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
          </div>
        </div>
        <div className='col-md-12'>
          <BoxACHS
            id={"PersonalData-Box3"}
            titulo={tituloDireccion}
            contenido={contenidoDireccion}
            contenidoComuna={ Object.keys(comunaDireccionParticularObjeto).length>0 ? Format.formatizar(comunaDireccionParticularObjeto.nombre) : "" }
            step={5.2}
          />

          <div className={classes.containerBox} style={{margin: '15px 0'}}>
                <div className={classes.cuerpo}>
                    <div className={comunClass.containerTextBox} style={{minWidth: '350px'}}>
                        <Typography className={comunClass.tituloTextBox}>
                            Correo
                        </Typography>
                        <Email
                            value={userEmail}
                            name='userEmail'
                            id='userEmail'
                            className={"form-control MuiOutlinedInput-input Mui-disabled Mui-disabled MuiInputBase-inputMarginDense MuiOutlinedInput-inputMarginDense"}
                            domains={ [ 'outlook.com', 'yahoo.com', 'gmail.com', 'hotmail.com', 'icloud.com', 'apple.com', 'aol.com', 'zoho.com' ] }
                            onBlur={(e) => { handleEmailChange(e) }}
                            onChange={(e) => { handleEmailChange(e) }}
                            onKeyDown={(e) => { handleEmailChange(e) }}
                            autoComplete='off'
                            disabled={stateCheck2}
                        />
                        <p style={{color: "#f44336"}} className={"MuiFormHelperText-root MuiFormHelperText-contained MuiFormHelperText-filled Mui-required MuiFormHelperText-marginDense"}>{ stateCheck2 ? null : !isEmailValid && "Escriba un email válido"}</p>
                        <div className={welcomeStyle.titleContainerCardsEmailCorreo}>
                            <div className={welcomeStyle.divRowBottomEmail}>
                                <ErrorOutline />
                                <Typography
                                    variant='inherit'
                                    component='p'
                                    className={welcomeStyle.itemText2}
                                >
                                    Paciente&nbsp;<span style={{ color: "#00B2A9" }}>sin e-mail</span>
                                </Typography>
                                <div style={{ width: "40%", textAlign: "end" }}>
                                    <CustomSwitch
                                        id='ValidarCorreoElectronico-CustomSwitch1'
                                        checked={stateCheck2}
                                        onChange={handleChange2}
                                        color='default'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
          </div>
        </div>
        {/* <div className={spaceStyle.spaceMin1} /> */}

        {/* <div className={spaceStyle.spaceMin1} /> */}

        <div className={comunClass.bottomElement}>
          <Button
            id={"PersonalData-Btn1"}
            variant='contained'
            className={comunClass.buttonAchs}
            disabled={!direccionParticular || !comunaDireccionParticular || !razonSocial || !telefonoIsValid || ((!stateCheck2 && (userEmail === undefined || userEmail.length === 0)) || (!isEmailValid && !stateCheck2))}
            onClick={() => handleNext()}
          >
            Sí, es correcta
          </Button>
        </div>
      </div>
      <div className={comunClass.displayDesk}>
        <div className={spaceStyle.space2} />
      </div>
    </div>
  );
};

function mapStateToProps({ addmissionForm, microsoftReducer }) {
  return {
    addmissionForm,
    microsoftReducer
  };
}

export default connect(mapStateToProps)(PersonalData);
