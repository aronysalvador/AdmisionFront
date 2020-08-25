import React from "react";
import { getTrabajoHabitualCardStyle } from "../../css/trabajoHabitualCard";
import { ErrorOutline } from "@material-ui/icons";

const TrabajoHabitualCard = () => {
  const {
    container,
    cardIconContainer,
    cardTextContainer,
    cardText,
  } = getTrabajoHabitualCardStyle();
  return (
    <div className={container}>
      <div className={cardIconContainer}>
        <ErrorOutline />
      </div>
      <div className={cardTextContainer}>
        <span className={cardText}>
          Estaba dentro del horario habitual, en las instalaciones de su trabajo y desarrollando sus labores habituales.
        </span>
      </div>
    </div>
  );
};

export default TrabajoHabitualCard;
