import React, { useState } from "react";
import { getComunStyle } from "../../css/comun";
import { Button, Typography, TextField, InputAdornment } from "@material-ui/core";
import Cabecera from "../../components/cabecera/index";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { handleSetStep } from "../../redux/actions/AdmissionAction";
import { siniestroStyle } from "../../css/siniestroStyle";
import { updateForm } from "../../redux/actions/AdmissionAction";
import { getSpaceStyle } from "../../css/spaceStyle";
import { IconButton } from "material-ui";
import ClearIcon from '@material-ui/icons/Clear';

const LugarReferenciaSiniestro = () => {
  let {
    addmissionForm: { step, percentage, lugarReferenciaSiniestro },
  } = useSelector((state) => state, shallowEqual);
  let stepx = step;
  const [lugarReferencia, setLugarReferencia] = useState(() => {
    return !lugarReferenciaSiniestro ? "" : lugarReferenciaSiniestro;
  });

  const [isLugarReferenciaValid, setIsLugarReferenciaValid] = useState(true);

  const dispatch = useDispatch();

  const {
    root,
    buttonAchs,
    tituloTextbox,
    bottomElement,
    titleBlue,
    titleBlack
  } = getComunStyle();
  const { mobileCaption } = siniestroStyle();
  const spaceStyle = getSpaceStyle();
  return (
    <div className={root}>
      <Cabecera
        dispatch={() => dispatch(handleSetStep(--stepx))}
        percentage={percentage}
      />
      <Typography className={titleBlack}>
        Pide al paciente que te dé una 
        <div className={titleBlue}>
          &nbsp;referencia del lugar
        </div>
      </Typography>
      <div className={spaceStyle.space2} />
      <Typography className={tituloTextbox}>
        Referencia
      </Typography>
      <TextField
        helperText={
          !isLugarReferenciaValid && "Debes ingresar al menos una referencia"
        }
        error={!isLugarReferenciaValid}
        value={lugarReferencia}
        variant="outlined"
        size="small"
        margin="dense"
        required
        fullWidth
        onChange={(e) => {
          let texto = e.target.value;
          setIsLugarReferenciaValid(texto.length > 0);
          setLugarReferencia(texto);
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
                <IconButton
                  onClick={() => {
                    setLugarReferencia("");
                  }}
                >
                  <ClearIcon />
                </IconButton>
              </InputAdornment>
          ),
        }}
      />
      <Typography className={mobileCaption} variant="subtitle1">
        Ejemplo: Piso 21, Área 453, Puesto 12A
      </Typography>
      <div className={bottomElement}>
        <Button
          disabled={lugarReferencia.length === 0 || !isLugarReferenciaValid}
          className={buttonAchs}
          variant="contained"
          onClick={() => {
            dispatch(updateForm("lugarReferenciaSiniestro", lugarReferencia));
            dispatch(handleSetStep(12.1)); //++stepx
          }}
        >
          Continuar
        </Button>
      </div>
    </div>
  );
};

export default LugarReferenciaSiniestro;
