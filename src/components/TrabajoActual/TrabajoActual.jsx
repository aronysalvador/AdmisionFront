import { useState, useEffect, useRef } from "react";
import { Grid, Button } from "@material-ui/core";
import { KeyboardArrowDown, KeyboardArrowUp } from "@material-ui/icons";
import { getSpaceStyle } from "../../css/spaceStyle";
import { getComunStyle } from "../../css/comun";

const TrabajoActual = ({
  onChange,
  indiceMesFromState,
  indiceAnioFromState,
  meses,
  anios
}) => {
  const [ indiceMes, setIndiceMes ] = useState(() => {
    return !indiceMesFromState ? 0 : indiceMesFromState;
  });

  const [ indiceAnio, setIndiceAnio ] = useState(() => {
    return !indiceAnioFromState ? 0 : indiceAnioFromState;
  });

  const [ t, setT ] = useState(0);

  // Hooks para acceder al estado desde setTimeout
  const countRef = useRef(indiceAnio);
  countRef.current = indiceAnio;

  const TRef = useRef(t);
  TRef.current = t;

  const fechaActual = new Date();

  let start = 600; // Intervalo de tiempo a esperar (0.6 seg) para empezar a girar

  const longPressDown = () => {
    if (countRef.current > 0) {
      setIndiceAnio((m) => --m);
      setT(setTimeout(longPressDown, start));
      start = start / 2; // Para que cada vez vaya más rápido
    }
  };

  const longPressUp = () => {
    if (countRef.current < anios.length - 1) {
      setIndiceAnio((m) => ++m);
      setT(setTimeout(longPressUp, start));
      start = start / 2; // Para que cada vez vaya más rápido
    }
  };

  // con MouseUp detengo la selección
  const onMouseUp = () => {
    clearTimeout(TRef.current);
    start = 600;
  };

  const spaceStyle = getSpaceStyle();
  const comunStyle = getComunStyle();

  useEffect(() => {
    onChange({ mes: indiceMes, anio: anios[indiceAnio] });
    // eslint-disable-next-line
  }, [indiceMes, indiceAnio]);

  return (
    <Grid container direction='row' justify='center'
alignItems='center'
    >
      <Grid item direction='column'>
        <Grid
          item
          className={comunStyle.boxTitleHoras}
        >
          <div
            className={comunStyle.tituloSelectorFecha}
          >
            Mes
          </div>
        </Grid>
        <Grid
          item
          className={comunStyle.boxHoras}
        >
          <div>
            <Button
              variant='text'
              disabled={indiceMes < 1}
              onClick={() => {
                setIndiceMes((h) => --h);
              }}
            >
              <KeyboardArrowUp />
            </Button>
          </div>
          <div className={spaceStyle.space1} />
          <div style={{ textAlign: "center" }}>
            <div className={comunStyle.selectorRuedaItemsCostados2}>
              {" "}
              {indiceMes > 1 ? meses[indiceMes - 2] : "-"}{" "}
            </div>
            <div className={comunStyle.selectorRuedaItemsCostados}>
              {" "}
              {indiceMes > 0 ? meses[indiceMes - 1] : "-"}{" "}
            </div>

            <hr className={comunStyle.selectorRuedaBordesItemPrincipal} />
            <div className={comunStyle.selectorRuedaItemPrincipal}>
              {meses[indiceMes]}
            </div>
            <hr className={comunStyle.selectorRuedaBordesItemPrincipal} />

            <div className={comunStyle.selectorRuedaItemsCostados}>
              {" "}
              {indiceMes < 11 ? meses[indiceMes + 1] : "-"}{" "}
            </div>
            <div className={comunStyle.selectorRuedaItemsCostados2}>
              {" "}
              {indiceMes < 10 ? meses[indiceMes + 2] : "-"}{" "}
            </div>
          </div>
          <div className={spaceStyle.space1} />
          <div>
            <Button
              disabled={
                indiceMes > 10 ||
                (anios[indiceAnio] === fechaActual.getFullYear() &&
                  indiceMes > fechaActual.getMonth() - 1)
              }
              variant='text'
              onClick={() => {
                setIndiceMes((h) => ++h);
              }}
            >
              <KeyboardArrowDown />
            </Button>
          </div>
        </Grid>
      </Grid>
      <Grid item direction='column'>
        <Grid
          item
          className={comunStyle.boxTitleHoras}
          style={{marginLeft: "20px"}}
        >
          <div
            className={comunStyle.tituloSelectorFecha}
          >
            Año
          </div>
        </Grid>
        <Grid
          item
          className={comunStyle.boxHoras}
          style={{marginLeft: "20px"}}
        >
          <div>
            <Button
              variant='text'
              disabled={indiceAnio < 1}
              onMouseDown={() => {
                longPressDown();
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
            <div className={comunStyle.selectorRuedaItemsCostados2}>
              {" "}
              {indiceAnio > 1 ? anios[indiceAnio - 2] : "-"}{" "}
            </div>
            <div className={comunStyle.selectorRuedaItemsCostados}>
              {" "}
              {indiceAnio > 0 ? anios[indiceAnio - 1] : "-"}{" "}
            </div>

            <hr className={comunStyle.selectorRuedaBordesItemPrincipal} />
            <div className={comunStyle.selectorRuedaItemPrincipal}>
              {anios[indiceAnio]}
            </div>
            <hr className={comunStyle.selectorRuedaBordesItemPrincipal} />

            <div className={comunStyle.selectorRuedaItemsCostados}>
              {anios[indiceAnio] < fechaActual.getFullYear()
                ? anios[indiceAnio + 1]
                : "-"}{" "}
            </div>
            <div className={comunStyle.selectorRuedaItemsCostados2}>
              {anios[indiceAnio] < fechaActual.getFullYear() - 1
                ? anios[indiceAnio + 2]
                : "-"}{" "}
            </div>
          </div>
          <div className={spaceStyle.space1} />
          <div>
            <Button
              variant='text'
              disabled={anios[indiceAnio] >= fechaActual.getFullYear()}
              onClick={() => {
                // Si la fecha seleccionada es mayor a la fecha actual, se vuelve a establecer la fecha con el mes actual
                if (
                  indiceMes > fechaActual.getMonth() - 1 &&
                  anios[indiceAnio] + 1 === fechaActual.getFullYear()
                )
                  setIndiceMes(() => fechaActual.getMonth());
              }}
              onMouseDown={() => {
                longPressUp();
              }}
              onMouseUp={() => {
                onMouseUp();
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

export default TrabajoActual;
