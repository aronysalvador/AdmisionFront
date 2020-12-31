import React, { useState } from "react";
import FechaSiniestroCalendar from "../../components/FechaSiniestro/FechaSiniestroCalendar";
import FechaSiniestroDesk from "../../components/FechaSiniestro/FechaSiniestroCalendarDesk";
import HoraSiniestro from "./../../components/HoraSiniestro/HoraSiniestro";
import HoraSiniestroDesk from "./../../components/HoraSiniestro/HoraSiniestroDesk";
import { Button } from "@material-ui/core";
import { getComunStyle } from "../../css/comun";
import Cabecera from "../../components/cabecera/index";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import { getSpaceStyle } from "../../css/spaceStyle";
import Grid from '@material-ui/core/Grid';
import Header from "../../components/header/index";
import image from './../../img/relato.svg'

const FechaHoraSiniestro = () => {
  const comunClass = getComunStyle();
  const spaceStyle = getSpaceStyle();

  const { step, percentage, fechaHoraSiniestro, siniestros } = useSelector(
    (state) => state.addmissionForm, shallowEqual);
  
  const { microsoftReducer } = useSelector((state) => state, shallowEqual);
  const { days, month, year, horas, minutos } = fechaHoraSiniestro;

  const [fechaSiniestro, setFechaSiniestro] = useState({});
  const [horaSiniestro, setHoraSiniestro] = useState({});
  const [invalidFecha, setInvalidFecha] = useState(true);
  const [invalidHora, setInvalidHora] = useState(true);


  const dispatch = useDispatch();

  function setFechaValueSiniestro(value) {
    setFechaSiniestro({ ...value });
  }

  function setHoraValueSiniestro(value) {
    setHoraSiniestro({ ...value });
  }

  React.useEffect(() => {
    let current = new Date();

    //========= Fecha =======
    if(fechaSiniestro.year <= 1900 || 
      !(fechaSiniestro.year <= current.getFullYear() && fechaSiniestro.month <= current.getMonth()+1 && fechaSiniestro.days <= current.getDate())
      )
      setInvalidFecha(true)
    else
      setInvalidFecha(false)

    //====== Fin Fecha ======


    //====== Hora =======
    console.log(horaSiniestro)
    if(
      (horaSiniestro.horas === -1 || horaSiniestro.minutos === -1 || horaSiniestro.minutos === undefined)
      ||
      ((fechaSiniestro.year === current.getFullYear() && fechaSiniestro.month === current.getMonth()+1 && fechaSiniestro.days === current.getDate()) &&
      (
        (horaSiniestro.horas > current.getHours()) ||
        (horaSiniestro.horas === current.getHours() && horaSiniestro.minutos > current.getMinutes())
      ))
    )
    setInvalidHora(true)
  else
    setInvalidHora(false)
  //====== Fin Hora =======
  }, [horaSiniestro.horas, horaSiniestro.minutos, fechaSiniestro])


  const handleNext = () => {
    let siniestroTemp = undefined;

    siniestros.forEach(x => {
      const fechaCasted = new Date(Date.parse(x.fecha_date));
      const dias = fechaCasted.getDate() + 1;
      const mes = fechaCasted.getMonth() + 1;
      const anio = fechaCasted.getFullYear();
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
        <Header userMsal={ microsoftReducer.userMsal }/>
      </div>
      <div className={comunClass.beginContainerDesk}>
        <Cabecera
          dispatch={() => dispatch(handleSetStep("x",10))}
          percentage={percentage}
        />
      </div>
      <div className={comunClass.titlePrimaryDesk}>
        <Grid
          className={[comunClass.titleBlack, comunClass.titleBlack2, comunClass.textPrimaryDesk]}
          >
          ¿
          <Grid component="span"  className={[comunClass.titleBlue, comunClass.titleBlue2]}>
            Cuándo y a qué hora&nbsp;
          </Grid> 
          sucedió el accidente?
        </Grid>
        <div className={comunClass.displayDeskImg}>
          <Grid component="span" className={comunClass.imgPrimaryDesk}>
            <img alt="identify" src={image} className={comunClass.imgPrimaryWidth} />
          </Grid>
        </div>
      </div>
      <div className={comunClass.boxDesk}>
        <div className={comunClass.displayMobile}> 
          <div className={spaceStyle.space3} />
        </div>
        <div className={comunClass.containerTextBox}>
          <div className={comunClass.displayMobile}>
            <FechaSiniestroCalendar
              onChange={setFechaValueSiniestro}
              daysFromState={days}
              monthFromState={month}
              yearFromState={year}
            />
          </div>
          <div className={comunClass.displayDesk}>
            <FechaSiniestroDesk
              onChange={setFechaValueSiniestro}
              daysFromState={days}
              monthFromState={month}
              yearFromState={year}
              textLabel={"Fecha de accidente"}
            />
          </div>
          
          <div className={spaceStyle.space1} />
          <div className={comunClass.displayMobile}>
            <HoraSiniestro
              onChange={setHoraValueSiniestro}
              horasFromState={horas}
              minutos={minutos}
              
            />
          </div>
          <div className={comunClass.displayDesk}>
            <HoraSiniestroDesk
                onChange={setHoraValueSiniestro}
                horasFromState={horas}
                minutos={minutos}
                textLabel={"Hora de accidente"}
              />
          </div>
        </div>
        <div className={comunClass.bottomElement}>
          <Button
            className={comunClass.buttonAchs}
            disabled={invalidFecha || invalidHora}
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
