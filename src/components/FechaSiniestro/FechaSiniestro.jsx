import { useEffect, useState, useRef } from "react";
import { meses, getActualDate } from "../../util/FechasUtils";
import { Grid } from "@material-ui/core";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";

const FechaSiniestro = ({
  onChange,
  daysFromState,
  monthFromState,
  yearFromState
}) => {
  const [ days, setDays ] = useState(() => {
    return !daysFromState ? new Date().getDate() : daysFromState;
  });

  const [ month, setMonth ] = useState(() => {
    return !monthFromState ? new Date().getMonth() + 1 : monthFromState;
  });

  const [ year, setYear ] = useState(() => {
    return !yearFromState ? new Date().getFullYear() : yearFromState;
  });

  const [ monthLastDay, setMonthLastDay ] = useState(() => {
    return new Date(year, month, 0).getDate();
  });

  const { actualDay, actualMonth } = getActualDate();

  useEffect(() => {
    if (days < 1) {
      if (month === 1 && days < 1) {
        setMonth(12);
        setDays(31);
        setYear((y) => --y);
      } else {
        setMonth((m) => --m);
        setDays(new Date(year, month - 1, 0).getDate());
        setMonthLastDay(new Date(year, month - 1, 0).getDate());
      }
    }
    if (days > monthLastDay) {
      if (month === 12 && days > 31) {
        setMonth(1);
        setDays(1);
        setYear((y) => ++y);
      } else {
        setMonth((m) => ++m);
        setDays(1);
        setMonthLastDay(new Date(year, month + 1, 0).getDate());
      }
    }
    onChange({ days, month, year });
    // eslint-disable-next-line
  }, [days, month, year, monthLastDay]);

  const { name: monthName } = meses.find((x) => x.id === month);

  const getUseStyles = makeStyles({
    flechas: {
      color: "white",
      background: "#007A33",
      "&:hover": {
        background: "#007A33"
      }
    },
    flechasAct: {
      color: "white !important",
      background: "#F4F4F4 !important"
    }
  });

  const useStyles = getUseStyles();

  const [ t, setT ] = useState(0);

  const TRef = useRef(t);
  TRef.current = t;

  const [ t2, setT2 ] = useState(0);

  const TRef2 = useRef(t2);
  TRef2.current = t2;

  let start = 600; // Intervalo de tiempo a esperar (0.6 seg) para empezar a girar

  let start2 = 600; // Intervalo de tiempo a esperar (0.6 seg) para empezar a girar

  // Hooks para acceder al estado desde setTimeout
  const countRef = useRef(days);
  countRef.current = days;

  const countRef2 = useRef(month);
  countRef2.current = month;

  const longPressDownFecha = () => {
    setDays((d) => --d);
    setT(setTimeout(longPressDownFecha, start));
    start = start / 2; // Para que cada vez vaya más rápido
  };

  const longPressUPFecha = () => {
    if ((countRef.current !== actualDay) || (countRef2.current !== actualMonth)){
      setDays((d) => ++d);
      setT2(setTimeout(longPressUPFecha, start2));
      start2 = start2 / 2; // Para que cada vez vaya más rápido
    }
  };

  // con MouseUp detengo la selección
  const onMouseUp = () => {
    clearTimeout(TRef.current);
    start = 600;
  };

  const onMouseUp2 = () => {
    clearTimeout(TRef2.current);
    start2 = 600;
  };

  return (
    <Grid
      container
      direction='row'
      justify='space-between'
      alignItems='center'
      style={{
        background: "white",
        borderRadius: "10px",
        padding: "10px"
      }}
    >
      <Grid item>
        <IconButton
          aria-label='Ir atrás'
          variant='contained'
          component='span'
          color='primary'
          // onClick={() => {
          //   setDays((d) => --d);
          // }}
          onMouseDown={() => {
            longPressDownFecha();
          }}
          onMouseUp={() => {
            onMouseUp();
          }}
          className={useStyles.flechas}
        >
          <KeyboardArrowLeft />
        </IconButton>
      </Grid>
      <Grid item>
        <span
          style={{
            fontFamily: "Helvetica",
            fontSize: "18px",
            fontWeight: "bold",
            float: "left",
            clear: "left"
          }}
        >{`${days} ${monthName}`}
        </span>
        <span
          style={{
            display: "block",
            textAlign: "center"
          }}
        >
          {days === actualDay && month === actualMonth ? "Hoy" : ""}
        </span>
      </Grid>
      <Grid item>
        <IconButton
          aria-label='Ir adelante'
          component='span'
          variant='contained'
          disabled={days === actualDay && month === actualMonth}
          // onClick={() => {
          //   setDays((d) => ++d);
          // }}
          onMouseDown={() => {
              longPressUPFecha();
          }}
          onMouseUp={() => {
              onMouseUp2();
          }}
          className={days === actualDay && month === actualMonth ? useStyles.flechasAct : useStyles.flechas}
        >
          <KeyboardArrowRight />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default FechaSiniestro;
