import React from "react";
import { getTrabajoHabitualCardStyle } from "../../css/trabajoHabitualCard";
import { ErrorOutline } from "@material-ui/icons";
import { getComunStyle } from "../../css/comun";

const NoAfiliateCard = () => {
  const {
    container,
    cardTextNoAfilate,
    cardText
  } = getTrabajoHabitualCardStyle();
  const comunClass = getComunStyle();

  return (
    <div className={container}>
      <div className={comunClass.displayMobile}>
        <div className={comunClass.textCenterDesk}>
          <ErrorOutline />
        </div>
      </div>
      <div className={cardTextNoAfilate}>
        <span className={cardText}>
          Si consideras que es una consulta de urgencia continúa la atención en SAP.
          <br />
          <br className={comunClass.displayMobile} />
          En caso contrario, terminar atención y derivar al paciente a su mutualidad.
        </span>
      </div>
    </div>
  );
};

export default NoAfiliateCard;
