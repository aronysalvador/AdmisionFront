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

  const { step, percentage, fechaHoraSiniestro } = useSelector(
    (state) => state.addmissionForm,
    shallowEqual
  );
  const { days, month, year, horas, minutos } = fechaHoraSiniestro;

  const [fechaSiniestro, setFechaSiniestro] = useState({});
  const [horaSiniestro, setHoraSiniestro] = useState({});
  const { buttonAchs, root, pregunta, bottomElement } = getComunStyle();

  const minutosArray = [0, 10, 20, 30, 40, 50]

  const dispatch = useDispatch();

  function setFechaValueSiniestro(value) {
    setFechaSiniestro({ ...value });
  }

  function setHoraValueSiniestro(value) {
    value.minutos = minutosArray[value.indiceMinutos];
    setHoraSiniestro({ ...value });
  }

  return (
    <div className={root}>
      <Cabecera
        dispatch={() => dispatch(handleSetStep(9))}
        percentage={percentage}
      />
      <Typography className={pregunta}>
        Escribe la fecha y hora del accidente
      </Typography>
      <div className={spaceStyle.space3} />
      <FechaSiniestro
        onChange={setFechaValueSiniestro}
        daysFromState={days}
        monthFromState={month}
        yearFromState={year}
      />
      <div className={spaceStyle.space1} />
      <HoraSiniestro
        onChange={setHoraValueSiniestro}
        horasFromState={horas}
        indiceMinutosFromState={minutosArray.indexOf(minutos)}
        minutos={minutosArray}
      />
      <div className={bottomElement}>
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
