import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { getComunStyle } from "../../css/comun";
import { getSpaceStyle } from "../../css/spaceStyle";
import BoxACHSEditDelete from "../share/BoxACHSEditDelete/index";

const QuestionTestigoResponsable = (props) => {
  const { titulo, tituloTestigo, contenidoTestigo, irA } = props;

  const classesComun = getComunStyle();
  const spaceStyle = getSpaceStyle();

  return (
    <div>
      <div>
        <Typography variant="p" component="p" className={classesComun.titleBlack}>
          {titulo}
        </Typography>
      </div>
      <div>
        <div className={spaceStyle.space1} />
        <BoxACHSEditDelete
          titulo={tituloTestigo}
          contenido={contenidoTestigo}
        />
      </div>

      <div className={classesComun.bottomElement}>
        <Button
          className={classesComun.buttonAchs}
          variant="contained"
          type="submit"
          onClick={() => irA()}
        >
          Continuar
        </Button>
      </div>
    </div>
  );
};

export default QuestionTestigoResponsable;
