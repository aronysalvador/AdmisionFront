import React, { useState, useEffect } from "react";
import { Button, Typography, TextField } from "@material-ui/core";
import Cabecera from "../../components/cabecera/index";
import { getComunStyle } from "../../css/comun";
import { siniestroStyle } from "../../css/siniestroStyle";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import { validateEmailFormat } from "../../helpers/email";

const ValidarCorreoElectronico = () => {
  const dispatch = useDispatch();
  const {
    addmissionForm: { step, percentage, usuarioEmail },
  } = useSelector((state) => state, shallowEqual);

  const [userEmail, setUserEmail] = useState(() => {
    return !usuarioEmail ? "" : usuarioEmail;
  });
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const { root, buttonAchs, pregunta } = getComunStyle();
  const { mobileLabel } = siniestroStyle();

  return (
    <div className={root}>
      <Cabecera
        dispatch={() => dispatch(handleSetStep(step - 1))}
        percentage={percentage}
      />
      <Typography className={pregunta}>Por último, escribe tu email</Typography>
      <Typography className={mobileLabel}>Email</Typography>
      <TextField
        value={userEmail}
        variant="outlined"
        size="small"
        margin="dense"
        fullWidth
        helperText={!isEmailValid && "Escriba un email valido"}
        error={!isEmailValid}
        onChange={(e) => {
          setIsEmailValid(validateEmailFormat(e.target.value));
          setUserEmail(e.target.value);
        }}
      />
      <Button
        className={buttonAchs}
        disabled={userEmail.length === 0 || !isEmailValid}
        onClick={() =>
          isEmailValid &&
          dispatch(updateForm("emailusuario", userEmail)) &&
          dispatch(handleSetStep(step + 1))
        }
      >
        Siguiente
      </Button>
    </div>
  );
};

export default ValidarCorreoElectronico;
