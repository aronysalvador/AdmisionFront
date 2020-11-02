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
import Header from "../../components/header/index";

const FechaHoraResponsable = () => {
  const { percentage, fechaHoraResponsable } = useSelector(
    (state) => state.addmissionForm, shallowEqual);
  const { microsoftReducer } = useSelector((state) => state, shallowEqual);

  const { days, month, year, horas, minutos } = fechaHoraResponsable;

  const [fechaSiniestro, setFechaSiniestro] = useState({});
  const [horaSiniestro, setHoraSiniestro] = useState({});

  const comunClass = getComunStyle();
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
    <div className={comunClass.root}>
      <div className={comunClass.displayDesk}> 
        <Header
          userMsal={ microsoftReducer.userMsal }
          // step={1}
        />
      </div>
      <div className={comunClass.beginContainerDesk}>
        <Cabecera
          dispatch={() => dispatch(handleSetStep(16))}
          percentage={percentage}
        />
      </div>
      <div className={comunClass.titlePrimaryDesk}>
        <Typography className={[comunClass.titleBlack, comunClass.titleBlack2, comunClass.textPrimaryDesk]}>
          <Grid component="span"  className={[comunClass.titleBlue, comunClass.titleBlue2]}>
            ¿Cuándo y a que hora se le avisó 
          </Grid>          
          &nbsp;al responsable?
        </Typography>
        <div className={comunClass.displayDeskInline}>
          <Grid component="span" className={comunClass.imgPrimaryDesk}>
            <img alt="relato" src="static/relato.svg" />
          </Grid>
        </div>
      </div>
      <div className={comunClass.boxDesk}>
        <div className={comunClass.displayMobile}>
          <div className={spaceStyle.space2} />
        </div>
        <div className={comunClass.containerTextBox}>
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
        </div>
        <div className={comunClass.bottomElement}>
          <Button
            className={comunClass.buttonAchs}
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
      <div className={comunClass.displayDesk}>
        <div className={spaceStyle.space2} />
      </div>
    </div>
  );
};

export default FechaHoraResponsable;
