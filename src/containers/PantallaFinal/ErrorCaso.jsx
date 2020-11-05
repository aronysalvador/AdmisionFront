import React from "react";
import Typography from "@material-ui/core/Typography";
import { getSpaceStyle } from "../../css/spaceStyle";
import { getComunStyle } from "../../css/comun";
import { handleSetStep } from "../../redux/actions/AdmissionAction";
import { Button } from "@material-ui/core";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import Header from "../../components/header/index";

const ErrorCaso = (props) => {
  const spaceStyle = getSpaceStyle();
  const comunClass = getComunStyle();
  const dispatch = useDispatch();

  const {
    addmissionForm: { mensajeErrorSAP },
  } = useSelector((state) => state, shallowEqual);
  const { microsoftReducer } = useSelector((state) => state, shallowEqual);

  return (
    <div className={comunClass.root}>
      <div className={comunClass.displayDesk}> 
        <Header
            userMsal={ microsoftReducer.userMsal }
        />
      </div>
      <div className={spaceStyle.space3} />
      <center>
        <div>
          <img
            alt="load"
            src="./static/WarningErrorCaso.png"
          />
        </div>
        <div className={spaceStyle.space1} />
        <Typography
          className={comunClass.textErrorP}
        >
          ¡Ha ocurrido un error
          <br />
          creando tu caso!
        </Typography>
        <div className={spaceStyle.space1} />

        <Typography
          className={comunClass.textErrorRed}
        >
          Error: "{String(mensajeErrorSAP).trim()}"
        </Typography>

        <Typography
          className={comunClass.textErrorS}
        >
          Por favor, vuelve a intentarlo
        </Typography>
        <div className={comunClass.bottomElement} style={{padding: '1.145em'}}>
          <Button
            className={comunClass.buttonAchs}
            variant="contained"
            onClick={() => dispatch(handleSetStep(27))}
          >
            Volver a intentarlo
          </Button>
          <div className={spaceStyle.space1}></div>
          <Button
            className={comunClass.buttonAchs2}
            variant="contained"
            onClick={() => dispatch(handleSetStep(1.1))}
          >
            Volver al inicio
          </Button>
        </div>
      </center>
    </div>
  );
};

export default ErrorCaso;
