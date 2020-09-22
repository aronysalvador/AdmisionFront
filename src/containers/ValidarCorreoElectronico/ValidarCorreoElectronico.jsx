import React, { useState } from "react";
import {
  Button,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
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

// import { handlEndLog } from "../../redux/actions/Log";
// import { FechaHora } from './../../helpers/utils'

const ValidarCorreoElectronico = () => {
  const dispatch = useDispatch();
  const {
    addmissionForm: { percentage, emailusuario },
  } = useSelector((state) => state, shallowEqual);


  const [userEmail, setUserEmail] = useState(() => {
    return !emailusuario ? "" : emailusuario;
  });

  const [stateCheck,setStateCheck] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const { root, buttonAchs, bottomElement, titleBlue, titleBlack } = getComunStyle();
  const spaceStyle = getSpaceStyle();
  const welcomeStyle = getWelcomeStyle();
  const { mobileLabel } = siniestroStyle();

  // const { LogForm: {ID} } = useSelector((state) => state, shallowEqual);

  const handleEnd = () => {    
    if(isEmailValid){
      // if(ID>0){
      //   dispatch(handlEndLog({Id: ID, fecha: FechaHora()})) 
      // }
        dispatch(updateForm("emailusuario", userEmail));            
        dispatch(handleSetStep(1000))
    }   
  }

  const handleChange = (event) => {
    setStateCheck( event.target.checked );
    if(event.target.checked){
      setIsEmailValid(validateEmailFormat("notienecorreo@achs.cl"));
      setUserEmail("notienecorreo@achs.cl");

    }
  };


  return (
    <div className={root}>
      <Cabecera
        dispatch={() => dispatch(handleSetStep(26.1))}
        percentage={percentage}
      />
      <Typography className={titleBlack}>
        Enviaremos los documentos al siguiente&nbsp;
        <span className={titleBlue}>e-mail</span>{" "}
      </Typography>
      <div className={spaceStyle.space2} />
      <Typography className={mobileLabel}>Email</Typography>
      <TextField
        value={userEmail}
        variant="outlined"
        size="small"
        margin="dense"
        fullWidth
        helperText={ stateCheck ? null : !isEmailValid && "Escriba un email válido"}
        error={!isEmailValid}
        onChange={(e) => {
          setIsEmailValid(validateEmailFormat(e.target.value));
          setUserEmail(e.target.value);
        }}
        disabled={stateCheck}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                disabled={stateCheck}
                onClick={() => {
                  setUserEmail("");
                }}
              >
                <ClearIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <div className={spaceStyle.space1} />

      <div className={welcomeStyle.titleContainerCards2}>
        <div  className={welcomeStyle.divRowBottom2}>
            <ErrorOutline />
            <Typography
              variant="p"
              component="p"
              className={welcomeStyle.itemText2}
            >
              Agregar paciente&nbsp;<span style={{ color: "#00B2A9" }}>sin e-mail</span>
            </Typography>
        </div>
        <div  className={welcomeStyle.divRowBottom2}>
          <Typography
                variant="p"
                component="p"
                className={welcomeStyle.pBegin}
              >
                ¿Está seguro de continuar sin e-mail? 
          </Typography>
        </div>
        <div  className={welcomeStyle.divRowBottom2}>
          <Typography
                variant="p"
                component="p"
                className={welcomeStyle.pBegin}
              >
                No podremos enviar una copia de los documentos al paciente.
          </Typography>
        </div>
        <div  className={welcomeStyle.divRowBottom2}>
          <Switch
            checked={stateCheck}
            onChange={handleChange}
            color="primary"
          />
        </div>
        
      </div>

      <div className={bottomElement}>
        <Button
          className={buttonAchs}
          variant="contained"
          disabled={
            (!stateCheck && (userEmail === undefined || userEmail.length === 0)) || (!isEmailValid && !stateCheck)
          }         
          onClick={() =>
            handleEnd()
          }
        >
          Crear Caso
        </Button>
      </div>
    </div>
  );
};

export default ValidarCorreoElectronico;
