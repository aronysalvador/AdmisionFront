import React, { Fragment } from "react";
import FechaSiniestro from "../../components/FechaSiniestro/FechaSiniestro";
import HoraSiniestro from "./../../components/HoraSiniestro/HoraSiniestro";
import { Button } from "@material-ui/core";
import { getComunStyle } from "../../css/comun";

const FechaHoraSiniestro = () => {
  const { buttonAchs, root } = getComunStyle();
  return (
    <div className={root}>
      <FechaSiniestro />
      <HoraSiniestro />
      <Button className={buttonAchs}>Siguiente</Button>
    </div>
  );
};

export default FechaHoraSiniestro;
