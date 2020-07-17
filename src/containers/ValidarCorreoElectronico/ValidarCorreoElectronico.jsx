import React, { useState, useEffect } from "react";
import { Button, Typography, TextField } from "@material-ui/core";
import Cabecera from "../../components/cabecera/index";
import { getComunStyle } from "../../css/comun";
import { siniestroStyle } from "../../css/siniestroStyle";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";

const ValidarCorreoElectronico = () => {
  const dispatch = useDispatch();
  const {
    addmissionForm: { step, percentage },
  } = useSelector((state) => state, shallowEqual);

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
        // value={lugarReferencia}
        variant="outlined"
        size="small"
        margin="dense"
        fullWidth
        // onChange={(e) => setLugarReferencia(e.target.value)}
      />
      <Button
        className={buttonAchs}
        // onClick={() =>
        //   dispatch(updateForm("lugarReferenciaSiniestro", lugarReferencia))
        // }
      >
        Siguiente
      </Button>
    </div>
  );
};

export default ValidarCorreoElectronico;
