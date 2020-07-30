import React, { useState, useEffect } from "react";
import { getComunStyle } from "../../css/comun";
import { Button, Typography, TextField } from "@material-ui/core";
import Cabecera from "../../components/cabecera/index";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import { getSpaceStyle } from "../../css/spaceStyle";
import { siniestroStyle } from "../../css/siniestroStyle";
import {
  validatePhoneNumberFormat,
  formatPhoneNumber,
} from "../../helpers/telefono";
import InputMask from "react-input-mask";

const EditarTelefono = () => {
  const [telefono, setTelefono] = useState(() => "+569");
  const [telefonoIsValid, setTelefonoIsValid] = useState(false);

  const {
    addmissionForm: { step, percentage, sucursales },
  } = useSelector((state) => state, shallowEqual);
  let stepx = step;
  const dispatch = useDispatch();

  const {
    root,
    buttonAchs,
    pregunta,
    tituloTextbox,
    bottomElement,
  } = getComunStyle();
  const { mobileCaption } = siniestroStyle;
  const spaceStyle = getSpaceStyle();
  const input = React.createRef();

  return (
    <div className={root}>
      <Cabecera
        dispatch={() => dispatch(handleSetStep(--stepx))}
        percentage={percentage}
      />
      <Typography className={pregunta} variant="h2">
        Ingresa tu teléfono personal
      </Typography>
      <div className={spaceStyle.space2} />
      <Typography className={tituloTextbox} variant="h2">
        teléfono
      </Typography>
      <TextField
        value={telefono}
        type="phone"
        variant="outlined"
        size="small"
        margin="dense"
        required
        fullWidth
        helperText={"Ingresa tu numero personal"}
        onChange={(e) => {
          let texto = e.target.value;
          setTelefonoIsValid(validatePhoneNumberFormat(texto));
          setTelefono(texto);
        }}
      />

      <div className={bottomElement}>
        <Button
          variant="contained"
          className={buttonAchs}
          disabled={!telefonoIsValid}
        >
          Confirmar
        </Button>
      </div>
    </div>
  );
};

export default EditarTelefono;
