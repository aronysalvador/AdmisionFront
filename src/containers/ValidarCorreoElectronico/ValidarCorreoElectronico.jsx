import React, { useState } from "react";
import { Button, Typography, TextField, InputAdornment, IconButton  } from "@material-ui/core";
import Cabecera from "../../components/cabecera/index";
import { getComunStyle } from "../../css/comun";
import { siniestroStyle } from "../../css/siniestroStyle";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import { validateEmailFormat } from "../../helpers/email";
import { getSpaceStyle } from "../../css/spaceStyle";
import ClearIcon from '@material-ui/icons/Clear';

const ValidarCorreoElectronico = () => {
  const dispatch = useDispatch();
  const {
    addmissionForm: { step, percentage, emailusuario },
  } = useSelector((state) => state, shallowEqual);
  console.log({ emailusuario });

  let stepx = step;
  const [userEmail, setUserEmail] = useState(() => {
    return !emailusuario ? "" : emailusuario;
  });
  const [isEmailValid, setIsEmailValid] = useState(true);
  const { root, buttonAchs, pregunta, bottomElement } = getComunStyle();
  const spaceStyle = getSpaceStyle();
  const { mobileLabel } = siniestroStyle();

  return (
    <div className={root}>
      <Cabecera
        dispatch={() => dispatch(handleSetStep(--stepx))}
        percentage={percentage}
      />
      <Typography className={pregunta}>Por último, escribe tu email</Typography>
      <div className={spaceStyle.space2} />
      <Typography className={mobileLabel}>Email</Typography>
      <TextField
        value={userEmail}
        variant="outlined"
        size="small"
        margin="dense"
        fullWidth
        helperText={!isEmailValid && "Escriba un email válido"}
        error={!isEmailValid}
        onChange={(e) => {
          setIsEmailValid(validateEmailFormat(e.target.value));
          setUserEmail(e.target.value);
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
                <IconButton
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
      <div className={bottomElement}>
        <Button
          className={buttonAchs}
          variant="contained"
          disabled={
            userEmail === undefined || userEmail.length === 0 || !isEmailValid
          }
          onClick={() =>
            isEmailValid &&
            dispatch(updateForm("emailusuario", userEmail)) &&
            dispatch(handleSetStep(++stepx))
          }
        >
          Siguiente
        </Button>
      </div>
    </div>
  );
};

export default ValidarCorreoElectronico;
