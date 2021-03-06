import React, { useState } from "react";
import { TextField, InputAdornment } from "@material-ui/core";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { Button, Typography } from "@material-ui/core";
import { getComunStyle } from "../../css/comun";
import Cabecera from "../../components/cabecera/index";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import { getSpaceStyle } from "../../css/spaceStyle";
import ClearIcon from '@material-ui/icons/Clear';
import { IconButton } from "material-ui";
import Grid from '@material-ui/core/Grid';

const Cargo = () => {
  const {
    addmissionForm: { step, percentage, cargoForm },
  } = useSelector((state) => state, shallowEqual);

  //State
  const [cargo, saveCargo] = useState(() => {
    return !cargoForm ? "" : cargoForm;
  });

  const [error, setError] = useState(false);

  const {
    buttonAchs,
    root,
    bottomElement,
    tituloTextbox,
    titleBlack,
    titleBlue
  } = getComunStyle();
  const spaceStyle = getSpaceStyle();

  const dispatch = useDispatch();

  const clickSendCargo = () => {
    //Validar Formulario
    if (cargo.length < 5) {
      setError(true);
      return;
    }
    setError(false);
    dispatch(updateForm("cargoForm", cargo));
    dispatch(handleSetStep(step + 1));
  };

  return (
    <div className={root}>
      <Cabecera
        dispatch={() => dispatch(handleSetStep(19.3))}
        percentage={percentage}
      />
      <Typography className={titleBlack}>
        ¿Cuál es el  
        <Grid component="span"  className={titleBlue}>
          &nbsp;cargo
        </Grid>                 
        &nbsp;del paciente en la empresa?
      </Typography>
      <div className={spaceStyle.space2} />

      <Typography className={tituloTextbox} variant="subtitle2">
        Cargo
      </Typography>
      <div>
        <TextField
          id="cargo"
          value={cargo}
          onChange={(e) => saveCargo(e.target.value)}
          helperText={
            error
              ? "Debe ingresar al menos 5 caracteres"
              : "Ejemplo: Analista, Operario, Maestro"
          }
          error={error}
          margin="dense"
          variant="outlined"
          autoComplete="off"
          type="text"
          inputProps={{ maxLength: 25 }}
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                  <IconButton
                    onClick={() => {
                      saveCargo("");
                    }}
                  >
                    <ClearIcon />
                  </IconButton>
                </InputAdornment>
            ),
          }}
        />
      </div>

      <div className={bottomElement}>
        <Button
          variant="contained"
          className={buttonAchs}
          disabled={!cargo}
          onClick={() => clickSendCargo()}
        >
          Continuar
        </Button>
      </div>
    </div>
  );
};

export default Cargo;
