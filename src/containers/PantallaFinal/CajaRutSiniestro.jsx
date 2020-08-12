import React from "react";
import { getComunStyle } from "../../css/comun";

const CajaRutSiniestro = ({ textoPrincipal, textoSecundario }) => {
  const comunStyle = getComunStyle();
  return (
    <div className={comunStyle.cajaRutSiniestroContainer}>
      <div className={comunStyle.cajaRutSiniestroItem}>
        <span className={comunStyle.cajaRutSiniestroTextoPrimario}>
          {textoPrincipal}
        </span>
        <span className={comunStyle.cajaRutSiniestroTextoSecundario}>
          {textoSecundario}
        </span>
      </div>
    </div>
  );
};

export default CajaRutSiniestro;
