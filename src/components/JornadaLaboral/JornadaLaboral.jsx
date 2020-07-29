import React, { useState, useEffect } from "react";
import { Grid, Button } from "@material-ui/core";
import { KeyboardArrowDown, KeyboardArrowUp } from "@material-ui/icons";
import { getSpaceStyle } from "../../css/spaceStyle";
import { getComunStyle } from "../../css/comun";

const JornadaLaboral = ({ onChange, indiceInicioFromState, indiceFinFromState, horarios }) => {
  const [indiceInicio, setIndiceInicio] = useState(() => {
    return !indiceInicioFromState ? 17 : indiceInicioFromState;
  });

  const [indiceFin, setIndiceFin] = useState(() => {
    return !indiceFinFromState ? 35 : indiceFinFromState;
  });

  const spaceStyle = getSpaceStyle();
  const comunStyle = getComunStyle();

  

  useEffect(() => {    
    onChange({  horaInicio: horarios[indiceInicio], horaFin: horarios[indiceFin] });
  }, [indiceInicio, indiceFin]);

  

  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item direction="column">
        <Grid
          item
          style={{
            borderRadius: "10px",
            padding: "8px 20px",
          }}
        >
          <div
            className={comunStyle.tituloSelectorFecha}
            style={{ textAlign: "center" }}
          >
            Inicio
          </div>
        </Grid>
        <Grid
          item
          style={{
            background: "white",
            borderRadius: "10px",
            padding: "8px 20px",
          }}
        >
          <div>
            <Button
              variant="text"
              disabled={indiceInicio < 1}
              onClick={() => {
                setIndiceInicio((h) => --h);
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
              {indiceInicio > 0 ? horarios[indiceInicio - 1] : "-"}
            </div>
            {horarios[indiceInicio]}
            <div style={{ fontSize: "9px", paddingTop: "5px", opacity: "0.5" }}>
            {indiceInicio < 44 ? horarios[indiceInicio +1] : "-"}
            </div>
          </div>
          <div className={spaceStyle.space1} />
          <div>
            <Button
            disabled={indiceInicio > 44}
              variant="text"
              onClick={() => {
                setIndiceInicio((h) => ++h);
              }}
            >
              <KeyboardArrowDown />
            </Button>
          </div>
        </Grid>
      </Grid>
      <Grid item direction="column">
        <Grid
          item
          style={{
            borderRadius: "10px",
            padding: "8px 20px",
            marginLeft: "20px",
          }}
        >
          <div
            className={comunStyle.tituloSelectorFecha}
            style={{ textAlign: "center" }}
          >
            Fin
          </div>
        </Grid>
        <Grid
          item
          style={{
            background: "white",
            borderRadius: "10px",
            padding: "8px 20px",
            marginLeft: "20px",
          }}
        >
          <div>
            <Button
              variant="text"
              disabled={indiceFin < 1}
              onClick={() => {
                setIndiceFin((m) => --m);
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
               {indiceFin > 0 ? horarios[indiceFin - 1] : "-"}
            </div>
            {horarios[indiceFin]}
            <div style={{ fontSize: "9px", paddingTop: "5px", opacity: "0.5" }}>
            {indiceFin < 44 ? horarios[indiceFin +1] : "-"}
            </div>
          </div>
          <div className={spaceStyle.space1} />
          <div>
            <Button
              variant="text"
              disabled={indiceFin > 44}
              onClick={() => {
                setIndiceFin((m) => ++m);
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

export default JornadaLaboral;
