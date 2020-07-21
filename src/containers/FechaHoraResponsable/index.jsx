import React, { useState } from "react";
import FechaSiniestro from "../../components/FechaSiniestro/FechaSiniestro";
import HoraSiniestro from "./../../components/HoraSiniestro/HoraSiniestro";
import { Button, Typography } from "@material-ui/core";
import { getComunStyle } from "../../css/comun";
import Cabecera from "../../components/cabecera/index";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";

const FechaHoraResponsable = () => {
  const {  percentage, fechaHoraResponsable  } = useSelector(
    (state) => state.addmissionForm,
    shallowEqual
  );
  const { days, month, year, horas, minutos } = fechaHoraResponsable;

  const [fechaSiniestro, setFechaSiniestro] = useState({});
  const [horaSiniestro, setHoraSiniestro] = useState({});
  const { buttonAchs, root, pregunta } = getComunStyle();
  const dispatch = useDispatch();
  

  function setFechaValueSiniestro(value) {
    setFechaSiniestro({ ...value });
  }

  function setHoraValueSiniestro(value) {
    setHoraSiniestro({ ...value });
  }
  return (
    <div className={root}>
      <Cabecera
        dispatch={() => dispatch(handleSetStep(18))}
        percentage={percentage}
      />
      <Typography className={pregunta}>
        Escribe la fecha y hora en que avisaste al responsable
      </Typography>
      <FechaSiniestro
      onChange={setFechaValueSiniestro}
      daysFromState={days}
      monthFromState={month}
      yearFromState={year} />

      <HoraSiniestro 
      onChange={setHoraValueSiniestro}
      horasFromState={horas}
      minutosFromState={minutos} />

      <Button
        className={buttonAchs}
        onClick={() => {
          dispatch(
            updateForm("fechaHoraResponsable", {
              ...fechaSiniestro,
              ...horaSiniestro,
            })
          );
          dispatch(handleSetStep(17.1));
        }}
      >
        Siguiente
      </Button>
    </div>
  );
};

export default FechaHoraResponsable;
