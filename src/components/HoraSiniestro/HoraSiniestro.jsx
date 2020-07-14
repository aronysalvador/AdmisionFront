import React, { useState, useEffect } from "react";
import { Grid, Button } from "@material-ui/core";
import { KeyboardArrowDown, KeyboardArrowUp } from "@material-ui/icons";
const HoraSiniestro = () => {
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
        <div>
          <Button variant="text">
            <KeyboardArrowUp />
          </Button>
        </div>

        <div style={{ textAlign: "center" }}>12</div>

        <div>
          <Button variant="text">
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
        <div>
          <Button variant="text">
            <KeyboardArrowUp />
          </Button>
        </div>

        <div style={{ textAlign: "center" }}>30</div>

        <div>
          <Button variant="text">
            <KeyboardArrowDown />
          </Button>
        </div>
      </Grid>
    </Grid>
  );
};

export default HoraSiniestro;
