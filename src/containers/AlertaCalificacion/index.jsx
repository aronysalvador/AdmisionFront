import React from "react";
import Cabecera from "../../components/cabecera/index";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { getWelcomeStyle } from "../../css/welcomeStyle";
import { getComunStyle } from "../../css/comun";
import { getSpaceStyle } from "../../css/spaceStyle";
import "../../css/catamaranFont.css";
import "../../css/sfUiDisplayCufonfonts.css";
import Avatar from "@material-ui/core/Avatar";
import { handleSetStep } from "../../redux/actions/AdmissionAction";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import Indiciaciones from "../../components/Indicaciones";

const AlertaCalificacion = () => {
  const { microsoftReducer } = useSelector((state) => state, shallowEqual);

  const dispatch = useDispatch();
  const welcomeStyle = getWelcomeStyle();
  const comunStyle = getComunStyle();
  const spaceStyle = getSpaceStyle();

  return (
    <div className={comunStyle.rootBegin}>
      <div className={welcomeStyle.beginContainer}>
        <Cabecera
          dispatch={() => dispatch(handleSetStep(26))}
          percentage={-1}
          noSpace={true}
        />
        <div className={spaceStyle.space4}>
          <div className={welcomeStyle.avatarContainerRight}>
            <Avatar className={welcomeStyle.avatarBegin}>
              {microsoftReducer.userMsal.iniciales}
            </Avatar>
          </div>
        </div>
      </div>

      <div className={welcomeStyle.TextContainer}>
        <img
          alt="Excelente"
          src="static/icon-check.png"
          className={welcomeStyle.iconCircular}
        />
        <Typography
          variant="h1"
          component="h1"
          className={welcomeStyle.txtBegin}
        >
          ¡WOW!
        </Typography>
        <Typography
          variant="h1"
          component="h1"
          className={welcomeStyle.txtBegin}
        >
          Eso fué rápido
        </Typography>
      </div>

      <div className={welcomeStyle.beginContainer}>
        <Typography
          variant="h5"
          component="h5"
          className={welcomeStyle.subTitleBegin}
        >
          Para terminar:
        </Typography>

        <Indiciaciones
          indicaciones={[
            {
              icono: "sms.svg",
              textoPrimario: "Pide un e-mail al paciente,",
              textoSecundario: "los documentos serán enviados ahí",
              clase: welcomeStyle.divRowBottom,
            },
          ]}
        />

        <div className={welcomeStyle.bottomBegin}>
          <Button
            className={comunStyle.buttonAchs2}
            variant="contained"
            onClick={() => dispatch(handleSetStep(26.2))}
          >
            El relato no es coherente
          </Button>
          <div className={spaceStyle.space1}></div>

          <Button
            className={comunStyle.buttonAchs}
            variant="contained"
            onClick={() => dispatch(handleSetStep(27))}
          >
            Continuar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AlertaCalificacion;
