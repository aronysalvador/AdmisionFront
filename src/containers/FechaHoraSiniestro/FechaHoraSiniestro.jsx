import React, { useState } from "react";
import FechaSiniestro from "../../components/FechaSiniestro/FechaSiniestro";
import HoraSiniestro from "./../../components/HoraSiniestro/HoraSiniestro";
import { Button, Typography } from "@material-ui/core";
import { getComunStyle } from "../../css/comun";
import Cabecera from "../../components/cabecera/index";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import { getSpaceStyle } from "../../css/spaceStyle";

const FechaHoraSiniestro = () => {
  const spaceStyle = getSpaceStyle();
  const comunStyle = getComunStyle();
  const [fechaSiniestro, setFechaSiniestro] = useState({});
  const [horaSiniestro, setHoraSiniestro] = useState({});
  const { buttonAchs, root, pregunta } = getComunStyle();
  const dispatch = useDispatch();
  const { step, percentage } = useSelector(
    (state) => state.addmissionForm,
    shallowEqual
  );

  function setFechaValueSiniestro(value) {
    setFechaSiniestro({ ...value });
  }

  function setHoraValueSiniestro(value) {
    setHoraSiniestro({ ...value });
  }

  return (
    <div className={root}>
      <Cabecera
        dispatch={() => dispatch(handleSetStep(8))}
        percentage={percentage}
      />
      <Typography className={pregunta}>
        Escribe la fecha y hora del accidente
      </Typography>
      <div className={spaceStyle.space2} />
      <FechaSiniestro onChange={setFechaValueSiniestro} />
      <div className={spaceStyle.space1} />
      <HoraSiniestro onChange={setHoraValueSiniestro} />
      <div className={comunStyle.bottomElement}>
        <Button
          className={buttonAchs}
          onClick={() => {
            dispatch(
              updateForm("fechaHoraSiniestro", {
                ...fechaSiniestro,
                ...horaSiniestro,
              })
            );
            dispatch(handleSetStep(step + 1));
          }}
        >
          Siguiente
        </Button>
      </div>
    </div>
  );
};

export default FechaHoraSiniestro;
