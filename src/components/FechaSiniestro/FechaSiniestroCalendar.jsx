import React, { useEffect, useState, useRef } from "react";
import { meses, getActualDate } from "../../util/FechasUtils";
import { Grid } from "@material-ui/core";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import { DatePicker } from "@material-ui/pickers";
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core";
import { getComunStyle } from "../../css/comun";
import specialBlue from "./../../util/color/specialBlue";
import MomentUtils from '@date-io/moment';
import moment from "moment";
import "moment/locale/es";
moment.locale("es");

const FechaSiniestro = ({
  onChange,
  daysFromState,
  monthFromState,
  yearFromState,
}) => {

  const date = new Date();
  const [calendar, setCalendar] = useState(false);
  const defaultMaterialTheme = createMuiTheme({
      palette: {
          primary: specialBlue,
      },
  });
    
  const [days, setDays] = useState(() => {
    return !daysFromState ? new Date().getDate() : daysFromState;
  });

  const [month, setMonth] = useState(() => {
    return !monthFromState ? new Date().getMonth() + 1 : monthFromState;
  });

  const [year, setYear] = useState(() => {
    return !yearFromState ? new Date().getFullYear() : yearFromState;
  });

  const [monthLastDay, setMonthLastDay] = useState(() => {
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
        background: "#007A33",
      },
    },
    flechasAct: {
      color: "white !important",
      background: "#F4F4F4 !important",
    },
    
  });

  const useStyles = getUseStyles();
  const comunClass = getComunStyle();

  const [t, setT] = useState(0);

  const TRef = useRef(t);
  TRef.current = t;

  const [t2, setT2] = useState(0);

  const TRef2 = useRef(t2);
  TRef2.current = t2;

  let start = 600; //Intervalo de tiempo a esperar (0.6 seg) para empezar a girar

  let start2 = 600; //Intervalo de tiempo a esperar (0.6 seg) para empezar a girar

  //Hooks para acceder al estado desde setTimeout
  const countRef = useRef(days);
  countRef.current = days;

  const countRef2 = useRef(month);
  countRef2.current = month;

  const longPressDownFecha = () => {
    setDays((d) => --d);
    setT(setTimeout(longPressDownFecha, start));
    start = start / 2; //Para que cada vez vaya más rápido
  };

  const longPressUPFecha = () => {
    if((countRef.current !== actualDay) || (countRef2.current !== actualMonth)){
      setDays((d) => ++d);
      setT2(setTimeout(longPressUPFecha, start2));
      start2 = start2 / 2; //Para que cada vez vaya más rápido
    }     
  };

  //con MouseUp detengo la selección
  const onMouseUp = () => {
    clearTimeout(TRef.current);
    start = 600;
  };

  const onMouseUp2 = () => {
    clearTimeout(TRef2.current);
    start2 = 600;
  };
  return (
    <>
    <Grid
      container
      direction="row"
      justify="space-between"
      alignItems="center"
      className={comunClass.boxCalendar}
    >
      <Grid item onClick={()=>setCalendar(false)}>
        <IconButton
          aria-label="Ir atrás"
          variant="contained"
          component="span"
          color="primary"
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
      <Grid item   
        style={{cursor: 'pointer'}}   
        onClick={()=>setCalendar(!calendar)}
      >
        <IconButton
          aria-label="Selecciona Fecha"
          component="span"
          variant="contained"
          disabled={true}
          className={useStyles.flechasAct}
        >
          <svg  width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 9V11H4V9H6ZM10 9V11H8V9H10ZM14 9V11H12V9H14ZM16 2C16.5304 2 17.0391 2.21071 17.4142 2.58579C17.7893 2.96086 18 3.46957 18 4V18C18 18.5304 17.7893 19.0391 17.4142 19.4142C17.0391 19.7893 16.5304 20 16 20H2C1.46957 20 0.960859 19.7893 0.585786 19.4142C0.210714 19.0391 0 18.5304 0 18V4C0 3.46957 0.210714 2.96086 0.585786 2.58579C0.960859 2.21071 1.46957 2 2 2H3V0H5V2H13V0H15V2H16ZM16 18V7H2V18H16ZM6 13V15H4V13H6ZM10 13V15H8V13H10ZM14 13V15H12V13H14Z" fill="#787878"/>
          </svg>
        </IconButton>
      </Grid>
      <Grid item>
        <span className={comunClass.txtCalendar}>
          {`${days} ${monthName}`}
        </span>
        <span className={comunClass.txtTodayCalendar}>
          {days === actualDay && month === actualMonth ? "Hoy" : ""}
        </span>
      </Grid>
      <Grid item onClick={()=>setCalendar(false)}>
        <IconButton
          aria-label="Ir adelante"
          component="span"
          variant="contained"
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
    
    {calendar && (
    <div  style={{ zIndex: 9, position: "absolute", paddingTop: '2px'}} >
      <MuiPickersUtilsProvider libInstance={moment} utils={MomentUtils} locale={"es"}>
      <ThemeProvider theme={defaultMaterialTheme}>
      <DatePicker
        autoOk={true} 
        disableFuture
        variant="static"
        openTo="date"
        value={date}
        onChange={(e)=>{ 
          var dia = e._d.getDate(); 
          var mes = e._d.getMonth();
          var anio = e._d.getFullYear();   
          setDays(dia); 
          setMonth(mes+1)
          setYear(anio)
          setTimeout(() => { setCalendar(false) }, 500); 
        }}
        animateYearScrolling            
        disableToolbar  // seleccionar año
      />
      </ThemeProvider>
      </MuiPickersUtilsProvider>
    </div>
    )}
    </>
  );
};

export default FechaSiniestro;
