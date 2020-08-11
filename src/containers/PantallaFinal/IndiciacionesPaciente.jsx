import React from "react";
import { getWelcomeStyle } from "../../css/welcomeStyle";
import Typography from "@material-ui/core/Typography";

const IndiciacionesPacientes = ({ data }) => {
  const welcomeStyle = getWelcomeStyle();

  return (
    <div className={welcomeStyle.titleContainerCards}>
      {data.map(({ icono, textoPrimario, textoSecundario }) => (
        <div className={welcomeStyle.divRowBottom}>
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
