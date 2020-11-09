import React from "react";
import { getTrabajoHabitualCardStyle } from "../../css/trabajoHabitualCard";
import { ErrorOutline } from "@material-ui/icons";
import { getComunStyle } from "../../css/comun";

const NoQuotesCard = () => {
  const {
    containerNoQuote,
    cardTextNoAfilate,
    cardText,
  } = getTrabajoHabitualCardStyle();
  const comunClass = getComunStyle();
  
  return (
    <div className={containerNoQuote}>
      <div className={comunClass.displayMobile}>
        <div>
          <ErrorOutline />
        </div>
      </div>
      <div className={cardTextNoAfilate}>
        <span className={cardText}>
          Verifica que la información de su empresa este correcta y confirma que el pacientes&nbsp;
          <br className={comunClass.displayDesk}/>  
          lleva más de 3 meses de contrato laboral.  
        </span>
      </div>
    </div>
  );
};

export default NoQuotesCard;
