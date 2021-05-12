import { useState } from "react";
import { Button, Typography, withStyles } from "@material-ui/core";
import Cabecera from "../../components/cabecera/index";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import { getComunStyle } from "../../css/comun";
import { getSpaceStyle } from "../../css/spaceStyle";
import { getWelcomeStyle } from "../../css/welcomeStyle";
import InputMasked from "./InputMasked";
import Mask from "./phone";
import { Pipes } from "./phone";
import Grid from '@material-ui/core/Grid';
import Switch from '@material-ui/core/Switch';
import { ErrorOutline } from "@material-ui/icons";
import Header from "../../components/header/index";
import image from './../../img/identify.svg'
import { validateEmailFormat } from "../../helpers/email";
// import ClearIcon from "@material-ui/icons/Clear";
import Email from 'react-email-autocomplete';

const EditarTelefonoCorreo = () => {
  const {
    addmissionForm: { step, percentage, telefonoParticular: TelefonoEmpleado, emailusuario }
  } = useSelector((state) => state, shallowEqual);

  const { microsoftReducer } = useSelector((state) => state, shallowEqual);

  const dispatch = useDispatch();

  const [ telefono, setTelefono ] = useState(() => {
    return TelefonoEmpleado ? TelefonoEmpleado : "+56 9";
  });
  const [ telefonoIsValid, setTelefonoIsValid ] = useState(() => {
    return !!TelefonoEmpleado;
  });

  const comunClass = getComunStyle();
  const spaceStyle = getSpaceStyle();
  const welcomeStyle = getWelcomeStyle()

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

  const [ userEmail, setUserEmail ] = useState(() => {
    return !emailusuario || emailusuario==="notienecorreo@achs.cl" ? "" : emailusuario;
  });
//   const inputRef  = React.useRef();
  const [ stateCheck2, setStateCheck2 ] = useState(() => {
    return (emailusuario==="notienecorreo@achs.cl")? 1 : 0
  });
  const [ isEmailValid, setIsEmailValid ] = useState(true);

  const handleChange2 = (event) => {
   // document.getElementById("userEmail").value="xxx"

    setStateCheck2(event.target.checked);
    if (event.target.checked){
      setIsEmailValid(validateEmailFormat("notienecorreo@achs.cl"));
      setUserEmail("notienecorreo@achs.cl");
    //   inputRef.current.value = "notienecorreo@achs.cl";
    } else {
      setIsEmailValid(false);
      setUserEmail("");
    //   inputRef.current.value = "";
    }
  };

  const handleEmailChange = (e) => {
    // console.log("cambiando: "+e.target.value)
    let valid = validateEmailFormat(e.target.value)
    setIsEmailValid(valid);
    setUserEmail(e.target.value);
  }

  return (
    <div className={comunClass.root}>
      <div className={comunClass.displayDesk}>
        <Header userMsal={ microsoftReducer.userMsal } />
      </div>
      <div className={comunClass.beginContainerDesk}>
        <Cabecera
          id={"EditarTelefonoCorreo-BtnBack"}
          dispatch={() => dispatch(handleSetStep(5.813)) }
          percentage={percentage}
        />
      </div>
      <div className={comunClass.titlePrimaryDesk}>
        <Grid className={`${comunClass.titleBlack} ${comunClass.titleBlack2} ${comunClass.textPrimaryDesk}`}>
          Ingresa el
          <Grid component='span' className={`${comunClass.titleBlue} ${comunClass.titleBlue2}`}>
            &nbsp;teléfono personal
          </Grid>
        </Grid>
        <div className={comunClass.displayDeskImg}>
          <Grid component='span' className={comunClass.imgPrimaryDesk}>
            <img alt='identify' src={image} className={comunClass.imgPrimaryWidth} />
          </Grid>
        </div>
      </div>
      <div className={comunClass.boxDesk}>
        <div className={comunClass.displayMobile}>
          <div className={spaceStyle.space2} />
        </div>
        <div className={comunClass.containerTextBox}>
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
            step={step}
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
        <div className={spaceStyle.space2} />
        <div className={comunClass.containerTextBox}>
          <Typography className={comunClass.tituloTextBox}>
            Correo
          </Typography>

            <Email
                value={userEmail}
                name='userEmail'
                id='userEmail'
                // ref={inputRef}
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
        <div className={comunClass.bottomElement}>
          <Button
            id={"EditarTelefonoCorreo-Btn1"}
            variant='contained'
            className={comunClass.buttonAchs}
            disabled={!telefonoIsValid || ((!stateCheck2 && (userEmail === undefined || userEmail.length === 0)) || (!isEmailValid && !stateCheck2))}
            onClick={() => {
                dispatch(updateForm("telefonoParticular", telefono));
                dispatch(updateForm("emailusuario", userEmail));
                dispatch(handleSetStep(5.2))
            }
          }
          >
            Actualizar
          </Button>
        </div>
      </div>
      <div className={comunClass.displayDesk}>
        <div className={spaceStyle.space2} />
      </div>
    </div>
  );
};

export default EditarTelefonoCorreo;