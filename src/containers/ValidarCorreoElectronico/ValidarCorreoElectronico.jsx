import { useState } from "react";
import {
  Button,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
  withStyles
} from "@material-ui/core";
import Cabecera from "../../components/cabecera/index";
import { getComunStyle } from "../../css/comun";
import { siniestroStyle } from "../../css/siniestroStyle";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import { validateEmailFormat } from "../../helpers/email";
import { getSpaceStyle } from "../../css/spaceStyle";
import ClearIcon from "@material-ui/icons/Clear";
import { getWelcomeStyle } from "../../css/welcomeStyle";
import { ErrorOutline } from "@material-ui/icons";
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Header from "../../components/header/index";
import { Format } from "../../helpers/strings";
import image from './../../img/relato.svg'

const ValidarCorreoElectronico = () => {
  const dispatch = useDispatch();
  const {
    addmissionForm: { percentage, emailusuario }
  } = useSelector((state) => state, shallowEqual);

  const { microsoftReducer } = useSelector((state) => state, shallowEqual);

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
    return !emailusuario ? "" : emailusuario;
  });

  const [ stateCheck, setStateCheck ] = useState(emailusuario === "notienecorreo@achs.cl");
  const [ isEmailValid, setIsEmailValid ] = useState(true);

  const comunClass = getComunStyle();
  const spaceStyle = getSpaceStyle();
  const welcomeStyle = getWelcomeStyle();
  const { mobileLabel } = siniestroStyle();

  const handleEnd = () => {
    if (isEmailValid){
      dispatch(updateForm("emailusuario", userEmail));
      dispatch(handleSetStep(1000))
    }
  }

  const handleChange = (event) => {
    setStateCheck(event.target.checked);
    if (event.target.checked){
      setIsEmailValid(validateEmailFormat("notienecorreo@achs.cl"));
      setUserEmail("notienecorreo@achs.cl");
    } else {
      setIsEmailValid(false);
      setUserEmail("");
    }
  };

  return (
    <div className={comunClass.root}>
      <div className={comunClass.displayDesk}>
        <Header userMsal={ microsoftReducer.userMsal } />
      </div>
      <div className={comunClass.beginContainerDesk}>
        <Cabecera
          id='ValidarCorreoElectronico-BtnBack'
          dispatch={() => dispatch(handleSetStep(26.1))}
          percentage={percentage}
        />
      </div>
      <div className={comunClass.titlePrimaryDesk}>
        <Grid className={[ comunClass.titleBlack, comunClass.titleBlack2, comunClass.textPrimaryDesk ].join(' ')}>
          Enviaremos los documentos al siguiente&nbsp;
          <Grid component='span' className={[ comunClass.titleBlue, comunClass.titleBlue2 ].join(' ')}>
            e-mail
          </Grid>
        </Grid>
        <div className={comunClass.displayDeskImg}>
          <Grid component='span' className={comunClass.imgPrimaryDesk}>
            <img alt='relato' src={image} className={comunClass.imgPrimaryWidth} />
          </Grid>
        </div>
      </div>
      <div className={comunClass.boxDesk}>
        <div className={comunClass.displayMobile}>
          <div className={spaceStyle.space2} />
        </div>
        <div className={comunClass.containerTextBox}>
          <Typography className={mobileLabel}>
            Email
          </Typography>
          <TextField
            id='ValidarCorreoElectronico-Input1'
            value={!stateCheck ? userEmail : ""}
            variant='outlined'
            size='small'
            margin='dense'
            fullWidth
            autoComplete='off'
            helperText={ stateCheck ? null : !isEmailValid && "Escriba un email válido"}
            error={!isEmailValid}
            onChange={(e) => {
              setIsEmailValid(validateEmailFormat(Format.caracteresInvalidos(e.target.value)));
              setUserEmail(e.target.value);
            }}
            disabled={stateCheck}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton
                    id='ValidarCorreoElectronico-ClearIcon1'
                    disabled={stateCheck}
                    onClick={() => {
                      setUserEmail("");
                    }}
                  >
                    <ClearIcon />
                  </IconButton>
                </InputAdornment>
              )
            }}
          />

          <div className={spaceStyle.space1} />

          <div className={welcomeStyle.titleContainerCardsEmail}>
            <div className={welcomeStyle.divRowBottomEmail}>
              <ErrorOutline />
              <Typography className={welcomeStyle.itemText2}>
                Agregar paciente&nbsp;<span style={{ color: "#00B2A9" }}>sin e-mail</span>
              </Typography>
            </div>
            <div className={welcomeStyle.divRowBottomEmail}>
              <Typography className={welcomeStyle.pBegin}>
                ¿Está seguro de continuar sin e-mail?
              </Typography>
            </div>
            <div className={welcomeStyle.divRowBottomEmail}>
              <Typography className={welcomeStyle.pBegin}>
                No podremos enviar una copia de los documentos al paciente.
              </Typography>
            </div>
            <div className={welcomeStyle.divRowBottomEmail}>
              <CustomSwitch
                id='ValidarCorreoElectronico-CustomSwitch1'
                checked={stateCheck}
                onChange={handleChange}
                color='default'
              />
            </div>
          </div>
        </div>

        <div className={comunClass.bottomElement}>
          <Button
            id='ValidarCorreoElectronico-Btn1'
            className={comunClass.buttonAchs}
            variant='contained'
            disabled={
              (!stateCheck && (userEmail === undefined || userEmail.length === 0)) || (!isEmailValid && !stateCheck)
            }
            onClick={() => handleEnd() }
          >
            Crear Caso
          </Button>
        </div>
      </div>
      <div className={comunClass.displayDesk}>
        <div className={spaceStyle.space2} />
      </div>
    </div>
  );
};

export default ValidarCorreoElectronico;
