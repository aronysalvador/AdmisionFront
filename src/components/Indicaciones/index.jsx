import React from "react";
import { getWelcomeStyle } from "../../css/welcomeStyle";
import Typography from "@material-ui/core/Typography";

const IndiciacionesPacientes = ({ indicaciones }) => {
  const welcomeStyle = getWelcomeStyle();

  return (
    <div className={welcomeStyle.titleContainerCards}>
      {indicaciones.map(({ icono, textoPrimario, textoSecundario, clase }, i) => (
        <div key={i}  className={clase}>
          <img src={`./static/${icono}`} alt="" />
          <div className={welcomeStyle.itemBegin}>
            <Typography
              variant="p"
              component="p"
              className={welcomeStyle.itemText}
            >
              {textoPrimario}
            </Typography>
            <Typography
              variant="p"
              component="p"
              className={welcomeStyle.pBegin}
            >
              {textoSecundario}
            </Typography>
          </div>
        </div>
      ))}
    </div>
  );
};

export default IndiciacionesPacientes;
