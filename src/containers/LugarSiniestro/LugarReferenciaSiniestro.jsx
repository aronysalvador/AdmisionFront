import React, { useState, useEffect } from "react";
import { getComunStyle } from "../../css/comun";
import { Button, Typography, TextField } from "@material-ui/core";
import Cabecera from "../../components/cabecera/index";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { handleSetStep } from "../../redux/actions/AdmissionAction";
import { siniestroStyle } from "../../css/siniestroStyle";
import { updateForm } from "../../redux/actions/AdmissionAction";
import { getSpaceStyle } from "../../css/spaceStyle";

const LugarReferenciaSiniestro = () => {
  let {
    addmissionForm: { step, percentage, lugarReferenciaSiniestro },
  } = useSelector((state) => state, shallowEqual);

  const [lugarReferencia, setLugarReferencia] = useState(
    lugarReferenciaSiniestro
  );
  const dispatch = useDispatch();

  const { root, buttonAchs, pregunta, tituloTextbox, bottomElement } = getComunStyle();
  const { mobileCaption } = siniestroStyle();
  const spaceStyle = getSpaceStyle();
  return (
    <div className={root}>
      <Cabecera
        dispatch={() => dispatch(handleSetStep(step - 1))}
        percentage={percentage}
      />
      <Typography className={pregunta}>
        ...y especifica una referencia del lugar
      </Typography>
      <div className={spaceStyle.space2} />
      <Typography className={tituloTextbox} variant="subtitle2">
        referencia
      </Typography>
      <TextField
        value={lugarReferencia}
        variant="outlined"
        size="small"
        margin="dense"
        fullWidth
        onChange={(e) => setLugarReferencia(e.target.value)}
      />
      <Typography className={mobileCaption} variant="subtitle1">
        Ejemplo: Piso 21, Area 453, Puesto 12A
      </Typography>
      <div className={bottomElement}>
        <Button
          className={buttonAchs}
          onClick={() => {
            dispatch(updateForm("lugarReferenciaSiniestro", lugarReferencia));
            dispatch(handleSetStep(++step));
          }}
        >
          Siguiente
        </Button>
      </div>
    </div>
  );
};

export default LugarReferenciaSiniestro;
