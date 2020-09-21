import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { getSpaceStyle } from "../../css/spaceStyle";
import { getComunStyle } from "../../css/comun";
import { getWelcomeStyle } from "../../css/welcomeStyle";
import { handleSetStep } from "../../redux/actions/AdmissionAction";
import { Button } from "@material-ui/core";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
const getUseStyles = makeStyles({
  center: {
    paddingLeft: "3.4375em",
    paddingRight: "3.4375em",
    padding: "0em",
  },
  img: {
    width: "15.625em",
  },
  text1: {
    textAlign: "center",
    fontFamily: "Catamaran",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "1.5625em",
    lineHeight: "1.6875em",
    alignItems: "center",
    color: "#081C15",
  },
  text2: {
    textAlign: "center",
    fontFamily: "Catamaran",
    fontStyle: "normal",
    fontSize: "1em",
    lineHeight: "1.5625em",
    alignItems: "center",
    color: "#081C15",
  },
  center2: {
    paddingLeft: "7.625em",
    paddingRight: "7.625em",
    padding: "0em",
  },
  img2: {
    width: "7.28125em",
  },
  textError: {
    textAlign: "center",
    fontFamily: "Catamaran",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "1.5625em",
    lineHeight: "1.6875em",
    alignItems: "center",
    color: "red",
  },
});

const ErrorCaso = (props) => {
  const spaceStyle = getSpaceStyle();
  const useStyles = getUseStyles();
  const comunClass = getComunStyle();
  const welcomeStyle = getWelcomeStyle();
  const dispatch = useDispatch();

  const {
    addmissionForm: { mensajeErrorSAP },
  } = useSelector((state) => state, shallowEqual);

  return (
    <div className={comunClass.root}>
      <div className={spaceStyle.space5} />
      <div className={useStyles.center}>
        <img
          alt="load"
          src="./static/WarningErrorCaso.png"
          className={useStyles.img}
        />
      </div>
      <div className={spaceStyle.space1} />
      <Typography
        color="textSecondary"
        gutterBottom
        className={useStyles.text1}
      >
        Ha ocurrido un error
        <br />
        creando tu caso
      </Typography>
      <div className={spaceStyle.space1} />

      <Typography
        color="textSecondary"
        gutterBottom
        className={useStyles.textError}
      >
        Error: "{String(mensajeErrorSAP).trim()}"
      </Typography>

      <Typography
        color="textSecondary"
        gutterBottom
        className={useStyles.text2}
      >
        Por favor, vuelve a intentarlo
      </Typography>
      {/* <div className={comunClass.bottomElement}>
        <Button
          onClick={() => dispatch(handleSetStep(27))}
          className={comunClass.buttonAchs2}
          style={{ borderRadius: "10px" }}
        >
          Volver al inicio
        </Button>
      </div> */}

        <div className={welcomeStyle.bottomBegin}>
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
    </div>
  );
};

export default ErrorCaso;
