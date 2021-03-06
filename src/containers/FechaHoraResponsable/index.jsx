import React, { useState } from "react";
import FechaSiniestro from "../../components/FechaSiniestro/FechaSiniestroCalendar";
import HoraSiniestro from "./../../components/HoraSiniestro/HoraSiniestro";
import { Button, Typography } from "@material-ui/core";
import { getComunStyle } from "../../css/comun";
import { getSpaceStyle } from "../../css/spaceStyle";
import Cabecera from "../../components/cabecera/index";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import Grid from '@material-ui/core/Grid';


const FechaHoraResponsable = () => {
  const { percentage, fechaHoraResponsable } = useSelector(
    (state) => state.addmissionForm,
    shallowEqual
  );
  const { days, month, year, horas, minutos } = fechaHoraResponsable;

  const [fechaSiniestro, setFechaSiniestro] = useState({});
  const [horaSiniestro, setHoraSiniestro] = useState({});
  const { buttonAchs, root, bottomElement, titleBlack, titleBlue } = getComunStyle();

  const spaceStyle = getSpaceStyle();
  const dispatch = useDispatch();

  function setFechaValueSiniestro(value) {
    setFechaSiniestro({ ...value });
  }

  // function setHoraValueSiniestro(value) {
  //   setHoraSiniestro({ ...value });
  // }

  function setHoraValueSiniestro(value) {
    value.minutos = minutosArray[value.indiceMinutos];
    setHoraSiniestro({ ...value });
  }

  const minutosArray = [0, 10, 20, 30, 40, 50]

  return (
    <div className={root}>
      <Cabecera
        dispatch={() => dispatch(handleSetStep(16))}
        percentage={percentage}
      />
      <Typography className={titleBlack}>
        <Grid component="span"  className={titleBlue}>
            ¿Cuándo y a que hora se le avisó 
        </Grid>          
        &nbsp;al responsable?
      </Typography>
      <div className={spaceStyle.space2} />
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
              updateForm("fechaHoraResponsable", {
                ...fechaSiniestro,
                ...horaSiniestro,
              })
            );
            dispatch(handleSetStep(17.1));
          }}
        >
          Continuar
        </Button>
      </div>
    </div>
  );
};

export default FechaHoraResponsable;
