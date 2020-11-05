import React, { useState, useEffect, useRef } from "react";
import { Grid, Button } from "@material-ui/core";
import { KeyboardArrowDown, KeyboardArrowUp } from "@material-ui/icons";
//import { getSpaceStyle } from "../../css/spaceStyle";
import { getComunStyle } from "../../css/comun";

const HoraSiniestro = ({ onChange, horasFromState, indiceMinutosFromState, minutos }) => {
  const [horas, setHoras] = useState(() => {
    return !horasFromState ? new Date().getHours() - 1 : horasFromState;
  });
  // const [minutos, setMinutos] = useState(() => {
  //   return !minutosFromState ? new Date().getMinutes() : minutosFromState;
  // });

  const getMin = () => {
    let minutosActuales = new Date().getMinutes();
    if(minutosActuales >= 0 && minutosActuales < 5) return 0;
    if(minutosActuales >= 5 && minutosActuales < 15) return 1;
    if(minutosActuales >= 15 && minutosActuales < 25) return 2;
    if(minutosActuales >= 25 && minutosActuales < 35) return 3;
    if(minutosActuales >= 35 && minutosActuales < 45) return 4;
    if(minutosActuales >= 45 && minutosActuales < 55) return 5;
    if(minutosActuales >= 55 && minutosActuales < 60) return 0;
  };

  const [indiceMinutos, setIndiceMinutos] = useState(() => {
    return indiceMinutosFromState === -1 ? getMin() : indiceMinutosFromState;
  });

  const [t, setT] = useState(0);
  const [t2, setT2] = useState(0);
  const [t3, setT3] = useState(0);

 // const spaceStyle = getSpaceStyle();
  const comunStyle = getComunStyle();
  
  useEffect(() => {
    if (horas > 23) setHoras(0);
    if (horas < 0) setHoras(23);
    if (indiceMinutos === minutos.length) setIndiceMinutos(0);
    if (indiceMinutos < 0) setIndiceMinutos(minutos.length-1);
    onChange({ horas, indiceMinutos });
    // eslint-disable-next-line
  }, [horas, minutos[indiceMinutos]]);

  const TRef = useRef(t);
  TRef.current = t;

  const TRef2 = useRef(t2);
  TRef2.current = t2;

  const TRef3 = useRef(t3);
  TRef3.current = t3;

  const countRef = useRef(horas);
  countRef.current = horas;

  const countRef2 = useRef(indiceMinutos);
  countRef2.current = indiceMinutos;

  let start = 600; //Intervalo de tiempo a esperar (0.6 seg) para empezar a girar
  let start2 = 600; //Intervalo de tiempo a esperar (0.6 seg) para empezar a girar
  let start3 = 600; //Intervalo de tiempo a esperar (0.6 seg) para empezar a girar

  const longPressDownHora = () => {
      setHoras((h) => --h);
      setT(setTimeout(longPressDownHora, start));
      start = start / 2; //Para que cada vez vaya más rápido
  };

  const longPressUPHora = () => {
   // if(countRef.current !== new Date().getHours()){
      setHoras((h) => ++h);
      setT2(setTimeout(longPressUPHora, start2));
      start2 = start2 / 2; //Para que cada vez vaya más rápido
    //}
  };

  const longPressDownMinutos = () => {
    setIndiceMinutos((m) => --m);
    setT(setTimeout(longPressDownMinutos, start));
    start = start / 2; //Para que cada vez vaya más rápido
  };

  const longPressUPMinutos = () => {
   // if(countRef2.current !== getMin() ){
      setIndiceMinutos((m) => ++m);
      setT3(setTimeout(longPressUPMinutos, start3));
      start3 = start3 / 2; //Para que cada vez vaya más rápido
   // }
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
  
  const onMouseUp3 = () => {
    clearTimeout(TRef3.current);
    start3 = 600;
  };

  const obtenPosicion = (intended) => {
      if(intended < 0)
          return 6 - Math.abs(intended)
      if(intended > 5)
          return (intended-6)
      return intended
  };

  const obtenHora= (intended) => {
    if(intended < 0)
        return "2"+(4+intended)
    if(intended < 10)
      return "0"+intended
    if(intended > 23)
      return "0"+Math.abs((24-intended))
    return intended
  };

  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item direction="column">
        <Grid item className={comunStyle.boxTitleHoras}>
          <div className={comunStyle.tituloSelectorFecha}>
            Hora
          </div>
        </Grid>
        <Grid item className={comunStyle.boxHoras}>
          <div>
            <Button
              variant="text"
              // onClick={() => { setHoras((h) => --h) }}
              onMouseDown={() => {
                longPressDownHora();
              }}
              onMouseUp={() => {
                onMouseUp();
              }}
            >
              <KeyboardArrowUp />
            </Button>
          </div>
          {/* <div className={spaceStyle.spaceMin1} /> */}
          <div className={comunStyle.selectorRuedaItemsCostados2}>
            {obtenHora(horas-2)}
          </div>
          <div className={comunStyle.selectorRuedaItemsCostados}>
            {obtenHora(horas-1)}
          </div>
          <hr className={comunStyle.selectorRuedaBordesItemPrincipal} />
          <div className={comunStyle.selectorRuedaItemPrincipal}>
            {horas < 10 ? "0" + horas : horas}
          </div>
          <hr className={comunStyle.selectorRuedaBordesItemPrincipal} />
          <div className={comunStyle.selectorRuedaItemsCostados}>
            {obtenHora(horas+1)}
          </div>
          <div className={comunStyle.selectorRuedaItemsCostados2}>
            {obtenHora(horas+2)}
          </div>
          
          {/* <div className={spaceStyle.spaceMin1} /> */}
          <div>
            <Button
              variant="text"
              // disabled={ horas === new Date().getHours()}
              // onClick={() => { setHoras((h) => ++h) }}
              onMouseDown={() => {
                longPressUPHora();
              }}
              onMouseUp={() => {
                onMouseUp2();
              }}
            >
              <KeyboardArrowDown />
            </Button>
          </div>
        </Grid>
      </Grid>
      <Grid item direction="column">
        <Grid item
          className={comunStyle.boxTitleHoras}
          style={{ marginLeft: "25px" }}
        >
          <div className={comunStyle.tituloSelectorFecha}>
            Minutos
          </div>
        </Grid>
        <Grid item
          className={comunStyle.boxHoras}
          style={{marginLeft: "20px"}}
        >
          <div>
            <Button
              variant="text"
              // onClick={() => { setIndiceMinutos((m) => --m)}}
              onMouseDown={() => {
                longPressDownMinutos();
              }}
              onMouseUp={() => {
                onMouseUp();
              }}
            >
              <KeyboardArrowUp />
            </Button>
          </div>
          {/* <div className={spaceStyle.space1} /> */}
          <div className={comunStyle.selectorRuedaItemsCostados2}>
            {minutos[obtenPosicion(indiceMinutos-2)]}
          </div>
          <div className={comunStyle.selectorRuedaItemsCostados}>
            {minutos[obtenPosicion(indiceMinutos-1)]}
            {/* {minutos === 0
              ? 59
              : minutos - 1 < 10
              ? "0" + (minutos - 1)
              : minutos - 1} */}
          </div>
          <hr className={comunStyle.selectorRuedaBordesItemPrincipal} />
          <div className={comunStyle.selectorRuedaItemPrincipal}>
            {/* {minutos < 10 ? "0" + minutos : minutos} */}
            {minutos[indiceMinutos]}
          </div>
          <hr className={comunStyle.selectorRuedaBordesItemPrincipal} />
          <div className={comunStyle.selectorRuedaItemsCostados}>
            {minutos[obtenPosicion(indiceMinutos+1)]}
          </div>
          <div className={comunStyle.selectorRuedaItemsCostados2}>
            {minutos[obtenPosicion(indiceMinutos+2)]}
          </div>
          {/* <div className={spaceStyle.space1} /> */}
          <div>
            <Button
              variant="text"
             // disabled={ indiceMinutos === getMin() && horas === new Date().getHours()}
             // onClick={() => { setIndiceMinutos((m) => ++m) }}
              onMouseDown={() => {
                longPressUPMinutos();
              }}
              onMouseUp={() => {
                onMouseUp3();
              }}
            >
              <KeyboardArrowDown />
            </Button>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HoraSiniestro;
