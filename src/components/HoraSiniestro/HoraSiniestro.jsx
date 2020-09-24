import React, { useState, useEffect, useRef } from "react";
import { Grid, Button } from "@material-ui/core";
import { KeyboardArrowDown, KeyboardArrowUp } from "@material-ui/icons";
import { getSpaceStyle } from "../../css/spaceStyle";
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

  const spaceStyle = getSpaceStyle();
  const comunStyle = getComunStyle();

  useEffect(() => {
    if (horas > 23) setHoras(0);
    if (horas < 0) setHoras(23);
    if (indiceMinutos === minutos.length) setIndiceMinutos(0);
    if (indiceMinutos < 0) setIndiceMinutos(minutos.length-1);
    onChange({ horas, indiceMinutos });
  }, [horas, minutos[indiceMinutos]]);

  const TRef = useRef(t);
  TRef.current = t;

  let start = 600; //Intervalo de tiempo a esperar (0.6 seg) para empezar a girar

  const longPressDownHora = () => {
      setHoras((h) => --h);
      setT(setTimeout(longPressDownHora, start));
      start = start / 2; //Para que cada vez vaya más rápido
  };

  const longPressDownMinutos = () => {
    setIndiceMinutos((m) => --m);
    setT(setTimeout(longPressDownMinutos, start));
    start = start / 2; //Para que cada vez vaya más rápido
};

  //con MouseUp detengo la selección
  const onMouseUp = () => {
    clearTimeout(TRef.current);
    start = 600;
  };

  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item direction="column">
        <Grid
          item
          style={{
            borderRadius: "10px",
            padding: "8px 25px",
          }}
        >
          <div
            className={comunStyle.tituloSelectorFecha}
            style={{ textAlign: "center" }}
          >
            Hora
          </div>
        </Grid>

        <Grid
          item
          style={{
            background: "white",
            borderRadius: "10px",
            padding: "8px 25px",
          }}
        >
          {/* <div style={{ textAlign: "center", fontSize: "12px" }}>hora</div> */}

          <div>
            <Button
              variant="text"
              // onClick={() => {
              //   setHoras((h) => --h);
              // }}
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
          <div className={spaceStyle.space1} />
          <div style={{ textAlign: "center" }}>
            <div
              style={{ fontSize: "9px", paddingBottom: "5px", opacity: "0.5" }}
            >
              {horas === 0 ? 23 : horas - 1 < 10 ? "0" + (horas - 1) : horas - 1}
            </div>
            {horas < 10 ? "0" + horas : horas}
            <div style={{ fontSize: "9px", paddingTop: "5px", opacity: "0.5" }}>
              {horas + 1 < 10 ? "0" + (horas + 1) : horas + 1}
            </div>
          </div>
          <div className={spaceStyle.space1} />
          <div>
            <Button
              variant="text"
              disabled={ horas == new Date().getHours()}
              onClick={() => {
                setHoras((h) => ++h);
              }}
              
            >
              <KeyboardArrowDown/>
            </Button>
          </div>
        </Grid>
      </Grid>
      <Grid item direction="column">
        <Grid
          item
          style={{
            borderRadius: "10px",
            padding: "8px 25px",
            marginLeft: "25px",
          }}
        >
          <div
            className={comunStyle.tituloSelectorFecha}
            style={{ textAlign: "center" }}
          >
            Minutos
          </div>
        </Grid>
        <Grid
          item
          style={{
            background: "white",
            borderRadius: "10px",
            padding: "8px 25px",
            marginLeft: "20px",
          }}
        >
          {/* <div style={{ textAlign: "center", fontSize: "12px" }}>minutos</div> */}
          <div>
            <Button
              variant="text"
              // onClick={() => {
              //   setIndiceMinutos((m) => --m);
              // }}
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
          <div className={spaceStyle.space1} />
          <div style={{ textAlign: "center" }}>
            <div
              style={{ fontSize: "9px", paddingBottom: "5px", opacity: "0.5" }}
            >
              {indiceMinutos === 0 ? minutos[minutos.length - 1] :minutos[indiceMinutos - 1]}
              {/* {minutos === 0
                ? 59
                : minutos - 1 < 10
                ? "0" + (minutos - 1)
                : minutos - 1} */}
            </div>
            {/* {minutos < 10 ? "0" + minutos : minutos} */}
            {minutos[indiceMinutos]}
            <div style={{ fontSize: "9px", paddingTop: "5px", opacity: "0.5" }}>
            {indiceMinutos === minutos.length - 1 ? minutos[0] :minutos[indiceMinutos + 1]}
            </div>
          </div>
          <div className={spaceStyle.space1} />
          <div>
            <Button
              variant="text"
              disabled={ indiceMinutos == getMin() && horas == new Date().getHours()}
              onClick={() => {
                setIndiceMinutos((m) => ++m);
              }}
            >
              <KeyboardArrowDown
                
              />
            </Button>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HoraSiniestro;
