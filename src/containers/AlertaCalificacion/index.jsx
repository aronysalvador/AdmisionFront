import React from "react";
import Cabecera from "../../components/cabecera/cabeceraSinBarra";
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
import { ErrorOutline } from "@material-ui/icons";

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
          color="#373737"
          percentage={-1}
          noSpace={true}
        />
        <div className={welcomeStyle.avatarContainerRight}>
          <Avatar className={welcomeStyle.avatar}>
            {microsoftReducer.userMsal.iniciales}
          </Avatar>
        </div>
        <div className={spaceStyle.space6} />
        <div className={welcomeStyle.TextContainer}>
          <img
            alt="Excelente"
            src="static/icon-check.png"
            className={welcomeStyle.iconCircular}
          />
          <Typography
            variant="h1"
            component="h1"
            className={welcomeStyle.titleBegin}
          >
            ¡WOW!
          </Typography>
          <Typography
            variant="h1"
            component="h1"
            className={welcomeStyle.titleBegin}
          >
            Eso fue rápido
          </Typography>
        </div>
        <div className={spaceStyle.space2} />
        <Typography
          variant="h5"
          component="h5"
          className={welcomeStyle.subTitleBegin}
        >
          Para la creación del caso
        </Typography>

        <div className={welcomeStyle.titleContainerCards2}>
        <div  className={welcomeStyle.divRowBottom2}>
            <ErrorOutline />
            <Typography
              variant="p"
              component="p"
              className={welcomeStyle.itemText2}
            >
              Pide un e-mail al paciente
            </Typography>
        </div>
        <div  className={welcomeStyle.divRowBottom2}>
          <Typography
                variant="p"
                component="p"
                className={welcomeStyle.pBegin}
              >
                Es importante solicitar un e-mail al paciente para la entrega de sus documentos. Si el paciente no tiene e-mail puede agregar el de un familiar. 
          </Typography>
        </div>
        
      </div>
        <div className={welcomeStyle.bottomBegin}>
          <Button
            className={comunStyle.buttonAchs}
            variant="contained"
            onClick={() => dispatch(handleSetStep(27))}
          >
            Continuar
          </Button>
          <div className={spaceStyle.space1}></div>
          <Button
            className={comunStyle.buttonAchs2}
            variant="contained"
            onClick={() => dispatch(handleSetStep(26.2))}
          >
            Levantar alerta de calificación
          </Button>    
        </div>
        
      </div>
    </div>
  );
};

export default AlertaCalificacion;
