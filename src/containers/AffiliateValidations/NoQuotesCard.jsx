import React from "react";
import { getTrabajoHabitualCardStyle } from "../../css/trabajoHabitualCard";
import { ErrorOutline } from "@material-ui/icons";

const NoQuotesCard = () => {
  const {
    containerNoQuote,
    cardTextNoAfilate,
    cardText,
  } = getTrabajoHabitualCardStyle();
  return (
    <div className={containerNoQuote}>
      <div>
        <ErrorOutline />
      </div>
      <div className={cardTextNoAfilate}>
        <span className={cardText}>
          Verifica que la información de su empresa este correcta y confirma que el paciente lleva más de 3 meses de contrato laboral.  
        </span>
      </div>
    </div>
  );
};

export default NoQuotesCard;
