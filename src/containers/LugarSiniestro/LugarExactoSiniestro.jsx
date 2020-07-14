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
const LugarExactoSiniestro = () => {
  const { step, percentage } = useSelector(
    (state) => state.addmissionForm,
    shallowEqual
  );
  const { root, buttonAchs, pregunta } = getComunStyle();
  const { mobileLabel } = siniestroStyle();
  return (
    <div className={root}>
      <Cabecera
        dispatch={() => dispatch(handleSetStep(--step))}
        percentage={percentage}
      />
      <Typography className={pregunta}>
        Señala el lugar exacto del accidente
      </Typography>

      <Typography className={mobileLabel}>Dirección accidente</Typography>

      <TextField variant="outlined" size="small" fullWidth />

      <Button className={buttonAchs}>Siguiente</Button>
    </div>
  );
};

export default LugarExactoSiniestro;
