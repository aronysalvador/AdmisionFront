import React, { Fragment } from "react";
import FechaSiniestro from "../../components/FechaSiniestro/FechaSiniestro";
import HoraSiniestro from "./../../components/HoraSiniestro/HoraSiniestro";
import { Button } from "@material-ui/core";
import { getComunStyle } from "../../css/comun";
const FechaHoraSiniestro = () => {
  const { buttonAchs } = getComunStyle();
  return (
    <Fragment>
      <FechaSiniestro />
      <HoraSiniestro />
      <Button className={buttonAchs}>Siguiente</Button>
    </Fragment>
  );
};

export default FechaHoraSiniestro;
