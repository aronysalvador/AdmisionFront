import React, { useState, useEffect } from "react";
import { Grid, Button } from "@material-ui/core";
import { KeyboardArrowDown, KeyboardArrowUp } from "@material-ui/icons";

const HoraSiniestro = () => {
  const [horas, setHoras] = useState(() => {
    return new Date().getHours();
  });
  const [minutos, setMinutos] = useState(() => {
    return new Date().getMinutes();
  });

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

        <div style={{ textAlign: "center" }}>{horas}</div>

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

        <div style={{ textAlign: "center" }}>{minutos}</div>

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
