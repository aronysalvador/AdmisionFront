import React, { useState } from "react";
import FechaSiniestro from "../../components/FechaSiniestro/FechaSiniestro";
import HoraSiniestro from "./../../components/HoraSiniestro/HoraSiniestro";
import { Button, Typography } from "@material-ui/core";
import { getComunStyle } from "../../css/comun";
import Cabecera from "../../components/cabecera/index";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import { getSpaceStyle } from "../../css/spaceStyle";
import Grid from '@material-ui/core/Grid';

const FechaHoraSiniestro = () => {
  const spaceStyle = getSpaceStyle();

  const { step, percentage, fechaHoraSiniestro, siniestros } = useSelector(
    (state) => state.addmissionForm,
    shallowEqual
  );
  const { days, month, year, horas, minutos } = fechaHoraSiniestro;

  const [fechaSiniestro, setFechaSiniestro] = useState({});
  const [horaSiniestro, setHoraSiniestro] = useState({});
  const { buttonAchs, root, bottomElement, titleBlack, titleBlue } = getComunStyle();

  const minutosArray = [0, 10, 20, 30, 40, 50]

  const dispatch = useDispatch();

  function setFechaValueSiniestro(value) {
    setFechaSiniestro({ ...value });
  }

  function setHoraValueSiniestro(value) {
    value.minutos = minutosArray[value.indiceMinutos];
    setHoraSiniestro({ ...value });
  }

  const handleNext = () => {
    let siniestroTemp = undefined;

    siniestros.forEach(x => {
      const fechaCasted = new Date(Date.parse(x.fecha_date));
      const dias = fechaCasted.getDate() + 1;
      const mes = fechaCasted.getMonth() + 1;
      const anio = fechaCasted.getFullYear();
      console.log(dias, mes, anio);
      if(dias === fechaSiniestro.days && mes === fechaSiniestro.month && anio === fechaSiniestro.year) {
        siniestroTemp = x;
      }
    });

    if(siniestroTemp === undefined) {
      //No hay siniestro para esa fecha
      dispatch(
        updateForm("fechaHoraSiniestro", {
          ...fechaSiniestro,
          ...horaSiniestro,
        })
      );
      dispatch(handleSetStep(step + 1));

    }
    else {
      const mensajeAlerta = "Este paciente tiene un siniestro activo en la misma fecha";
      const mensajeBoton = "Entendido";
      const origen = "sameDate";
      dispatch(
        updateForm("fechaHoraSiniestro", {
          ...fechaSiniestro,
          ...horaSiniestro,
        })
      );
      dispatch(
        updateForm("siniestroOpciones", {mensajeAlerta,mensajeBoton, origen, siniestroTemp})
      );
      dispatch(handleSetStep(5.83));
    }

  
  };

  return (
    <div className={root}>
      <Cabecera
        dispatch={() => dispatch(handleSetStep(9))}
        percentage={percentage}
      />
      <Typography
        variant="h1"
        component="h1"
        className={titleBlack}
        >
        ¿
        
        <Grid component="span"  className={titleBlue}>
         Cuándo y a qué hora&nbsp;
        </Grid> 

        sucedió el accidente?
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
            handleNext();
           
          }}
        >
          Continuar
        </Button>
      </div>
    </div>
  );
};

export default FechaHoraSiniestro;
