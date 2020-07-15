import React, { useState, useEffect } from "react";
import { Grid, Button } from "@material-ui/core";
import { KeyboardArrowDown, KeyboardArrowUp } from "@material-ui/icons";

const HoraSiniestro = ({ onChange }) => {
  const [horas, setHoras] = useState(() => {
    return new Date().getHours() - 1;
  });
  const [minutos, setMinutos] = useState(() => {
    return new Date().getMinutes();
  });

  useEffect(() => {
    if (horas > 23) setHoras(0);
    if (horas < 0) setHoras(23);
    if (minutos > 59) setMinutos(0);
    if (minutos < 0) setMinutos(59);
    onChange({ horas, minutos });
  }, [horas, minutos]);

  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid
        item
        style={{
          borderColor: "black",
          borderStyle: "solid",
          borderSpacing: "2px",
        }}
      >
        <div style={{ textAlign: "center" }}>hora</div>
        <div>
          <Button
            variant="text"
            onClick={() => {
              setHoras((h) => ++h);
            }}
          >
            <KeyboardArrowUp />
          </Button>
        </div>

        <div style={{ textAlign: "center" }}>
          {horas < 10 ? "0" + horas : horas}
        </div>

        <div>
          <Button
            variant="text"
            onClick={() => {
              setHoras((h) => --h);
            }}
          >
            <KeyboardArrowDown />
          </Button>
        </div>
      </Grid>
      <Grid
        item
        style={{
          borderColor: "black",
          borderStyle: "solid",
          borderSpacing: "2px",
        }}
      >
        <div style={{ textAlign: "center" }}>minutos</div>
        <div>
          <Button
            variant="text"
            onClick={() => {
              setMinutos((m) => ++m);
            }}
          >
            <KeyboardArrowUp />
          </Button>
        </div>

        <div style={{ textAlign: "center" }}>
          {minutos < 10 ? `0${minutos}` : minutos}
        </div>

        <div>
          <Button
            variant="text"
            onClick={() => {
              setMinutos((m) => --m);
            }}
          >
            <KeyboardArrowDown />
          </Button>
        </div>
      </Grid>
    </Grid>
  );
};

export default HoraSiniestro;
