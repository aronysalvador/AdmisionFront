import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { getWelcomeStyle } from "../../css/welcomeStyle";
import { getComunStyle } from "../../css/comun";
import { getSpaceStyle } from "../../css/spaceStyle";
import "../../css/catamaranFont.css";
import "../../css/sfUiDisplayCufonfonts.css";
import Avatar from "@material-ui/core/Avatar";
import { logout } from "../../redux/actions/microsoft.action";
import { handleSetStep } from "../../redux/actions/AdmissionAction";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import Fab from "@material-ui/core/Fab";
import { getTrabajoHabitualCardStyle } from "../../css/trabajoHabitualCard";
import { ErrorOutline } from "@material-ui/icons";

const AlertaCalificacion = (props) => {
  const { dispatch } = props;
  // const custom = siniestroStyle();
  const welcomeStyle = getWelcomeStyle();
  const comunStyle = getComunStyle();
  const spaceStyle = getSpaceStyle();

  const {
    container,
    cardIconContainer,
    cardTextContainer,
    cardText,
  } = getTrabajoHabitualCardStyle();

  return (
    <div className={comunStyle.root}>
      <div className={spaceStyle.space2} />
      <div className={welcomeStyle.avatarContainer}>
        <Avatar className={welcomeStyle.avatar}>AS</Avatar>
      </div>
      <Fab size="small" aria-label="edit" className={welcomeStyle.imgEdit}>
        <CheckCircleIcon />
      </Fab>
      <div className={spaceStyle.space1} />
      <div className={welcomeStyle.bienvenidoContainer}>
        <Typography
          variant="p"
          component="p"
          className={[comunStyle.textAchsContent, welcomeStyle.bienvenido]}
        >
          ¡WOW!
          <br />
          Eso fué rápido
        </Typography>
      </div>
      <div className={spaceStyle.space1} />
      <div>
        <Typography
          variant="p"
          component="p"
          className={[comunStyle.textAchsContent, welcomeStyle.admisionText]}
        >
          Para terminar:
        </Typography>
      </div>

      <div className={container}>
        <div className={cardIconContainer}>
          <ErrorOutline />
        </div>
        <div className={cardTextContainer}>
          <span className={cardText}>
            Pide un e-mail al paciente, los documentos serán enviados ahí
          </span>
        </div>
      </div>

      <div className={spaceStyle.space3} />
      <div className={comunStyle.bottomElement}>
        <div>
          <Button
            className={comunStyle.buttonAchs2}
            variant="contained"
            onClick={() => dispatch(handleSetStep(2))}
          >
            El relato no es coherente
          </Button>
        </div>
        <div className={spaceStyle.space1} />
        <div>
          <Button
            className={comunStyle.buttonAchs}
            variant="contained"
            onClick={() => dispatch(logout())}
          >
            Continuar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AlertaCalificacion;
