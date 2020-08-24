import React from "react";
import { getTrabajoHabitualCardStyle } from "../../css/trabajoHabitualCard";
import { ErrorOutline } from "@material-ui/icons";

const AccidenteEnSucursalCard = () => {
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
          Estabas dentro del horario habitual, en las instalaciones de tu sucursal de
          trabajo y desarrollando tus labores habituales
        </span>
      </div>
    </div>
  );
};

export default AccidenteEnSucursalCard;
