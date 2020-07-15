import React, { useState } from "react";
import FechaSiniestro from "../../components/FechaSiniestro/FechaSiniestro";
import HoraSiniestro from "./../../components/HoraSiniestro/HoraSiniestro";
import { Button, Typography } from "@material-ui/core";
import { getComunStyle } from "../../css/comun";
import Cabecera from "../../components/cabecera/index";
import {
  useDispatch as dispatch,
  useSelector,
  shallowEqual,
} from "react-redux";
import { handleSetStep } from "../../redux/actions/AdmissionAction";

const FechaHoraSiniestro = () => {
  const [fechaSiniestro, setFechaSiniestro] = useState({});
  const [horaSiniestro, setHoraSiniestro] = useState({});
  const { buttonAchs, root, pregunta } = getComunStyle();

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
        dispatch={() => dispatch(handleSetStep(--step))}
        percentage={percentage}
      />
      <Typography className={pregunta}>
        Escribe la fecha y hora del accidente
      </Typography>
      <FechaSiniestro onChange={setFechaValueSiniestro} />
      <HoraSiniestro onChange={setHoraValueSiniestro} />
      <Button
        className={buttonAchs}
        onClick={() => dispatch({ ...fechaSiniestro, ...horaSiniestro })}
      >
        Siguiente
      </Button>
    </div>
  );
};

export default FechaHoraSiniestro;
