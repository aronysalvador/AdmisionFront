import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { Button, Typography } from "@material-ui/core";
import { getComunStyle } from "../../css/comun";
import Cabecera from "../../components/cabecera/index";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import { getSpaceStyle } from "../../css/spaceStyle";

const Cargo = () => {
  const {
    addmissionForm: { step, percentage, cargoForm },
  } = useSelector((state) => state, shallowEqual);

  //State
  const [cargo, saveCargo] = useState(() => {
    return !cargoForm ? "" : cargoForm;
  });

  const {
    buttonAchs,
    root,
    pregunta,
    bottomElement,
    tituloTextbox,
  } = getComunStyle();
  const spaceStyle = getSpaceStyle();

  const dispatch = useDispatch();

  return (
    <div className={root}>
      <Cabecera
        dispatch={() => dispatch(handleSetStep(5.1))}
        percentage={percentage}
      />
      <Typography className={pregunta}>
        ¿Qué cargo tienes actualmente?
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
          helperText="Ejemplo:Analista,Operario,Maestro"
          margin="dense"
          variant="outlined"
          fullWidth
        />
      </div>

      <div className={bottomElement}>
        <Button
          className={buttonAchs}
          isabled={!cargo}
          onClick={() => {
            dispatch(updateForm("cargoForm", cargo));
            //dispatch(handleSetStep(step + 1));
          }}
        >
          Siguiente
        </Button>
      </div>
    </div>
  );
};

export default Cargo;
