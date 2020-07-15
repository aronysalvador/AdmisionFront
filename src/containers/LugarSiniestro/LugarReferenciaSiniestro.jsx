import React, { useState, useEffect } from "react";
import { getComunStyle } from "../../css/comun";
import { Button, Typography, TextField } from "@material-ui/core";
import Cabecera from "../../components/cabecera/index";
import {
  useDispatch as dispatch,
  useSelector,
  shallowEqual,
} from "react-redux";
import { handleSetStep } from "../../redux/actions/AdmissionAction";
import { siniestroStyle } from "../../css/siniestroStyle";

const LugarReferenciaSiniestro = () => {
  const { step, percentage } = useSelector(
    (state) => state.addmissionForm,
    shallowEqual
  );
  const { root, buttonAchs, pregunta } = getComunStyle();
  const { mobileLabel, mobileCaption } = siniestroStyle();

  return (
    <div className={root}>
      <Cabecera
        dispatch={() => dispatch(handleSetStep(--step))}
        percentage={percentage}
      />
      <Typography className={pregunta}>
        ...y especifica una referencia del lugar
      </Typography>

      <Typography className={mobileLabel}>referencia</Typography>
      <TextField variant="outlined" size="small" margin="dense" fullWidth />
      <Typography className={mobileCaption}>
        Piso 21, Area 453, Puesto 12A
      </Typography>
      <Button className={buttonAchs}>Siguiente</Button>
    </div>
  );
};

export default LugarReferenciaSiniestro;
