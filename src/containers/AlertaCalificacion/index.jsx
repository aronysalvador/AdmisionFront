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
import { useDispatch } from "react-redux";
import CheckIcon from "@material-ui/icons/Check";
import Fab from "@material-ui/core/Fab";
import { getTrabajoHabitualCardStyle } from "../../css/trabajoHabitualCard";

const AlertaCalificacion = (props) => {
  const dispatch = useDispatch();
  // const custom = siniestroStyle();
  const welcomeStyle = getWelcomeStyle();
  const comunStyle = getComunStyle();
  const spaceStyle = getSpaceStyle();

  const {
    container,
    cardTextContainer2,
    cardText,
    cardText2,
    iconVector,
  } = getTrabajoHabitualCardStyle();

  return (
    <div className={comunStyle.root}>
      <div className={welcomeStyle.avatarContainer2}>
        <Avatar className={welcomeStyle.avatar}>AS</Avatar>
      </div>
      <div className={spaceStyle.space1} />
      <Fab size="small" aria-label="edit" className={welcomeStyle.imgCheck}>
        <CheckIcon />
      </Fab>
      <div className={welcomeStyle.bienvenidoContainer}>
        <Typography
          variant="p"
          component="p"
          className={[comunStyle.textAchsContentGreen, welcomeStyle.bienvenido]}
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
        <div className={iconVector}>
          <img alt="Ejecutivo de admisión" src="static/iconVector.png" />
        </div>

        <div className={cardTextContainer2}>
          <span className={cardText2}>Pide un e-mail al paciente,</span>
          <br />
          <span className={cardText}>los documentos serán enviados ahí</span>
        </div>
      </div>

      <div className={spaceStyle.space3} />
      <div className={comunStyle.bottomElement}>
        <div>
          <Button
            className={comunStyle.buttonAchs2}
            variant="contained"
            onClick={() => dispatch(handleSetStep(90.1))}
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
