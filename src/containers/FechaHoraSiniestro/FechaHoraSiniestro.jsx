import React, { useState } from "react";
import FechaSiniestroCalendar from "../../components/FechaSiniestro/FechaSiniestroCalendar";
import HoraSiniestro from "./../../components/HoraSiniestro/HoraSiniestro";
import { Button, Typography } from "@material-ui/core";
import { getComunStyle } from "../../css/comun";
import Cabecera from "../../components/cabecera/index";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import { getSpaceStyle } from "../../css/spaceStyle";
import Grid from '@material-ui/core/Grid';
import Header from "../../components/header/index";

const FechaHoraSiniestro = () => {
  const { step, percentage, fechaHoraSiniestro, siniestros } = useSelector(
    (state) => state.addmissionForm, shallowEqual);
  
  const { microsoftReducer } = useSelector((state) => state, shallowEqual);
  const { days, month, year, horas, minutos } = fechaHoraSiniestro;

  const [fechaSiniestro, setFechaSiniestro] = useState({});
  const [horaSiniestro, setHoraSiniestro] = useState({});
  const comunClass = getComunStyle();
  const spaceStyle = getSpaceStyle();

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
    <div className={comunClass.root}>
      <div className={comunClass.displayDesk}> 
        <Header
          userMsal={ microsoftReducer.userMsal }
          // step={1}
        />
      </div>
      <div className={comunClass.beginContainerDesk}>
        <Cabecera
          dispatch={() => dispatch(handleSetStep(9))}
          percentage={percentage}
        />
      </div>
      <div className={comunClass.titlePrimaryDesk}>
        <Typography
          variant="h1"
          component="h1"
          className={[comunClass.titleBlack, comunClass.titleBlack2, comunClass.textPrimaryDesk]}
          >
          ¿
          <Grid component="span"  className={[comunClass.titleBlue, comunClass.titleBlue2]}>
            Cuándo y a qué hora&nbsp;
          </Grid> 
          sucedió el accidente?
        </Typography>
        <div className={comunClass.displayDeskInline}>
          <Grid component="span" className={comunClass.imgPrimaryDesk}>
            <img alt="identify" src="static/relato.svg" />
          </Grid>
        </div>
      </div>
      <div className={comunClass.boxDesk}>
        <div className={comunClass.displayMobile}> 
          <div className={spaceStyle.space3} />
        </div>
        <div className={comunClass.containerTextBox}>
          <FechaSiniestroCalendar
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
        </div>
        <div className={comunClass.bottomElement}>
          <Button
            className={comunClass.buttonAchs}
            onClick={() => { handleNext() }}
          >
            Continuar
          </Button>
        </div>
      </div>
      <div className={comunClass.displayDesk}>
        <div className={spaceStyle.space2} />
      </div>
    </div>
  );
};

export default FechaHoraSiniestro;
