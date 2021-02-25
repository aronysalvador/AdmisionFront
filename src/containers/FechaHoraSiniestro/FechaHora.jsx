import React from "react";
import FechaSiniestroCalendar from "../../components/FechaSiniestro/FechaSiniestroCalendar";
import FechaSiniestroDesk from "../../components/FechaSiniestro/FechaSiniestroCalendarDesk";
import HoraSiniestro from "./../../components/HoraSiniestro/HoraSiniestro";
import HoraSiniestroDesk from "./../../components/HoraSiniestro/HoraSiniestroDesk";
import { getComunStyle } from "../../css/comun";
import { getSpaceStyle } from "../../css/spaceStyle";

const FechaHoraSiniestro = (props) => {
  const comunClass = getComunStyle();
  const spaceStyle = getSpaceStyle();

  const { fechaSiniestro, setFechaSiniestro, horaSiniestro, setHoraSiniestro, setInvalidFecha, setInvalidHora, fechaHoraSiniestro } = props

  const { days, month, year, horas, minutos } = fechaHoraSiniestro;
  const minutosArray = [ 0, 10, 20, 30, 40, 50 ]

  function setFechaValueSiniestro(value) {
    setFechaSiniestro({ ...value });
  }

  function setHoraValueSiniestro(value) {
    value.minutos = minutosArray[value.indiceMinutos];
    setHoraSiniestro({ ...value });
  }

  React.useEffect(() => {
    let current = new Date();

    // ========= Fecha =======
    if (fechaSiniestro.year <= 1900 ||
      !(fechaSiniestro.year <= current.getFullYear() && fechaSiniestro.month <= current.getMonth()+1 && fechaSiniestro.days <= current.getDate())
      )
      setInvalidFecha(true)
    else
      setInvalidFecha(false)

    // ====== Fin Fecha ======

    // ====== Hora =======
    if (
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
  // ====== Fin Hora =======

    // eslint-disable-next-line
  }, [horaSiniestro.horas, horaSiniestro.minutos, fechaSiniestro])

  return (
        <div className={comunClass.containerTextBox2}>
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
              indiceMinutosFromState={minutosArray.indexOf(minutos)}
              minutos={minutosArray}

            />
          </div>
          <div className={comunClass.displayDesk}>
            <HoraSiniestroDesk
                onChange={setHoraValueSiniestro}
                horasFromState={horas}
                indiceMinutosFromState={minutosArray.indexOf(minutos)}
                minutos={minutosArray}
                textLabel={"Hora de accidente"}
            />
          </div>
        </div>
  );
};

export default FechaHoraSiniestro;
