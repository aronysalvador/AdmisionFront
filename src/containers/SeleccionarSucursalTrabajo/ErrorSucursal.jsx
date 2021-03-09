import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { getSpaceStyle } from "../../css/spaceStyle";
import { getComunStyle } from "../../css/comun";
import { handleSetStep } from "../../redux/actions/AdmissionAction";
import { successCallLog } from "../../redux/actions/Log";
import { Button } from "@material-ui/core";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import Header from "../../components/header/index";
import image from './../../img/WarningErrorCaso.png'

const getUseStyles = makeStyles({
  center: {
    paddingLeft: "3.4375em",
    paddingRight: "3.4375em",
    padding: "0em"
  },
  img: {
    width: "15.625em"
  },
  text1: {
    textAlign: "center",
    fontFamily: "Catamaran",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "1.5625em",
    lineHeight: "1.6875em",
    alignItems: "center",
    color: "#081C15"
  },
  text2: {
    textAlign: "center",
    fontFamily: "Catamaran",
    fontStyle: "normal",
    fontSize: "1em",
    lineHeight: "1.5625em",
    alignItems: "center",
    color: "#081C15"
  },
  center2: {
    paddingLeft: "7.625em",
    paddingRight: "7.625em",
    padding: "0em"
  },
  img2: {
    width: "7.28125em"
  }
});

const ErrorSucursal = () => {
  const spaceStyle = getSpaceStyle();
  const useStyles = getUseStyles();
  const comunClass = getComunStyle();

  const { microsoftReducer } = useSelector((state) => state, shallowEqual);

  const dispatch = useDispatch();

  return (
    <div className={comunClass.root}>
      <div className={comunClass.displayDesk}>
        <Header
          userMsal={ microsoftReducer.userMsal }
          // step={1}
        />
      </div>
      <div className={spaceStyle.space5} />
      <div className={useStyles.center}>
        <img
          alt='load'
          src={image}
          className={useStyles.img}
        />
      </div>
      <div className={spaceStyle.space3} />
      <Typography
        color='textSecondary'
        gutterBottom
        className={useStyles.text1}
      >
        Ha ocurrido un error
        <br />
        al consultar la sucursal
        <br />
        de tu empresa
      </Typography>
      <div className={spaceStyle.space1} />
      <Typography
        color='textSecondary'
        gutterBottom
        className={useStyles.text2}
      >
        Por favor, vuelve a intentarlo
      </Typography>
      <div className={comunClass.bottomElement}>
        <Button
          onClick={() =>{ dispatch(handleSetStep(5.1)); dispatch(successCallLog(0));}}
          className={comunClass.buttonAchs2}
          style={{ borderRadius: "10px" }}
        >
          Volver al inicio
        </Button>
      </div>
    </div>
  );
};

export default ErrorSucursal;
