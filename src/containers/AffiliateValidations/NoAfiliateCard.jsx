import React from "react";
import { getTrabajoHabitualCardStyle } from "../../css/trabajoHabitualCard";
import { ErrorOutline } from "@material-ui/icons";

const NoAfiliateCard = () => {
  const {
    container,
    cardTextNoAfilate,
    cardText,
  } = getTrabajoHabitualCardStyle();
  return (
    <div className={container}>
      <div>
        <ErrorOutline />
      </div>
      <div className={cardTextNoAfilate}>
        <span className={cardText}>
        Si consideras que es una consulta de urgencia continúa la atención en SAP.
        <br/><br/>
        En caso contrario, terminar atención y derivar al paciente a su mutualidad.
        </span>
      </div>
    </div>
  );
};

export default NoAfiliateCard;
