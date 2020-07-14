import React, { useState, useEffect } from "react";
import { getComunStyle } from "../../css/comun";
import { Button, Typography } from "@material-ui/core";
import Cabecera from "../../components/cabecera/index";
import {
  useDispatch as dispatch,
  useSelector,
  shallowEqual,
} from "react-redux";
import { handleSetStep } from "../../redux/actions/AdmissionAction";

const LugarExactoSiniestro = () => {
  const { step, percentage } = useSelector(
    (state) => state.addmissionForm,
    shallowEqual
  );
  const { root, buttonAchs, pregunta } = getComunStyle();
  return (
    <div className={root}>
      <Cabecera
        dispatch={() => dispatch(handleSetStep(--step))}
        percentage={percentage}
      />
      <Typography className={pregunta}>
        Señala el lugar exacto del accidente
      </Typography>
      <Button className={buttonAchs}>Siguiente</Button>
    </div>
  );
};

export default LugarExactoSiniestro;
